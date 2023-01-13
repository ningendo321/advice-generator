const titleNumber = document.querySelector('.title span')
const adviceTxt = document.querySelector('.advice')
const url = "https://api.adviceslip.com/advice"
const nextAdvice = document.querySelector('.next-btn')


async function getAdvice() {
    const res = await fetch("https://api.adviceslip.com/advice")
    const {slip: {id, advice}} = await res.json();
    adviceTxt.innerHTML = `"${advice}"`;
    titleNumber.innerHTML = id;
}

getAdvice();

nextAdvice.addEventListener("click", getAdvice)