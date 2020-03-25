export function solution(s) {
  let pCnt = 0;
  let sCnt = 0;

  let stringArr = Array.from(s.toUpperCase());
  stringArr.filter(ele => {
    if (ele === "P") {
      pCnt++;
    } else if (ele === "Y") {
      sCnt++;
    }
  });
  if (pCnt === sCnt) {
    return true;
  } else {
    return false;
  }
  //  s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
}
