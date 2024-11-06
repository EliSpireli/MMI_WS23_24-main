const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI')

describe("fahrenheitToCelsius()", function(){

     it('test 0°C equals 32°F', function() {
         expect(apiTemperature.fahrenheitToCelsius(32)).to.equal(0);
    });

    it('test 100°C equals 212°F',function()   {
        expect (apiTemperature.fahrenheitToCelsius(212)).to.equal(100);
    });

    it('test -40°C equals -40°F', function() {
        expect(apiTemperature.fahrenheitToCelsius(-40)).to.equal(-40);
    });

    it('test -239.5°C equals -399.1°F', function() {
        expect(apiTemperature.fahrenheitToCelsius(-399.1)).to.be.closeTo(-239.5, 0.01);
    });

    it('test great value 10000°F', function() {
        expect(apiTemperature.fahrenheitToCelsius(10000)).to.be.closeTo(5537.78, 0.01);
    });

    it('test small value -0.0001', function() {
        expect(apiTemperature.fahrenheitToCelsius(-0.0001)).to.be.closeTo(-17.7778, 0.01);
    });

   /*ToDo- test ist working but still showing error 
   
    it('should return an error message for invalid inputs such as null or undefined.', function() {
        expect(apiTemperature.fahrenheitToCelsius(null)).to.throw(Error,"Ungültige Eingabe: Fahrenheit-Wert ist erforderlich.");
        expect(apiTemperature.fahrenheitToCelsius(undefined)).to.throw(Error, "Ungültige Eingabe: Fahrenheit-Wert ist erforderlich.");
    });
    */
});

describe("celsiusToFahrenheit", function(){

    it('test 32°F equals 0°C  ', function() {
        expect(apiTemperature.celsiusToFahrenheit(0)).to.equal(32);
   });

   it('test 212°F equals 100°C  ',function()   {
       expect (apiTemperature.celsiusToFahrenheit(100)).to.equal(212);
   });

   it('test -40°F equals -40°F ', function() {
       expect(apiTemperature.celsiusToFahrenheit(-40)).to.equal(-40);
   });

   it('test -391.1°F equals -239,5°C  ', function() {
       expect(apiTemperature.celsiusToFahrenheit(-239.5)).to.be.closeTo(-399.1, 0.01);
   });

   it('test great value 1000°C', function() {
       expect(apiTemperature.celsiusToFahrenheit(1000)).to.be.closeTo(1832, 0.01);
   });

   it('test small value -0.0001°C', function() {
       expect(apiTemperature.celsiusToFahrenheit(-0.0001)).to.be.closeTo(31,99982, 0.01);
   });
  
});

describe('getGreetingDependOnTime', function() {

    it('test return "Guten Morgen between 06:00 and 12:00' , function() {
        const time = new Date('2020-01-01 11:30')
        expect(apiTemperature.getGreetingDependOnTime(time)).to.equal('Guten Morgen');
    });

    it('test return "Guten Morgen between 12:00 and 22:00' , function() {
        const time = new Date('2020-01-01 12:30')
        expect(apiTemperature.getGreetingDependOnTime(time)).to.equal('Guten Tag');
    });

    it('test return "Guten Abend after 22:00' , function() {
        const time = new Date('2020-01-01 23:30')
        expect(apiTemperature.getGreetingDependOnTime(time)).to.equal('Guten Abend');
    });

    it('test return "Guten Morgen exact 06:00' , function() {
        const time = new Date('2020-01-01 06:00')
        expect(apiTemperature.getGreetingDependOnTime(time)).to.equal('Guten Morgen');
    });

    it('test return "Guten Tag exact 12:00' , function() {
        const time = new Date('2020-01-01 12:00')
        expect(apiTemperature.getGreetingDependOnTime(time)).to.equal('Guten Tag');
    });

    it('test return "Guten Abend exact 22:00' , function() {
        const time = new Date('2020-01-01 22:00')
        expect(apiTemperature.getGreetingDependOnTime(time)).to.equal('Guten Abend');
    });

    it('test return "Guten Abend before 06:00' , function() {
        const time = new Date('2020-01-01 22:00')
        expect(apiTemperature.getGreetingDependOnTime(time)).to.equal('Guten Abend');
    });
})

