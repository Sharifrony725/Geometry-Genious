function calculateTriangleArea() {
    const base = getInputFieldValue('triangle-base');
    const height = getInputFieldValue('triangle-height');
   const area = 0.5 * base * height;
   setElementInnerText('triangle-area', area);
}
function calculateRectangleArea() {
    const width = getInputFieldValue('rectangle-width');
    const length = getInputFieldValue('rectangle-length');
    const area = width * length;
    setElementInnerText('rectangle-area', area);
}
function calculateParallelogram() {
    const base = getInputFieldValue('parallelogram-base');
    const height = getInputFieldValue('parallelogram-height');
    const area = base * height;
    setElementInnerText('parallelogram-area', area);
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

