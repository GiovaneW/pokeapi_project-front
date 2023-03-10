/**
 * 
 * @param a string que será comparada
 * @param b string base da comparação
 * @returns retorna true se em ordem alfabética a string "a" deve vir antes da string "b"
 */
export function stringOrder(a: string, b: string): boolean {
    const charA = a.toLowerCase().split(''), charB = b.toLocaleLowerCase().split('')
    const maxIndex = Math.min(a.length, b.length)
    let isSmaller = false
    for (let i = 0; i < maxIndex; i++) {
        if (charA[i] === charB[i]) {
            continue
        }
        isSmaller = charA[i].localeCompare(charB[i], 'pt-BR', { numeric: true }) == -1
        if (isSmaller) break
    }
    return isSmaller
}