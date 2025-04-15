function updateBulbOpacity(opacity = null) {
  let rangeInput = document.getElementById("BulbController");
  let inputValue = opacity !== null ? opacity : rangeInput.value / 100;
  let bulbOpacity = 0.3 + inputValue * 0.7;
  let bulbOnImg = document.getElementById("bulbOn");
  let bulbShadow = document.getElementById("bulb-shadow");
  localStorage.setItem("bulbRangeValue", rangeInput.value);
  if (inputValue == 0) {
    bulbOnImg.style.opacity = "0";
    bulbShadow.style.opacity = "0";
  } else {
    bulbOnImg.style.opacity = bulbOpacity.toString();
    let shadowOpacity = 0.3 + inputValue * 0.7;
    bulbShadow.style.opacity = shadowOpacity.toFixed(3);
  }
}

document.getElementById("BulbController").addEventListener("input", function () {
  updateBulbOpacity();
});
// Add this to store ball states in localStorage
function storeBallStates() {
  const ballStates = {
    ball3: ballTracker.ball3.progress,
    ball4: ballTracker.ball4.progress,
    ball5: ballTracker.ball5.progress,
    ball6: ballTracker.ball6.progress,
    lastUpdateTime: Date.now(),
  };
  localStorage.setItem("ballStates", JSON.stringify(ballStates));
}
let ballTracker = {
  ball3: { element: null, progress: 0 },
  ball4: { element: null, progress: 0 },
  ball5: { element: null, progress: 0 },
  ball6: { element: null, progress: 0 },
};

const ballTypes = {
  ball1: { className: "h-[3%] w-[6%]", src: "../../../assets/direct-ethanol-fuel-cell/co2.png", interval: 2 },
  ball21: { className: "h-[3%] w-[6%]", src: "../../../assets/direct-ethanol-fuel-cell/co2.png", interval: 2 },
  ball2: { className: "h-[3%] w-[3%]", src: "../../../assets/direct-ethanol-fuel-cell/o2ball2.png", interval: 2 },
  ball22: { className: "h-[3%] w-[3%]", src: "../../../assets/direct-ethanol-fuel-cell/o2ball2.png", interval: 2 },
  ball3: { className: "h-[5%] w-[5%]", src: "../../../assets/direct-ethanol-fuel-cell/greenball1.png", interval: 2 },
  ball31: { className: "h-[5%] w-[5%]", src: "../../../assets/direct-ethanol-fuel-cell/greenball1.png", interval: 2 },
  ball32: { className: "h-[5%] w-[5%]", src: "../../../assets/direct-ethanol-fuel-cell/greenball1.png", interval: 2 },
  ball4: { className: "h-[5%] w-[5%]", src: "../../../assets/direct-ethanol-fuel-cell/greenball1.png", interval: 2 },
  ball41: { className: "h-[5%] w-[5%]", src: "../../../assets/direct-ethanol-fuel-cell/greenball1.png", interval: 2 },
  ball42: { className: "h-[5%] w-[5%]", src: "../../../assets/direct-ethanol-fuel-cell/greenball1.png", interval: 2 },
  ball5: { className: "h-[5%] w-[5%]", src: "../../../assets/direct-ethanol-fuel-cell/greenball1.png", interval: 2 },
  ball51: { className: "h-[5%] w-[5%]", src: "../../../assets/direct-ethanol-fuel-cell/greenball1.png", interval: 2 },
  ball52: { className: "h-[5%] w-[5%]", src: "../../../assets/direct-ethanol-fuel-cell/greenball1.png", interval: 2 },
  ball6: { className: "h-[5%] w-[5%]", src: "../../../assets/direct-ethanol-fuel-cell/greenball1.png", interval: 2 },
  ball61: { className: "h-[5%] w-[5%]", src: "../../../assets/direct-ethanol-fuel-cell/greenball1.png", interval: 2 },
  ball62: { className: "h-[5%] w-[5%]", src: "../../../assets/direct-ethanol-fuel-cell/greenball1.png", interval: 2 },
  ball7: { className: "h-[9%] w-[9%]", src: "../../../assets/direct-ethanol-fuel-cell/h+3.png", interval: 2 },
  ball8: { className: "h-[5%] w-[5%]", src: "../../../assets/direct-ethanol-fuel-cell/h+3.png", interval: 2 },
  ball9: { className: "h-[9%] w-[9%]", src: "../../../assets/direct-ethanol-fuel-cell/h+3.png", interval: 2 },
  ball10: { className: "h-[5%] w-[5%]", src: "../../../assets/direct-ethanol-fuel-cell/h+3.png", interval: 2 },
  ball11: { className: "h-[4%] w-[8%]", src: "../../../assets/direct-ethanol-fuel-cell/ethanol.png", interval: 2 },
  ball12: { className: "h-[3%] w-[3%]", src: "../../../assets/direct-ethanol-fuel-cell/o2ball1.png", interval: 2 },
  ball13: { className: "h-[3%] w-[3%]", src: "../../../assets/direct-ethanol-fuel-cell/o2ball1.png", interval: 2 },
  ball14: { className: "h-[3%] w-[3%]", src: "../../../assets/direct-ethanol-fuel-cell/h2o.png", interval: 2 },
  ball141: { className: "h-[3%] w-[3%]", src: "../../../assets/direct-ethanol-fuel-cell/h2o.png", interval: 2 },
  ball142: { className: "h-[3%] w-[3%]", src: "../../../assets/direct-ethanol-fuel-cell/h2o.png", interval: 2 },
  ball15: { className: "h-[3%] w-[3%]", src: "../../../assets/direct-ethanol-fuel-cell/h2o.png", interval: 2 },
  ball151: { className: "h-[3%] w-[3%]", src: "../../../assets/direct-ethanol-fuel-cell/h2o.png", interval: 2 },
  ball152: { className: "h-[3%] w-[3%]", src: "../../../assets/direct-ethanol-fuel-cell/h2o.png", interval: 2 },
  ball16: { className: "h-[4%] w-[8%]", src: "../../../assets/direct-ethanol-fuel-cell/ethanol.png", interval: 2 },
};

