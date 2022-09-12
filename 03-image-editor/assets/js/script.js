const fileInput = document.querySelector(".file-input"),
chooseBtn = document.querySelector(".choose-btn"),
container = document.querySelector(".container"),
allfilterBtn = document.querySelectorAll(".filter__options button")
filterLable = document.querySelector(".filter__info p")
filterValue = document.querySelector(".filter__info p:nth-child(2)")
filterSlider = document.querySelector(".filter__slider input")


chooseBtn.addEventListener("click", () => fileInput.click())
allfilterBtn.forEach(btn => btn.addEventListener("click",applyFilter));
filterSlider.addEventListener("change", updateSliderValue)


fileInput.addEventListener("change",()=>{
    // activate the editor panel on Image load 
    container.classList.remove("disable")
    // getting user selected file
    let file = fileInput.files[0]
    console.log(file)
})

function applyFilter(e){
    // remove active button
    const activeBtn = document.querySelector(".active")
    activeBtn.classList.remove("active")
    // update the clicked button as active
    e.target.classList.add("active")
    // change the filter lable as per the clicked button
    filterLable.innerText = e.target.innerText
}


function updateSliderValue(e){
    // console.log(e.target.value)
    filterValue.innerText =  e.target.value
}






