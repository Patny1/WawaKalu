// WawaKalu - Interactive Script for Children

// Global variables
let currentColor = '#ff0000';
let isDrawing = false;
let canvas, ctx;

// Activity management
function openActivity(activityType) {
    const activityArea = document.getElementById('activity-area');
    const activityContent = document.getElementById('activity-content');
    
    activityArea.style.display = 'block';
    
    // Scroll to activity
    activityArea.scrollIntoView({ behavior: 'smooth' });
    
    // Load the appropriate activity
    switch(activityType) {
        case 'coloring':
            loadColoringActivity(activityContent);
            break;
        case 'numbers':
            loadNumbersActivity(activityContent);
            break;
        case 'alphabet':
            loadAlphabetActivity(activityContent);
            break;
        case 'shapes':
            loadShapesActivity(activityContent);
            break;
    }
}

function closeActivity() {
    const activityArea = document.getElementById('activity-area');
    activityArea.style.display = 'none';
    
    // Scroll back to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Coloring Activity
function loadColoringActivity(container) {
    container.innerHTML = `
        <h2 style="text-align: center; color: #667eea;">🎨 ¡Dibuja y Colorea! 🎨</h2>
        <div class="color-palette">
            <div class="color-button active" style="background: #ff0000;" onclick="selectColor('#ff0000', this)"></div>
            <div class="color-button" style="background: #00ff00;" onclick="selectColor('#00ff00', this)"></div>
            <div class="color-button" style="background: #0000ff;" onclick="selectColor('#0000ff', this)"></div>
            <div class="color-button" style="background: #ffff00;" onclick="selectColor('#ffff00', this)"></div>
            <div class="color-button" style="background: #ff00ff;" onclick="selectColor('#ff00ff', this)"></div>
            <div class="color-button" style="background: #00ffff;" onclick="selectColor('#00ffff', this)"></div>
            <div class="color-button" style="background: #ff6600;" onclick="selectColor('#ff6600', this)"></div>
            <div class="color-button" style="background: #9900ff;" onclick="selectColor('#9900ff', this)"></div>
            <div class="color-button" style="background: #000000;" onclick="selectColor('#000000', this)"></div>
        </div>
        <canvas id="drawing-canvas" width="600" height="400"></canvas>
        <div style="text-align: center; margin-top: 20px;">
            <button class="control-btn" onclick="clearCanvas()">🗑️ Limpiar</button>
        </div>
    `;
    
    // Initialize canvas
    canvas = document.getElementById('drawing-canvas');
    ctx = canvas.getContext('2d');
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = currentColor;
    
    // Canvas event listeners
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    
    // Touch events for mobile
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', stopDrawing);
}

function selectColor(color, element) {
    currentColor = color;
    if (ctx) {
        ctx.strokeStyle = color;
    }
    
    // Update active state
    document.querySelectorAll('.color-button').forEach(btn => {
        btn.classList.remove('active');
    });
    element.classList.add('active');
}

function startDrawing(e) {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function draw(e) {
    if (!isDrawing) return;
    
    const rect = canvas.getBoundingClientRect();
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
}

function stopDrawing() {
    isDrawing = false;
}

function handleTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousedown', {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}

function handleTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const mouseEvent = new MouseEvent('mousemove', {
        clientX: touch.clientX,
        clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Numbers Activity
function loadNumbersActivity(container) {
    let currentNumber = 1;
    
    container.innerHTML = `
        <div class="number-display">
            <h2 style="color: #667eea;">🔢 Aprende los Números 🔢</h2>
            <div class="big-number" id="number-display">${currentNumber}</div>
            <p style="font-size: 1.5em; text-align: center; color: #555;">
                <span id="number-word">${numberToWord(currentNumber)}</span>
            </p>
            <div class="control-buttons">
                <button class="control-btn" onclick="changeNumber(-1)">⬅️ Anterior</button>
                <button class="control-btn" onclick="changeNumber(1)">Siguiente ➡️</button>
            </div>
        </div>
    `;
    
    window.currentNumber = currentNumber;
}

function changeNumber(direction) {
    window.currentNumber += direction;
    
    if (window.currentNumber < 0) window.currentNumber = 0;
    if (window.currentNumber > 10) window.currentNumber = 10;
    
    document.getElementById('number-display').textContent = window.currentNumber;
    document.getElementById('number-word').textContent = numberToWord(window.currentNumber);
    
    // Play sound effect (visual feedback)
    document.getElementById('number-display').style.animation = 'none';
    setTimeout(() => {
        document.getElementById('number-display').style.animation = 'pulse 1s infinite';
    }, 10);
}

function numberToWord(num) {
    const words = ['Cero', 'Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco', 'Seis', 'Siete', 'Ocho', 'Nueve', 'Diez'];
    return words[num] || num;
}

// Alphabet Activity
function loadAlphabetActivity(container) {
    const alphabet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split('');
    let currentIndex = 0;
    
    container.innerHTML = `
        <div class="letter-display">
            <h2 style="color: #667eea;">🔤 El Alfabeto 🔤</h2>
            <div class="big-letter" id="letter-display">${alphabet[currentIndex]}</div>
            <p style="font-size: 1.5em; text-align: center; color: #555;">
                <span id="letter-word">${getWordForLetter(alphabet[currentIndex])}</span>
            </p>
            <div class="control-buttons">
                <button class="control-btn" onclick="changeLetter(-1)">⬅️ Anterior</button>
                <button class="control-btn" onclick="changeLetter(1)">Siguiente ➡️</button>
            </div>
        </div>
    `;
    
    window.alphabet = alphabet;
    window.currentLetterIndex = currentIndex;
}

function changeLetter(direction) {
    window.currentLetterIndex += direction;
    
    if (window.currentLetterIndex < 0) window.currentLetterIndex = 0;
    if (window.currentLetterIndex >= window.alphabet.length) window.currentLetterIndex = window.alphabet.length - 1;
    
    const letter = window.alphabet[window.currentLetterIndex];
    document.getElementById('letter-display').textContent = letter;
    document.getElementById('letter-word').textContent = getWordForLetter(letter);
    
    // Visual feedback
    document.getElementById('letter-display').style.animation = 'none';
    setTimeout(() => {
        document.getElementById('letter-display').style.animation = 'pulse 1s infinite';
    }, 10);
}

function getWordForLetter(letter) {
    const examples = {
        'A': 'Avión', 'B': 'Barco', 'C': 'Casa', 'D': 'Dado', 'E': 'Elefante',
        'F': 'Flor', 'G': 'Gato', 'H': 'Helado', 'I': 'Iglú', 'J': 'Jirafa',
        'K': 'Kiwi', 'L': 'Luna', 'M': 'Mono', 'N': 'Nube', 'Ñ': 'Ñandú',
        'O': 'Oso', 'P': 'Pato', 'Q': 'Queso', 'R': 'Rana', 'S': 'Sol',
        'T': 'Tigre', 'U': 'Uva', 'V': 'Vaca', 'W': 'Water', 'X': 'Xilófono',
        'Y': 'Yate', 'Z': 'Zapato'
    };
    return examples[letter] || letter;
}

// Shapes Activity
function loadShapesActivity(container) {
    const shapes = [
        { name: 'Círculo', emoji: '🔵', description: 'Un círculo es redondo como una pelota' },
        { name: 'Cuadrado', emoji: '🟦', description: 'Un cuadrado tiene 4 lados iguales' },
        { name: 'Triángulo', emoji: '🔺', description: 'Un triángulo tiene 3 lados' },
        { name: 'Estrella', emoji: '⭐', description: 'Una estrella brilla en el cielo' },
        { name: 'Corazón', emoji: '❤️', description: 'Un corazón representa amor' },
        { name: 'Rectángulo', emoji: '🟩', description: 'Un rectángulo tiene 4 lados, 2 largos y 2 cortos' }
    ];
    let currentIndex = 0;
    
    container.innerHTML = `
        <div class="shape-display">
            <h2 style="color: #667eea;">⭐ Las Formas ⭐</h2>
            <div class="big-shape" id="shape-display">${shapes[currentIndex].emoji}</div>
            <h3 style="text-align: center; color: #764ba2; font-size: 2em;" id="shape-name">${shapes[currentIndex].name}</h3>
            <p style="font-size: 1.3em; text-align: center; color: #555; margin: 20px;" id="shape-description">
                ${shapes[currentIndex].description}
            </p>
            <div class="control-buttons">
                <button class="control-btn" onclick="changeShape(-1)">⬅️ Anterior</button>
                <button class="control-btn" onclick="changeShape(1)">Siguiente ➡️</button>
            </div>
        </div>
    `;
    
    window.shapes = shapes;
    window.currentShapeIndex = currentIndex;
}

function changeShape(direction) {
    window.currentShapeIndex += direction;
    
    if (window.currentShapeIndex < 0) window.currentShapeIndex = 0;
    if (window.currentShapeIndex >= window.shapes.length) window.currentShapeIndex = window.shapes.length - 1;
    
    const shape = window.shapes[window.currentShapeIndex];
    document.getElementById('shape-display').textContent = shape.emoji;
    document.getElementById('shape-name').textContent = shape.name;
    document.getElementById('shape-description').textContent = shape.description;
    
    // Visual feedback
    document.getElementById('shape-display').style.animation = 'none';
    setTimeout(() => {
        document.getElementById('shape-display').style.animation = 'pulse 1s infinite';
    }, 10);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('WawaKalu cargado exitosamente! 🎉');
});
