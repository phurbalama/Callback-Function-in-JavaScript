// fileName : example.02.js
// topic : callback

function payCheck(hourlyWage, hoursWorked) {
       
   setTimeout(function(){
            
            let weeklyPay =0;
            let isThisOverTime = hoursWorked > 40;
            let extraHours = 0,extraMoney=0,regularPay=0;
    
            if (isThisOverTime) {
                extraHours = hoursWorked - 40;
                extraMoney = 1.5 * extraHours * hourlyWage;
                regularPay = 40 *hourlyWage;
                weeklyPay = regularPay + extraMoney;
            }
            else {
                regularPay = hoursWorked * hourlyWage;
                weeklyPay = regularPay;
            }
    
            let r = {regularPay,weeklyPay,isThisOverTime,extraHours,extraMoney};

            console.log("payCheck");
            return r;
          }, 5000);
       

}


function test() {
    let r ={test : new Date()};
    //console.log(r);
    return r;
}

//calling the functions 
console.log(payCheck(10,45));
console.log(test());