function loggestCommonPrefix(arr) {
    common = arr[0]
    for (let i = 0; i < arr.length; i++) {
        countCommon=''
        for (let j = 0; j <Math.min(common.length,arr[i].length); j++) {
            if (common[j] === arr[i][j]) {
                countCommon += arr[i][j]
            } else {
                break
            }
        }
        common = countCommon
    }
    return common
}

const Input = ['intelliBlue', 'intelliFeeder', 'intelliAuth']
console.log(loggestCommonPrefix(Input));