'use strict';   // hotel simulator

// Guest constructor function
function Guest(name, room, duration) {
  this.name = name;
  this.room = room;
  this.duration = duration;
}

// Preexisting constructor function 
const guest = [
  new Guest('Valeria', '101', 3),
  new Guest('Kenny', '307', 5),
  new Guest('Christine', '514', 10),
  new Guest('Selena', '45', 5)
];

// Function to simulate hotel operations
function renderGuests() {
  const guestList = document.getElementById('guestList');
  guestList.innerHTML = '';// clear existing content 

  guest.forEach((g) => {
    const card = document.createElement('div');
    card.className = 'col-md-4';
    card.innerHTML = `  
        <div class="card h-100">
         <div class="card-body">
          <h5 class="card-title">${g.name}</h5>
          <p class="card-text">Room: ${g.room}</p>
          <p class="card-text">Duration: ${g.duration} days</p>
         </div>
        </div>`;
    guestList.appendChild(card);
  });
}
  function checkRoomAvailability(room) {
  return guest.some((g) => {
    g.room === room;
  });
}


// Create the  form submission event listener
document.getElementById('checkInForm').addEventListener('submit',addGuest);
  function addGuest(event) {

    event.preventDefault();
    // Get form values.
    const name = document.getElementById('guestName').value;
    const room = document.getElementById('roomNumber').value;
    const duration = document.getElementById('stayDuration').value;
    const errorMessage = document.getElementById('errorMessage');
    console.log(name, room, duration, errorMessage)
    
    // Check if all fields are filled out.
    if (!name === '' || !room === '' || !duration === '') {
      errorMessage.textContent = 'Please fill out all fields.';
      errorMessage.style.display = 'block';
      return;
    }

    // Check if room is already assigned
    if (checkRoomAvailability(room)) {

      errorMessage.textContent = 'Room is already assigned. Choose another one.';
      errorMessage.style.display = 'block';
      return;
    } else {
      errorMessage.style.display = 'none';
    }

    // Add new guest to the guest array.
    guest.push(new Guest(name, room, duration));

    // Render updated guest list.
    renderGuests();
    // clear form imputs
    document.getElementById('checkInForm').reset();
  });

renderGuests();