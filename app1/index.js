const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const ipc = ipcMain;
function ventana() {
  let principal = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  principal.loadFile("src/views/index.html");
  principal.on("close", () => {
    app.quit();
  });
  // Buttons CLOSE,MINIMZE,MAXIMIZE
  ipc.on("closeApp", () => {
    principal.close();
  });
  ipc.on("minimizeApp", () => {
    principal.minimize();
  });
  ipc.on("maximizeApp", () => {
    if (principal.isMaximized()) {
      principal.restore();
    } else {
      principal.maximize();
    }
  });
  cargando();
}

function cargando() {
  let cargando = new BrowserWindow({
    width: 200,
    maxWidth: 200,
    height: 150,
    maxHeight: 150,
    frame: false,
    center: true,
  });
  cargando.loadFile("src/views/loading.html");
}
app.whenReady().then(cargando);
app.on("window-all-closed", function () {
  if (process.platform === "darwin") {
    app.quit();
  }
});
