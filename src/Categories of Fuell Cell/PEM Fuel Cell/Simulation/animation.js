// function updateAnimationSpeedByDouble(opacity = null) {
//   let rangeInput = document.getElementById("BulbController");

//   let AnimationSpeedLimit = opacity !== null ? opacity : rangeInput.value / 100;
//   let bulbOffImg = document.getElementById("bulbOn");
//   let bulbOnImg = document.getElementById("bulb-shadow");

//   localStorage.setItem("bulbRangeValue", rangeInput.value);

//   if (AnimationSpeedLimit == 0) {
//     bulbOffImg.style.opacity = "0";
//     bulbOnImg.style.opacity = "0";
//   } else {
//     bulbOffImg.style.opacity = AnimationSpeedLimit.toString();

//     let shadowOpacity = 0.005 + AnimationSpeedLimit * 0.495;
//     bulbOnImg.style.opacity = shadowOpacity.toFixed(3);
//   }
// }

function updateAnimationSpeedByDouble(opacity = null) {
  let rangeInput = document.getElementById("BulbController");

  // Save the slider value always
  localStorage.setItem("bulbRangeValue", rangeInput.value);

  // Get elements
  let bulbOffImg = document.getElementById("bulbOn");
  let bulbOnImg = document.getElementById("bulb-shadow");

  // Called from slider — do not glow
  if (opacity === null) {
    bulbOffImg.style.opacity = "0";
    bulbOnImg.style.opacity = "0";
    return;
  }

  // Called from electron hit — glow
  let AnimationSpeedLimit = Math.min(Math.max(opacity, 0), 1);
  bulbOffImg.style.transition = "opacity 0.2s ease-in-out";
  bulbOnImg.style.transition = "opacity 0.2s ease-in-out";

  bulbOffImg.style.opacity = AnimationSpeedLimit.toString();
  let shadowOpacity = 0.005 + AnimationSpeedLimit * 0.495;
  bulbOnImg.style.opacity = shadowOpacity.toFixed(3);
}


document.getElementById("BulbController").addEventListener("input", function () {
  updateAnimationSpeedByDouble();
});

let AnimationBallStopIntervals = {
  ball3: { element: null, progress: 0 },
  ball4: { element: null, progress: 0 },
  ball5: { element: null, progress: 0 },
  ball6: { element: null, progress: 0 },
};

const ballTypes = {
  ball1: { className: "h-[3%] w-[6%]", src: "../../../assets/blueball2.png", interval: 2 },
  ball2: { className: "h-[3%] w-[3%]", src: "../../../assets/redball2.png", interval: 2 },
  ball3: { className: "h-[5%] w-[5%]", src: "../../../assets/greenball1.png", interval: 2 },
  ball4: { className: "h-[5%] w-[5%]", src: "../../../assets/greenball1.png", interval: 2 },
  ball5: { className: "h-[5%] w-[5%]", src: "../../../assets/greenball1.png", interval: 2 },
  ball6: { className: "h-[5%] w-[5%]", src: "../../../assets/greenball1.png", interval: 2 },
  ball7: { className: "h-[5%] w-[5%]", src: "../../../assets/h+1.png", interval: 2 },
  ball8: { className: "h-[5%] w-[5%]", src: "../../../assets/h+1.png", interval: 2 },
  ball9: { className: "h-[5%] w-[5%]", src: "../../../assets/h+1.png", interval: 2 },
  ball10: { className: "h-[5%] w-[5%]", src: "../../../assets/h+1.png", interval: 2 },
  ball11: { className: "h-[3%] w-[6%]", src: "../../../assets/blueball2.png", interval: 2 },
  ball12: { className: "h-[3%] w-[3%]", src: "../../../assets/redball1.png", interval: 2 },
  ball13: { className: "h-[3%] w-[3%]", src: "../../../assets/redball1.png", interval: 2 },
  ball14: { className: "h-[3%] w-[3%]", src: "../../../assets/2blue1red2.png", interval: 2 },
  ball15: { className: "h-[3%] w-[3%]", src: "../../../assets/2blue1red2.png", interval: 2 },
  ball16: { className: "h-[3%] w-[6%]", src: "../../../assets/blueball2.png", interval: 2 },
};

