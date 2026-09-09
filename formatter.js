function formatPrompt(template, replacements) {
    let result = template;
    for (let key in replacements) {
        result = result.replace(new RegExp(`{${key}}`, 'g'), replacements[key]);
    }
    return result;
}

function truncatePrompt(text, maxLength = 300) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
}
function addTone(prompt, toneData) {
    return toneData.prefix + prompt + toneData.suffix;
}
function getTags(category, tone) {
    const categoryNames = {
        art: 'Art', coding: 'Code', writing: 'Writing', education: 'Education',
        business: 'Business', health: 'Health', travel: 'Travel', tech: 'Tech',
        social: 'Social', lifestyle: 'Lifestyle'
    };
    return [categoryNames[category] || category, tone];
}
