let addEl = document.getElementById('add-el');
let guestEl = document.getElementById('guest-el');

let scoreHome = 0;

// Home
function add_1() {
  scoreHome += 1;
  addEl.textContent = scoreHome;
}

function add_2() {
  scoreHome += 2;
  addEl.textContent = scoreHome;
}

function add_3() {
  scoreHome += 3;
  addEl.textContent = scoreHome;
}

// Guests

let scoreGuest = 0;

function guest_add_1() {
  scoreGuest += 1;
  guestEl.textContent = scoreGuest;
}

function guest_add_2() {
  scoreGuest += 2;
  guestEl.textContent = scoreGuest;
}

function guest_add_3() {
  scoreGuest += 3;
  guestEl.textContent = scoreGuest;
}

function newGame() {
  scoreHome = 0;
  scoreGuest = 0;
  addEl.textContent = scoreHome;
  guestEl.textContent = scoreGuest;
}
