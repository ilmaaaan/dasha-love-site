const numberOfHearts = 60; // Количество сердец

function getRandomPosition(element) {
    const x = Math.random() * (window.innerWidth - element.offsetWidth) - window.innerWidth/2;
    const y = Math.random() * (window.innerHeight - element.offsetHeight) - window.innerHeight/2;
    return { x, y };
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'random-box';
    heart.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" width="50" height="50">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
    `;
    document.body.appendChild(heart);
    return heart;
}

function setRandomPosition(heart) {
    const { x, y } = getRandomPosition(heart);
    heart.style.transform = `translate(${x}px, ${y}px)`;
}

function showHeart(heart) {
    setRandomPosition(heart); // Устанавливаем случайную позицию
    heart.style.opacity = 1; // Показываем элемент
}

function hideHeart(heart) {
    heart.style.opacity = 0; // Скрываем элемент
}

// Создаем и показываем несколько сердец
const hearts = [];
for (let i = 0; i < numberOfHearts; i++) {
    const heart = createHeart();
    hearts.push(heart);

    // Задержка для появления каждого сердца
    const delay = Math.random() * 2000; // Случайная задержка до 2 секунд
    setTimeout(() => {
        showHeart(heart);
        setTimeout(() => hideHeart(heart), 3000); // Скрыть через 3 секунды
    }, delay);
}

// Показать и скрыть сердца через определенные интервалы
setInterval(() => {
    hearts.forEach(heart => {
        const delay = Math.random() * 2000; // Случайная задержка до 2 секунд
        setTimeout(() => {
            showHeart(heart);
            setTimeout(() => hideHeart(heart), 2000); // Скрыть через 3 секунды
        }, delay);
    });
}, 3000); // Показать каждые 5 секунд