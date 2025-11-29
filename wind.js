/** Wind Text Generator **/
const text = "Experience life as much as possible...";
const container = document.querySelector(".wind-lines");
// 每个字母一个独立颜色（你可以自由换）
const colors = [
  "#FF9AA2",  // s
  "#FFB7B2",  // t
  "#FFDAC1",  // a
  "#E2F0CB",  // y
  "#B5EAD7",  // space
  "#C7CEEA",  // a
  "#A3BFFA",  // l
  "#C084FC",  // i
  "#F472B6",  // v
  "#FDE68A"   // e
];

const letters = text.split("");

letters.forEach((char, i) => {
  const x = i * 40 + 40;

  // 竖线
  const line = document.createElement("div");
  line.className = "line";
  line.style.left = `${x}px`;
  container.appendChild(line);

  // 字母
  const letter = document.createElement("div");
  letter.className = "letter";
  letter.style.left = `${x - 3}px`;

  // 随机轻风动画
  const duration = 3.2 + Math.random() * 3;
  const delay = Math.random() * 2;

// 随机动画（每个字母的上下浮动速度稍有不同）
const swayDuration = 3 + Math.random() * 3;   // 3–6 秒
const swayDelay = Math.random() * 2;          // 0–2 秒

letter.style.animationDuration = `${swayDuration}s`;
letter.style.animationDelay = `${swayDelay}s`;


  letter.innerText = char;
  container.appendChild(letter);
});
