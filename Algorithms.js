//Only Keep The Last Few
function reduce(arr, num){
    let limit = arr.length-num;
    for(let idx = 0; idx<limit; idx++){
        arr.shift();
    }
    console.log(arr);
    return(arr);
}

let result = reduce(arrOne, 2)
console.log(result)

//What Really Happened
function whatReallyHappensToday(){
    let output = "Today's events: ";
    let count = 0
    let volcano = Math.floor(Math.random()*100);
    let tsunami = Math.floor(Math.random()*100);
    let earthquake = Math.floor(Math.random()*100);
    let blizzard = Math.floor(Math.random()*100);
    let meteor = Math.floor(Math.random()*100);
    if (volcano <= 10){
        output += "Volcano ";
        count++;
    }
    if (tsunami <= 15){
        output += "Tsunami ";
        count++;
    }
    if (earthquake <= 20){
        output += "Earthquake ";
        count++;
    }
    if (blizzard <= 25){
        output += "Blizzard ";
        count++;
    }
    if (meteor <= 30){
        output += "Meteor ";
        count++;
    }
    if(count===0){
        output += "Nothing.. ";
    }
    console.log(output)
    return output;
}
whatReallyHappensToday()

//Soaring IQ
function raiseIQ(iq, days){
    let num=iq;
    for(let day=1; day<days+1; day++){
        num+=(day/100);
    }
    console.log(num);
    return num;
}
raiseIQ(101, 98)

//Letter Grade
function letterGrade(num){
    if(num>=90){
        console.log('A');
    }
    else if(num>=80){
        console.log('B');
    }
    else if(num>=70){
        console.log('C');
    }
    else if(num>=60){
        console.log('D');
    }
    else{
        console.log('F');
    }
}

letterGrade(88);

//More Accurate Grades
function accurateGrades(num){
    if(num>=97){
        console.log('A+');
    }
    else if(num>=93){
        console.log('A');
    }
    else if(num>=90){
        console.log('A-');
    }
    else if(num>=87){
        console.log('B+');
    }
    else if(num>=83){
        console.log('B');
    }
    else if(num>=80){
        console.log('B-');
    }
    else if(num>=77){
        console.log('C+');
    }
    else if(num>=73){
        console.log('C');
    }
    else if(num>=70){
        console.log('C-');
    }
    else if(num>=67){
        console.log('D+');
    }
    else if(num>=63){
        console.log('D');
    }
    else if(num>=60){
        console.log('D-');
    }
    else{
        console.log('F');
    }
}

accurateGrades(98);
accurateGrades(52);