const daysEl = document.getElementById("days");
const monthYearEl = document.getElementById("monthYear");

let date = new Date();

/* 🎉 FESTIVALS LIST */
const festivals = {
  "1-1": "New Year 🎊",
  "1-14": "Sankranti 🪁",
  "1-26": "Republic Day 🇮🇳",
  "3-29": "Ugadi 🌸",
  "4-14": "Ambedkar Jayanti",
  "8-15": "Independence Day 🇮🇳",
  "10-2": "Gandhi Jayanti",
  "10-12": "Dussehra 🏹",
  "11-1": "Diwali 🪔",
  "12-25": "Christmas 🎄"
};

function renderCalendar() {
  daysEl.innerHTML = "";
  const year = date.getFullYear();
  const month = date.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();

  monthYearEl.innerText =
    date.toLocaleString("default", { month: "long" }) + " " + year;

  for (let i = 0; i < firstDay; i++) {
    daysEl.appendChild(document.createElement("div"));
  }

  for (let i = 1; i <= lastDate; i++) {
    const day = document.createElement("div");
    day.innerHTML = `<strong>${i}</strong>`;

    const key = `${month + 1}-${i}`;

    if (festivals[key]) {
      day.innerHTML += `<div class="festival">${festivals[key]}</div>`;
      day.classList.add("festival-day");
    }

    if (
      i === new Date().getDate() &&
      month === new Date().getMonth()
    ) {
      day.classList.add("today");
    }

    daysEl.appendChild(day);
  }
}

document.getElementById("prev").onclick = () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
};

document.getElementById("next").onclick = () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
};

renderCalendar();
