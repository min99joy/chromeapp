let img;
const images = new Array();

const loadImgInterval = setInterval(loadImage, 5000);
// function loadImage() {
//     let bCheckEnabled = true;
//     let bFinishCheck = false;
//     let i = 0;
//     if(bFinishCheck){
//         clearInterval(loadImgInterval);
//         console.log('finish loading img')
//         return;
//     };
//     if (bCheckEnabled) {
//         bCheckEnabled = false;

//         img = new Image();
//         img.src = 'img/'+i+'.jpeg';
//         img.addEventListener('load', fExist);
//         img.addEventListener('error', fDoesntExist);
//     };
// };
function loadImage() {
    let i = 0;
    img = new Image();
    img.addEventListener('load', imgLoadHandler);
    img.addEventListener('error', imgLoadHandler);
    img.src = 'img/'+i+'.jpeg';
    function imgLoadHandler(event){
        if (event.type === 'load') {
            images.push(img);
            i++
        } else if (event.type === 'error'){
            clearInterval(loadImgInterval);
            console.log('finished loading event')
            return;
        }
    }
};

const chosenImage = images[Math.floor(Math.random() * images.length)];