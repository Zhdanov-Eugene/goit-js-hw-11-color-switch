const btnStartRef = document.querySelector('[data-action="start"]');
const btnStopRef = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector('body');

btnStartRef.addEventListener('click', onBtnStartClick);
btnStopRef.addEventListener('click', onBtnStopClick);

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalID = null;
const INTERVAL = 1000;

function onBtnStartClick() {
    intervalID = setInterval(() => {
        const colorIndex = randomIntegerFromInterval(0, colors.length - 1);
        bodyRef.style.backgroundColor = colors[colorIndex];
        btnStartRef.setAttribute('disabled', '');
    }, INTERVAL);
}

function onBtnStopClick() {
    clearInterval(intervalID);
    btnStartRef.disabled = false;
}


// Переключатель цветов
// Есть массив цветов в hex - формате и кнопки Start и Stop.

// < button type = "button" data - action="start" > Start</ >
//     <button type="button" data-action="stop">Stop</button>
// const colors = [
//     '#FFFFFF',
//     '#2196F3',
//     '#4CAF50',
//     '#FF9800',
//     '#009688',
//     '#795548',
// ];
// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн - стиль.При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.

// ⚠️ Учти, на кнопку Start можно нажать бесконечное количество раз.Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.

// Для генерации случайного числа(индекс элемента массива цветов), используй функцию randomIntegerFromInterval.

// const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// };