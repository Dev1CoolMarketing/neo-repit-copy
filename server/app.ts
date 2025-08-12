// server/app.ts
import express, { type Request, type Response, type NextFunction } from "express";
import { log } from "./vite";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// request logging middleware (captures JSON responses)
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined;

  const originalResJson = res.json.bind(res);
  res.json = function (bodyJson: any, ...args: any[]) {
    capturedJsonResponse = bodyJson;
    return originalResJson(bodyJson, ...args);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        try {
          logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
        } catch {
          // ignore serialization errors
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

// Exported app - no routes registered here. registerRoutes(app) will be called
// by the local server bootstrap and by the Vercel wrapper.
export default app;

// Centralized error handler (does not crash by default).
// Use FORCE_CRASH_ON_ERROR=1 for local debugging to rethrow.
export function attachErrorHandler() {
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err?.status || err?.statusCode || 500;
    const message = err?.message || "Internal Server Error";
    try {
      res.status(status).json({ message });
    } catch {
      // if response already closed
    }

    if (process.env.FORCE_CRASH_ON_ERROR === "1") {
      // allow local dev to crash for debugging if desired
      throw err;
    }
  });
}
