let img;
const images = new Array();
let i = 0;
let bCheckEnabled = true;
let bFinishCheck = false;

function loadImgHandler() {
    const loadImgInterval = setInterval(loadImage, 1);
    function loadImage() {
        if(bFinishCheck){
            clearInterval(loadImgInterval);
            console.log('finish loading img')
            return;
        };
        if (bCheckEnabled) {
            bCheckEnabled = false;
    
            img = new Image();
            img.addEventListener('load', fExist);
            img.addEventListener('error', fDoesntExist);
            img.src = 'img/'+i+'.jpeg';
            console.log(i);
        };
    };
}
function fExist(){
    images.push(img);
    i++
    bCheckEnabled = true;
};
function fDoesntExist(){
    bFinishCheck = true;
};
loadImgHandler();
function rest() {
    console.log(images);

const chosenImage = images[Math.floor(Math.random() * images.length)];
console.log(chosenImage);
console.log(images[Math.floor(Math.random() * images.length)])
const bgImage = document.createElement('img');
bgImage.src = chosenImage.src;
}
