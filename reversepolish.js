function reversePolish(str) {
    let stack = [];

    let listOFNum = str.split(' ');

    for (let value of listOFNum) {
        if (!isNaN(value)) {
            stack.push(parseFloat(value));
        } else {
            let secondNum = stack.pop();
            let  firstNum= stack.pop();
            let result;

            switch (value) {
                case '+':
                    result = firstNum + secondNum;
                    break;
                case '-':
                    result = firstNum - secondNum;
                    break;
                case '*':
                    result = firstNum * secondNum;
                    break;
                case '/':
                    result = firstNum / secondNum;
                    break;
                default:
                    throw new Error(`Invalid operator: ${value}`);
            }

            stack.push(result);
        }
    }

    return stack.pop();
}
console.log(reversePolish("3 4 + 5 *")); 
