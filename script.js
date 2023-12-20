// script.js
document.addEventListener("DOMContentLoaded", function () {
    var enlaces = document.querySelectorAll('a');
    enlaces.forEach(function(enlace) {
        enlace.style.textDecoration = 'none';
    });

    function descargarCV() {
        var enlaceCV = document.createElement('a');
        enlaceCV.href = '/CV/My_CV.pdf';
        enlaceCV.download = 'CV.pdf';
        document.body.appendChild(enlaceCV);
        enlaceCV.click();
        document.body.removeChild(enlaceCV);
    }
});

