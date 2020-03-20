export function solution(arr) {
  // filter 사용하기
  if (!Array.isArray(arr)) {
    return "This is not Array";
  } else {
    const result = arr.filter((ele, idx) => ele !== arr[idx + 1]);
    // console.log(result);
    return result;
  }
  // for of 사용하기
  // var answer = [];
  // if(!Array.isArray(arr)){
  //     return "This is not Array!"
  // }else{
  //     let notSameNum;
  //     const result = []
  //     for(let ele of arr){
  //        if(ele !== notSameNum){
  //            notSameNum = ele
  //            result.push(notSameNum)
  //        }
  //    }
  //     answer = result
  //     return answer
  // }
}
