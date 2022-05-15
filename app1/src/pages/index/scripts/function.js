if (typeof window !== "undefined") {
  //here `window` is available, so `window.document` (or simply `document`) is available too
  const { ipcRenderer } = require("electron");
  const ipc = ipcRenderer;

  const boton = document.getElementById("access");
}
