const { ipcRenderer } = require("electron");
const closeBtn = document.querySelector("#closeBtn");
const ipc = ipcRenderer;
closeBtn.addEventListener("click", () => {
  ipc.send("closeApp");
});
