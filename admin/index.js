// For Staff List
let staffArray = [];
function regStaff() {
    let staffObj = {
        name: staffUsername.value,
        password: staffPassword.value,
        email: staffEmail.value,
    }
    staffArray.push(staffObj)
    console.log(staffArray);
    localStorage.setItem('staffList', JSON.stringify(staffArray));
}

function staffList() {

}
staffList();



// For Chairs
let chairArray = [];
function regChairs(){
    let chairObj = {

    }
}





// For Customer List
let custArray = [];
function regCustomer() {
    let custObj = {
        name: custUsername.value,
        password: custPassword.value,
        email: custEmail.value,
    }
    custArray.push(custObj)
    console.log(custArray)
    localStorage.setItem('custList', JSON.stringify(custArray));
}






















// For Loop









// Local Storage
// localStorage.video = 'Daniel';
// localStorage.setItem('staffList','King')
// let arr = [{
//     age: 56,
//     school: 'SQI',
// }]
// let convArr= JSON.stringify(arr)
// localStorage.setItem('arrFile', convArr)
// let getName= localStorage.getItem('video')
// alert(getName)
// let getArr= localStorage.getItem('arrFile');
// alert(getArr)





function openPop() {
    popClose.style.display = 'block';
    pop2Close.style.display = 'none';
    pop3Close.style.display = 'none';
}
function closePop() {
    popClose.style.display = 'none';
}

// Popup 2
function open2Pop() {
    pop2Close.style.display = 'block';
    popClose.style.display = 'none';
    pop3Close.style.display = 'none';
}
function close2Pop() {
    pop2Close.style.display = 'none';
}

// Popup 3
function open3Pop() {
    pop3Close.style.display = 'block';
    popClose.style.display = 'none';
    pop2Close.style.display = 'none';

}
function close3Pop() {
    pop3Close.style.display = 'none';
}

// alert ('hello!!')