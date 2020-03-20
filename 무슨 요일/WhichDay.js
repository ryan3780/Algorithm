export function solution(a, b) {
  var answer = "";
  answer = new Date(2016, a - 1, b);
  console.log(answer);
  return answer
    .toString()
    .slice(0, 3)
    .toUpperCase();
}
