function pyramid(arr1) {
    let length = arr1.length
    arr1.sort((a, b) => a - b)
    for (let i = 1; i <= length / 2; i++) {
        temp = arr1[i]
        index = length - i+1
        arr1.splice(index,0,temp)
        arr1.splice(i,1)
    }
    return arr1
}


const arry = [1, 4, 3, 6, 8, 7, 9, 2, 5, 0, 12, 23, -1]
console.log(pyramid(arry));