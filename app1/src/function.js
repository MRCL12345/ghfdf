if (typeof window !== "undefined") {
  //here `window` is available, so `window.document` (or simply `document`) is available too
  const { ipcRenderer } = require("electron");
  const ipc = ipcRenderer;

  const closeBtn = document.getElementById("closeBtn");
  const minimizeBtn = document.getElementById("minimizeBtn");
  const maximizeBtn = document.getElementById("maxResBtn");
  closeBtn.addEventListener("click", () => {
    ipc.send("closeApp");
  });
  minimizeBtn.addEventListener("click", () => {
    ipc.send("minimizeApp");
  });
  maximizeBtn.addEventListener("click", () => {
    ipc.send("maximizeApp");
  });
}
