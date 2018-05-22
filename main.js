const articleREf = document .querySelector("#congressional-rep")
console. log(articleRef)

let paragraphElement = document.createElement("p")
let paragraphTextNode = document.createTextNode("Made up mission statement")
paragraphElement.appendChild(paragraphTextNode)
console.log(paragraphElement)

articleRef.appendChild(paragraphElement)

const congressionalDistrictAttr = document.createAttribute("congressional-district")
congressionalDistrictAttr.value = "5"

articleREf.setAttributeNode(congressionalDistrictAttr)
