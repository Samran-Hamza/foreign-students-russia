// Функция генерации цвета
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-content');

    if (!container) {
        console.error('Контейнер #dynamic-content не найден!');
        return;
    }

    // 1. Заголовок
    const heading = document.createElement('h2');
    heading.textContent = 'Динамика роста иностранных студентов';
    heading.style.animation = 'slideInFromLeft 1s ease-out';
    container.appendChild(heading);

    // 2. График
    const chart = document.createElement('div');
    chart.className = 'growth-chart';
    chart.style.padding = '20px';
    chart.style.background = 'white';
    chart.style.borderRadius = '10px';
    chart.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    chart.style.margin = '20px';

    const years = ['2014', '2018', '2024'];
    const heights = [100, 180, 250];

    years.forEach((year, index) => {
        const bar = document.createElement('div');
        bar.style.height = `${heights[index]}px`;
        bar.style.width = '50px';
        bar.style.background = getRandomColor();
        bar.style.margin = '10px auto';
        bar.style.transition = 'height 1s';

        const label = document.createElement('p');
        label.textContent = year;
        label.style.textAlign = 'center';
        label.style.color = '#3366cc';

        chart.appendChild(bar);
        chart.appendChild(label);
    });

    container.appendChild(chart);

    // 3. Счетчик
    const counterSection = document.createElement('div');
    counterSection.style.textAlign = 'center';
    counterSection.style.margin = '40px 0';

    const counterTitle = document.createElement('h3');
    counterTitle.textContent = 'Общее количество студентов:';
    counterSection.appendChild(counterTitle);

    const counterValue = document.createElement('span');
    counterValue.textContent = '0';
    counterValue.style.fontSize = '36px';
    counterValue.style.color = getRandomColor();
    counterSection.appendChild(counterValue);

    let count = 0;
    const interval = setInterval(() => {
        if (count >= 328000) {
            clearInterval(interval);
        } else {
            count += 1000;
            counterValue.textContent = count.toLocaleString();
        }
    }, 10);

    container.appendChild(counterSection);

    // 4. Поле ввода года (ВОССТАНОВЛЕНО)
    const inputSection = document.createElement('div');
    inputSection.style.textAlign = 'center';
    inputSection.style.margin = '40px 0';
    inputSection.style.padding = '20px';
    inputSection.style.background = 'white';
    inputSection.style.borderRadius = '10px';
    inputSection.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';

    const inputLabel = document.createElement('h3');
    inputLabel.textContent = 'Введите год для просмотра данных:';
    inputSection.appendChild(inputLabel);

    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.style.padding = '10px';
    inputField.style.margin = '10px 0';
    inputField.style.border = '1px solid #ccc';
    inputField.style.borderRadius = '5px';
    inputSection.appendChild(inputField);

    const resultText = document.createElement('p');
    resultText.style.margin = '10px 0';
    resultText.style.fontSize = '18px';
    resultText.style.color = '#3366cc';
    inputSection.appendChild(resultText);

    inputField.addEventListener('input', () => {
        const year = inputField.value;
        if (year === '2014') {
            resultText.textContent = 'В 2014 году было 154,000 студентов.';
            resultText.style.color = '#ff6600';
        } else if (year === '2018') {
            resultText.textContent = 'В 2018 году увеличилось до 220,000 студентов.';
            resultText.style.color = '#66ff66';
        } else if (year === '2024') {
            resultText.textContent = 'В 2024 году станет 328,000 студентов.';
            resultText.style.color = '#6666ff';
        } else {
            resultText.textContent = 'Данные для этого года недоступны.';
            resultText.style.color = '#ff0000';
        }
    });

    container.appendChild(inputSection);

    // 5. Список стран-лидеров
    const leadersSection = document.createElement('div');
    leadersSection.className = 'leaders-card';
    leadersSection.style.background = 'linear-gradient(45deg, #3366cc, #003366)';
    leadersSection.style.color = 'white';
    leadersSection.style.padding = '20px';
    leadersSection.style.borderRadius = '10px';
    leadersSection.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
    leadersSection.style.margin = '40px 0';
    leadersSection.style.animation = 'fadeIn 2s';

    const leadersTitle = document.createElement('h3');
    leadersTitle.textContent = 'Лидеры по количеству студентов:';
    leadersTitle.style.textAlign = 'center';
    leadersSection.appendChild(leadersTitle);

    const leadersList = document.createElement('ul');
    leadersList.style.listStyleType = 'none';
    leadersList.style.padding = '0';
    leadersList.style.margin = '20px 0';
    leadersSection.appendChild(leadersList);

    const leadersData = [
        { country: 'Беларусь', students: '120,000', color: '#ff6600' },
        { country: 'Казахстан', students: '100,000', color: '#ffcc00' },
        { country: 'Китай', students: '90,000', color: '#66ff66' },
        { country: 'Индия', students: '45,000', color: '#6666ff' },
        { country: 'Узбекистан', students: '25,000', color: '#ff66ff' },
        { country: 'Египет', students: '20,000', color: '#ff9933' },
        { country: 'Гана', students: '10,000', color: '#33cc33' }
    ];

    leadersData.forEach(item => {
        const listItem = document.createElement('li');
        listItem.style.display = 'flex';
        listItem.style.justifyContent = 'space-between';
        listItem.style.padding = '10px';
        listItem.style.margin = '5px 0';
        listItem.style.background = item.color;
        listItem.style.borderRadius = '5px';
        listItem.style.transition = 'transform 0.3s';

        listItem.innerHTML = `
            <span>${item.country}</span>
            <span style="font-weight: bold;">${item.students}</span>
        `;

        listItem.addEventListener('mouseover', () => {
            listItem.style.transform = 'scale(1.05)';
        });

        listItem.addEventListener('mouseout', () => {
            listItem.style.transform = 'scale(1)';
        });

        leadersList.appendChild(listItem);
    });

    container.appendChild(leadersSection);

    // 6. Список регионов
    const regionsSection = document.createElement('div');
    regionsSection.className = 'regions-card';
    regionsSection.style.background = 'linear-gradient(135deg, #6666ff, #333399)';
    regionsSection.style.color = 'white';
    regionsSection.style.padding = '20px';
    regionsSection.style.borderRadius = '10px';
    regionsSection.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
    regionsSection.style.margin = '40px 0';
    regionsSection.style.animation = 'fadeIn 2s';

    const regionsTitle = document.createElement('h3');
    regionsTitle.textContent = 'Популярные регионы:';
    regionsTitle.style.textAlign = 'center';
    regionsSection.appendChild(regionsTitle);

    const regionsList = document.createElement('ul');
    regionsList.style.listStyleType = 'square';
    regionsList.style.padding = '0';
    regionsList.style.margin = '20px 0';
    regionsSection.appendChild(regionsList);

    const regionsData = [
        { region: 'Москва', percent: '35%' },
        { region: 'Санкт-Петербург', percent: '25%' },
        { region: 'Казань', percent: '15%' },
        { region: 'Екатеринбург', percent: '10%' },
        { region: 'Новосибирск', percent: '8%' },
        { region: 'Другие регионы', percent: '17%' }
    ];

    regionsData.forEach(item => {
        const listItem = document.createElement('li');
        listItem.style.display = 'flex';
        listItem.style.justifyContent = 'space-between';
        listItem.style.padding = '10px';
        listItem.style.margin = '5px 0';
        listItem.style.background = getRandomColor();
        listItem.style.borderRadius = '5px';
        listItem.style.transition = 'transform 0.3s';

        listItem.innerHTML = `
            <span>${item.region}</span>
            <span style="font-weight: bold;">${item.percent}</span>
        `;

        listItem.addEventListener('mouseover', () => {
            listItem.style.transform = 'scale(1.05)';
        });

        listItem.addEventListener('mouseout', () => {
            listItem.style.transform = 'scale(1)';
        });

        regionsList.appendChild(listItem);
    });

    container.appendChild(regionsSection);

    // 7. Случайные факты
    const factsSection = document.createElement('div');
    factsSection.style.textAlign = 'center';
    factsSection.style.margin = '40px 0';

    const factsTitle = document.createElement('h3');
    factsTitle.textContent = 'Случайный факт:';
    factsSection.appendChild(factsTitle);

    const factsList = [
        'Большинство студентов приезжает из Беларуси и Казахстана.',
        'МГУ — лидер по приему иностранцев.',
        'Медицина — самое популярное направление.',
        'Рост числа студентов: +113% за 10 лет.',
        'К 2030 году планируется 500,000 студентов.'
    ];

    const factText = document.createElement('p');
    factText.style.fontSize = '18px';
    factText.style.color = 'white';
    factText.style.backgroundColor = getRandomColor();
    factText.style.padding = '15px';
    factText.style.borderRadius = '10px';
    factText.style.margin = '10px 0';
    factsSection.appendChild(factText);

    const randomFactButton = document.createElement('button');
    randomFactButton.textContent = 'Показать факт';
    randomFactButton.style.padding = '10px 20px';
    randomFactButton.style.backgroundColor = getRandomColor();
    randomFactButton.style.color = 'white';
    randomFactButton.style.border = 'none';
    randomFactButton.style.borderRadius = '5px';
    randomFactButton.style.cursor = 'pointer';
    randomFactButton.style.margin = '10px';
    randomFactButton.style.animation = 'bounce 2s infinite';

    randomFactButton.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * factsList.length);
        factText.textContent = factsList[randomIndex];
        factText.style.backgroundColor = getRandomColor();
    });

    factsSection.appendChild(randomFactButton);
    container.appendChild(factsSection);

    // 8. Карта
    const mapSection = document.createElement('div');
    mapSection.style.textAlign = 'center';
    mapSection.style.margin = '40px 0';

    const mapTitle = document.createElement('h3');
    mapTitle.textContent = 'Карта популярных регионов:';
    mapSection.appendChild(mapTitle);

    const mapImage = document.createElement('img');
    mapImage.src = 'assets/images/carte-russie.png'; 
    mapImage.alt = 'Карта России';
    mapImage.style.maxWidth = '80%';
    mapImage.style.borderRadius = '10px';
    mapImage.style.cursor = 'pointer';
    mapImage.style.transition = 'transform 0.3s';

    mapImage.addEventListener('click', () => {
        mapImage.style.transform = 'scale(1.1)';
        setTimeout(() => {
            mapImage.style.transform = 'scale(1)';
        }, 500);
    });

    mapSection.appendChild(mapImage);
    container.appendChild(mapSection);
});