let state = {
  isPlaying: true,
  intervals: new Map(),
  animationFrameId: null,
  elements: {
    SpeedLimitDepends: document.getElementById("balls-container"),
    toggleButton: document.getElementById("toggle-button"),
    buttonText: document.getElementById("button-text"),
    speedControl: document.getElementById("BulbController"),
    bulbOffImg: document.getElementById("bulbOn"),
    bulbOnImg: document.getElementById("bulb-shadow"),
    h2Quantity1: document.getElementById("h2_quantity_1"),
    h2Quantity2: document.getElementById("h2_quantity_2"),
    o2Quantity1: document.getElementById("o2_quantity_1"),
  },
  bulbState: false,
};

function trackBallProgress() {
  const StartBall10QanimationSettimeout = document.querySelectorAll(".ball3");
  const StartBall11AnimationSettimeout = document.querySelectorAll(".ball4");
  const StartBall12SetTimeoutAnimation = document.querySelectorAll(".ball5");
  const StartBall14SettimeoutAnimation = document.querySelectorAll(".ball6");

  function estimateProgress(element) {
    if (!element || !element.startTime) return 0;

    const elapsed = Date.now() - element.startTime;
    const duration = getDuration() * 1000;
    return Math.min((elapsed / duration) * 100, 100);
  }

  if (StartBall10QanimationSettimeout.length > 0) AnimationBallStopIntervals.ball3.progress = estimateProgress(StartBall10QanimationSettimeout[0]);
  if (StartBall11AnimationSettimeout.length > 0) AnimationBallStopIntervals.ball4.progress = estimateProgress(StartBall11AnimationSettimeout[0]);
  if (StartBall12SetTimeoutAnimation.length > 0) AnimationBallStopIntervals.ball5.progress = estimateProgress(StartBall12SetTimeoutAnimation[0]);
  if (StartBall14SettimeoutAnimation.length > 0) AnimationBallStopIntervals.ball6.progress = estimateProgress(StartBall14SettimeoutAnimation[0]);

  const h2Quantity2Value = parseFloat(localStorage.getItem("h2-quantity-2") || "0");
  const isAnimationstarted = h2Quantity2Value >= 30;

  const ball13InRange = AnimationBallStopIntervals.ball3.progress >= 25 && AnimationBallStopIntervals.ball3.progress <= 65;
  const ball14InRange = AnimationBallStopIntervals.ball4.progress >= 30 && AnimationBallStopIntervals.ball4.progress <= 65;
  const ball15InRange = AnimationBallStopIntervals.ball5.progress >= 35 && AnimationBallStopIntervals.ball5.progress <= 80;
  const ball16InRange = AnimationBallStopIntervals.ball6.progress >= 40 && AnimationBallStopIntervals.ball6.progress <= 90;

  const AnyTypeBallsTS = ball13InRange || ball14InRange || ball15InRange || ball16InRange;

  const rangeValue = parseInt(document.getElementById("BulbController").value);

  if (AnyTypeBallsTS && !isAnimationstarted && rangeValue > 0) {
    if (!state.bulbState && !isAnimationstarted && rangeValue > 0) {
      updateAnimationSpeedByDouble(rangeValue / 100);
      state.bulbState = true;
    }
  } else {
    if (isAnimationstarted && state.bulbState) {
      updateAnimationSpeedByDouble(0);
      state.bulbState = false;
    }
  }

  state.animationFrameId = requestAnimationFrame(trackBallProgress);
}

