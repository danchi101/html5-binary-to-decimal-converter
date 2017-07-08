/**
 * This script gets a decimal (base 10) number from the user
 * and cornverts it to a binary (base 2) number.
 *
 * Author: JACKSON GARRY KAINDUME
 * email: jackson.kaindume@gmail.com
 * Date:  12 Aug 2014
 * version: 1.0
 */

function decimalToBinary() {
    var decimalNumber;    // Number from the user.
    var remainder = 0; 
    var results = document.getElementById("results"); 
    var binaryNumber = "";    // Stores the binary number
    var copy = "";    // stores a copy of binaryNumber in reverse (fliped over) which is the correct binary number.

   
    decimalNumber = document.getElementById("txtBox").value;     //getting the decimal number from the text box.

    while (decimalNumber > 0) {    // While decimal number is still divideble.
        remainder = decimalNumber % 2;    // get the remainder of decimalNumber / 2.
		decimalNumber = Math.floor(decimalNumber / 2);    // update decimalNumber with answer of decimalNumber / 2 (rounded down).
        binaryNumber = binaryNumber + remainder;    // Add (concatenate) binaryNumber with the current remainder.
	}

	
	for ( i = binaryNumber.length; i >= 0; i--) {    // reversing the binary number.
		copy = copy + binaryNumber.charAt(i);
	}

	results.innerHTML = "Your Binary Number is: " + copy;    // print the copy (binary number).
	
}

function binaryToDecimal() {
	var decimalNumber = 0; 
	var	powers = 0; 
	var	result = document.getElementById("results");
	var	binaryNumber = document.getElementById("txtBox").value;

	for ( counter = binaryNumber.length - 1; counter >= 0; counter--) {
		decimalNumber = decimalNumber + binaryNumber.charAt(counter) * Math.pow(2, powers);
		powers++;
    }

	result.innerHTML = "Your decimal Number is: " + decimalNumber;
}

