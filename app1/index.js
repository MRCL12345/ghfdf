const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const ipc = ipcMain;

function index() {
  let index = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  index.loadFile("src/pages/index/index.html");
  index.on("close", () => {
    app.quit();
  });
}

function loading() {
  let loading = new BrowserWindow({
    width: 200,
    maxWidth: 200,
    height: 150,
    maxHeight: 150,
    frame: false,
    center: true,
  });
  loading.loadFile("src/pages/loading");
  setTimeout(() => {
    loading.close();
    index();
  }, 4000);
}

// Buttons CLOSE,MINIMZE,MAXIMIZE
ipc.on("closeApp", () => {
  index.close();
});
ipc.on("minimizeApp", () => {
  index.minimize();
});
ipc.on("maximizeApp", () => {
  if (index.isMaximized()) {
    index.restore();
  } else {
    index.maximize();
  }
});

app.on("window-all-closed", function () {
  if (process.platform === "darwin") {
    app.quit();
  }
});

app.whenReady().then(loading);
