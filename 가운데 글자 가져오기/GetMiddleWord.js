export function solution(s) {
  var answer = "";
  if (s.length !== 0 && s.length < 101) {
    if (s.length === 1) {
      answer = s;
      return answer;
    }
    if (s.length % 2 === 1) {
      let middleWord = s.substring(s.length / 2, s.length / 2 + 0.5);
      //   console.log(middleWord);
      answer = middleWord;
      return answer;
    } else {
      let middleWord = s.substring(s.length / 2 - 1, s.length / 2 + 1);
      answer = middleWord;
      return answer;
    }
  }

  //   console.log(s.length);
  return answer;
}
