if (typeof window !== "undefined") {
  //here `window` is available, so `window.document` (or simply `document`) is available too
  const { ipcRenderer } = require("electron");
  const ipc = ipcRenderer;
  const access = document.getElementById("access");
  access.addEventListener("click", () => {
    ipc.send("access");
  });
}