let state = {
  isPlaying: true,
  intervals: new Map(),
  animationFrameId: null,
  elements: {
    ballsContainer: document.getElementById("balls-container"),
    toggleButton: document.getElementById("toggle-button"),
    buttonText: document.getElementById("button-text"),
    speedControl: document.getElementById("BulbController"),
    bulbOnImg: document.getElementById("bulbOn"),
    bulbShadow: document.getElementById("bulb-shadow"),
    h2Quantity1: document.getElementById("h2_quantity_1"),
    h2Quantity2: document.getElementById("h2_quantity_2"),
    o2Quantity1: document.getElementById("o2_quantity_1"),
  },
  bulbState: false,
};
function shouldContinueAnimation() {
  const animationDuration = parseFloat(localStorage.getItem("animationDuration") || "0");
  const animationStartTime = parseInt(localStorage.getItem("animationStartTime") || "0");

  if (animationDuration === 0 || animationStartTime === 0) {
    return false;
  }

  const elapsedTime = (Date.now() - animationStartTime) / 1000;
  return elapsedTime < animationDuration;
}

// Modify stopIntervals function to check if animation should continue
function stopIntervals() {
  // Only clear intervals if animation should not continue
  if (!shouldContinueAnimation()) {
    state.intervals.forEach((interval) => clearInterval(interval));
    state.intervals.clear();

    if (state.animationFrameId) {
      cancelAnimationFrame(state.animationFrameId);
      state.animationFrameId = null;
    }

    // Only set animationStopped true if the reaction is complete
    const h2Quantity2Value = parseFloat(localStorage.getItem("h2-quantity-2") || "0");
    if (h2Quantity2Value >= 100) {
      animationStopped = true;
    }
  }
}
function trackBallProgress() {
  const ball3Elements = document.querySelectorAll(".ball3");
  const ball4Elements = document.querySelectorAll(".ball4");
  const ball5Elements = document.querySelectorAll(".ball5");
  const ball6Elements = document.querySelectorAll(".ball6");

  function estimateProgress(element) {
    if (!element || !element.startTime) return 0;

    const elapsed = Date.now() - element.startTime;
    const duration = getDuration() * 1000;
    return Math.min((elapsed / duration) * 100, 100);
  }

  if (ball3Elements.length > 0) ballTracker.ball3.progress = estimateProgress(ball3Elements[0]);
  if (ball4Elements.length > 0) ballTracker.ball4.progress = estimateProgress(ball4Elements[0]);
  if (ball5Elements.length > 0) ballTracker.ball5.progress = estimateProgress(ball5Elements[0]);
  if (ball6Elements.length > 0) ballTracker.ball6.progress = estimateProgress(ball6Elements[0]);

  if (Date.now() % 500 < 50) {
    storeBallStates();
  }

  const h2Quantity2Value = parseFloat(localStorage.getItem("h2-quantity-2") || "0");
  const isReactionComplete = h2Quantity2Value >= 100;

  const ball3InRange = ballTracker.ball3.progress >= 25 && ballTracker.ball3.progress <= 65;
  const ball4InRange = ballTracker.ball4.progress >= 30 && ballTracker.ball4.progress <= 65;
  const ball5InRange = ballTracker.ball5.progress >= 35 && ballTracker.ball5.progress <= 80;
  const ball6InRange = ballTracker.ball6.progress >= 40 && ballTracker.ball6.progress <= 90;

  const anyBallInRange = ball3InRange || ball4InRange || ball5InRange || ball6InRange;

  const rangeValue = parseInt(document.getElementById("BulbController").value);
  const isSliderBeingAdjusted = localStorage.getItem("sliderBeingAdjusted") === "true";

  if (anyBallInRange && !isReactionComplete && rangeValue > 0 && !isSliderBeingAdjusted) {
    if (!state.bulbState && !isReactionComplete && rangeValue > 0) {
      updateBulbOpacity(rangeValue / 100);
      state.bulbState = true;
    }
  } else {
    // If slider is being adjusted or reaction is complete, turn off the bulb
    if ((state.bulbState && isReactionComplete) || isSliderBeingAdjusted) {
      updateBulbOpacity(0);
      state.bulbState = false;
    }
  }

  // Continue animation frame if animation should continue or if not stopped
  if (shouldContinueAnimation() || !animationStopped) {
    state.animationFrameId = requestAnimationFrame(trackBallProgress);
  } else {
    state.animationFrameId = null;
  }
}

