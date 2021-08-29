//Function for calculate the median
function calculateMedian(list){
    let median = parseInt(list.length / 2);
    if(list.length % 2 === 0){
        const element1 = list[median - 1];
        const element2 = list[median];
        const sum = element1 + element2;
        return sum / 2;
    }
    return list[median];
}