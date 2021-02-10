
var fname = prompt('please enter your name', '');
var age = Number(prompt('Please enter your age'));
function gitAge() {
    if (17 <= age && age <= 35) {
        alert('he is can be a student');


    }
    else {
        alert('he is can not be a student');

    }

}
gitAge();

var order = prompt("What do you want BMW or Mercedes-Benz");

while (order !== "BMW" && order !== "Mercedes-Benz") {
    order = prompt("What do you want BMW or Mercedes-Benz")
}

var item = '';
function gitCar() {


    if (order == 'BMW') {

        item = '<img src="img/BMW.jpg"/>';
    } else {
        item = '<img src="img/Mer.jpg"/>';
    }
    //document.write(item);
}

gitCar();


function gitNum() {
    var result = '';
    var NumOfCar = prompt("What it is the Number of Cars");
    for (var i = 0; i < NumOfCar; i++) {
        
        result = result + item;
    }
    document.write(result);

}
gitNum();




function Area(width, hight) {
    return width * hight;
}
var area = Area(5, 6);
// var resultf = `<p>${area}</p>`
var resultf = '<p>' + '<b>' + '<b>' + "The Area = " + '</b>' + area + '</b>' + '</p>'
document.write(resultf);








