
const hallSelect = document.getElementById("hall");
const rowSelect = document.getElementById("row");
const seatSelect = document.getElementById("seat");

function updateRowsAndSeats() {
  const hall = hallSelect.value;
  rowSelect.innerHTML = "";
  seatSelect.innerHTML = "";

  let rows = 1;
  let seatsPerRow = 1;

  if (hall === "Зал 1") {
    rows = 15;
    seatsPerRow = 24;
  } else if (hall === "Зал 2") {
    rows = 4;
    seatsPerRow = 10;
  } else if (hall === "Зал 3" || hall === "Зал 4") {
    rowSelect.innerHTML = "<option value='Все места'>Все места</option>";
    seatSelect.innerHTML = "<option value='Уточнять по номеру телефона'>Уточнять по номеру телефона</option>";
    return;
  }

  for (let r = 1; r <= rows; r++) {
    const option = document.createElement("option");
    option.value = `Ряд ${r}`;
    option.text = `Ряд ${r}`;
    rowSelect.appendChild(option);
  }

  for (let s = 1; s <= seatsPerRow; s++) {
    const option = document.createElement("option");
    option.value = `Место ${s}`;
    option.text = `Место ${s}`;
    seatSelect.appendChild(option);
  }
}

hallSelect.addEventListener("change", updateRowsAndSeats);
document.addEventListener("DOMContentLoaded", updateRowsAndSeats);

document.getElementById("booking-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const film = document.getElementById("film").value;
  const hall = hallSelect.value;
  const time = document.getElementById("time").value;
  const row = rowSelect.value;
  const seat = seatSelect.value;

  const params = new URLSearchParams({
    film, hall, time, seat: row + ' ' + seat
  });

  window.location.href = "success.html?" + params.toString();
});
