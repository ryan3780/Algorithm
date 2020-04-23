export function solution(s) {
    let answer = true
    const reg =/[a-zA-Z]/i
    if(s.length === 4 || s.length === 6){
        if(s.match(reg)){
            return answer = false
        }else{
            return answer = true
        }
    }else{
        return answer = false
    }
}