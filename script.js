let letters = () => {
  let input = document.getElementById("input");
  let output = document.getElementById("outtext");
  let val = input.value.trim();
  let len = val.length;
  output.innerHTML = `تعداد حروف: ${len}`;
  if (val === "") {
    output.innerHTML = `چیزی ننوشتی!`;
  }
};
let words = () => {
  let input = document.getElementById("input");
  let output = document.getElementById("outtext");
  let val = input.value.trim();
  let word = val.split(/\s+/);
  let len = word.length;
  output.innerHTML = `تعداد کلمات: ${len}`;
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
  output.innerHTML = `نتیجه: ${res}`;
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
  output.innerHTML = `نتیجه: ${res}`;
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
