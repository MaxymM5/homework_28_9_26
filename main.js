const name = prompt("What is your name?")
alert("Hello, " + name + "!")

const CURRENT_YEAR = 2026;
const startYear = Number(prompt("Enter your birth year"));
const fromBirth = CURRENT_YEAR - startYear;
alert("You are " + fromBirth + " old");

const length = Number(prompt("Enter square length"));
const perimetr = length * 4;
alert("Perimetr of square with length " + length + " = " + perimetr);

const radius = Number(prompt("Enter circle radius"));
const area = 3.14 * Math.pow(radius, 2);
alert("Area of circle with radius " + radius + " = " + area);

const distance = Number(prompt("Enter distance in km"));
const time = Number(prompt("Enter time in hours"));
const speed = distance/time;
alert("Your speed should be " + speed + "km/h");

const dollars = Number(prompt("Enter how many dollars you want to convert"));
const euro = 1.14;
alert("It's " + dollars / euro + "euros");

const flashDriveGb = Number(prompt("Enter drive size in GB"));
const fileSizeMb = 820;
const flashDriveMb = flashDriveGb * 1024;
const filesCount = Math.floor(flashDriveMb / fileSizeMb);
alert("there is enough space for " + filesCount + " files");

const money = Number(prompt("How much money do you have in your wallet?"));
const pricePerChocolate = Number(prompt("How much does one chocolate bar cost?"));
const chocolatesCount = Math.floor(money / pricePerChocolate);
const change = money % pricePerChocolate;
alert("You can buy " + chocolatesCount + " chocolate bar(s) and you will have " + change + " left.");

const threeDigitNumber = Number(prompt("Enter a 3-digit number"));
const lastDigit = threeDigitNumber % 10;
const middleDigit = Math.floor((threeDigitNumber % 100) / 10);
const firstDigit = Math.floor(threeDigitNumber / 100);
const reversedNumber = "" + lastDigit + middleDigit + firstDigit;
alert("Reversed number: " + reversedNumber);

const number = Number(prompt("Enter number:"));
const isOdd = Math.abs(number % 2) === 1;
const result = (isOdd && "odd") || "even";
alert("Number " + number + " — " + result);

