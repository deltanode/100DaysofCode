const searchInput = document.getElementById("searchInput")
const employeeTable = document.getElementById("employeeTable")
const trArr = employeeTable.getElementsByTagName("tr")

searchInput.focus()
searchInput.addEventListener("keyup", searchRecord)

function searchRecord(e){
    let searchValue = e.target.value.toUpperCase()
    // for(let tr of trArr){
    for(let i=0; i<trArr.length; i++){
        let td = trArr[i].getElementsByTagName("td")
        console.log(td)
        // columnValue = td.innerContent
        // console.log(columnValue)
    } 
}
