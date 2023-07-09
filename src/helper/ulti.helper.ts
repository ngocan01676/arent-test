export function sliceText(text: string, maxLength: number) {
    if (text.length <= maxLength) {
        return text; // Return the original text if it's shorter than the maxLength
    } else {
        return text.slice(0, maxLength) + '...'; // Slice the text and append "..." at the end
    }
}