function increaseDigitsSum(number){
    output = []
    function findCombination(start,sum,combinations){
        if (sum===0){
            output.push(combinations.join(''))
        }
        for (let i = start;i<=9;i++){
            if (i>sum) break;
            findCombination(i,sum-i,[...combinations,i])
        }
    }
    findCombination(1,number,[])
    return output
}
let number= 10
console.log(increaseDigitsSum(number).join('\n'));