function trackSliderInteraction() {
  const slider = document.getElementById("BulbController");

  // Set flag when slider interaction begins
  slider.addEventListener("mousedown", function () {
    localStorage.setItem("sliderBeingAdjusted", "true");
    // Turn off bulb immediately when slider interaction begins
    updateBulbOpacity(0);
    state.bulbState = false;
  });

  slider.addEventListener("touchstart", function () {
    localStorage.setItem("sliderBeingAdjusted", "true");
    // Turn off bulb immediately when slider interaction begins
    updateBulbOpacity(0);
    state.bulbState = false;
  });

  // Clear flag when slider interaction ends
  document.addEventListener("mouseup", function () {
    localStorage.setItem("sliderBeingAdjusted", "false");
  });

  document.addEventListener("touchend", function () {
    localStorage.setItem("sliderBeingAdjusted", "false");
  });
}

// Add this to the initialization of your page
document.addEventListener("DOMContentLoaded", function () {
  trackSliderInteraction();
});

function checkResetElementsAndDisableRange() {
  const resetModal = document.getElementById("resetModal");
  const resetBtn = document.getElementById("resetBtn");
  const bulbOnImg = document.getElementById("bulbOn");
  const bulbShadow = document.getElementById("bulb-shadow");
  const ballsContainer = document.getElementById("balls-container");

  const h2Quantity2Value = parseFloat(localStorage.getItem("h2-quantity-2") || "0");

  const isResetModalVisible = resetModal && !resetModal.classList.contains("hidden");
  const isReactionComplete = h2Quantity2Value >= 100;

  if (resetBtn && resetBtn.classList.contains("hidden")) {
    resetBtn.classList.remove("hidden");
  }

  if (isResetModalVisible) {
    if (bulbOnImg) bulbOnImg.style.opacity = "0";
    if (bulbShadow) bulbShadow.style.opacity = "0";
    state.bulbState = false;

    if (ballsContainer) {
      ballsContainer.classList.add("hidden");
    }
  } else {
    if (ballsContainer && ballsContainer.classList.contains("hidden")) {
      ballsContainer.classList.remove("hidden");
    }

    if (isReactionComplete && !isResetModalVisible && resetModal) {
      resetModal.classList.remove("hidden");
    }
  }
}
setInterval(checkResetElementsAndDisableRange, 10);

const resetBtn = document.getElementById("resetBtn");
const resetModal = document.getElementById("resetModal");
const cancelBtn = document.getElementById("cancelBtn");
const confirmResetBtn = document.getElementById("confirmResetBtn");

resetBtn.addEventListener("click", function () {
  localStorage.removeItem("timingController");
  localStorage.removeItem("startTime");
  localStorage.removeItem("h2-quantity-1");
  localStorage.removeItem("h2-quantity-2");
  localStorage.removeItem("o2-quantity-1");
  localStorage.setItem("animationCompletedAndCanceled", "false"); // Reset the flag

  resetModal.classList.add("hidden");

  if (state.elements.h2Quantity1) state.elements.h2Quantity1.style.height = "100%";
  if (state.elements.h2Quantity2) state.elements.h2Quantity2.style.height = "0%";
  if (state.elements.o2Quantity1) state.elements.o2Quantity1.style.height = "100%";

  state.bulbState = false;
  updateBulbOpacity(0);

  // Ensure animation is properly restarted
  controllLiquideFlow();

  // Clear existing balls and restart animations
  state.elements.ballsContainer.innerHTML = "";
  animationStopped = false; // Reset animation stopped flag

  // Get current speed value and restart animations
  const speed = parseInt(state.elements.speedControl.value);
  if (speed > 0) {
    updateDuration();
    // Ensure trackBallProgress is restarted
    if (!state.animationFrameId) {
      state.animationFrameId = requestAnimationFrame(trackBallProgress);
    }
  }
  location.reload();
  checkResetElementsAndDisableRange();
});

