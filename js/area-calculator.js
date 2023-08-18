// function calculateTriangleArea() {
//     console.log('LOve');

//     const baseField = document.getElementById('triangle-base');
//     const baseValueText = baseField.value;
//     const base = parseFloat(baseValueText);
//     console.log(base);

//     const heightField = document.getElementById('triangle-height');
//     const heightValueText = heightField.value;
//     const height = parseFloat(heightValueText);
//     console.log(height);

//     const area = 0.5 * base * height;
//     console.log(area);
//     const areaValue = document.getElementById('triangle-area');
//     areaValue.innerText = area;
// }

// function calculateRectangleArea(){
//     const widthField = document.getElementById('rectangle-width');
//     const widthValueText = widthField.value;
//     const width = parseFloat(widthValueText);

//     const lengthField = document.getElementById('rectangle-length');
//     const lengthValueText = lengthField.value;
//     const length = parseFloat(lengthValueText);

//     const area = width * length;
//     const areaValue =document.getElementById('rectangle-area');
//     areaValue.innerText = area;
// }


function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    inputField.value = '';
    return value;
}

function setElementInnerText(elementId, Area) {
    const element = document.getElementById(elementId);
    element.innerText = Area;
}

function calculateTriangleArea(){
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');
    const area = 0.5*base*height;
    setElementInnerText('triangle-area', area);
}

function calculateRectangleArea(){
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');
    const area = width * length;
    setElementInnerText('rectangle-area', area)
}

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    const area = base * height;
    setElementInnerText('parallelogram-area', area)
}

function calculateRhombusArea(){
    const width = getInputValue('rhombus-width');
    const length = getInputValue('rhombus-length');
    const area = 0.5*width*length;
    setElementInnerText('rhombus-area', area);
}

function calculatePentagonArea(){
    const width = getInputValue('pentagon-width');
    const length = getInputValue('pentagon-length');
    const area =0.5 *width*length;
    setElementInnerText('pentagon-area', area);
}

function calculateEllipseArea(){
    const max_radius = getInputValue('ellipse-max-radius');
    const min_radius = getInputValue('ellipse-min-radius');
    const area = Math.PI*max_radius*min_radius;
    setElementInnerText('ellipse-area',area);
}
