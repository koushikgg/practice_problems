function nDigitNumberOfSum(number,sum){
    output = []
    function findCombination(n,sum,combinations){
        if (n===0 ){
            if(sum===0){
                if (combinations[0]!==0){
                    output.push(combinations.join(''))
                }
            }
            return
        }
        for (let i = 0;i<=9;i++){
            if (i>sum) break;
            findCombination(n-1,sum-i,[...combinations,i])
        }
    }
    findCombination(number,sum,[])
    return output
}
const number= 3
const sum = 6
console.log(nDigitNumberOfSum(number,sum).join(' '));