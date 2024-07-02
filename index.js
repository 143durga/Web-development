document.getElementById("colorButton").addEventListener("click", function () {
    const color1 = Randcolorgen();
    const color2 = Randcolorgen();
    document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    document.getElementById('colorcheck').textContent = `Background gradient: ${color1} to ${color2}`;
});

function Randcolorgen() {
    const letter = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)];
    }
    return color;
}
