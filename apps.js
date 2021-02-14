
function getAge() {
let fname = prompt('please enter your name', '');
let age = Number(prompt('Please enter your age'));



    if (17 <= age && age <= 35) {
        alert('he is can be a student');


    }
    else {
        alert('he is can not be a student');

    }
}
function getCar() {
    let order = prompt("What do you want BMW or Mercedes-Benz");

    while (order !== "BMW" && order !== "Mercedes-Benz") {
        order = prompt("What do you want BMW or Mercedes-Benz")
    }



    let item = '';
    if (order == 'BMW') {

        item = '<img src="img/BMW.jpg"/>';
    } else {
        item = '<img src="img/Mer.jpg"/>';
    }
    //document.write(item);
    let result = '';
    let NumOfCar = prompt("What it is the Number of Cars");
    for (var i = 0; i < NumOfCar; i++) {

        result = result + item;
    }
    document.write(result);
}

    


function Area(width, hight) {
    return width * hight;
}
let area = Area(5, 6);
// var resultf = `<p>${area}</p>`
let resultf = '<p>' + '<b>' + '<b>' + "The Area = " + '</b>' + area + '</b>' + '</p>'
document.write(resultf);


getAge();
getCar();










