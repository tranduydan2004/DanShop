// Hàm Load file HTML vào div
function loadHTML(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = data;
            }
        });
}

// Load header và footer
loadHTML("header", "Components/header.html");
loadHTML("footer", "Components/footer.html");

console.log("Website đã tải xong!");