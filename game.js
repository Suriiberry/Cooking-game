// 🌱 Veggie Bistro Sim - Phase 1 Foundation (Vanilla JS + Canvas)
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// 🔧 Resize handling for Pi 400 / GitHub Pages compatibility
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// 🎮 Game State (Checkpoint system)
let gameState = {
  coins: 15,
  reputation: 1.0,
  tickets: [],
  currentTicketId: null,
  activeStation: null, // 'pantry' | 'coldprep' | 'hotline' etc.
  stationProgress: 0,
  isInteracting: false,
  cameraMode: 'third', // 'first' or 'third'
  playerPos: { x: canvas.width / 2, y: canvas.height / 2 },
  keys: {}
};

// 📦 Load checkpoint if exists
function loadCheckpoint() {
  const saved = localStorage.getItem('vegResto_checkpoint');
  if (saved) {
    gameState = JSON.parse(saved);
    updateUI();
  } else {
    generateTicket(); // Start fresh with one order
  }
}

// 💾 Save checkpoint
function saveCheckpoint() {
  localStorage.setItem('vegResto_checkpoint', JSON.stringify(gameState));
  alert('✅ Checkpoint saved!');
}
document.getElementById('save-btn').addEventListener('click', saveCheckpoint);

// 🎫 Ticket System Skeleton (Dietary tags & combos ready for expansion)
function generateTicket() {
  const dishes = ['Crispy Chickpea Tacos', 'Truffle Mushroom Risotto'];
  const diets = ['GF', 'NF', 'Organic'];
  const dish = dishes[Math.floor(Math.random() * dishes.length)];
  const diet = diets[Math.floor(Math.random() * diets.length)];
  
  gameState.tickets.push({
    id: Date.now(),
    dish,
    dietTag: diet,
    combo: Math.random() > 0.7 ? 'Combo' : null, // Placeholder for combos
    timeLimit: 60 + Math.floor(Math.random() * 30),
    progress: 0
  });
  
  gameState.currentTicketId = gameState.tickets[gameState.tickets.length - 1].id;
  updateUI();
}

// 🕹️ Input Handling (WASD/Arrows + Space)
window.addEventListener('keydown', e => {
  gameState.keys[e.key.toLowerCase()] = true;
  
  // Camera toggle
  if
