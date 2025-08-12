// server/index.ts
import dotenv from "dotenv";
dotenv.config();

import http from "http";
import app, { attachErrorHandler } from "./app";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

(async () => {
  // Let registerRoutes register all API routes onto `app`.
  // Your original registerRoutes returned a server; to preserve that behavior,
  // we accept either an http.Server or void.
  const maybeServer = await registerRoutes(app);

  // Attach error handler (non-crashing by default).
  attachErrorHandler();

  // If in development, setup Vite AFTER routes so Vite's catch-all doesn't shadow API routes.
  if (app.get("env") === "development") {
    // registerRoutes may have returned a server useful for setupVite (e.g. for websockets)
    await setupVite(app, maybeServer as http.Server | undefined);
  } else {
    serveStatic(app);
  }

  // Use provided server (if registerRoutes created it), otherwise create one.
  const server: http.Server = (maybeServer as http.Server) ?? http.createServer(app);

  const port = process.env.PORT ? Number(process.env.PORT) : 5000;

  server.on("error", (err: any) => {
    log("Server error: " + (err && err.stack ? err.stack : String(err)));
    // If it's an EACCES/EADDRINUSE/EADDRNOTAVAIL/ENOTSUP, log helpful note:
    if (err?.code === "EADDRINUSE") {
      log(`Port ${port} is already in use.`);
    } else if (err?.code === "EACCES") {
      log(`Insufficient privileges to bind to port ${port}.`);
    } else if (err?.code === "ENOTSUP") {
      log(`Operation not supported on this socket for ${port}.`);
    }
    // do not process.exit() here — keep behavior simple for dev.
  });

  server.listen(
    {
      port,
      host: "0.0.0.0",
    },
    () => {
      log(`serving on port ${port}`);
    },
  );
})();
