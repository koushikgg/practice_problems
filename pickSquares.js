function pickSquares(arr){
    const output = arr.filter(item=>{
        let squareNumber = Math.sqrt(item)
        return squareNumber===Math.floor(squareNumber)
    })

    return output.sort((a,b)=>a-b)
}

const array = [169,145,225,211,121,183,100,111,196,214,275]
console.log(pickSquares(array));