// Add a variable to track if animation is stopped
let animationStopped = false;
if (!localStorage.getItem("animationCompletedAndCanceled")) {
  localStorage.setItem("animationCompletedAndCanceled", "false");
}
cancelBtn.addEventListener("click", function () {
  const h2Quantity2Value = parseFloat(localStorage.getItem("h2-quantity-2") || "0");

  // If reaction is complete, mark as completed and canceled
  if (h2Quantity2Value >= 100) {
    localStorage.setItem("animationCompletedAndCanceled", "true");

    // Reset quantities to default values
    if (state.elements.h2Quantity1) state.elements.h2Quantity1.style.height = "0%";
    if (state.elements.h2Quantity2) state.elements.h2Quantity2.style.height = "100%";
    if (state.elements.o2Quantity1) state.elements.o2Quantity1.style.height = "0%";

    // Update localStorage
    localStorage.setItem("h2-quantity-1", 0);
    localStorage.setItem("h2-quantity-2", 100);
    localStorage.setItem("o2-quantity-1", 0);
  }

  resetModal.classList.add("!hidden");
  checkResetElementsAndDisableRange();
});

confirmResetBtn.addEventListener("click", function () {
  localStorage.removeItem("timingController");
  localStorage.removeItem("startTime");
  localStorage.removeItem("h2-quantity-1");
  localStorage.removeItem("h2-quantity-2");
  localStorage.removeItem("o2-quantity-1");
  localStorage.setItem("animationCompletedAndCanceled", "false"); // Reset the flag

  resetModal.classList.add("hidden");

  if (state.elements.h2Quantity1) state.elements.h2Quantity1.style.height = "100%";
  if (state.elements.h2Quantity2) state.elements.h2Quantity2.style.height = "0%";
  if (state.elements.o2Quantity1) state.elements.o2Quantity1.style.height = "100%";

  state.bulbState = false;
  updateBulbOpacity(0);

  controllLiquideFlow();
  updateDuration();

  checkResetElementsAndDisableRange();
});

const controllLiquideFlow = () => {
  const h2Quantity1 = document.getElementById("h2-quantity-1");
  const h2Quantity2 = document.getElementById("h2-quantity-2");
  const o2Quantity1 = document.getElementById("o2-quantity-1");

  if (!h2Quantity1 || !h2Quantity2 || !o2Quantity1) {
    return;
  }

  state.elements.h2Quantity1 = h2Quantity1;
  state.elements.h2Quantity2 = h2Quantity2;
  state.elements.o2Quantity1 = o2Quantity1;

  // Check if animation completed and canceled
  const animationCompletedAndCanceled = localStorage.getItem("animationCompletedAndCanceled") === "true";
  if (animationCompletedAndCanceled) {
    return; // Don't start animation if completed and canceled
  }

  const savedValue = localStorage.getItem("bulbRangeValue") || 1;
  const bulbValue = parseInt(savedValue, 10);

  let timingController = 60 - (bulbValue - 1) * (40 / 99);

  let currentH21Height = parseFloat(localStorage.getItem("h2-quantity-1")) || 100;
  let currentH22Height = parseFloat(localStorage.getItem("h2-quantity-2")) || 0;
  let currentO21Height = parseFloat(localStorage.getItem("o2-quantity-1")) || 100;

  let currentProgress = 1 - currentH21Height / 100;

  let newStartTime = Date.now() - currentProgress * timingController * 1000;

  localStorage.setItem("timingController", timingController);
  localStorage.setItem("startTime", newStartTime);

  animationStopped = false; // Reset animation stopped flag

  const updateHeights = () => {
    if (!state.elements.h2Quantity1 || !state.elements.h2Quantity2 || !state.elements.o2Quantity1) {
      return;
    }

    // Check if animation was canceled
    const currentAnimationCompletedAndCanceled = localStorage.getItem("animationCompletedAndCanceled") === "true";
    if (currentAnimationCompletedAndCanceled) {
      return; // Stop updating if flag was changed
    }

    let elapsedTime = (Date.now() - newStartTime) / 1000;
    let progress = Math.min(elapsedTime / timingController, 1);

    // First container (ethanol solution) decreases normally
    let new_h2_1_height = 100 - progress * 100;

    // O2 container also decreases normally
    let new_o2_1_height = 100 - progress * 100;

    // Water container only starts filling after H2O molecules appear
    // This happens when progress is greater than a specific threshold
    let waterDelayThreshold = 0.6; // Adjust this value (0.5 = 50% into animation)
    let new_h2_2_height = 0;

    if (progress > waterDelayThreshold) {
      // Recalculate progress for water container so it still reaches 100% by the end
      let adjustedProgress = (progress - waterDelayThreshold) / (1 - waterDelayThreshold);
      new_h2_2_height = adjustedProgress * 100;
    }

    // Ensure values are within valid range
    new_h2_1_height = Math.max(0, Math.min(100, new_h2_1_height));
    new_h2_2_height = Math.max(0, Math.min(100, new_h2_2_height));
    new_o2_1_height = Math.max(0, Math.min(100, new_o2_1_height));

    // Update the actual elements
    state.elements.h2Quantity1.style.height = `${new_h2_1_height}%`;
    state.elements.h2Quantity2.style.height = `${new_h2_2_height}%`;
    state.elements.o2Quantity1.style.height = `${new_o2_1_height}%`;

    // Store values in localStorage
    localStorage.setItem("h2-quantity-1", new_h2_1_height);
    localStorage.setItem("h2-quantity-2", new_h2_2_height);
    localStorage.setItem("o2-quantity-1", new_o2_1_height);

    // Check if reaction is complete
    if (new_h2_2_height >= 100 && !animationStopped) {
      animationStopped = true;
      stopIntervals();
      return;
    }

    // Continue animation if not complete
    if (progress < 1) {
      requestAnimationFrame(updateHeights);
    }
  };

  requestAnimationFrame(updateHeights);
};

