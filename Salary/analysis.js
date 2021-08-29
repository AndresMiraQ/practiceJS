const salariesCol = colombia.map((person) => person.salary);
salariesCol.sort();
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
//Median salaries top 10% Colombia.
function calculateTopSalary(list, percent){
    const topSalaryStart = (list.length * (100 - percent)) / 100;
    const topSalaryFinish = list.length - topSalaryStart;
    const topSalary = list.splice(topSalaryStart, topSalaryFinish);
    return topSalary
}
const listTop = calculateTopSalary(salariesCol, 10);
const medianSalaryCol = calculateMedian(salariesCol);
const medianSalaryTop10 = calculateMedian(listTop);

console.log(medianSalaryCol);
console.log(medianSalaryTop10);