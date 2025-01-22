// lcs.js
function lcs(args) {
    if (args.length === 0) return "";
    let s = args[0];
    for (let i = s.length; i > 0; i--) {
        for (let j = 0; j <= s.length - i; j++) {
            let sub = s.substring(j, j + i);
            if (args.every(str => str.includes(sub))) return sub;
        }
    }
    return "";
}

let args = process.argv.slice(2);
console.log(lcs(args));
