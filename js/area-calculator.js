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

function addCalculationEntry(areaType, area){
    console.log(areaType+ ' '+ area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-3','font-bold')
    p.innerHTML = `${count + 1}. ${  areaType }<span>  </span> ${area} cm<sup>2</sup><span> </span><button id="meter-square" class="rounded-lg bg-green-500 text-white p-2">Convert m<sup>2</sup></button>`;
    calculationEntry.appendChild(p);
}

function calculateTriangleArea(){
    const base = getInputValue('triangle-base');
    const height = getInputValue('triangle-height');

    if (isNaN(base)|| isNaN(height) || base <= 0 || height <= 0) {
        alert('Insert a positive number')
        return;
    }

    const area = 0.5*base*height;
    const areaThreeDecimal = area.toFixed(3);
    setElementInnerText('triangle-area', areaThreeDecimal);
    addCalculationEntry('Triangle', areaThreeDecimal);
}

function calculateRectangleArea(){
    const width = getInputValue('rectangle-width');
    const length = getInputValue('rectangle-length');

    if (isNaN(width)|| isNaN(length) || width <= 0 || length <= 0) {
        alert('Insert a positive number')
        return;
    }

    const area = width * length;
    const areaThreeDecimal = area.toFixed(3);
    setElementInnerText('rectangle-area', areaThreeDecimal);
    addCalculationEntry('Rectangle', areaThreeDecimal);
}

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');

    if (isNaN(base)|| isNaN(height) || base <= 0 || height <= 0) {
        alert('Insert a positive number')
        return;
    }

    const area = base * height;
    const areaThreeDecimal = area.toFixed(3);
    setElementInnerText('parallelogram-area', areaThreeDecimal);

    addCalculationEntry('Parallelogram', areaThreeDecimal);
}

function calculateRhombusArea(){
    const width = getInputValue('rhombus-width');
    const length = getInputValue('rhombus-length');

    if (isNaN(width)|| isNaN(length) || width <= 0 || length <= 0) {
        alert('Insert a positive number')
        return;
    }

    const area = 0.5*width*length;
    const areaThreeDecimal = area.toFixed(3);
    setElementInnerText('rhombus-area', areaThreeDecimal);
    addCalculationEntry('Rhombus', areaThreeDecimal);
}

function calculatePentagonArea(){
    const width = getInputValue('pentagon-width');
    const length = getInputValue('pentagon-length');

    if (isNaN(width)|| isNaN(length) || width <= 0 || length <= 0) {
        alert('Insert a positive number')
        return;
    }

    const area =0.5 *width*length;
    const areaThreeDecimal = area.toFixed(3);
    setElementInnerText('pentagon-area', areaThreeDecimal);
    addCalculationEntry('Pentagon', areaThreeDecimal);
}

function calculateEllipseArea(){
    const max_radius = getInputValue('ellipse-max-radius');
    const min_radius = getInputValue('ellipse-min-radius');

    if (isNaN(max_radius)|| isNaN(min_radius) || max_radius <= 0 || min_radius <= 0) {
        alert('Insert a positive number')
        return;
    }

    const area = Math.PI*max_radius*min_radius;
    const areaThreeDecimal = area.toFixed(3);
    setElementInnerText('ellipse-area',areaThreeDecimal);
    addCalculationEntry('Ellipse', areaThreeDecimal);
}