// Modify the stopIntervals function to properly track animation state
function stopIntervals() {
  state.intervals.forEach((interval) => clearInterval(interval));
  state.intervals.clear();

  if (state.animationFrameId) {
    cancelAnimationFrame(state.animationFrameId);
    state.animationFrameId = null;
  }

  // Only set animationStopped true if the reaction is complete
  const h2Quantity2Value = parseFloat(localStorage.getItem("h2-quantity-2") || "0");
  if (h2Quantity2Value >= 100) {
    animationStopped = true;
  }
}
function storeAnimationDuration() {
  const rangeValue = parseInt(document.getElementById("BulbController").value);
  // Map range value 0-100 to animation duration in seconds (e.g., 0 -> 0, 100 -> 20)
  const animationDuration = (rangeValue / 100) * 20; // 20 seconds at max value

  // Store in localStorage
  localStorage.setItem("animationDuration", animationDuration);
  localStorage.setItem("animationStartTime", Date.now());

  return animationDuration;
}

function getDuration() {
  return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--duration"));
}

function setDuration(value) {
  document.documentElement.style.setProperty("--duration", `${value}s`);
}

function createBall(type) {
  const ball = document.createElement("div");
  ball.classList.add("ball", type, ...ballTypes[type].className.split(" "));

  const img = document.createElement("img");
  img.src = ballTypes[type].src;
  img.alt = type;
  ball.appendChild(img);

  state.elements.ballsContainer.appendChild(ball);

  const duration = getDuration();
  ball.style.animationDuration = `${duration}s`;
  ball.startTime = Date.now();

  ball.addEventListener("animationend", () => ball.remove());

  if (["ball3", "ball31", "ball32", "ball4", "ball41", "ball42", "ball5", "ball51", "ball52", "ball6", "ball61", "ball62"].includes(type) && !state.animationFrameId) {
    state.animationFrameId = requestAnimationFrame(trackBallProgress);
  }

  return ball;
}

function updateBallSpeeds() {
  document.querySelectorAll(".ball").forEach((ball) => {
    const elapsedTime = (Date.now() - ball.startTime) / 1000;
    const remainingTime = Math.max(getDuration() - elapsedTime, 0);
    ball.style.animationDuration = `${remainingTime}s`;
  });
}

function stopIntervals() {
  state.intervals.forEach((interval) => clearInterval(interval));
  state.intervals.clear();

  if (state.animationFrameId) {
    cancelAnimationFrame(state.animationFrameId);
    state.animationFrameId = null;
  }
}

function startIntervals(durationInSeconds) {
  stopIntervals();
  const totalDuration = durationInSeconds * 1000;

  Object.entries(ballTypes).forEach(([type, config]) => {
    const interval = setInterval(() => createBall(type), totalDuration / config.interval);
    state.intervals.set(type, interval);
  });
}

