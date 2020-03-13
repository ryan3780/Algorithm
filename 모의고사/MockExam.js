export function solution(answers) {
  const f_Student = [1, 2, 3, 4, 5];
  const s_Student = [2, 1, 2, 3, 2, 4, 2, 5];
  const t_Student = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let count = [0, 0, 0];

  answers.forEach((ele, idx) => {
    if (f_Student[idx % f_Student.length] === ele) {
      count[0]++;
    }
    if (s_Student[idx % s_Student.length] === ele) {
      count[1]++;
    }
    if (t_Student[idx % t_Student.length] === ele) {
      count[2]++;
    }
  });
  let winner = Math.max(...count);
  let answer = [];
  count.forEach((ele, idx) => {
    if (count[idx] === winner) {
      answer.push(idx + 1);
    }
  });
  return answer;
}
