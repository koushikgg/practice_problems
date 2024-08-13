function permutationsOfString(str) {
    let output = [];

    function permute(prefix, remaining) {
        if (remaining.length === 0) {
            output.push(prefix);
        } else {
            for (let i = 0; i < remaining.length; i++) {
                permute(prefix + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
            }
        }
    }

    permute("", str);
    return output;
}

const input = 'XYZ'
console.log((permutationsOfString(input)));