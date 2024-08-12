function timeSlotCalculator(arr) {
    const output = []
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            if (arr[i][1] < 24) {
                output.push([arr[i][1], 24])
            }
            continue
        }
        if (i === 0) {
            if (arr[i][0] !== 0) {
                output.push([0, arr[i][0]])
            }
        }
        nextTime = arr[i + 1][0]
        if (arr[i][1] < nextTime) {
            output.push([arr[i][1], nextTime])
        }
    }
    return output
}

const array = [[10, 12], [14, 15], [16, 23]]

console.log(timeSlotCalculator(array));