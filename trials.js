fibArray = [];
// inc = 0
fNum = 0;
sNum = 1;
sum = 0;
nTimes = parseInt(prompt("Enter the number of times"));
fibArray.push(fNum);
if(nTimes !== 0){
    while(nTimes > 0){
        sum = fNum + sNum;
        fNum = sNum;
        sNum = sum;
        nTimes--;
        fibArray.push(fNum)  
    }
}
console.log(fibArray);