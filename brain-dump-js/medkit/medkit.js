//Utility: clamp value between min and max
const clamp = (val, min, max) => Math.max(min, Math.min(max, val));

// --- Player & Enemy state ---
const player = {
  maxHealth: 100,
  health: 60,            
  medkitActive: false,
  medkitHPS: 20,         
  medkitDuration: 3.0,   
  medkitTimer: 0,
};
//damage per second from enemy fire
const enemy = {
  dps: 12,
};

// --- Activate medkit (e.g., on key press) ---
function useMedkit() {
  if (!player.medkitActive && player.medkitTimer <= 0) {
    player.medkitActive = true;
    player.medkitTimer = player.medkitDuration;
    console.log("[MEDKIT] Activated for", player.medkitDuration, "s");
  }
}

//One game tick/update: apply damage and healing together
function update(dt) {
  // Calculate per-tick damage & heal
  const damage = enemy.dps * dt;
  const heal   = player.medkitActive ? player.medkitHPS * dt : 0;

  // Order matters but is simple: health = health - damage + heal
  player.health = clamp(player.health - damage + heal, 0, player.maxHealth);
  // Tick down medkit if active
  if (player.medkitActive) {
    player.medkitTimer -= dt;
    if (player.medkitTimer <= 0) {
      player.medkitActive = false;
      player.medkitTimer = 0;
      console.log("[MEDKIT] Expired");
    }
  }
}

//Simulate a short timeline
// 5 seconds total, 60 FPS approx. Activate medkit at t = 1s.
let t = 0;
const dt = 1 / 60;

const sim = setInterval(() => {
  t += dt;

  // player uses medkit at 1 second
  if (Math.abs(t - 1.0) < dt / 2) {
    useMedkit();
  }

  update(dt);

  // Log every ~0.5s
  if (Math.abs((t * 2) - Math.round(t * 2)) < 1e-6) {
    console.log(`t=${t.toFixed(1)}s | HP=${player.health.toFixed(1)} | Medkit=${player.medkitActive ? "ON" : "OFF"}`);
  }

  // End sim after 5s
  if (t >= 5) {
    clearInterval(sim);
    console.log("Simulation ended. Final HP:", player.health.toFixed(1));
  }
}, dt * 1000);