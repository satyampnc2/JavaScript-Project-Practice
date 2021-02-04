var numbers = document.getElementsByClassName("number");
console.log(numbers);
for (let i = 0; i < numbers.length; i++) {
  numbers[i].style.transform = `rotate(${(i + 1) * 30}deg)`;
}

let hourHand = document.getElementsByClassName("hour")[0];
let minuteHand = document.getElementsByClassName("minute")[0];
let secondHand = document.getElementsByClassName("second")[0];
const fun = (h, m, s) => {
  secondHand.style.transform = `translate(100%, 50%) rotate(${
    (s * 360) / 60 - 90
  }deg)`;
  minuteHand.style.transform = `translate(100%, 50%) rotate(${
    ((m + s / 60) * 360) / 60 - 90
  }deg)`;
  hourHand.style.transform = `translate(100%, 50%) rotate(${
    ((h + m / 60) * 360) / 12 - 90
  }deg)`;
};

setInterval(() => {
  const date = new Date();
  const hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  fun(hour, minutes, seconds);
}, 1000);
