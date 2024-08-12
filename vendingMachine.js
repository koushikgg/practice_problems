function getChange(priceOfItem, moneyGivenToPurchase) {
    let moneyGiven = Math.round(moneyGivenToPurchase*100)
    let price= Math.round(priceOfItem*100)
    remainingMoney= (moneyGiven-price)
    output=[0,0,0,0,0,0]
    denominator=[1, 5, 10, 25, 50, 100]
    for (let i=denominator.length-1;i>=0;i--){
        if ((remainingMoney/denominator[i])>0){
            output[i]=Math.floor(remainingMoney/denominator[i]);
            remainingMoney=remainingMoney%denominator[i]
        }
    }
    return output
}

let prize=2.25
let givenmoney= 5

console.log(getChange(prize,givenmoney));

