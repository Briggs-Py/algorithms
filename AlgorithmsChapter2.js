//Sigma
console.log("Sigma:")
function sigma(num){
    let total = 0;
    for(let sum=0; sum<=num; sum++){
        total+=sum;
    }
    console.log(total);
    return total;
}
sigma(6);

//Factorial
console.log("\nFactorial:")
function factorial(num){
    let total = 1;
    for(let sum=1; sum<=num; sum++){
        total*=sum;
    }
    console.log(total);
    return total;
}
factorial(10);

//Star Art & Character Art
console.log("\nStar Art & Character Art:")
let warning = "Number cannot be higher than 75.",
    warning2="Character string cannot exceed length of 1";
function drawLeftStars(num){
    let output = "";
    for(let x=0; x<num; x++){
        output+="*";
    }
    console.log(output);
    return output;
}
drawLeftStars(75);

function drawRightStars(num){
    if(num>75){
        console.log(warning);
        return warning;
    }
    let output="";
    let spaces=75-num;
    for(let x=0; x<75; x++){
        if(x<spaces){
            output+=" ";
        }
        else{
            output+="*";
        }
    }
    console.log(output);
    return output;
}
drawRightStars(15);

function drawCenteredStars(num, char){
    if(num>75){
        console.log(warning);
        return warning;
    }
    if(char>1){
        console.log(warning2);
        return warning2;
    }
    let output,
        starString = "",
        lString = "",
        stars = num,
        lSpace = Math.floor((75 - num) / 2),
        rSpace = Math.floor((75 - num) / 2);
    if (stars + lSpace + rSpace !== 75) {
        rSpace += 1;
    }
    for(let x=0; x<stars; x++){
        starString+=char;
    }
    for(let x=0;x<lSpace;x++){
        lString+=" ";
    }
    output=lString+starString;
    for(let x=0; x<rSpace; x++){
        output+=" ";
    }
    console.log(output);
    return output;
}
drawCenteredStars(25, "*");

//Threes and Fives - made better
console.log("\nThrees & Fives:")
function threesFives(start, end){
    let total=0;
    for(let num=start; num<end; num++){
        if(num%5===0 && num%3===0){
        } else if(num%5===0){
            total+=num;
        } else if(num%3===0){
            total+=num
        }
    }
    console.log(total);
    return total;
}
threesFives(1,500);

//Generate Coin Change
console.log("\nCoin Change:")
function generateCoinChange(cents){
    let original=cents,
        quarters=0,
        dimes=0,
        nickels=0,
        pennies=0;
    while(cents!==0){
        if(cents>25){
            cents-=25;
            quarters++;
        }else if(cents>10){
            cents-=10;
            dimes++
        }else if(cents>5){
            cents-=5;
            nickels++;
        }else {
            cents-=1;
            pennies++
        }
    }
    console.log(original+" cents can be represented by: \nquarters: "+quarters+"\ndimes: "+dimes+"\nnickels: "+nickels+"\npennies: "+pennies);
}
generateCoinChange(94);

//Messy Math Mashup
console.log("\nMessy Math Mashup:")
function messyMath(num){
    let sum=0;
    for(let count=0; count<=num; count++){
        if(num/3 === count){
            console.log(-1);
            return -1;
        } else if(count%3===0){
        } else if(count%7===0){
            sum+=(count*2);
        } else{
            sum+=count;
        }
    }
    console.log(sum);
    return sum;
}
messyMath(77);

//Twelve Bar Blues
console.log("\nTwelve Bar Blues:")
function chickBoom(){
    for(let num=1; num<=12; num++){
        console.log(num+" chick boom chick");
    }
}
chickBoom();

//Fibonacci
console.log("\nFibonacci:")
function fibonacci(num){
    if(num===0){
        return 0;
    } else if(num===1){
        return 1;
    } else{
        return fibonacci(num-1)+fibonacci(num-2);
    }
}
console.log(fibonacci(10));

//Sum to One
console.log("\nSum To One:")
function sumToOne(num){
    if(num<10){
        return num;
    } else{
        let newNum=0,
            digits=num.toString().split(''),
            digitArr=digits.map(Number);
        for(let idx=0;idx<digitArr.length; idx++){
            newNum+=digitArr[idx];
        }
        return sumToOne(newNum);
    }
}
console.log(sumToOne(928));

//Clock Hour Angles
console.log("\nClock Hour Angles:")
function getDegrees(time, reset){
    if(time%reset===0){
        time=0;
    } else{
        time = Math.round((time-Math.floor(time))*360);
    }
    return time;
}
function clockHourAngles(secs){
    let hourReset=43200,
        minReset=3600,
        secReset=60,
        hour = secs/hourReset,
        min = secs/minReset,
        sec = secs/secReset;
    hour = getDegrees(hour,hourReset);
    min = getDegrees(min,minReset);
    sec = getDegrees(sec,secReset);
    console.log("Hour hand: "+hour+" degrees. "+"Minute hand: "+min+" degrees. "+"Second hand: "+sec+" degrees. \n" );
}
clockHourAngles(119730);

