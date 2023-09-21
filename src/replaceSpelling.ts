import americanToBritishSpelling from './american-to-british-spelling.json';

export function replaceSpelling(text: string): string {
    Object.entries(americanToBritishSpelling).forEach(([american, british]) => {
        text = replaceWord(text, american, british);
    });
    return text;
}

function replaceWord(text: string, source: string, target: string): string {
    text = text.replace(source, target)
    return text.replace(capitalize(source), capitalize(target));
}

function capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
}