function updateDuration() {
  const speed = parseInt(state.elements.speedControl.value);

  // Check if animation completed and canceled
  const animationCompletedAndCanceled = localStorage.getItem("animationCompletedAndCanceled") === "true";

  if (window.bulbTimeout) clearTimeout(window.bulbTimeout);
  if (window.secondBatchTimeout) clearTimeout(window.secondBatchTimeout);
  if (window.thirdBatchTimeout) clearTimeout(window.thirdBatchTimeout);
  if (window.fourthBatchTimeout) clearTimeout(window.fourthBatchTimeout);

  ["mouseup", "touchend"].forEach((event) => {
    state.elements.speedControl.addEventListener(event, () => {
      localStorage.setItem("bulbRangeValue", state.elements.speedControl.value);
      // Store animation duration whenever range value changes
      storeAnimationDuration();
      // Update ball animations instead of reloading
      updateBallAnimations();
    });
  });

  // If animation is completed and canceled, don't start new animation
  if (animationCompletedAndCanceled) {
    stopIntervals();
    state.elements.ballsContainer.innerHTML = "";
    state.elements.bulbOnImg.style.opacity = "0";
    state.elements.bulbShadow.style.opacity = "0";
    state.bulbState = false;
    return;
  }

  if (speed === 0) {
    stopIntervals();
    state.elements.ballsContainer.innerHTML = "";
    state.elements.bulbOnImg.style.opacity = "0";
    state.elements.bulbShadow.style.opacity = "0";
    state.bulbState = false;
    animationStopped = true; // Stop animation when speed is 0
    return;
  }

  // Reset animation stopped flag when updating duration
  animationStopped = false;

  // Calculate duration based on speed
  // Map speed (1-100) to duration (12s to 4s)
  const newDuration = 12 - ((speed - 1) * (12 - 4)) / 99;

  // Store the calculated animation duration
  storeAnimationDuration();

  setDuration(newDuration);
  updateBallSpeeds();

  stopIntervals();
  state.elements.ballsContainer.innerHTML = "";

  state.elements.bulbOnImg.style.opacity = "0";
  state.elements.bulbShadow.style.opacity = "0";
  state.bulbState = false;

  if (state.elements.ballsContainer.classList.contains("hidden")) {
    state.elements.ballsContainer.classList.remove("hidden");
  }

  // Restart tracking if needed
  if (!state.animationFrameId) {
    state.animationFrameId = requestAnimationFrame(trackBallProgress);
  }

  // Start first batch of balls
  ["ball11", "ball16"].forEach(createBall);
  ["ball11", "ball16"].forEach((type) => {
    const config = ballTypes[type];
    const interval = setInterval(() => createBall(type), (newDuration * 1000) / config.interval);
    state.intervals.set(type, interval);
  });

  const durationInMs = newDuration * 1000;
  const secondBatchDelay = durationInMs * 1;

  // Continue with other batches timing
  window.secondBatchTimeout = setTimeout(() => {
    if (!state.elements.ballsContainer.classList.contains("hidden") && !animationStopped) {
      // Create second batch of balls
      [
        "ball1",
        "ball21",
        "ball22",
        "ball2",
        "ball3",
        "ball31",
        "ball32",
        "ball4",
        "ball41",
        "ball42",
        "ball5",
        "ball51",
        "ball52",
        "ball6",
        "ball61",
        "ball62",
        "ball7",
        "ball8",
        "ball9",
        "ball10",
        "ball12",
        "ball13",
      ].forEach(createBall);

      [
        "ball1",
        "ball21",
        "ball22",
        "ball2",
        "ball3",
        "ball31",
        "ball32",
        "ball4",
        "ball41",
        "ball42",
        "ball5",
        "ball51",
        "ball52",
        "ball6",
        "ball61",
        "ball62",
        "ball7",
        "ball8",
        "ball9",
        "ball10",
        "ball12",
        "ball13",
      ].forEach((type) => {
        const config = ballTypes[type];
        const interval = setInterval(() => createBall(type), (newDuration * 1000) / config.interval);
        state.intervals.set(type, interval);
      });
    }
  }, secondBatchDelay);

  window.thirdBatchTimeout = setTimeout(() => {
    if (!state.elements.ballsContainer.classList.contains("hidden") && !animationStopped) {
      // Create third batch of balls
      ["ball14", "ball141", "ball142", "ball15", "ball151", "ball152"].forEach(createBall);
      ["ball14", "ball141", "ball142", "ball15", "ball151", "ball152"].forEach((type) => {
        const config = ballTypes[type];
        const interval = setInterval(() => createBall(type), (newDuration * 1000) / config.interval);
        state.intervals.set(type, interval);
      });
    }
  }, secondBatchDelay * 2);
}
let updateTimeoutId = null;
state.elements.speedControl.addEventListener("input", () => {
  if (updateTimeoutId) {
    clearTimeout(updateTimeoutId);
  }
  updateTimeoutId = setTimeout(updateDuration, 50);
});
function hideToggleButton() {
  if (state.elements.toggleButton) {
    state.elements.toggleButton.style.display = "none";
  }
}

function isFirstVisit() {
  return localStorage.getItem("hasVisited") === null;
}

function initializeApp() {
  if (performance.navigation.type === 1) {
    const savedValue = localStorage.getItem("bulbRangeValue");
    if (savedValue !== null) {
      state.elements.speedControl.value = savedValue;
    }
    const currentH21Height = parseFloat(localStorage.getItem("h2-quantity-1")) || 100;
    const currentH22Height = parseFloat(localStorage.getItem("h2-quantity-2")) || 0;
    const currentO21Height = parseFloat(localStorage.getItem("o2-quantity-1")) || 100;

    if (state.elements.h2Quantity1) state.elements.h2Quantity1.style.height = `${currentH21Height}%`;
    if (state.elements.h2Quantity2) state.elements.h2Quantity2.style.height = `${currentH22Height}%`;
    if (state.elements.o2Quantity1) state.elements.o2Quantity1.style.height = `${currentO21Height}%`;

    if (currentH22Height < 100) {
      const currentProgress = currentH22Height / 100;
      const bulbValue = parseInt(savedValue || "50", 10);
      const timingController = 60 - (bulbValue - 1) * (40 / 99);
      const adjustedStartTime = Date.now() - currentProgress * timingController * 1000;
      localStorage.setItem("timingController", timingController);
      localStorage.setItem("startTime", adjustedStartTime);

      if (state.elements.ballsContainer && state.elements.ballsContainer.classList.contains("hidden")) {
        state.elements.ballsContainer.classList.remove("hidden");
      }
    }
  } else {
    localStorage.removeItem("timingController");
    localStorage.removeItem("startTime");
    localStorage.removeItem("h2-quantity-1");
    localStorage.removeItem("h2-quantity-2");
    localStorage.removeItem("o2-quantity-1");
    localStorage.removeItem("bulbRangeValue");

    state.elements.speedControl.value = "50";
    localStorage.setItem("bulbRangeValue", "50");

    localStorage.setItem("hasVisited", "true");

    if (state.elements.h2Quantity1) state.elements.h2Quantity1.style.height = "100%";
    if (state.elements.h2Quantity2) state.elements.h2Quantity2.style.height = "0%";
    if (state.elements.o2Quantity1) state.elements.o2Quantity1.style.height = "100%";
  }

  controllLiquideFlow();
  checkResetElementsAndDisableRange();
  updateBulbOpacity(0);
  updateDuration();
}

