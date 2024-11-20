const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const generateBtn = document.getElementById("generateBtn");
const gradientCode = document.getElementById("gradientCode");
const body = document.body;

function generateGradient() {
    const color1Value = color1.value;
    const color2Value = color2.value;

    const gradient = `linear-gradient(to right, ${color1Value}, ${color2Value})`;
    body.style.background = gradient;
    gradientCode.textContent = `Linear Gradient: ${gradient}`;
}

generateBtn.addEventListener("click", generateGradient);
