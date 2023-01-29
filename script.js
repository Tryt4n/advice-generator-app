const URL = "https://api.adviceslip.com/advice";

const adviceNumber = document.querySelector("[data-advice]");
const quote = document.querySelector("[data-quote]");

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    adviceNumber.textContent = `Advice #${data.slip.id}`;
    quote.textContent = data.slip.advice;
  });
