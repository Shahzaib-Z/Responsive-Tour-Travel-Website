const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".showcase__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".showcase__content h4", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".showcase__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".showcase__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".banner__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".discover__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
});

document.getElementById('bookingForm').addEventListener('submit', function(event) {
  const phoneInput = document.getElementById('phone').value;
  const phonePattern = /^\d{11}$/; // Regex for exactly 11 digits

  if (!phonePattern.test(phoneInput)) {
    event.preventDefault(); // Prevent form submission
    alert('Please enter exactly 11 digits for the phone number.');
  }
});





document.getElementById('subscribeForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  alert("Congratulations! You've subscribed to our website. You will be notified of our new discounts.");
  
  // Optionally, you can reset the form after the alert
  this.reset();
});
// Set the min attribute to today's date
const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
const yyyy = today.getFullYear();
const formattedDate = `${yyyy}-${mm}-${dd}`;

document.getElementById('date').setAttribute('min', formattedDate);

// Booking class to manage bookings
class Booking {
    constructor(name, email, phone, departure, destination, date) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.departure = departure;
        this.destination = destination;
        this.date = date;
        this.ticketPrice = this.calculateTicketPrice();
    }

    calculateTicketPrice() {
        const basePrice = 400 ; // Base price for all flights
        const destinationPriceMap = {
            "new york": 150,
            "london": 200,
            "tokyo": 250,
            "paris": 180,
            "sydney": 220,
            "paris": 180,
            "tokyo": 250,
            "berlin": 190,
            "mumbai": 240,
            "bangkok": 230,
            "rome": 170,
            "cancun": 140,
            "dubai": 300,
            "singapore": 260,
            "amsterdam": 210,
            "hong kong": 275,
            "barcelona": 175,
            "moscow": 240,
            "seoul": 255,
            "rio de janeiro": 270,
            "capetown": 300,
            "New York": 150,
            "London": 200,
            "Tokyo": 250,
            "Paris": 180,
            "Sydney": 220,
            "Paris": 180,
            "Tokyo": 250,
            "Berlin": 190,
            "Mumbai": 240,
            "Bangkok": 230,
            "Rome": 170,
            "Cancun": 140,
            "Dubai": 300,
            "Singapore": 260,
            "Amsterdam": 210,
            "Hong Kong": 275,
            "Barcelona": 175,
            "Moscow": 240,
            "Seoul": 255,
            "Rio De Janeiro": 270,
            "Capetown": 300,
            "USA": 150,
            "United Kingdom": 200,
            "Japan": 250,
            "France": 180,
            "Australia": 220,
            "Germany": 190,
            "India": 240,
            "Thailand": 230,
            "Italy": 170,
            "Mexico": 140,
            "United Arab Emirates": 300,
            "Singapore": 260,
            "Netherlands": 210,
            "China": 275,
            "Spain": 175,
            "Russia": 240,
            "South Korea": 255,
            "Brazil": 270,
            "South Africa": 300,
            "usa": 150,
            "Usa": 150,
            "United kingdom": 200,
            "united kingdom": 200,
            "japan": 250,
            "france": 180,
            "australia": 220,
            "germany": 190,
            "india": 240,
            "thailand": 230,
            "italy": 170,
            "mexico": 140,
            "united arab emirates": 300,
            "United arab emirates": 300,
            "singapore": 260,
            "netherlands": 210,
            "china": 275,
            "spain": 175,
            "russia": 240,
            "south korea": 255,
            "South korea": 255,
            "brazil": 270,
            "south africa": 300,
            "South africa": 300,
            "Pakistan": 130,
            "pakistan": 130,

        };

        return destinationPriceMap[this.destination] || basePrice;
    }

    confirmBooking() {
        return `
            <p><strong>Booking Confirmed!</strong></p>
            <p><strong>Name:</strong> ${this.name}</p>
            <p><strong>Email:</strong> ${this.email}</p>
            <p><strong>Phone:</strong> ${this.phone}</p>
            <p><strong>From:</strong> ${this.departure}</p>
            <p><strong>To:</strong> ${this.destination}</p>
            <p><strong>Date:</strong> ${this.date}</p>
            <p class="pricing"><strong>Ticket Price:</strong> $${this.ticketPrice}</p>
        `;
    }
}

// Event listener for form submission
document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;

    // Create a new Booking instance
    const booking = new Booking(name, email, phone, departure, destination, date);

    // Display confirmation message
    const confirmationMessage = booking.confirmBooking();
    document.getElementById('confirmationMessage').innerHTML = confirmationMessage;

    // Optionally reset the form
    document.getElementById('bookingForm').reset();
});



