interface IDataComparision<T> {
    firstItem: T
    secondItem: T
}

export function dataComparision(props: IDataComparision<string>) {
    const test = Number(jaroWinkler(props))
    return test
}

function jaroDistance(props: IDataComparision<string>) {
    const { firstItem, secondItem } = props

    // Directly comparision of string absolute similarity
    if (firstItem === secondItem)
        return 1.0

    // Length of two strings
    const firstItemLength = firstItem.length, secondItemLength = secondItem.length

    // If one of two strings to compare are a empty string the comparission is not available
    if (firstItemLength == 0 || secondItemLength == 0)
        return 0.0

    // Maximum distance upto which matching
    // is allowed
    const maxDistance = Math.floor(Math.max(firstItemLength, secondItemLength) / 2) - 1

    // Count of matches
    let match = 0

    // Hash for matches
    const hashFirstItem = new Array(firstItem.length), hashSecondItem = new Array(secondItem.length)
    hashFirstItem.fill(0)
    hashSecondItem.fill(0)

    // Traverse through the first string
    for (let i = 0; i < firstItemLength; i++) {

        // Check if there is any matches
        for (let j = Math.max(0, i - maxDistance);
            j < Math.min(secondItemLength, i + maxDistance + 1); j++)

            // If there is a match
            if (firstItem[i] === secondItem[j] &&
                hashSecondItem[j] == 0) {
                hashFirstItem[i] = 1
                hashSecondItem[j] = 1
                match++
                break
            }
    }

    // If there is no any match
    if (match === 0)
        return 0.0

    // Number of transpositions
    let transpositions = 0, point = 0

    // Count number of occurrences
    // where two characters match but
    // there is a third matched character
    // in between the indices
    for (let i = 0; i < firstItemLength; i++)
        if (hashFirstItem[i] === 1) {

            // Find the next matched character
            // in second string
            while (hashSecondItem[point] === 0)
                point++

            if (firstItem[i] != secondItem[point++])
                transpositions++
        }
    transpositions /= 2

    // Return the Jaro Similarity
    return ((match) / (firstItemLength)
        + (match) / (secondItemLength)
        + (match - transpositions) / (match))
        / 3.0
}

function jaroWinkler(props: IDataComparision<string>) {
    // calculate the Jaro distance between the two strings
    let jaroDist = jaroDistance(props)

    // If the jaro Similarity is above a threshold
    if (jaroDist > 0.7) {
        const { firstItem, secondItem } = props

        // Find the length of common prefix
        let prefix = 0

        for (let i = 0; i < Math.min(firstItem.length, secondItem.length); i++) {

            // If the characters match
            if (firstItem[i] === secondItem[i])
                prefix++
            // Else break the loop on the first difference
            else
                break

        }

        // Maximum of 4 characters are allowed in prefix
        prefix = Math.min(4, prefix)

        // Calculate jaro winkler Similarity
        jaroDist += 0.1 * prefix * (1 - jaroDist)
    }
    return jaroDist.toFixed(6)
}