import { app } from "electron";
import path from "path";
import { isDev } from "./util.js";

// COMMENT: Needed to get the correct path for both dev and prod
export function getPreloadPath() {
  return path.join(
    app.getAppPath(),
    isDev() ? "." : "..",
    "/dist-electron/preload.cjs"
  );
}
