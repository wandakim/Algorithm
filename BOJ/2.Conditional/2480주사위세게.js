// 문제
// 1에서부터 6까지의 눈을 가진 3개의 주사위를 던져서 다음과 같은 규칙에 따라 상금을 받는 게임이 있다.

// 같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다.
// 같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다.
// 모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.
// 예를 들어, 3개의 눈 3, 3, 6이 주어지면 상금은 1,000+3×100으로 계산되어 1,300원을 받게 된다. 또 3개의 눈이 2, 2, 2로 주어지면 10,000+2×1,000 으로 계산되어 12,000원을 받게 된다. 3개의 눈이 6, 2, 5로 주어지면 그중 가장 큰 값이 6이므로 6×100으로 계산되어 600원을 상금으로 받게 된다.

// 3개 주사위의 나온 눈이 주어질 때, 상금을 계산하는 프로그램을 작성 하시오.

// 입력
// 첫째 줄에 3개의 눈이 빈칸을 사이에 두고 각각 주어진다.

// 출력
// 첫째 줄에 게임의 상금을 출력 한다.
{
  const input = `6 2 5`.split(/\s/).map(Number);
  const set = new Set(input);
  const newArr = [...set];
  if (set.size === 1) {
    console.log(10000 + newArr[0] * 1000);
  } else if (set.size === 2) {
    for (i = 0; i < newArr.length; i++) {
      input.splice(input.indexOf(newArr[i]), 1);
    }
    const num = input[0];
    console.log(1000 + num * 100);
  } else {
    console.log(Math.max(...input) * 100);
  }
}
// 사실 set을 만들지 않아도 되긴 하고, 경우의 수가 적기 때문에 배열 sort 후 비교하며 if if .. 해도 된다.
// 근데 뭔가 set 을 활용해서 풀어보고 싶었고, 주사위를 더 여러번 던지더라도 활용할 수 있는 코드로 해보고 싶었다.
// 근데 그러다가 지쳤다.

// set으로 수정함. forEach사용
{
  const fs = require('fs');
  const input = `${fs.readFileSync('dev/stdin')}`
    .trim()
    .split(/\s/)
    .map(Number);
  const set = new Set(input);
  if (set.size === 1) {
    console.log(10000 + input[0] * 1000);
  } else if (set.size === 2) {
    set.forEach((val) => {
      input.splice(input.indexOf(val), 1);
    });
    const num = input[0];
    console.log(1000 + num * 100);
  } else {
    console.log(Math.max(...input) * 100);
  }
}
