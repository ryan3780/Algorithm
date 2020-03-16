export function solution(array, commands) {
  var answer = [];
  const n_th = (input, start, end, index) => {
    let subInput = input.slice(start - 1, end);
    subInput.sort((a, b) => a - b);
    return subInput[index - 1];
  };
  commands.forEach(ele => {
    answer.push(n_th(array, ele[0], ele[1], ele[2]));
  });

  return answer;
}
