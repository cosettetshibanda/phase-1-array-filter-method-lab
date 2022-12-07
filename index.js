// Code your solution here
// function findMatching(drivers, string) {
//     let filtered = drivers.filter(object => object.name === string) 
//     if(filtered === undefined){
//         return []
//     }
//     else{
//         return string
//     }

// }
// function fuzzyMatch(drivers, string){
//     let firstLetter = drivers.filter()
// }
// function matchName(drivers, string){
//     let nameOfElement = drivers.filter(object => object.hometown === string)
//     if (nameOfElement === string){
//         return nameOfElement.name
//     }
// }
function findMatching(drivers, attribute) {
    return drivers.filter(function (driver) { return driver.toLowerCase() === attribute.toLowerCase() })
  }
  
  function fuzzyMatch(drivers, attribute) {
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase() })
  }
  
  function matchName(drivers, argument) {
    return drivers.filter(function (driver) { return driver.name === argument })
  }
