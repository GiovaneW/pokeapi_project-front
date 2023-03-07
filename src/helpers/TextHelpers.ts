export function toTitleCase(text: string): string {
    const splitText: string[] = text.toLowerCase().split(' ')
    return splitText.map((element) => {
        return element = element[0].toUpperCase() + element.slice(1, element.length)
    }).join(' ')
}