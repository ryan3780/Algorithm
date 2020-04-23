export function solution(seoul) {
    var answer = '';
    const findKim =(ele)=> ele ==="Kim";
    const kimIdx = seoul.findIndex(findKim)
    answer = `김서방은 ${kimIdx}에 있다`
    return answer;
}

//findIndex라는 함수를 써보고 싶었음

