const { app, BrowserWindow } = require("electron");
const path = require("path");

function ventana() {
  let principal = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  principal.loadFile("src/index.html");
  principal.on("close", () => {
    app.quit();
  });
}

app.whenReady().then(ventana);

app.on("window-all-closed", function () {
  if (process.platform === "darwin") {
    app.quit();
  }
});
