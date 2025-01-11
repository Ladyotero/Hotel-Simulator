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
    const guestList =
document.getElementById('guestList);
    guestList.innerHTML = '';

    guest.forEach((g) => {
      const card = document.createElement('div');
      card.className = 'col-md-4';
// sigue por aca. 
      card.innerHTML =`
      <div class="card h-100">
        <div class="card-body">
          <h5 class="card-title">${g.name}</h5>
          <p class="card-text">Room: ${g.room}</p>
          <p class="card-text">Duration: ${g.duration} days</p>
        </div>
      </div>`;
      li.textContent = `${g.name} stayed in room ${g.room} for ${g.duration} days`;
      guestList.appendChild(li);
    });
  }

