document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Робота з localStorage (Дані про ОС та Браузер) ---
    const saveBrowserInfo = () => {
        const info = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            language: navigator.language,
            screenResolution: `${window.screen.width}x${window.screen.height}`,
            timestamp: new Date().toLocaleString()
        };
        
        localStorage.setItem('os_browser_info', JSON.stringify(info));
        displayBrowserInfo();
    };

    const displayBrowserInfo = () => {
        const data = localStorage.getItem('os_browser_info');
        if (data) {
            const info = JSON.parse(data);
            const container = document.getElementById('browser-info');
            container.innerHTML = `<strong>Sys info:</strong> ${info.userAgent} | <strong>Platform:</strong> ${info.platform}`;
        }
    };

    saveBrowserInfo();


    // --- 2. Динамічний вміст (JSONPlaceholder) ---
    const variantNumber = 3; 
    const fetchComments = async () => {
        const container = document.getElementById('comments-container');
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${variantNumber}/comments`);
            const comments = await response.json();
            
            container.innerHTML = ''; // Очищуємо текст завантаження
            comments.forEach(comment => {
                const commentElement = document.createElement('div');
                commentElement.style.marginBottom = '15px';
                commentElement.innerHTML = `
                    <strong>${comment.name}</strong> <small>(${comment.email})</small>
                    <p>${comment.body}</p>
                `;
                container.appendChild(commentElement);
            });
        } catch (error) {
            container.innerText = 'Failed to load comments.';
            console.error(error);
        }
    };

    fetchComments();


    // --- 3. Модальне вікно через 1 хвилину ---
    const modal = document.getElementById('feedback-modal');
    const closeBtn = document.querySelector('.close-button');

    setTimeout(() => {
        modal.style.display = 'block';
    }, 60000); // 60000 мс = 1 хвилина

    // Закриття модального вікна
    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (event) => {
        if (event.target == modal) modal.style.display = 'none';
    };
});

// --- 4. Керування темами (День/Ніч) ---

const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

// Функція для встановлення теми
const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeIcon.innerText = theme === 'dark' ? '☀️' : '🌙';
};

// Функція перевірки часу доби
const checkTimeAndSetTheme = () => {
    const hour = new Date().getHours();
    // Денна тема: від 07:00 до 21:00
    if (hour >= 7 && hour < 21) {
        setTheme('light');
    } else {
        setTheme('dark');
    }
};

// Логіка ініціалізації
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    // Якщо користувач уже сам обрав тему раніше — ставимо її
    setTheme(savedTheme);
} else {
    // Якщо ні — перевіряємо час
    checkTimeAndSetTheme();
}

// Обробка кліку на кнопку
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});