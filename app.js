const heading = 'קוד לכיתוב אוטומטי';
let i = 0;

const typing = () => {
    if(i < heading.length) {
        document.querySelector('.heading').innerHTML += heading.charAt(i);
        i++;

        setTimeout(typing, 150);
    }
}

typing();














