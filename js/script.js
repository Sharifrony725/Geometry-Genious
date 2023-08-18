function calculateTriangleArea() {
    const base = getInputFieldValue('triangle-base');
    const height = getInputFieldValue('triangle-height');
    if(isNaN(base) || isNaN(height)){
        alert("Please Provide Only Numbers");
        return;
    }
    const area = 0.5 * base * height;
    setElementInnerText('triangle-area', area);
    addToCalculationEntry('Triangle', area);
}
function calculateRectangleArea() {
    const width = getInputFieldValue('rectangle-width');
    const length = getInputFieldValue('rectangle-length');
    if (isNaN(width) || isNaN(length)) {
        alert("Please Provide Only Numbers");
        return;
    }
    const area = width * length;
    setElementInnerText('rectangle-area', area);
    addToCalculationEntry('Rectangle', area);
}
function calculateParallelogram() {
    const base = getInputFieldValue('parallelogram-base');
    const height = getInputFieldValue('parallelogram-height');
    if (isNaN(base) || isNaN(height)) {
        alert("Please Provide Only Numbers");
        return;
    }
    const area = base * height;
    setElementInnerText('parallelogram-area', area);

    addToCalculationEntry('Parallelogram', area);
}

//reusable function -->reduce duplicate code
function getInputFieldValue(inputId) {
    const element = document.getElementById(inputId);
    const elementValue = element.value;
    const value = parseFloat(elementValue);
    return value;
}

//set value in input field inner text
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}
 
function addToCalculationEntry(areaType, area) {
    const calculationEntry = document.getElementById('calculation-entry');
    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4', 'text-left', 'pl-2');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup></sup>2 <button class="btn btn-info btn-sm ml-10">Covert</button>`;
    calculationEntry.appendChild(p);
}