function checkResetModalIsVisibleOrNot() {
  const resetModal = document.getElementById("resetModal");
  const resetBtn = document.getElementById("resetBtn");
  const bulbOffImg = document.getElementById("bulbOn");
  const bulbOnImg = document.getElementById("bulb-shadow");
  const SpeedLimitDepends = document.getElementById("balls-container");

  const h2Quantity2Value = parseFloat(localStorage.getItem("h2-quantity-2") || "0");

  const isResetModalVisible = resetModal && !resetModal.classList.contains("hidden");
  const isAnimationstarted = h2Quantity2Value >= 30;

  if (resetBtn && resetBtn.classList.contains("hidden")) {
    resetBtn.classList.remove("hidden");
  }

  if (isResetModalVisible || isAnimationstarted) {
    if (bulbOffImg) bulbOffImg.style.opacity = "0";
    if (bulbOnImg) bulbOnImg.style.opacity = "0";
    state.bulbState = false;

    if (SpeedLimitDepends) {
      SpeedLimitDepends.classList.add("hidden");
    }

    if (isAnimationstarted && !isResetModalVisible && resetModal) {
      resetModal.classList.remove("hidden");
      stopIntervals();
    }
  } else {
    if (SpeedLimitDepends) {
      SpeedLimitDepends.classList.remove("hidden");
    }
  }
}
setInterval(checkResetModalIsVisibleOrNot, 10);

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

  resetModal.classList.add("hidden");

  if (state.elements.h2Quantity1) state.elements.h2Quantity1.style.height = "100%";
  if (state.elements.h2Quantity2) state.elements.h2Quantity2.style.height = "0%";
  if (state.elements.o2Quantity1) state.elements.o2Quantity1.style.height = "100%";

  state.bulbState = false;
  updateAnimationSpeedByDouble(0);

  IncreseSpeedOFHeightsAnimation();

  updateSpeedOfHeightsQuantityAnimationByAuto();

  checkResetModalIsVisibleOrNot();
});

// resetBtn.addEventListener("click", function () {
//   // Clear state
//   localStorage.removeItem("timingController");
//   localStorage.removeItem("startTime");
//   localStorage.removeItem("h2-quantity-1");
//   localStorage.removeItem("h2-quantity-2");
//   localStorage.removeItem("o2-quantity-1");

//   // Reset popup trigger flag
//   localStorage.setItem("animationCompletedAndCanceled", "false");

//   // Hide modal immediately (if visible)
//   resetModal.classList.add("hidden");

//   // Reset UI
//   if (state.elements.h2Quantity1) state.elements.h2Quantity1.style.height = "100%";
//   if (state.elements.h2Quantity2) state.elements.h2Quantity2.style.height = "0%";
//   if (state.elements.o2Quantity1) state.elements.o2Quantity1.style.height = "100%";

//   state.bulbState = false;
//   updateAnimationSpeedByDouble(0);

//   IncreseSpeedOFHeightsAnimation();
//   updateSpeedOfHeightsQuantityAnimationByAuto();

//   // Reset and restart animation logic
//   if (state.elements.ballsContainer) state.elements.ballsContainer.innerHTML = "";
//   animationStopped = false;

//   const speed = parseInt(state.elements.speedControl?.value || "0");
//   if (speed > 0) {
//     updateDuration();
//     if (!state.animationFrameId) {
//       state.animationFrameId = requestAnimationFrame(trackBallProgress);
//     }
//   }

//   // Optional: check/reset UI controls
//   checkResetModalIsVisibleOrNot(); // this should not hide modal if already hidden
// });


cancelBtn.addEventListener("click", function () {
  resetModal.classList.add("!hidden");

  checkResetModalIsVisibleOrNot();
});

confirmResetBtn.addEventListener("click", function () {
  localStorage.removeItem("timingController");
  localStorage.removeItem("startTime");
  localStorage.removeItem("h2-quantity-1");
  localStorage.removeItem("h2-quantity-2");
  localStorage.removeItem("o2-quantity-1");

  resetModal.classList.add("hidden");

  if (state.elements.h2Quantity1) state.elements.h2Quantity1.style.height = "100%";
  if (state.elements.h2Quantity2) state.elements.h2Quantity2.style.height = "0%";
  if (state.elements.o2Quantity1) state.elements.o2Quantity1.style.height = "100%";

  state.bulbState = false;
  updateAnimationSpeedByDouble(0);

  IncreseSpeedOFHeightsAnimation();

  updateSpeedOfHeightsQuantityAnimationByAuto();

  checkResetModalIsVisibleOrNot();
});

