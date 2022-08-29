const searchInput = document.getElementById("searchInput")
const filter = document.getElementById("filter")
const employeeTable = document.getElementById("employeeTable")
const trArr = employeeTable.getElementsByTagName("tr")

searchInput.focus()
searchInput.addEventListener("keyup", searchRecord)

function searchRecord(e){
    let searchValue = e.target.value.toUpperCase()
    let columnNumber = parseInt(filter.value)
    for(let i=1; i<trArr.length; i++){
        let td = trArr[i].getElementsByTagName("td")
        columnValue = td[columnNumber].textContent.toUpperCase()
        
        if(columnValue.indexOf(searchValue) > -1)
        {
            // trArr[i].style.display = ""
            trArr[i].classList.remove("hide")
        }else{
            // trArr[i].style.display = "none"
            trArr[i].classList.add("hide")
        }
    } 
}
