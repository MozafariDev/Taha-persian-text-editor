let letters = () => {
  let input = document.getElementById("input");
  let output = document.getElementById("outtext");
  let val = input.value.trim();
  let len = val.length;
  output.innerHTML = len;
  if (val === "") {
    output.innerTEXT = `چیزی ننوشتی!`;
  }
};
let words = () => {
  let input = document.getElementById("input");
  let output = document.getElementById("outtext");
  let val = input.value.trim();
  let word = val.split(/\s+/);
  let len = word.length;
  output.innerHTML = len;
  if (val === "") {
    output.innerHTML = `چیزی ننوشتی!`;
  }
};

let ReverseWord = () => {
  let input = document.getElementById("input");
  let output = document.getElementById("outtext");
  let val = input.value.trim();
  let word = val.split(/\s+/);
  let res = word.reverse().join(" ");
  output.innerHTML = res;
  if (val === "") {
    output.innerHTML = `چیزی ننوشتی!`;
  }
};

let reset = () => {
  let input = document.getElementById("input");
  let output = document.getElementById("outtext");
  input.value = "";
  output.innerText = "";
};

let ReverseLetter = () => {
  let input = document.getElementById("input");
  let output = document.getElementById("outtext");
  let val = input.value.trim();
  let word = val.split("");
  let res = word.reverse().join("");
  output.innerHTML = res;
  if (val === "") {
    output.innerHTML = `چیزی ننوشتی!`;
  }
};

let copy = () => {
  let output = document.getElementById("outtext");
  let val = output.innerText;
  navigator.clipboard.writeText(val);
  alert("کپی انجام شد!");
};
const btn = document.getElementById("darkModeToggle");
if (localStorage.theme === "dark") {
  document.body.classList.add("dark");
  btn.innerText = localStorage.theme === "dark" ? "🌞لایت مود" : "🌙دارک مود";
}
btn.onclick = () => {
  document.body.classList.toggle("dark");
  localStorage.theme = document.body.classList.contains("dark")
    ? "dark"
    : "light";
  btn.innerText = localStorage.theme === "dark" ? "🌞لایت مود" : "🌙دارک مود";
};
