function createPromptCard(prompt, index, category, tone) {
    const card = document.createElement('div');
    card.className = 'prompt-card';
    
    const number = document.createElement('div');
    number.className = 'prompt-number';
    number.textContent = `Option ${index + 1}`;
    
    const text = document.createElement('div');
    text.className = 'prompt-text';
    text.textContent = prompt;
    
    const tags = document.createElement('div');
    tags.className = 'prompt-tags';
    const [catName, toneName] = getTags(category, tone);
    const tag1 = document.createElement('span');
    tag1.className = 'prompt-tag';
    tag1.textContent = catName;
    const tag2 = document.createElement('span');
    tag2.className = 'prompt-tag';
    tag2.textContent = toneName;
    tags.appendChild(tag1);
    tags.appendChild(tag2);
    
    const actions = document.createElement('div');
    actions.className = 'card-actions';
    
    const copyBtn = createCardButton('📋 Copy', 'copy-btn', () => copyToClipboard(prompt));
    const saveBtn = createCardButton('💾 Save', 'save-btn', function() {
        toggleFavorite(prompt, this);
    });
    const regenerateBtn = createCardButton('🔄 Regenerate', 'regenerate-btn', function() {
        handleRegenerate(index);
    });
    
    actions.appendChild(copyBtn);
    actions.appendChild(saveBtn);
    actions.appendChild(regenerateBtn);
    
    card.appendChild(number);
    card.appendChild(text);
    card.appendChild(tags);
    card.appendChild(actions);
    
    return card;
}

function createCardButton(text, className, onClick) {
    const btn = document.createElement('button');
    btn.className = `card-btn ${className}`;
    btn.textContent = text;
    btn.addEventListener('click', onClick);
    return btn;
}

function toggleFavorite(prompt, btn) {
    let favorites = loadFavorites();
    const index = favorites.indexOf(prompt);
    if (index > -1) {
        favorites.splice(index, 1);
        btn.textContent = '💾 Save';
        btn.classList.remove('saved');
        showToast('Removed from favorites', 'info');
    } else {
        favorites.push(prompt);
        btn.textContent = '⭐ Saved';
        btn.classList.add('saved');
        showToast('Added to favorites!', 'success');
    }
    saveFavorites(favorites);
    updateFavoritesCount();
}

function displayPrompts(prompts, category, tone) {
    const grid = document.getElementById('promptsGrid');
    grid.innerHTML = '';
    prompts.forEach((prompt, index) => {
        const card = createPromptCard(prompt, index, category, tone);
        const saveBtn = card.querySelector('.save-btn');
        if (loadFavorites().includes(prompt)) {
            saveBtn.textContent = '⭐ Saved';
            saveBtn.classList.add('saved');
        }
        grid.appendChild(card);
    });
}

function displayFavorites() {
    const favorites = loadFavorites();
    const grid = document.getElementById('favoritesGrid');
    const section = document.getElementById('favoritesSection');
    
    grid.innerHTML = '';
    if (favorites.length === 0) {
        grid.innerHTML = '<p style="text-align:center;padding:40px;">No favorites yet. Start saving prompts!</p>';
    } else {
        favorites.forEach((prompt, index) => {
            const card = createPromptCard(prompt, index, 'favorites', '');
            const saveBtn = card.querySelector('.save-btn');
            saveBtn.textContent = '⭐ Saved';
            saveBtn.classList.add('saved');
            grid.appendChild(card);
        });
    }
    section.style.display = 'block';
    document.getElementById('resultsSection').style.display = 'none';
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function updateFavoritesCount() {
    const favorites = loadFavorites();
    const btn = document.getElementById('favoritesBtn');
    if (btn) {
        btn.textContent = favorites.length > 0 ? `⭐ Favorites (${favorites.length})` : '⭐ Favorites';
    }
}