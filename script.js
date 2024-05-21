const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
let movieSelect = document.getElementById('movie');

 
let ticketPrice = +movieSelect.value;

// Update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// Movie select event
movieSelect.addEventListener('change', function(e) {

  const selectedBoth = +e.target.value

  const marvels = document.querySelector('.marvels');
const beetle = document.querySelector('.beetle');
const mission = document.querySelector('.mission');
const fast = document.querySelector('.fast');

if ( selectedBoth ===20) {
  marvels.style.display = 'block';
} else{
  marvels.style.display = 'none';
}
if ( selectedBoth ===18) {
  beetle.style.display = 'block';
} else{
  beetle.style.display = 'none';
}
if ( selectedBoth ===25) {
  mission.style.display = 'block';
} else{
  mission.style.display = 'none';
}
if ( selectedBoth ===22) {
  fast.style.display = 'block';
} else{
  fast.style.display = 'none';
}

  ticketPrice = +e.target.value;
  updateSelectedCount();
});

// Seat click event
container.addEventListener('click', function(e) {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});
