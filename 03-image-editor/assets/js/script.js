const fileInput = document.querySelector(".file-input"),
previewImg = document.querySelector(".preview__img"),
resetBtn = document.querySelector(".reset-btn"),
chooseBtn = document.querySelector(".choose-btn"),
allFilterBtn = document.querySelectorAll(".filter__options button"),
allRotateAndFlipBtn = document.querySelectorAll(".rotate__options button"),
filterLable = document.querySelector(".filter__info p"),
filterValue = document.querySelector(".filter__info p:nth-child(2)"),
filterSlider = document.querySelector(".filter__slider input"),
saveBtn = document.querySelector(".save-btn");


let brightness="100", saturation="100", inversion="0", grayscale="0";
let rotate = 0, flipHorizontal = 1, flipVertical = 1;


chooseBtn.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", loadImage);
allFilterBtn.forEach(btn => btn.addEventListener("click",updateFilter));
filterSlider.addEventListener("input", updateSliderValue);
allRotateAndFlipBtn.forEach(btn => btn.addEventListener("click",updateRotationAndFlip));
resetBtn.addEventListener("click", resetValues);
saveBtn.addEventListener("click", saveImage);


function loadImage(){
    // getting user selected file
    let file = fileInput.files[0]
    if(file){
        const fileUrl = URL.createObjectURL(file)
        previewImg.src = fileUrl
        previewImg.addEventListener("load", ()=>{
            // reset default value
            resetBtn.click()
            // activate the editor panel on Image load 
            const container = document.querySelector(".container")
            container.classList.remove("disable")
        })
    }
}


function updateFilter(e){
    // remove active button
    const activeBtn = document.querySelector(".active");
    activeBtn.classList.remove("active");
    // update the clicked button as active
    e.target.classList.add("active");
    // change the filter lable as per the clicked button
    filterLable.innerText = e.target.innerText;

    // update slide value on different button selection
    if(e.target.id == "brightness"){
        filterSlider.max = "200";
        filterSlider.value = brightness;
        filterValue.innerText =  `${brightness}%`;
    } else if(e.target.id == "saturation"){
        filterSlider.max = "200";
        filterSlider.value = saturation;
        filterValue.innerText =  `${saturation}%`
    } else if(e.target.id == "inversion"){
        filterSlider.max = "100";
        filterSlider.value = inversion;
        filterValue.innerText =  `${inversion}%`
    } else if(e.target.id == "grayscale"){
        filterSlider.max = "100";
        filterSlider.value = grayscale
        filterValue.innerText =  `${grayscale}%`
    }

}


function updateSliderValue(e){
    // Update display value for each slide input
    filterValue.innerText =  `${e.target.value}%`
    // Update filter value when slider input changes for the selected button
    const activeBtn = document.querySelector(".filter .active")
    if(activeBtn.id == "brightness"){
        brightness = e.target.value;
    } else if(activeBtn.id == "saturation"){
        saturation = e.target.value;
    } else if(activeBtn.id == "inversion"){
        inversion = e.target.value;
    } else if(activeBtn.id == "grayscale"){
        grayscale = e.target.value;
    }
    applyFilter()
}

function updateRotationAndFlip(e){
    // console.log(e.target)
    if(e.target.id == "rotate-right"){
        rotate += 90;
    } else if(e.target.id == "rotate-left"){
        rotate -= 90;
    } else if(e.target.id == "flip-horizontal"){
        flipHorizontal = flipHorizontal === 1 ? -1 : 1;
    } else{
        flipVertical = flipVertical === 1 ? -1 : 1;
    }
    applyFilter();
}


function applyFilter(){
    previewImg.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
    previewImg.style.transform = `rotate(${rotate}deg) scale(${flipVertical}, ${flipHorizontal})`;
}


function resetValues(){
    // reset default values
    brightness = 100;
    saturation = 100;
    inversion = 0;
    grayscale = 0;
    rotate = 0;
    flipHorizontal = 1;
    flipVertical = 1;
    // apply above default values
    allFilterBtn[0].click();
    applyFilter();
}


function saveImage(){
    // create a canvas
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = previewImg.naturalWidth;
    canvas.height = previewImg.naturalHeight;

    //  apply filter, rotate & flip
    ctx.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
    ctx.scale(flipHorizontal, flipVertical);
    if(rotate !== 0){
        ctx.rotate(rotate * Math.PI / 180);
    }
    ctx.transform(canvas.width/2, canvas.height/2);

    // create image 
    ctx.drawImage(previewImg, -canvas.width/2, canvas.height/2, canvas.width, canvas.height);

    // create a anchor tag having the link of the newly created image
    const link = document.createElement("a")
    link.download = "new-image.jpg"
    link.href = canvas.toDataURL();

    // download image
    link.click();
}