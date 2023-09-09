function solution(str){
    let a = str.split('');
    let res = [], length = a.length;
    for (let i = 0; i < length; i++) {
        if (i % 2 !== 0) {          
            res.push(a[i - 1] + a[i]);
        }
    }

    if (length % 2 !== 0) {
        res.push(a[length - 1] + "_");
    }
    return res
 }

 console.log("abcdefg");
 console.log(solution("abcdefg"));
 console.log("abcdef");
 console.log(solution("abcdef"));
 console.log("");
 console.log(solution(""));
 