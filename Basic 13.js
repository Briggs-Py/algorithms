function oneTo255(){
   for(let num = 1; num<256; num++){
       console.log(num)
   }
}
oneTo255();

function sumTo255(){
    let sum=0
    for(let num=0; num<256; num++){
       console.log(sum);
       sum+=num;
    }
}
sumTo255();

function printMax(arr){
    let max = arr[0];
    for(let idx=0; idx<arr.length; idx++){
        if(arr[idx]>max){
            max = arr[idx];
        }
    }
    console.log(max)
}
printMax();

function printOdds(){
    for(let num=1; num<256; num+=2){
        console.log(num);
    }
}
printOdds();

function greaterThanY(arr, y){
    let count = 0
    for(let idx=0; idx<arr.length; idx++){
        if(arr[idx]>y){
            count++;
        }
    }
    console.log(count);
}
greaterThanY(arrOne, 6);


function maxMinAvg(arr){
    let max = arr[0];
    let min = arr[0];
    let sum = 0;
    let count = 0;
    for(let idx=0; idx<arr.length; idx++){
        if(arr[idx]>max){
            max = arr[idx];
        }
        if(arr[idx]<min){
            min = arr[idx];
        }
        sum += arr[idx];
        count++;
    }
    let avg = sum/count;
    console.log(max, min, avg);
}

maxMinAvg(arrOne);

function swapNeg(arr){
    for(let idx=0; idx<arr.length; idx++){
        if(arr[idx]<0){
            arr[idx]="Dojo";
        }
    }
    return arr;
}

swapNeg(arrOne);

function printOdd(){
    for(let num=1; num<256; num+=2){
        console.log(num);
    }
}
printOdd();

function printArr(arr){
    for(let idx=0; idx<arr.length; idx++){
        console.log(arr[idx]);
    }
}
printArr(arrOne);

function printAvg(arr){
    let sum = 0;
    let count = 0;
    for(let idx=0; idx<arr.length; idx++){
        sum += arr[idx];
        count++;
    }
    let avg = sum/count;
    console.log(avg);
}
printAvg(arrOne);

function squareArr(arr){
    for(let idx=0; idx<arr.length; idx++){
        arr[idx] *= arr[idx];
    }
    return arr;
}
squareArr();

function resetNegs(arr){
    for(let idx=0; idx<arr.length; idx++){
        if(arr[idx]<0){
            arr[idx]=0;
        }
    }
    return arr;
}
resetNegs(arrTwo);

function shiftArr(arr){
    for(let idx=0; idx<arr.length; idx++){
        if(arr[idx]===arr[arr.length-1]){
            arr[idx]=0;
        }
        else{
            arr[idx]=arr[idx+1];
        }
    }
    return arr;
}
shiftArr(arrOne);