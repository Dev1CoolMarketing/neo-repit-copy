// api/index.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import app from "../server/app";
import { registerRoutes } from "../server/routes";

let initialized = false;
let initPromise: Promise<void> | null = null;

async function ensureInitialized() {
  if (initialized) return;
  if (!initPromise) {
    initPromise = (async () => {
      // registerRoutes should register routes on the app but NOT call listen()
      await registerRoutes(app);
      initialized = true;
    })();
  }
  return initPromise;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    await ensureInitialized();
    return app(req as any, res as any);
  } catch (err: any) {
    console.error("API init/handler error:", err);
    // Be explicit about errors in serverless environment
    res.status(500).json({ message: "Server initialization error" });
  }
}
