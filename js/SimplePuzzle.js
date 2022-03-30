let count1 = 0;
let count2 = 1;
let count3 = 2;
let count4 = 1;
let count5 = 2;
window.onload = function () {
    count1 = Math.floor(Math.random()*2);
    count2 = Math.floor(Math.random()*2);
    count3 = Math.floor(Math.random()*2);
    count4 = Math.floor(Math.random()*2);
    count5 = Math.floor(Math.random()*2);
    slot1();
    slot2();
    slot3();
    slot4();
    slot5();
    compare();
}
function slot1() {
    let x = document.getElementById('myImage');
    count1++;
    switch (count1) {
        case 1:
            x.setAttribute('src', '/img/monkey_part1x1.jpg');
            break;
        case 2:
            x.setAttribute('src', '/img/panda_swap_part1x1.jpg');
            break;
        case 3:
            x.setAttribute('src', '/img/funny-cat1_part1x1.jpg');
            count1 = 0;
            break;
        //  default:

    }

    // count1 = count1 % 3;

}

function slot2() {
    let x = document.getElementById('myImage2');
    count2++;


    switch (count2) {
        case 1:
            x.setAttribute('src', '/img/monkey_part2x1.jpg');
            break;
        case 2:
            x.setAttribute('src', '/img/panda_swap_part2x1.jpg');
            break;
        case 3:
            x.setAttribute('src', '/img/funny-cat1_part2x1.jpg');
            count2 = 0;
            break;


    }

    // count2 = count2 % 3;


}

function slot3() {
    let x = document.getElementById('myImage3');
    count3++;

    switch (count3) {
        case 1:
            x.setAttribute('src', '/img/monkey_part3x1.jpg');
            break;
        case 2:
            x.setAttribute('src', '/img/panda_swap_part3x1.jpg');
            break;
        case 3:
            x.setAttribute('src', '/img/funny-cat1_part3x1.jpg');
            count3 = 0;
            break;


    }
    // count3 = count3 % 3;
}

function slot4() {
    let x = document.getElementById('myImage4');
    count4++;

    switch (count4) {
        case 1:
            x.setAttribute('src', '/img/monkey_part4x1.jpg');
            break;
        case 2:
            x.setAttribute('src', '/img/panda_swap_part4x1.jpg');
            break;
        case 3:
            x.setAttribute('src', '/img/funny-cat1_part4x1.jpg');
            count4 = 0;
            break;
    }
    // count4 = count4 % 3;
}

function slot5() {
    let x = document.getElementById('myImage5');
    count5++;

    switch (count5) {
        case 1:
            x.setAttribute('src', '/img/monkey_part5x1.jpg');
            break;
        case 2:
            x.setAttribute('src', '/img/panda_swap_part5x1.jpg');
            break;
        case 3:
            x.setAttribute('src', '/img/funny-cat1_part5x1.jpg');
            count5 = 0;
            break;
    }
    // count5 = count5 % 3;
}
document.getElementById("myShadow").onclick = compare;
    function compare (){

    if (count1 == count2 && count2 == count3 && count3 == count4 && count4 == count5) {
        document.getElementById('myImage').style.boxShadow = '10px 20px 30px lightblue';
        document.getElementById('myImage2').style.boxShadow = '10px 20px 30px lightblue';
        document.getElementById('myImage3').style.boxShadow = '10px 20px 30px lightblue';
        document.getElementById('myImage4').style.boxShadow = '10px 20px 30px lightblue';
        document.getElementById('myImage5').style.boxShadow = '10px 20px 30px lightblue';
        console.log('a')
    }
}



