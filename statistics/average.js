//Function for calculate the average 
function calculateMeanArithmetic(list){
    /*let sumList = 0;
    for (let i = 0; i < list.lenght; i++){
    sumList = sumList + list[i];
    }*/

    const reducer = (accumulatedValue = 0, newElement) => accumulatedValue + newElement;
    const averageList = list.reduce(reducer) / list.length;
    return averageList;
}

