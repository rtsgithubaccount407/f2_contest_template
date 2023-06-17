let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
];


//DeveloperbyMap
function PrintDeveloperbyMap() {
    arr.map((element) => {
        if (element.profession === "developer") {
            console.log(element);
        }
    })
}

//DeveloperbyForEach() 
function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((element) => {
        if (element.profession === "developer") {
            console.log(element);
        }
    })
}

//addData()
function addData() {

    let getid = arr.length;
    let newarr = { id: getid + 1, name: "susan", age: "20", profession: "intern" };
    arr.push(newarr);
    console.log(arr);

}
// removeAdmin()
function removeAdmin() {
    arr.filter((element) => {
        if (element.profession !== "admin") {
            console.log(element);
        }
    });

}
//concatenateArray() 
function concatenateArray() {

    let employees = [
        { id: 5, name: "raj", age: "19", profession: "developer" },
        { id: 6, name: "sakshi", age: "33", profession: "admin" },
        { id: 7, name: "adi", age: "22", profession: "developer" }
    ];

    let addarray = arr.concat(employees);

    console.log(addarray);
}