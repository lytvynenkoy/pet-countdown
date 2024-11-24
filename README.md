
# Countdown Timer to New Year 🎉

This is a simple countdown timer project that counts down the days, hours, minutes, and seconds until the next New Year. The timer dynamically updates every second, creating a real-time countdown experience.

## Features

- Displays the current year and countdown to the next year.
- Updates every second to show the remaining time until New Year.
- Includes a preloader that hides after the initial page load.

## Tech Stack

- **HTML**: Structure of the application.
- **CSS**: Styling and layout of the countdown.
- **JavaScript**: Logic to calculate and display the countdown.

## How It Works

1. The script calculates the time difference between the current time and the next New Year's Day.
2. The remaining time is divided into days, hours, minutes, and seconds.
3. These values are dynamically updated every second on the page.

## Code Overview

### Main Logic

```javascript
const year = document.querySelector('#year');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

const countdown = document.querySelector('#countdown');
const preloader = document.querySelector('#preloader');

const currentYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

year.innerText = currentYear + 1;

function updateCountdown() {
    const currentTime = new Date();
    const diff = nextYear - currentTime;

    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    const secondsLeft = Math.floor(diff / 1000) % 60;

    days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
}

setInterval(updateCountdown, 1000);

setTimeout(function() {
    preloader.remove();
    countdown.style.display = 'flex';
}, 1000);
```

### Preloader

A `setTimeout` is used to simulate the preloader before displaying the countdown.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/countdown-timer.git
   ```

2. Navigate to the project folder:

   ```bash
   cd countdown-timer
   ```

3. Open the `index.html` file in your browser to see the timer in action.

## File Structure

```plaintext
countdown-timer/
├── index.html    # HTML structure
├── style.css     # CSS styling
├── script.js     # JavaScript logic
└── README.md     # Project documentation
```

## Customization

- To style the timer, modify the `style.css` file.
- To add more functionality, update the `script.js` file.

## Future Enhancements

- Add a celebratory animation when the countdown reaches zero.
- Make the timer responsive for different screen sizes.
- Allow users to customize the countdown target date.

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Enjoy counting down to the New Year! 🎆
