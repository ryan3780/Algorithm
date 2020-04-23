export function solution(s) {
    var answer = '';
    const low =[]
    const upper =[]
    for(let str in s){
        if(s[str] === s[str].toUpperCase()){
            upper.push(s[str])
        }else{
            low.push(s[str])    
        }
    }
    low.sort().reverse()
    upper.sort().reverse()
    const result = low.concat(upper)
    answer = result.join('')
    return answer;
}

// 이해력과 가장 깔끔한 남의 코드

function solution(s) {
  return s
    .split("")
    .sort()
    .reverse()
    .join("");
}
