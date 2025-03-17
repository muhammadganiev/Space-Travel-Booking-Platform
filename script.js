// Sample Data
const destinations = {
    moon: ["Lunar Luxe Hotel", "Moon Palace Resort"],
    mars: ["Red Planet Retreat", "Martian Oasis"],
    iss: ["Orbital Suites", "Zero-Gravity Haven"]
  };
  
  // Trip Booking Logic
  const planets = document.querySelectorAll('.planet');
  const hotelList = document.getElementById('hotel-list');
  const hotels = document.getElementById('hotels');
  
  planets.forEach(planet => {
    planet.addEventListener('click', () => {
      const destination = planet.getAttribute('data-destination');
      hotels.innerHTML = destinations[destination].map(hotel => `<li>${hotel}</li>`).join('');
      hotelList.classList.remove('hidden');
    });
  });
  
  // Countdown Timer
  const countdown = document.getElementById('countdown');
  const launchDate = new Date('2024-12-31T00:00:00').getTime();
  
  setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = launchDate - now;
  
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
  
    countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
  
  // AI Travel Tip
  const aiTip = document.getElementById('ai-tip');
  const tips = [
    "Pack light for zero-gravity comfort!",
    "Don’t forget your space suit for lunar walks.",
    "Capture stunning views of Earth from the ISS."
  ];
  
  aiTip.textContent = tips[Math.floor(Math.random() * tips.length)];