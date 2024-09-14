// Array of 50 colors
const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', 
    '#33FFF6', '#FFDA33', '#FFA133', '#33FF9E', '#FF5733', 
    '#C70039', '#900C3F', '#581845', '#DAF7A6', '#FFC300', 
    '#FF5733', '#C70039', '#900C3F', '#FF33F5', '#FFBB33', 
    '#76FF33', '#33FFF6', '#33A1FF', '#33FFEC', '#E633FF',
    '#FF3380', '#9933FF', '#33FF66', '#FF6633', '#FF33B3',
    '#FFAF33', '#3398FF', '#33FFD8', '#DB33FF', '#F333FF', 
    '#33FFB0', '#FF3351', '#33FFE0', '#3355FF', '#FF3333', 
    '#FF8F33', '#5FFF33', '#3333FF', '#FF33A4', '#C7FF33',
    '#333CFF', '#FFF833', '#9D33FF', '#33FFA7', '#FF5733'
];

// Function to change background color
function changeColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Event listeners for spacebar press and mouse click
document.body.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        changeColor();
    }
});

document.body.addEventListener('click', changeColor);
