exports.celsiusToFahrenheit = function (celsius){
 return celsius*(9/5)+32 
}

exports.fahrenheitToCelsius = function (fahrenheit){
    if (fahrenheit == null || fahrenheit == undefined || isNaN(fahrenheit)) {
        throw new Error("Ungültige Eingabe: Fahrenheit-Wert ist erforderlich.");
    }
    return ((fahrenheit-32)* (5/9))
 }   


exports.getGreetingDependOnTime =  function (myDate) {
    let timeBegin = '06:00';
    let timeAfternoon = '12:00'
    let timeEnd = '22:00';

    const dateBegin = new Date('2020-01-01 ' + timeBegin);
    const dateAftenoon = new Date ('2020-01-01 ' + timeAfternoon)
    const dateEnd = new Date('2020-01-01 ' + timeEnd);
    const dateCurrent = new Date('2020-01-01 ' + myDate.getHours() + ":" + myDate.getMinutes());

    if (dateCurrent.getTime() >= dateBegin.getTime() && dateCurrent.getTime() < dateAftenoon.getTime()) {
        
        return "Guten Morgen";

    }else if (dateCurrent.getTime() >= dateAftenoon.getTime() && dateCurrent.getTime() < dateEnd.getTime()) {
        
        return "Guten Tag"

    } else {

        newVariable = dateCurrent.getTime()
        console.log("For debugging: ") + dateBegin.getTime() + " " + dateCurrent.getTime() + " " + dateEnd.getTime()
        
        return "Guten Abend"
        }
   
}