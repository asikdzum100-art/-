const data = {
  family: [
    { uk: "мама", ru: "мама" },
    { uk: "батько", ru: "отец" }
  ],
  food: [
    { uk: "хліб", ru: "хлеб" },
    { uk: "вода", ru: "вода" }
  ],
  animals: [
    { uk: "кіт", ru: "кот" },
    { uk: "собака", ru: "собака" }
  ]
};

const topic = new URLSearchParams(location.search).get("topic");
document.getElementById("lesson-title").innerText = "Тема: " + topic;

const container = document.getElementById("lesson-content");

data[topic].forEach(item => {
  const div = document.createElement("div");
  div.className = "exercise";
  div.innerHTML = `
    <p><strong>${item.uk}</strong></p>
    <button onclick="speak('${item.uk}')">🔊</button>
    <input placeholder="Перевод">
    <button onclick="check(this, '${item.ru}')">Проверить</button>
  `;
  container.appendChild(div);
});

function speak(text) {
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "uk-UA";
  speechSynthesis.speak(u);
}

function check(btn, answer) {
  const input = btn.previousElementSibling;
  if (input.value.trim().toLowerCase() === answer) {
    alert("Правильно!");
    saveProgress(topic);
  } else {
    alert("Неправильно");
  }
}

function saveProgress(topic) {
  const p = JSON.parse(localStorage.getItem("progress") || "{}");
  p[topic] = (p[topic] || 0) + 1;
  localStorage.setItem("progress", JSON.stringify(p));
}
