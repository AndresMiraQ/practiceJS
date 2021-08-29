const list1 = [
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
];
function calculateMode(list){
    const listCount = {};
    list.map(
        function(element){
            if (listCount[element]){
                listCount[element] += 1;
            }else{
                listCount[element] = 1;
            }
        }
    );
    //Convert the object into a two-dimensional array
    const listArray = Object.entries(listCount); 
    //Sort the two-dimensional array
    listArray.sort((elementA, elementB) => elementA[1] - elementB[1]);
    let mode = listArray[parseInt(listArray.length - 1)];
    return mode;
}




