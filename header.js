function createHeader() {
    const header = document.createElement('header');
    header.className = 'header';
    
    const logo = document.createElement('div');
    logo.className = 'logo';
    logo.innerHTML = `
        <span class="logo-icon">⚡</span>
        <h1>PromptForge</h1>
    `;
    
    const controls = document.createElement('div');
    controls.className = 'header-controls';
    controls.innerHTML = `
        <button id="themeToggle" class="theme-btn">🌙</button>
        <button id="favoritesBtn" class="favorites-btn">⭐ Favorites</button>
    `;
    
    header.appendChild(logo);
    header.appendChild(controls);
    
    return header;
}

function setupHeaderEvents() {
    const themeToggle = document.getElementById('themeToggle');
    const favoritesBtn = document.getElementById('favoritesBtn');
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        this.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });
    
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
        themeToggle.textContent = '☀️';
    }
    
    favoritesBtn.addEventListener('click', function() {
        const favorites = loadFavorites();
        if (favorites.length === 0) {
            showToast('No favorites saved yet!', 'info');
            return;
        }
        displayFavorites();
    });
}