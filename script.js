// function updateSpeed(position) {
//   const speed = position.coords.speed;
//   const speedKmh = speed ? (speed * 3.6).toFixed(2) : '0.00';

//   document.getElementById('speed').textContent = `${speedKmh} km/h`;
//   document.getElementById('status').textContent = "Tracking...";
// }


// function handleError(error) {
//   document.getElementById('status').textContent = "Error: Turn on Location" ;
// }

// if ("geolocation" in navigator) {
//   navigator.geolocation.watchPosition(updateSpeed, handleError, {
//     enableHighAccuracy: true,
//     maximumAge: 0
//   });
// } else {
//   document.getElementById('status').textContent = "Geolocation not supported.";
// }


function updateSpeed(position) {
  const speed = position.coords.speed;
  let speedKmh = speed ? speed * 3.6 : 0;

  // Apply the condition
  if (speedKmh <= 5) {
    speedKmh = 0;
  }

  // Format to 2 decimal places
  const displaySpeed = speedKmh.toFixed(2);

  document.getElementById('speed').textContent = `${displaySpeed} km/h`;
  document.getElementById('status').textContent = "Tracking...";
}

function handleError(error) {
  document.getElementById('status').textContent = "Error: Turn on Location";
}

if ("geolocation" in navigator) {
  navigator.geolocation.watchPosition(updateSpeed, handleError, {
    enableHighAccuracy: true,
    maximumAge: 0
  });
  
} else {
  document.getElementById('status').textContent = "Geolocation not supported.";
}
