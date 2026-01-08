const daysEl = document.getElementById("days");
const monthYearEl = document.getElementById("monthYear");

let date = new Date();

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
    day.innerText = i;

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
