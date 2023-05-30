//definición del objeto elementos que va a contener los ids y clases de nuestros elementos
const elements = {
    Body: "body",
    TwitterButton: ".tw-btn",
    FacebookButton: ".fb-btn",
    LinkedinButton: ".li-btn",
    DarkWebBtn: "#dark-web-btn",
    Header: ".header",
    Footer: ".footer",
    MapsIcon: "#maps-icon",
    DirButton: "#dir-btn",
    TwColor: "#tw-color",
    FbColor: "#fb-color",
    LiColor: "#li-color",
    SignUpButton: "#sign-up-btn",
    RegisterButton: "#register-btn",
}

//definición de constantes que referencian elementos html
const body = document.querySelector(elements.Body);
const twitterButton = document.querySelectorAll(elements.TwitterButton);
const facebookButton = document.querySelectorAll(elements.FacebookButton);
const linkedInButton = document.querySelectorAll(elements.LinkedinButton);
const darkModeButton = document.querySelector(elements.DarkWebBtn);
const header = document.querySelector(elements.Header);
const footer = document.querySelector(elements.Footer);
const mapsIcon = document.querySelector(elements.MapsIcon);
const dirButton = document.querySelector(elements.DirButton);
const twColor = document.querySelector(elements.TwColor);
const fbColor = document.querySelector(elements.FbColor);
const liColor = document.querySelector(elements.LiColor);
const brightMap = `\n                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>\n                    `;
const darkMap = `\n        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path>\n        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>\n    `;
const brightnessMode = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">\n                                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"></path>\n                            </svg>`;
const darkMode = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb-fill" viewBox="0 0 16 16">\n                                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z"/>\n                            </svg>`;

//armamos una lista con los elementos que posteriormente vamos a modificar con el modo oscuro o el modo brillante
const elementosEnModoOscuro = [body, header, footer, twColor, fbColor, liColor];
const textos = document.querySelectorAll('p, h1, button, h5');

//comportamiento de los elementos
for(let boton of twitterButton) {
    boton.addEventListener('click', () => {
        window.location.href = 'https://twitter.com/VirbelaHQ';
    })
}

for(let boton of facebookButton) {
    boton.addEventListener('click', () => {
        window.location.href = 'https://www.facebook.com/Virbela/';
    })
}

for(let boton of linkedInButton) {
    boton.addEventListener('click', () => {
        window.location.href = 'https://www.linkedin.com/company/virbela/';
    })
}

darkModeButton.addEventListener('click', () => {
    if(darkModeButton.innerHTML == brightnessMode) {
        darkModeButton.innerHTML = darkMode;
        mapsIcon.innerHTML = darkMap;
        for(let text of textos) { text.classList.toggle('dark') }
        for(let elem of elementosEnModoOscuro) { elem.classList.toggle('dark') }
    }
    else {
        darkModeButton.innerHTML = brightnessMode;
        mapsIcon.innerHTML = brightMap;
        for(let text of textos) { text.classList.toggle('dark') }
        for(let elem of elementosEnModoOscuro) { elem.classList.toggle('dark') }      
    }
})

dirButton.addEventListener('click', () => {
    window.location.href = 'https://www.google.com.ar/maps/dir/-42.23962,-64.3286873/Pen%C3%ADnsula+Vald%C3%A9s,+Chubut/@-38.8879147,-65.1405108,7.13z/data=!4m9!4m8!1m0!1m5!1m1!1s0xbe02d682cb3936b1:0xc9ba8f034ab2e628!2m2!1d-63.8790145!2d-42.5285871!3e2';
})

//definición de constantes que referencian elementos html
const signUpButton = document.querySelector(elements.SignUpButton);
const registerButton = document.querySelector(elements.RegisterButton);

//comportamiento de los elementos
signUpButton.addEventListener('click', () => {
    window.location.href = './html/register.html';
})

registerButton.addEventListener('click', () => {
    window.location.href = './html/register.html';
})