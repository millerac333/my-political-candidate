// CHALLENGE
let articleRef = document.getElementById("article--districtRep");
console.log(articleRef);

let child = document.getElementById("district");

let paragraphElement = document.createElement("p");
let paragraphTextNode = document.createTextNode("Made up mission statement");
paragraphElement.appendChild(paragraphTextNode);

articleRef.insertBefore(paragraphElement, child);
console.log("after insert");

// ADVANCED CHALLENGE
let articleRef2 = document.getElementById("article--districtRep");
let congressionalDistrictAttr = document.createAttribute(
  "congressional-district"
);
congressionalDistrictAttr.value = "5";

articleRef2.setAttributeNode(congressionalDistrictAttr);
console.log(congressionalDistrictAttr);
