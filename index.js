const container = document.getElementById('img-container');
let a = 0;

for (let i = 1; i <= 193; i++) {
    a+= 0.015;

    if (i <= 16) {
        container.innerHTML +=
        `<div class='panels' style='animation-delay: ${a + 4 + (Math.random()*4)}s;'>
            <img src="champloo.jpg" style='object-position: calc(${(i-1) * -120}px) top;'>
        </div>`
    } else if (i >= 17 && i <= 32) { 
        container.innerHTML +=
        `<div class='panels' style='animation-delay: ${a + 4 + (Math.random()*4)}s;'>
            <img src="champloo.jpg" style='object-position: calc(${(i-17) * -120}px) -78px;'>
        </div>`
    } else if (i >= 33 && i <= 48) { 
        container.innerHTML +=
        `<div class='panels' style='animation-delay: ${a + 4 + (Math.random()*4)}s;'>
            <img src="champloo.jpg" style='object-position: calc(${(i-33) * -120}px) -156px;'>
        </div>`
    } else if (i >= 49 && i <= 64) { 
        container.innerHTML +=
        `<div class='panels' style='animation-delay: ${a + 4 + (Math.random()*4)}s;'>
            <img src="champloo.jpg" style='object-position: calc(${(i-49) * -120}px) -234px;'>
        </div>`
    } else if (i >= 65 && i <= 80) { 
        container.innerHTML +=
        `<div class='panels' style='animation-delay: ${a + 4 + (Math.random()*4)}s;'>
            <img src="champloo.jpg" style='object-position: calc(${(i-65) * -120}px) -312px;'>
        </div>`
    } else if (i >= 81 && i <= 96) { 
        container.innerHTML +=
        `<div class='panels' style='animation-delay: ${a + 4 + (Math.random()*4)}s;'>
            <img src="champloo.jpg" style='object-position: calc(${(i-81) * -120}px) -390px;'>
        </div>`
    } else if (i >= 97 && i <= 112) { 
        container.innerHTML +=
        `<div class='panels' style='animation-delay: ${a + 4 + (Math.random()*4)}s;'>
            <img src="champloo.jpg" style='object-position: calc(${(i-97) * -120}px) -469px;'>
        </div>`
    } else if (i >= 113 && i <= 128) { 
        container.innerHTML +=
        `<div class='panels' style='animation-delay: ${a + 4 + (Math.random()*4)}s;'>
            <img src="champloo.jpg" style='object-position: calc(${(i-113) * -120}px) -546px;'>
        </div>`
    } else if (i >= 129 && i <= 144) { 
        container.innerHTML +=
        `<div class='panels' style='animation-delay: ${a + 4 + (Math.random()*4)}s;'>
            <img src="champloo.jpg" style='object-position: calc(${(i-129) * -120}px) -624px;'>
        </div>`
    } else if (i >= 145 && i <= 160) { 
        container.innerHTML +=
        `<div class='panels' style='animation-delay: ${a + 4 + (Math.random()*4)}s;'>
            <img src="champloo.jpg" style='object-position: calc(${(i-145) * -120}px) -702px;'>
        </div>`
    } else if (i >= 161 && i <= 176) { 
        container.innerHTML +=
        `<div class='panels' style='animation-delay: ${a + 4 + (Math.random()*4)}s;'>
            <img src="champloo.jpg" style='object-position: calc(${(i-161) * -120}px) -780px;'>
        </div>`
    } else if (i >= 177 && i <= 192) { 
        container.innerHTML +=
        `<div class='panels' style='animation-delay: ${a + 4 + (Math.random()*4)}s;'>
            <img src="champloo.jpg" style='object-position: calc(${(i-177) * -120}px) -858px;'>
        </div>`
    } 
}
