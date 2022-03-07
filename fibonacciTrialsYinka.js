function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        var fibArray = [];
        var fNum = 0;
        var sNum = 1;
        var sum = 0;
        var nTimes = n;
        fibArray.push(fNum);
        if(nTimes === 1){
            return fibArray;
        }else if(nTimes === 2){
            sum = fNum + sNum;
            fNum = sNum;
            fibArray.push(fNum);
            return fibArray;
        }
        if(nTimes > 2){
            while(nTimes > 1){
                sum = fNum + sNum;
                fNum = sNum;
                sNum = sum;
                nTimes--;
                fibArray.push(fNum)  
            }
        }
        
        //Return an array of fibonacci numbers starting from 0.
        return fibArray;
    //Do NOT change any of the code below 👇
    }