function payCheck(hourlyWage, hoursWorked) {
    let weeklyPay = hourlyWage * hoursWorked;
    let isThisOverTime = hoursWorked > 40;

    if (isThisOverTime) {
        extraHours = hoursWorked -40;
        extraMoney = 1.5 * extraHours * hourlyWage;
        regularPay = 40 *hourlyWage;
        weeklyPay = regularPay + extraMoney;
    }
    else {
        regularPay = hoursWorked * hourlyWage;
        weeklyPay = regularPay;
    }

    return {regularPay: weeklyPay,isThisOverTime,extraHours,extraMoney};
}

function test() {
    let r ={test : new Date()};
    console.log(r);
    return r;
}

let x = payCheck(10,41);

console.log(x);

test();