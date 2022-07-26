let addEl = document.getElementById('add-el');
let guestEl = document.getElementById('guest-el');

let score = 0;

// Home
function add_1() {
  score += 1;
  addEl.textContent = score;
}

function add_2() {
  score += 2;
  addEl.textContent = score;
}

function add_3() {
  score += 3;
  addEl.textContent = score;
}

// Guests

function guest_add_1() {
  score += 1;
  guestEl.textContent = score;
}

function guest_add_2() {
  score += 2;
  guestEl.textContent = score;
}

function guest_add_3() {
  score += 3;
  guestEl.textContent = score;
}

function newGame() {
  score = 0;
  addEl.textContent = 0;
  guestEl.textContent = 0;
}
