function generatePrompts(input, category, tone, count) {
    const templates = TEMPLATES[category];
    const variations = STYLES[category];
    const toneMod = TONES[tone];
    const generatedPrompts = [];

    for (let i = 0; i < count; i++) {
        const template = getRandomItem(templates);
        const replacements = buildReplacements(category, variations, input);
        let prompt = formatPrompt(template, replacements);
        prompt = addTone(prompt, toneMod);
        prompt = truncatePrompt(prompt, 300);
        generatedPrompts.push(prompt);
    }

    return generatedPrompts;
}

function buildReplacements(category, variations, input) {
    const base = { subject: input };
    const categorySpecific = {};

    if (category === 'art') {
        categorySpecific.style = getRandomItem(variations.style);
        categorySpecific.mood = getRandomItem(variations.mood);
        categorySpecific.lighting = getRandomItem(variations.lighting);
        categorySpecific.color = getRandomItem(variations.color);
        categorySpecific.camera = getRandomItem(variations.camera);
        categorySpecific.detail = getRandomItem(variations.detail);
        categorySpecific.background = getRandomItem(variations.background);
        categorySpecific.quality = getRandomItem(variations.quality);
    } else if (category === 'coding') {
        categorySpecific.language = getRandomItem(variations.language);
        categorySpecific.feature = getRandomItem(variations.feature);
        categorySpecific.complexity = getRandomItem(variations.complexity);
        categorySpecific.optimization = getRandomItem(variations.optimization);
        categorySpecific.error = getRandomItem(variations.error);
    } else if (category === 'writing') {
        categorySpecific.genre = getRandomItem(variations.genre);
        categorySpecific.character = getRandomItem(variations.character);
        categorySpecific.setting = getRandomItem(variations.setting);
        categorySpecific.plot = getRandomItem(variations.plot);
        categorySpecific.length = getRandomItem(variations.length);
        categorySpecific.tone = getRandomItem(variations.tone);
    } else if (category === 'education') {
        categorySpecific.level = getRandomItem(variations.level);
        categorySpecific.topic = getRandomItem(variations.topic);
        categorySpecific.format = getRandomItem(variations.format);
        categorySpecific.approach = getRandomItem(variations.approach);
        categorySpecific.goal = getRandomItem(variations.goal);
    } else if (category === 'business') {
        categorySpecific.type = getRandomItem(variations.type);
        categorySpecific.goal = getRandomItem(variations.goal);
        categorySpecific.approach = getRandomItem(variations.approach);
        categorySpecific.resource = getRandomItem(variations.resource);
        categorySpecific.timeframe = getRandomItem(variations.timeframe);
    } else if (category === 'health') {
        categorySpecific.type = getRandomItem(variations.type);
        categorySpecific.goal = getRandomItem(variations.goal);
        categorySpecific.approach = getRandomItem(variations.approach);
        categorySpecific.duration = getRandomItem(variations.duration);
        categorySpecific.monitoring = getRandomItem(variations.monitoring);
    } else if (category === 'travel') {
        categorySpecific.type = getRandomItem(variations.type);
        categorySpecific.activity = getRandomItem(variations.activity);
        categorySpecific.duration = getRandomItem(variations.duration);
        categorySpecific.budget = getRandomItem(variations.budget);
        categorySpecific.style = getRandomItem(variations.style);
    } else if (category === 'tech') {
        categorySpecific.type = getRandomItem(variations.type);
        categorySpecific.tech = getRandomItem(variations.tech);
        categorySpecific.approach = getRandomItem(variations.approach);
        categorySpecific.integration = getRandomItem(variations.integration);
        categorySpecific.scale = getRandomItem(variations.scale);
    } else if (category === 'social') {
        categorySpecific.type = getRandomItem(variations.type);
        categorySpecific.platform = getRandomItem(variations.platform);
        categorySpecific.format = getRandomItem(variations.format);
        categorySpecific.goal = getRandomItem(variations.goal);
        categorySpecific.tone = getRandomItem(variations.tone);
    } else if (category === 'lifestyle') {
        categorySpecific.type = getRandomItem(variations.type);
        categorySpecific.goal = getRandomItem(variations.goal);
        categorySpecific.approach = getRandomItem(variations.approach);
        categorySpecific.duration = getRandomItem(variations.duration);
        categorySpecific.outcome = getRandomItem(variations.outcome);
    }

    return { ...base, ...categorySpecific };
}

function regenerateSinglePrompt(input, category, tone, index, currentPrompts) {
    const templates = TEMPLATES[category];
    const variations = STYLES[category];
    const toneMod = TONES[tone];
    
    const template = getRandomItem(templates);
    const replacements = buildReplacements(category, variations, input);
    let prompt = formatPrompt(template, replacements);
    prompt = addTone(prompt, toneMod);
    prompt = truncatePrompt(prompt, 300);
    
    currentPrompts[index] = prompt;
    return currentPrompts;
}