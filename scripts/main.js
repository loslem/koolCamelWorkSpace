function navscroll(target) {
    const elem = document.getElementById(target);//importiere Ziel Element
    const tar = elem.getBoundingClientRect();//Speicher position relativ zum viewport
    //Scrolle fester position
    window.scrollTo(
    {//Funktion nimmt objekt mit Zielposition und Verhalten zbs weiches scrolling/Instant scrolling.
        top: (tar.top + window.pageYOffset) - document.getElementById("header").clientHeight,//Höhe des Elements mit der Id header
        behavior: 'smooth'
    }
    )
}

function toggledark() {
    document.body.classList.toggle('light');//toggle light klasse für Body
}