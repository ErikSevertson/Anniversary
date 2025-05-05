let points = 0;
    let pointsPerClick = 1;
    let upgradeCost = 10;

    const pointsDisplay = document.getElementById('points');
    const heartBtn = document.getElementById('heart-btn');
    const upgradeBtn = document.getElementById('upgrade-btn');

    heartBtn.addEventListener('click', () => {
      points += pointsPerClick;
      updateDisplay();
    });

    upgradeBtn.addEventListener('click', () => {
      if (points >= upgradeCost) {
        points -= upgradeCost;
        pointsPerClick++;
        upgradeCost = Math.floor(upgradeCost * 1.5);
        upgradeBtn.textContent = `Upgrade Click (+1) — Cost: ${upgradeCost}`;
        updateDisplay();
      } else {
        alert("Not enough love points!");
      }
    });

    function updateDisplay() {
      pointsDisplay.textContent = points;
    }
