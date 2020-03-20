export function solution(arr, divisor) {
  var answer = [];

  arr.map(ele => {
    if (ele % divisor === 0) {
      answer.push(ele);
    }
  });

  return answer.length ? answer.sort((a, b) => a - b) : [-1];

  //     for(let ele of arr){
  //         if(ele % divisor === 0){
  //             answer.push(ele)
  //         }
  //     }

  //     let result = answer.sort((a, b) => a - b)
  //     if(answer.length === 0){
  //         return answer = [-1]
  //     }
  //     return result;
}
