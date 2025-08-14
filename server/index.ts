// server/index.ts
import dotenv from "dotenv";
dotenv.config();

import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProd = process.env.NODE_ENV === "production";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Request / response logging middleware (keeps your existing behavior)
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  res.json = function (bodyJson: any, ...args: any[]) {
    capturedJsonResponse = bodyJson;
    // @ts-ignore - keep original apply
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        try {
          logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
        } catch {
          // ignore circular json errors
        }
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  // Register your routes (APIs, auth, other middlewares)
  const server = await registerRoutes(app);

  // Generic error handler (keeps your behavior)
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    // Re-throw so dev tools / logs capture it (matches your previous behavior)
    throw err;
  });

  // Setup Vite in dev mode OR serve static client in prod
  // Important: setup Vite *before* the SSR catch-all route so middleware serves assets & HMR correctly.
  if (app.get("env") === "development") {
    // This should attach vite.middlewares to the express app (setupVite should handle it)
    await setupVite(app, server);
  } else {
    // Serve pre-built static client (dist/client or your chosen output)
    serveStatic(app);
  }

  //
  // SSR: catch-all route that uses vite-plugin-ssr to render pages server-side.
  // This will render per-route meta (documentProps) provided by pages.
  //
  app.get("*", async (req, res, next) => {
    try {
      // Dynamically import the renderer provided by vite-plugin-ssr.
      // In dev this module integrates with the Vite dev server; in production
      // it will use the compiled SSR bundle (make sure you ran `vite build --ssr`).
      const { renderPage } = await import("vite-plugin-ssr/server");

      const pageContextInit = { urlOriginal: req.originalUrl };
      const pageContext = await renderPage(pageContextInit);

      const httpResponse = pageContext.httpResponse;
      if (!httpResponse) {
        // Not a SSR-handled page: delegate to next() so static assets or other handlers can run.
        return next();
      }

      const { body, statusCode, headers } = httpResponse;

      // Set headers from the renderer (content-type, cache-control, etc.)
      if (headers) {
        // headers may be a plain object
        Object.entries(headers).forEach(([k, v]) => {
          // @ts-ignore - express typings accept number | string
          res.setHeader(k, v as string);
        });
      }

      res.status(statusCode).send(body);
    } catch (err) {
      // In development, the Vite middleware normally gives rich stack traces.
      // We forward the error to express so it can be handled/logged.
      next(err);
    }
  });

  // ALWAYS serve the app on port 5000
  // this serves both the API and the client.
  const port = Number(process.env.PORT || 5000);
  server.listen(
    {
      port,
      host: "0.0.0.0",
    },
    () => {
      log(`serving on port ${port} (env=${process.env.NODE_ENV ?? app.get("env")})`);
    },
  );
})();