window.addEventListener("load", initializeApp);
state.elements.speedControl.addEventListener("mouseup", function () {
  localStorage.setItem("bulbRangeValue", state.elements.speedControl.value);
});

["mouseup", "touchend"].forEach((event) => {
  state.elements.speedControl.addEventListener(event, () => {
    localStorage.setItem("bulbRangeValue", state.elements.speedControl.value);
    // Instead of reloading, update animation duration and continue
    storeAnimationDuration();
    // No more location.reload() - use updateDuration instead
    updateDuration();
    location.reload();
  });
});

const bulbController = document.getElementById("BulbController");
const valve1 = document.querySelector(".valv1");
const valve2List = document.querySelectorAll(".valv2");

const storageKeys = {
  valve1: "valve1Pos",
  valve2: "valve2Pos",
  range: "rangeValue",
};

const dataPool = {
  k3: { bottom: 11.5445, left: -7.70684, rotate: 2.67309 },
  k4: { bottom: 13, left: -4, rotate: 90 },
  k5: { bottom: 92.814, left: 99.5, rotate: -0.9 },
  k6: { bottom: 94.2, left: 96.5, rotate: -90 },
};

function interpolatePosition(value, type = 1) {
  const p = value / 100;
  let start, end;

  switch (type) {
    case 2:
      start = dataPool.k3;
      end = dataPool.k4;
      break;
    case 3:
      start = dataPool.k5;
      end = dataPool.k6;
      break;
    default:
      return { bottom: 0, left: 0, rotate: 0 };
  }

  return {
    bottom: start.bottom + p * (end.bottom - start.bottom),
    left: start.left + p * (end.left - start.left),
    rotate: start.rotate + p * (end.rotate - start.rotate),
  };
}

function updateValvePositions(value) {
  if (valve1) {
    const pos = interpolatePosition(value, 2);
    valve1.style.bottom = `${pos.bottom}%`;
    valve1.style.left = `${pos.left}%`;
    valve1.style.transform = `rotate(${pos.rotate}deg)`;
    localStorage.setItem(storageKeys.valve1, JSON.stringify(pos));
  }

  if (valve2List.length > 0) {
    const pos = interpolatePosition(value, 3);
    valve2List.forEach((valve) => {
      valve.style.bottom = `${pos.bottom}%`;
      valve.style.left = `${pos.left}%`;
      valve.style.transform = `rotate(${pos.rotate}deg)`;
    });
    localStorage.setItem(storageKeys.valve2, JSON.stringify(pos));
  }
}

function restoreValvePositions() {
  const value = parseInt(localStorage.getItem("bulbRangeValue")) || 50;
  updateValvePositions(value);
}

if (bulbController) {
  bulbController.addEventListener("input", function () {
    const val = parseInt(this.value);
    updateValvePositions(val);
    localStorage.setItem(storageKeys.range, val);
    localStorage.setItem("bulbRangeValue", val);
  });
}

document.addEventListener("DOMContentLoaded", restoreValvePositions);
if (document.readyState === "complete" || document.readyState === "interactive") {
  restoreValvePositions();
}

window.updateValvePositions = updateValvePositions;
// Add this to the top of your file for configuration
const H2O_MOLECULE_CLASSES = ['ball14', 'ball141', 'ball142', 'ball15', 'ball151', 'ball152'];
const PROXIMITY_THRESHOLD = 150; // Distance in pixels - adjust as needed

// Function to calculate distance between two elements
function calculateDistance(element1, element2) {
  if (!element1 || !element2) return Infinity;

  const rect1 = element1.getBoundingClientRect();
  const rect2 = element2.getBoundingClientRect();

  // Calculate centers
  const center1X = rect1.left + rect1.width / 2;
  const center1Y = rect1.top + rect1.height / 2;
  const center2X = rect2.left + rect2.width / 2;
  const center2Y = rect2.top + rect2.height / 2;

  // Calculate distance using Pythagorean theorem
  return Math.sqrt(
    Math.pow(center2X - center1X, 2) +
    Math.pow(center2Y - center1Y, 2)
  );
}

