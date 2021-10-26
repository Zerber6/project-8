const consoleLog = document.querySelector('#submit')
consoleLog.addEventListener('click', () => {
const inputValue=document.getElementById("text").value;
alert('Спасибо за нажатие на нашу замечательную кнопку. Значение вашего поля '+inputValue)
})