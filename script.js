// script.js

// Fungsi Animasi Loading dengan Progress Bar
window.addEventListener("load", function() {
    let progress = 0;
    const loadingText = document.getElementById("loading-percentage");
    const progressBar = document.getElementById("progress");
    
    const loadingInterval = setInterval(() => {
        progress += 5;
        loadingText.textContent = `${progress}%`;
        progressBar.style.width = `${progress}%`;
        
        if (progress >= 100) {
            clearInterval(loadingInterval);
            document.getElementById("loading").style.opacity = "0";
            setTimeout(() => {
                document.getElementById("loading").style.display = "none";
            }, 300);
        }
    }, 100); 
});

// Toggle Hamburger Menu
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("navbar").classList.toggle("active");
    this.classList.toggle("active");
});
