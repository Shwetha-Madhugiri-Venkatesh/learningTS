let ele = document.getElementById("div_drag");

ele.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", "Hello from drag!");
});

window.addEventListener("dragover", (e) => {
  e.preventDefault(); 
});

window.addEventListener("drop", (e) => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text/plain");
  document.body.textContent = data; 
});
