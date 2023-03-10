/* 
바구니는 인덱싱이 되어져 있음
바구니 N개, 첫번째 바구니를 mid로 땡겨옴 M은 총 회전 수 
ijk로 M 번 회전시키게 된다. 
i부터 j까지 k기준으로. 
*/

const [[N, M], ...protocolArr] = `${require('fs').readFileSync('dev/stdin')}`
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));
// 1~N까지 바구니 담은 배열 만들고
const basketArr = Array.from({ length: N }, (_, i) => i + 1);
// 차례로 프로토콜을 받아와서
protocolArr.forEach((protocol) => {
  const [i, j, k] = protocol;
  // 원본 복사 후 splice()로 잘라와서
  const handlingBaskets = [...basketArr].splice(i - 1, j - i + 1);
  // 회전 프로세스
  // 1부터 5까지 3기준으로 .
  // 12345 바구니 있을 때, 45123이 되어야 하는 것. 기준점부터 잘라서 앞에 넣어주면 된다.concat으로 잇자.
  const afterBaskets = handlingBaskets.splice(k - i);
  const handledBaskets = afterBaskets.concat(handlingBaskets);
  // 원본에서 회전 프로세스 부분을 넣어준다. 이건 splice로 넣어주도록 한다.
  basketArr.splice(i - 1, j - i + 1, ...handledBaskets);
});
console.log(basketArr.join(' '));
//해서 다시 넣어주기

{
  const [[N, M], ...protocolArr] = `${require('fs').readFileSync('dev/stdin')}`
    .trim()
    .split('\n')
    .map((v) => v.split(' ').map(Number));
  const basketArr = Array.from({ length: N }, (_, i) => i + 1);
  protocolArr.forEach((protocol) => {
    const [i, j, k] = protocol;
    const handlingBaskets = [...basketArr].splice(i - 1, j - i + 1);
    const afterBaskets = handlingBaskets.splice(k - i);
    const handledBaskets = afterBaskets.concat(handlingBaskets);
    basketArr.splice(i - 1, j - i + 1, ...handledBaskets);
  });
  console.log(basketArr.join(' '));
} // 잘 푼 것 같음.

{
  // 회전할 바구니들을 slice로  받아오고 바구니를 기준에 따라 바꿔 합치는 부분을 spread로 해주어 가독성을 높일 수 있다.
  const [[N, M], ...protocolArr] = `10 5
1 6 4
3 9 8
2 10 5
1 3 3
2 6 2`
    .trim()
    .split('\n')
    .map((v) => v.trim().split(' ').map(Number));
  const basketArr = Array.from({ length: N }, (_, i) => i + 1); // 1 ~ N 배열만들기
  protocolArr.forEach((protocol) => {
    const [i, j, k] = protocol;
    const handlingBaskets = basketArr.slice(i - 1, j);
    const afterBaskets = handlingBaskets.splice(k - i);
    const handledBaskets = [...afterBaskets, ...handlingBaskets];
    basketArr.splice(i - 1, j - i + 1, ...handledBaskets);
  });
  console.log(basketArr.join(' '));
}

{
  const [[N, M], ...protocolArr] = `10 5
1 6 4
3 9 8
2 10 5
1 3 3
2 6 2`
    .trim()
    .split('\n')
    .map((v) => v.trim().split(' ').map(Number));
  const basketArr = Array.from({ length: N }, (_, i) => i + 1); // 1 ~ N 배열만들기
  protocolArr.forEach((protocol) => {
    const [i, j, k] = protocol;
    const beforeBaskets = basketArr.slice(i - 1, k - 1);
    const afterBaskets = basketArr.slice(k - 1, j);
    const handledBaskets = [...afterBaskets, ...beforeBaskets];
    basketArr.splice(i - 1, j - i + 1, ...handledBaskets);
  });
  console.log(basketArr.join(' '));
}
