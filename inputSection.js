function createInputSection() {
    const section = document.createElement('section');
    section.className = 'input-section';
    
    const inputBox = document.createElement('div');
    inputBox.className = 'input-box';
    inputBox.innerHTML = `
        <label for="userInput">Enter 3-4 Words</label>
        <input type="text" id="userInput" placeholder="e.g., cat wearing hat, sunset mountain, robot painting" maxlength="50">
        <div class="char-count"><span id="charCount">0</span>/50</div>
    `;
    
    const optionsRow = document.createElement('div');
    optionsRow.className = 'options-row';
    
    const categoryGroup = createSelectGroup('Category', 'categorySelect', CATEGORIES.map(c => ({ value: c.id, label: `${c.icon} ${c.name}` })));
    const toneGroup = createSelectGroup('Tone', 'toneSelect', Object.keys(TONES).map(t => ({ value: t, label: t.charAt(0).toUpperCase() + t.slice(1) })));
    const countGroup = createSelectGroup('Options', 'countSelect', [
        { value: '5', label: '5 Options' },
        { value: '8', label: '8 Options' },
        { value: '10', label: '10 Options' },
        { value: '15', label: '15 Options' }
    ]);
    
    optionsRow.appendChild(categoryGroup);
    optionsRow.appendChild(toneGroup);
    optionsRow.appendChild(countGroup);
    
    const generateBtn = document.createElement('button');
    generateBtn.id = 'generateBtn';
    generateBtn.className = 'generate-btn';
    generateBtn.innerHTML = `<span class="btn-icon">⚡</span> Generate Prompts`;
    
    section.appendChild(inputBox);
    section.appendChild(optionsRow);
    section.appendChild(generateBtn);
    
    return section;
}

function createSelectGroup(labelText, id, options) {
    const group = document.createElement('div');
    group.className = 'select-group';
    
    const label = document.createElement('label');
    label.htmlFor = id;
    label.textContent = labelText;
    
    const select = document.createElement('select');
    select.id = id;
    
    options.forEach(opt => {
        const option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.label;
        if (opt.selected) option.selected = true;
        select.appendChild(option);
    });
    
    group.appendChild(label);
    group.appendChild(select);
    return group;
}

function setupInputEvents() {
    const userInput = document.getElementById('userInput');
    const charCount = document.getElementById('charCount');
    const generateBtn = document.getElementById('generateBtn');
    
    userInput.addEventListener('input', function() {
        const count = this.value.length;
        charCount.textContent = count;
        charCount.style.color = count > 45 ? '#ff4757' : '#888';
    });
    
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') generateBtn.click();
    });
    
    generateBtn.addEventListener('click', function() {
        const input = userInput.value.trim();
        if (input.length === 0) {
            showToast('Please enter at least 3 words!', 'error');
            return;
        }
        if (input.split(' ').length < 2) {
            showToast('Please enter at least 2-3 words!', 'error');
            return;
        }
        handleGenerate();
    });
}