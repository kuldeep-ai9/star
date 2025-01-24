const text = "Welcome to my portfolio!";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing-effect").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = typeWriter;