const IncreseSpeedOFHeightsAnimation = () => {
  const h2Quantity1 = document.getElementById("h2-quantity-1");
  const h2Quantity2 = document.getElementById("h2-quantity-2");
  const o2Quantity1 = document.getElementById("o2-quantity-1");

  if (!h2Quantity1 || !h2Quantity2 || !o2Quantity1) {
    return;
  }

  state.elements.h2Quantity1 = h2Quantity1;
  state.elements.h2Quantity2 = h2Quantity2;
  state.elements.o2Quantity1 = o2Quantity1;

  const savedValue = localStorage.getItem("bulbRangeValue") || 1;
  const bulbValue = parseInt(savedValue, 10);

  let timingController = 60 - (bulbValue - 1) * (40 / 99);
  localStorage.setItem("timingController", timingController);

  let savedStartTime = localStorage.getItem("startTime");
  let startTime = savedStartTime ? parseFloat(savedStartTime) : Date.now();

  localStorage.setItem("startTime", startTime);

  const updateThirdIntervalBallTypeRelease = () => {
    if (!state.elements.h2Quantity1 || !state.elements.h2Quantity2 || !state.elements.o2Quantity1) {
      return;
    }

    let elapsedTime = (Date.now() - startTime) / 1000;
    let progress = Math.min(elapsedTime / timingController, 1);

    let new_h2_1_height = 100 - progress * 100;

    let new_h2_2_height = progress * 30;
    let new_o2_1_height = 100 - progress * 100;

    new_h2_1_height = Math.max(0, Math.min(100, new_h2_1_height));
    new_h2_2_height = Math.max(0, Math.min(30, new_h2_2_height));
    new_o2_1_height = Math.max(0, Math.min(100, new_o2_1_height));

    state.elements.h2Quantity1.style.height = `${new_h2_1_height}%`;
    state.elements.h2Quantity2.style.height = `${new_h2_2_height}%`;
    state.elements.o2Quantity1.style.height = `${new_o2_1_height}%`;

    localStorage.setItem("h2-quantity-1", new_h2_1_height);
    localStorage.setItem("h2-quantity-2", new_h2_2_height);
    localStorage.setItem("o2-quantity-1", new_o2_1_height);

    if (new_h2_2_height >= 30) {
      stopIntervals();
      return;
    }

    if (progress < 1) {
      requestAnimationFrame(updateThirdIntervalBallTypeRelease);
    }
  };

  requestAnimationFrame(updateThirdIntervalBallTypeRelease);
};

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

  state.elements.SpeedLimitDepends.appendChild(ball);

  const duration = getDuration();
  ball.style.animationDuration = `${duration}s`;
  ball.startTime = Date.now();

  ball.addEventListener("animationend", () => ball.remove());

  if (["ball3", "ball4", "ball5", "ball6"].includes(type) && !state.animationFrameId) {
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

function updateSpeedOfHeightsQuantityAnimationByAuto() {
  const speed = parseInt(state.elements.speedControl.value);

  if (speed === 0) {
    stopIntervals();
    state.elements.SpeedLimitDepends.innerHTML = "";

    state.elements.bulbOffImg.style.opacity = "0";
    state.elements.bulbOnImg.style.opacity = "0";
    state.bulbState = false;
    return;
  }

  const lowdurationtmingdefine = 16 - ((speed - 1) * (16 - 6)) / 99;

  setDuration(lowdurationtmingdefine);
  updateBallSpeeds();

  stopIntervals();
  // state.elements.SpeedLimitDepends.innerHTML = "";

  // state.elements.bulbOffImg.style.opacity = "0";
  // state.elements.bulbOnImg.style.opacity = "0";
  state.bulbState = false;

  if (window.bulbTimeout) {
    clearTimeout(window.bulbTimeout);
  }
  // if (window.secondBatchTimeout) {
  //   clearTimeout(window.secondBatchTimeout);
  // }

  // if (window.sixthBatchTimeout) {
  //   clearTimeout(window.sixthBatchTimeout);
  // }

  ["ball2", "ball11", "ball16"].forEach(createBall);

  ["ball2", "ball11", "ball16"].forEach((type) => {
    const config = ballTypes[type];
    const interval = setInterval(() => createBall(type), (lowdurationtmingdefine * 1000) / config.interval);
    state.intervals.set(type, interval);
  });

  const highestanimation = lowdurationtmingdefine * 1000;

  const thirdBatchDelay = highestanimation * 1;

  window.secondBatchTimeout = setTimeout(() => {
    ["ball1", "ball3", "ball4", "ball5", "ball6", "ball7", "ball8", "ball9", "ball10", "ball12", "ball13"].forEach(createBall);

    ["ball1", "ball3", "ball4", "ball5", "ball6", "ball7", "ball8", "ball9", "ball10", "ball12", "ball13"].forEach((type) => {
      const config = ballTypes[type];
      const interval = setInterval(() => createBall(type), (lowdurationtmingdefine * 1000) / config.interval);
      state.intervals.set(type, interval);
    });
  }, thirdBatchDelay);

  window.sixthBatchTimeout = setTimeout(() => {
    ["ball14", "ball15"].forEach(createBall);

    ["ball14", "ball15"].forEach((type) => {
      const config = ballTypes[type];
      const interval = setInterval(() => createBall(type), (lowdurationtmingdefine * 1000) / config.interval);
      state.intervals.set(type, interval);
    });
  }, thirdBatchDelay * 2);
}

let updateTimeoutId = null;
state.elements.speedControl.addEventListener("input", () => {
  if (updateTimeoutId) {
    clearTimeout(updateTimeoutId);
  }
  updateTimeoutId = setTimeout(updateSpeedOfHeightsQuantityAnimationByAuto, 50);
});

function hideAnimation() {
  if (state.elements.toggleButton) {
    state.elements.toggleButton.style.display = "none";
  }
}

function isSatrtedAgainAnimation() {
  return localStorage.getItem("hasVisited") === null;
}

function resetSimulationState() {
  // Clear all localStorage used in simulation
  localStorage.removeItem("timingController");
  localStorage.removeItem("startTime");
  localStorage.removeItem("h2-quantity-1");
  localStorage.removeItem("h2-quantity-2");
  localStorage.removeItem("o2-quantity-1");
  localStorage.removeItem("bulbRangeValue");

  // Reset UI values
  state.elements.speedControl.value = "50";
  localStorage.setItem("bulbRangeValue", "50");
  localStorage.setItem("hasVisited", "true");

  if (resetModal) resetModal.classList.add("hidden");

  state.elements.bulbOffImg.style.opacity = "0";
  state.elements.bulbOnImg.style.opacity = "0";
  state.bulbState = false;

  hideAnimation();

  if (state.elements.h2Quantity1) state.elements.h2Quantity1.style.height = "100%";
  if (state.elements.h2Quantity2) state.elements.h2Quantity2.style.height = "0%";
  if (state.elements.o2Quantity1) state.elements.o2Quantity1.style.height = "100%";
}

// function initializeApp() {
//   if (performance.navigation.type === 1) {
//     const savedValue = localStorage.getItem("bulbRangeValue");
//     if (savedValue !== null) {
//       state.elements.speedControl.value = savedValue;
//     }
//   } else {
//     localStorage.removeItem("timingController");
//     localStorage.removeItem("startTime");
//     localStorage.removeItem("h2-quantity-1");
//     localStorage.removeItem("h2-quantity-2");
//     localStorage.removeItem("o2-quantity-1");
//     localStorage.removeItem("bulbRangeValue");

//     state.elements.speedControl.value = "50";
//     localStorage.setItem("bulbRangeValue", "50");

//     localStorage.setItem("hasVisited", "true");
//   }

//   state.elements.bulbOffImg.style.opacity = "0";
//   state.elements.bulbOnImg.style.opacity = "0";
//   state.bulbState = false;

//   hideAnimation();

//   if (state.elements.h2Quantity1) state.elements.h2Quantity1.style.height = "100%";
//   if (state.elements.h2Quantity2) state.elements.h2Quantity2.style.height = "0%";
//   if (state.elements.o2Quantity1) state.elements.o2Quantity1.style.height = "100%";

//   IncreseSpeedOFHeightsAnimation();
//   checkResetModalIsVisibleOrNot();

//   updateAnimationSpeedByDouble(0);
//   updateSpeedOfHeightsQuantityAnimationByAuto();
// }

function initializeApp() {
  // Update slider value from localStorage (which we just reset)
  const savedValue = localStorage.getItem("bulbRangeValue");
  if (savedValue !== null) {
    state.elements.speedControl.value = savedValue;
  }

  // Reset bulb state
  state.elements.bulbOffImg.style.opacity = "0";
  state.elements.bulbOnImg.style.opacity = "0";
  state.bulbState = false;

  // Hide any existing animations or elements
  hideAnimation();

  // Reset height levels of gases
  if (state.elements.h2Quantity1) state.elements.h2Quantity1.style.height = "100%";
  if (state.elements.h2Quantity2) state.elements.h2Quantity2.style.height = "0%";
  if (state.elements.o2Quantity1) state.elements.o2Quantity1.style.height = "100%";

  // Run all necessary setup logic
  IncreseSpeedOFHeightsAnimation();
  checkResetModalIsVisibleOrNot();
  updateAnimationSpeedByDouble(0);
  updateSpeedOfHeightsQuantityAnimationByAuto();
}


window.addEventListener("load", () => {
  resetSimulationState();
  initializeApp();
});
state.elements.speedControl.addEventListener("mouseup", function () {
  localStorage.setItem("bulbRangeValue", state.elements.speedControl.value);
});

["mouseup", "touchend"].forEach((event) => {
  state.elements.speedControl.addEventListener(event, () => {
    localStorage.setItem("bulbRangeValue", state.elements.speedControl.value);
    // location.reload();
  });
});

const qwkx81nsq = document.getElementById("BulbController");
const plzv0smcr = document.querySelector(".tfnnhdrfnjsetbgw");
const smdp4ujzx = document.querySelector(".njsertnsetneyerynsenter");
const wmnz58lvo = document.querySelectorAll(".ghjfytjytulkryjtjykjk");
const vuhs6tcar = document.querySelectorAll(".yjytgkyuluilidetgsefsdfsef");

const storageKeys = {
  a1: "bQX8VpL2",
  a2: "ZyM4TnP9",
  a3: "WdJ5FkX1",
  a4: "TrC7QmB6",
  range: "Xn9LpTQ3",
};

const dataPool = {
  k1: "eyJib3R0b20iOiA5Mi41LCJsZWZ0IjogLTQuOCwicm90YXRlIjogMH0=",
  k2: "eyJib3R0b20iOiA5NCwibGVmdCI6IC0yLCJyb3RhdGUiOiA5MH0=",
  k3: "eyJib3R0b20iOiAyMi41LCJsZWZ0IjogLTQuOCwicm90YXRlIjogMH0=",
  k4: "eyJib3R0b20iOiAyNCwibGVmdCI6IC0yLCJyb3RhdGUiOiA5MH0=",
  k5: "eyJib3R0b20iOiA5Mi44LCJsZWZ0IjogOTYuNSwicm90YXRlIjogMH0=",
  k6: "eyJib3R0b20iOiA5NC4yLCJsZWZ0IjogOTMuNSwicm90YXRlIjogLTkwfQ==",
  k7: "eyJib3R0b20iOiAxOCwibGVmdCI6IDk2LjUsInJvdGF0ZSI6IDB9",
  k8: "eyJib3R0b20iOiAxOSwibGVmdCI6IDkzLjUsInJvdGF0ZSI6IC05MH0=",
};

function yfxr2po1(encoded) {
  return JSON.parse(atob(encoded));
}

function xzjw6lfa(value, ntype = 1) {
  const p = value / 100;
  let start, end;

  switch (ntype) {
    case 2:
      start = yfxr2po1(dataPool.k3);
      end = yfxr2po1(dataPool.k4);
      break;
    case 3:
      start = yfxr2po1(dataPool.k5);
      end = yfxr2po1(dataPool.k6);
      break;
    case 4:
      start = yfxr2po1(dataPool.k7);
      end = yfxr2po1(dataPool.k8);
      break;
    default:
      start = yfxr2po1(dataPool.k1);
      end = yfxr2po1(dataPool.k2);
  }

  return {
    bottom: start.bottom + p * (end.bottom - start.bottom),
    left: start.left + p * (end.left - start.left),
    rotate: start.rotate + p * (end.rotate - start.rotate),
  };
}

function btzu9yop(value) {
  if (plzv0smcr) {
    const a = xzjw6lfa(value, 1);
    plzv0smcr.style.bottom = `${a.bottom}%`;
    plzv0smcr.style.left = `${a.left}%`;
    plzv0smcr.style.transform = `rotate(${a.rotate}deg)`;
    localStorage.setItem(storageKeys.a1, JSON.stringify(a));
  }

  if (smdp4ujzx) {
    const b = xzjw6lfa(value, 2);
    smdp4ujzx.style.bottom = `${b.bottom}%`;
    smdp4ujzx.style.left = `${b.left}%`;
    smdp4ujzx.style.transform = `rotate(${b.rotate}deg)`;
    localStorage.setItem(storageKeys.a2, JSON.stringify(b));
  }

  if (wmnz58lvo.length > 0) {
    const c = xzjw6lfa(value, 3);
    wmnz58lvo.forEach((valve) => {
      valve.style.bottom = `${c.bottom}%`;
      valve.style.left = `${c.left}%`;
      valve.style.transform = `rotate(${c.rotate}deg)`;
    });
    localStorage.setItem(storageKeys.a3, JSON.stringify(c));
  }

  if (vuhs6tcar.length > 0) {
    const d = xzjw6lfa(value, 4);
    vuhs6tcar.forEach((valve) => {
      valve.style.bottom = `${d.bottom}%`;
      valve.style.left = `${d.left}%`;
      valve.style.transform = `rotate(${d.rotate}deg)`;
    });
    localStorage.setItem(storageKeys.a4, JSON.stringify(d));
  }
}

function qplx5urs() {
  const sv = localStorage.getItem(storageKeys.range);
  return sv ? parseInt(sv) : 0;
}

function vbmz6twr() {
  const value = localStorage.getItem("bulbRangeValue") ? parseInt(localStorage.getItem("bulbRangeValue")) : 50;

  if (plzv0smcr) {
    const a = xzjw6lfa(value, 1);
    plzv0smcr.style.bottom = `${a.bottom}%`;
    plzv0smcr.style.left = `${a.left}%`;
    plzv0smcr.style.transform = `rotate(${a.rotate}deg)`;
    localStorage.setItem(storageKeys.a1, JSON.stringify(a));
  }

  if (smdp4ujzx) {
    const b = xzjw6lfa(value, 2);
    smdp4ujzx.style.bottom = `${b.bottom}%`;
    smdp4ujzx.style.left = `${b.left}%`;
    smdp4ujzx.style.transform = `rotate(${b.rotate}deg)`;
    localStorage.setItem(storageKeys.a2, JSON.stringify(b));
  }

  if (wmnz58lvo.length > 0) {
    const c = xzjw6lfa(value, 3);
    wmnz58lvo.forEach((valve) => {
      valve.style.bottom = `${c.bottom}%`;
      valve.style.left = `${c.left}%`;
      valve.style.transform = `rotate(${c.rotate}deg)`;
    });
    localStorage.setItem(storageKeys.a3, JSON.stringify(c));
  }

  if (vuhs6tcar.length > 0) {
    const d = xzjw6lfa(value, 4);
    vuhs6tcar.forEach((valve) => {
      valve.style.bottom = `${d.bottom}%`;
      valve.style.left = `${d.left}%`;
      valve.style.transform = `rotate(${d.rotate}deg)`;
    });
    localStorage.setItem(storageKeys.a4, JSON.stringify(d));
  }
}

if (qwkx81nsq) {
  qwkx81nsq.addEventListener("input", function () {
    btzu9yop(parseInt(this.value));
  });
}

document.addEventListener("DOMContentLoaded", vbmz6twr);
if (document.readyState === "complete" || document.readyState === "interactive") {
  vbmz6twr();
}

window.btzu9yop = btzu9yop;
