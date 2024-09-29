const button = document.getElementById('button');
const colorDiv = document.getElementById('color');
const textDiv = document.getElementById('text');

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}
function getRandomHexCode(){
    const hexCharacters = '0123456789abcdef';
    let hexCode = '#';
    
    for ( let i = 0; i < 6; i++){
        hexCode += hexCharacters[random(15)];
    }
    return hexCode;
    
}
// Convert the hex color to RGB values
function hexToRGB(hex) {
        // Convert the hex color to RGB values
        const r = parseInt(hex.slice(1, 3), 16); // Extract and convert the red value
        const g = parseInt(hex.slice(3, 5), 16); // Extract and convert the green value
        const b = parseInt(hex.slice(5, 7), 16); // Extract and convert the blue value
        return `rgb(${r}, ${g}, ${b})`;
        }
button.addEventListener('click', () => {
    const rndHex = getRandomHexCode();
    colorDiv.style.backgroundColor = rndHex;
    textDiv.textContent = rndHex;

    // Convert hex to RGB
            const rgbCode = hexToRGB(rndHex);

            // Display both Hex and RGB values
            textDiv.textContent = `${rndHex} | ${rgbCode}`;
});




