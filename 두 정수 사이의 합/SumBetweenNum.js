export function solution(a, b) {
    var answer = 0;
    let sumNum = [];
    if (b > a) {
        for ( let i = a; i <= b; i++) {
            sumNum.push(i)
        }
    } else {
        for ( let i = b; i <= a; i++) {
            sumNum.push(i)
        }
    }
    answer = sumNum.reduce((a,b) => a+b);
    return answer;
}