// Remember, we're gonna use strict mode in all scripts now!
'use strict';
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function(temperatures) {
        let max = temperatures[0];
        let min = temperatures[0];

        for (let i = 0; i < temperatures.length; i++) {
            let temp = temperatures[i];
            //console.log(typeof(temp));
            if (typeof(temp) == 'number') {
                if (max < temp)
                    max = temp;
                if (min > temp)
                    min = temp;

            }
        }
        return max - min;

    }
    //console.log(calcTempAmplitude(temperatures));
console.log('10' + 273)
    //coding challenge#1
function printForecast(temps) {
    let tstring = '...';
    for (let i = 0; i < temps.length; i++) {
        tstring = tstring + ` ${temps[i]}C in ${i+1} days...`;
    }
    console.log(tstring);
}
printForecast([2, 3, 5, 6, 7]);