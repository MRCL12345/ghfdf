const { app, BrowserWindow, ipcMain, shell } = require("electron");
const path = require("path");
const ipc = ipcMain;

function index() {
  var index_page = new BrowserWindow({
    width: 600,
    minWidth: 600,
    maxWidth: 600,
    height: 300,
    maxHeight: 300,
    minHeight: 300,
    frame: false,
    center: true,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  index_page.loadFile("src/pages/index/index.html");
  index_page.on("close", () => {
    app.quit();
  });

  // Buttons CLOSE,MINIMZE,MAXIMIZE
  ipc.on("closeApp", () => {
    index_page.close();
  });
  ipc.on("minimizeApp", () => {
    index_page.minimize();
  });
  ipc.on("access", () => {
    console.log("a");
  });
}

function loading() {
  var loading_page = new BrowserWindow({
    width: 200,
    maxWidth: 200,
    height: 150,
    maxHeight: 150,
    frame: false,
    center: true,
  });
  loading_page.loadFile("src/pages/loading/loading.html");
  setTimeout(() => {
    loading_page.close();
    index();
  }, 5000);
}

app.on("window-all-closed", function () {
  if (process.platform === "darwin") {
    app.quit();
  }
});

app.whenReady().then(loading);
/*http://127.0.0.1:3000/app1/src/img/close.svg */
