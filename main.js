document.addEventListener('DOMContentLoaded', () => {
    // Анимация строк таблицы
    document.querySelectorAll('.stats-table tr').forEach(row => {
        row.addEventListener('mouseover', () => {
            row.style.backgroundColor = 'rgba(51, 102, 204, 0.1)';
        });
        row.addEventListener('mouseout', () => {
            row.style.backgroundColor = '';
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.dynamic-button');
    buttons.forEach(button => {
        button.style.backgroundColor = getRandomColor();
    });
});

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('.region-table tr');
    rows.forEach((row, index) => {
        if (index > 0) { // Пропускаем заголовок
            row.style.backgroundColor = getRandomColor();
        }
    });
});