// Function to check if any H2O molecule is near the water container
function isH2ONearWaterContainer() {
  const waterContainer = document.querySelector('.O2_QUANTITY:nth-of-type(2)');
  if (!waterContainer) return false;

  let isNear = false;

  // Check each H2O molecule type
  H2O_MOLECULE_CLASSES.forEach(className => {
    const molecules = document.querySelectorAll('.' + className);

    molecules.forEach(molecule => {
      const distance = calculateDistance(molecule, waterContainer);
      if (distance < PROXIMITY_THRESHOLD) {
        isNear = true;
        // Optional: add visual indicator when debugging
        // molecule.style.outline = '2px solid lime';
      }
    });
  });

  return isNear;
}

// Modify the updateHeights function in your controllLiquideFlow
const updateHeights = () => {
  if (!state.elements.h2Quantity1 || !state.elements.h2Quantity2 || !state.elements.o2Quantity1) {
    return;
  }

  // Check if animation was canceled
  const currentAnimationCompletedAndCanceled = localStorage.getItem("animationCompletedAndCanceled") === "true";
  if (currentAnimationCompletedAndCanceled) {
    return; // Stop updating if flag was changed
  }

  let elapsedTime = (Date.now() - newStartTime) / 1000;
  let progress = Math.min(elapsedTime / timingController, 1);

  // First container (ethanol solution) decreases normally
  let new_h2_1_height = 100 - progress * 100;

  // O2 container also decreases normally
  let new_o2_1_height = 100 - progress * 100;

  // Get current height of the water container
  let new_h2_2_height = parseFloat(localStorage.getItem("h2-quantity-2")) || 0;

  // Only fill if H2O molecules are near the container AND we're past the initial delay
  let waterDelayThreshold = 0.4; // Initial delay before checking for molecules

  if (progress > waterDelayThreshold) {
    // Check if any H2O molecule is near the water container
    if (isH2ONearWaterContainer()) {
      // Increment water level when H2O is near
      new_h2_2_height = Math.min(100, new_h2_2_height + 0.2); // Adjust rate as needed
    }
  }

  // Ensure values are within valid range
  new_h2_1_height = Math.max(0, Math.min(100, new_h2_1_height));
  new_h2_2_height = Math.max(0, Math.min(100, new_h2_2_height));
  new_o2_1_height = Math.max(0, Math.min(100, new_o2_1_height));

  // Update the actual elements
  state.elements.h2Quantity1.style.height = `${new_h2_1_height}%`;
  state.elements.h2Quantity2.style.height = `${new_h2_2_height}%`;
  state.elements.o2Quantity1.style.height = `${new_o2_1_height}%`;

  // Store values in localStorage
  localStorage.setItem("h2-quantity-1", new_h2_1_height);
  localStorage.setItem("h2-quantity-2", new_h2_2_height);
  localStorage.setItem("o2-quantity-1", new_o2_1_height);

  // Check if reaction is complete
  if (new_h2_2_height >= 100 && !animationStopped) {
    animationStopped = true;
    stopIntervals();
    return;
  }

  // Continue animation if not complete
  if (progress < 1) {
    requestAnimationFrame(updateHeights);
  }
};

// Optional: Add debugging helpers to visualize proximity detection
function addDebugHelpers() {
  // Add toggle button for debug mode
  const debugBtn = document.createElement('button');
  debugBtn.textContent = 'Toggle Debug';
  debugBtn.style.position = 'fixed';
  debugBtn.style.bottom = '10px';
  debugBtn.style.right = '10px';
  debugBtn.style.zIndex = '9999';
  debugBtn.style.padding = '5px 10px';

  let debugMode = false;

  debugBtn.addEventListener('click', () => {
    debugMode = !debugMode;
    debugBtn.textContent = debugMode ? 'Debug ON' : 'Toggle Debug';

    if (debugMode) {
      // Start visualization
      const visualizer = setInterval(() => {
        const waterContainer = document.querySelector('.O2_QUANTITY:nth-of-type(2)');
        if (!waterContainer) return;

        // Highlight container
        waterContainer.style.outline = '2px dashed blue';

        // Check each H2O molecule
        H2O_MOLECULE_CLASSES.forEach(className => {
          const molecules = document.querySelectorAll('.' + className);

          molecules.forEach(molecule => {
            const distance = calculateDistance(molecule, waterContainer);
            if (distance < PROXIMITY_THRESHOLD) {
              molecule.style.outline = '2px solid lime';
              waterContainer.style.outline = '2px solid lime';
            } else {
              molecule.style.outline = '1px solid red';
            }
          });
        });
      }, 100);

      // Store visualizer to clear it later
      window._debugVisualizer = visualizer;
    } else {
      // Stop visualization
      if (window._debugVisualizer) {
        clearInterval(window._debugVisualizer);

        // Remove outlines
        document.querySelectorAll('.ball').forEach(ball => {
          ball.style.outline = '';
        });

        const waterContainer = document.querySelector('.O2_QUANTITY:nth-of-type(2)');
        if (waterContainer) waterContainer.style.outline = '';
      }
    }
  });

  document.body.appendChild(debugBtn);
}

// Call this function to add debug tools (optional)
// document.addEventListener('DOMContentLoaded', addDebugHelpers);
