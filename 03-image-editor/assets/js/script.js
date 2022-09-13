const fileInput = document.querySelector(".file-input"),
previewImg = document.querySelector(".preview__img"),
resetBtn = document.querySelector(".reset-btn"),
chooseBtn = document.querySelector(".choose-btn"),
allFilterBtn = document.querySelectorAll(".filter__options button"),
// allRotateAndFlipBtn = document.querySelectorAll(".rotate__options button"),
filterLable = document.querySelector(".filter__info p"),
filterValue = document.querySelector(".filter__info p:nth-child(2)"),
filterSlider = document.querySelector(".filter__slider input")


let brightness="100", saturation="100", inversion="0", greyscale="0";

chooseBtn.addEventListener("click", () => fileInput.click());
fileInput.addEventListener("change", loadImage);
allFilterBtn.forEach(btn => btn.addEventListener("click",updateFilter));
filterSlider.addEventListener("input", updateSliderValue);
// allRotateAndFlipBtn.forEach(btn => btn.addEventListener("click",updateRotationAndFlip));
resetBtn.addEventListener("click", resetValues);


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
    } else if(e.target.id == "greyscale"){
        filterSlider.max = "100";
        filterSlider.value = greyscale
        filterValue.innerText =  `${greyscale}%`
    }

    applyFilter()
}

function applyFilter(){
    // 
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
    } else if(activeBtn.id == "greyscale"){
        greyscale = e.target.value;
    }
}


function resetValues(){
    // setting default values
    brightness = 100;
    saturation = 100;
    inversion = 0;
    greyscale = 0;

    allFilterBtn[0].click()
    applyFilter()
}


