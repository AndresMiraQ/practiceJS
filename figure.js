//Code of square
function calculatePerimeterSquare(){
    const input = document.getElementById("InputSquare");
    const value = input.value;
    const perimeter = value * 4;
    alert(perimeter);
}
function calculateAreaSquare(){
    const input = document.getElementById("InputSquare");
    const value = input.value;
    const area = value * value;
    alert(area);
}

//Code of triangle
function calculatePerimeterTriangle(){
    const value1 = document.getElementById("InputTriangleValue1");
    const value2 = document.getElementById("InputTriangleValue2");
    const base = document.getElementById("InputTriangleBase");
    const value01 = parseInt(value1.value); 
    const value02 = parseInt(value2.value);
    const base00 = parseInt(base.value);

    const perimeter = value01 + value02 + base00;
    alert(perimeter);
}
function calculateAreaTriangle(){
    const value1 = document.getElementById("InputTriangleValue1");
    const value2 = document.getElementById("InputTriangleValue2");
    const base = document.getElementById("InputTriangleBase");
    const value01 = parseInt(value1.value); 
    const value02 = parseInt(value2.value);
    const base00 = parseInt(base.value);
    const height = ((base00/2) * value01) * 0.5

    const area = (base00 * height) / 2;
    alert(area);
}

//Code of circle
function calculateDiameterCircle(){
    const input = document.getElementById("InputCircle");
    const radius = input.value;
    const diameter = radius * 2;
    alert(diameter);
}
function calculatePerimeterCircle(){
    const input = document.getElementById("InputCircle");
    const radius = input.value;
    const perimeter = (radius * 2) * Math.PI;
    alert(perimeter);
}
function calculateAreaCircle(){
    const input = document.getElementById("InputCircle");
    const radius = input.value;
    const area = (radius * radius) * Math.PI;
    alert(area);
}