//Is Prime
console.log("\nIs Prime:")
function isPrime(num){
    for(let count=2;count<num;count++) {
        if (num % count === 0) {
            console.log("Not a Prime Number");
            return false;
        }
    }
    console.log("Is Prime Number");
    return true;
}
isPrime(17);

//Rockin' the Dojo Sweatshirt
console.log("\nRockin' The Dojo Sweatshirt:")
function sweatshirtPricing(num){
    let cost=20;
    if(num>=4){
        cost=(cost*num)-Math.ceil((cost*num)*0.35);
    }else if(num===3){
        cost=(cost*num)-Math.ceil((cost*num)*0.19);
    }else if(num===2){
        cost=(cost*num)-Math.ceil((cost*num)*0.09);
    }
    console.log(num+" sweatshirt(s) costs $"+cost);
    return cost;
}
sweatshirtPricing(4);

//Extract-o-matic
console.log("\nExtract-o-matic:")
function extractDigit(num, digit){
    num=Math.abs(num);
    if(digit>=0){
        digit=Math.pow(10, digit);
        console.log(Math.floor(num/digit)%10);
        return Math.floor(num/digit)%10;
    } else{
        digit=Math.abs(digit);
        digit=Math.pow(10, digit);
        console.log(Math.floor(num*digit)%10);
        return Math.floor(num*digit)%10;
    }

}
extractDigit(-54637732.435,-2);

//Most Significant Digit
console.log("\nMost Significant Digit:")
function significantDigit(num){
    num=Math.abs(num);
    while(num < 1){
        num*=10;
    }
    while(num > 10){
        num/=10;
    }
    let sign=Math.floor(num%10);
    console.log(sign);
}
significantDigit(0.0123)

//Gaming Fundamentals:
console.log("\nGaming Fundamentals:")
function rollOne(){
    return Math.floor((Math.random() * 6) + 1);
}

function playFives(num){
    for(let count=0; count<num; count++){
        let die = rollOne();
        console.log("Die roll - "+die);
    }
}
console.log("Five Rolls:")
playFives(5);

function playStatistics(num){
    let max=1;
    let min=6;
    let sum=0;
    for(let count=0; count<num;count++){
        let die=rollOne();
        if(die>max){
            max=die;
        }
        if(die<min){
            min=die;
        }
        sum+=die;
    }
    let avg=sum/num;
    console.log("\n"+num+" Rolls:\nMax Roll - "+max+"\nMin Roll - "+min+"\nSum Total - "+sum+"\nAverage Roll - "+avg);
}
playStatistics(2)

function twentySidedDie(){
    return Math.floor((Math.random() * 20) + 1);
}

function statsUntilDouble(){
    let max=1,
        min=20,
        sum=0,
        rolls=0,
        prev =0,
        double=false;
    while(!double){
        let die = twentySidedDie();
        if(die===prev){
            double=true;
        }
        prev=die;
        if(die>max){
            max=die;
        }
        if(die<min){
            min=die;
        }
        sum+=die;
        rolls++;
    }
    let avg=sum/rolls;
    console.log("\n"+rolls+" Rolls:\nDouble Roll - *"+prev+"*\nMax Roll - "+max+"\nMin Roll - "+min+"\nSum Total - "+sum+"\nAverage Roll - "+avg);
}
statsUntilDouble();

//Claire is Where?
console.log("\nClarie is Where?")
function reset(){
    return [0,0];
}
function moveBy(location, xOffset, yOffset){
    location[0]+=xOffset;
    location[1]+=yOffset;
    return location;
}
function xLocation(location){
    console.log(location[0])
    return location[0];
}
function yLocation(location){
    console.log(location[1])
    return location[1];
}

let location = reset();
moveBy(location, 2,3);
moveBy(location, 4,5);
xLocation(location);
yLocation(location);
console.log(location);

//Date, on a deserted Island
console.log("\nDeserted Island:")
function weekdayName(num){
    if(num>365){
        console.log("Number cannot be higher than 365")
        return null;
    }
    while(num>7){
        num-=7
    }
    switch(num){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Number out of range.");
    }
}
weekdayName(365);

function someDays(){
    for(let count=0; count<17; count++){
        let day=Math.floor((Math.random()*365)+1);
        console.log("\nDay "+day);
        weekdayName(day);
    }
}
someDays();

function monthName(num){
    let months=["January", "February", "March", "April", "May", "June", "July", "August", "October", "November", "December"];
    console.log("\n"+months[num-1]);
    return months[num-1];
}
monthName(5);