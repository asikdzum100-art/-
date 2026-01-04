const list = document.getElementById("list");
const p = JSON.parse(localStorage.getItem("progress") || "{}");

for (let k in p) {
  const li = document.createElement("li");
  li.textContent = `${k}: ${p[k]} упражнений`;
  list.appendChild(li);
}
