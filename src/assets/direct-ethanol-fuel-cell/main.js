//
function setNewValueOfBulbBallGenerator(opacity = null) {
  let rangeInput = document.getElementById("BulbController");

  let ball1delay = opacity !== null ? opacity : rangeInput.value / 100;
  let opacitySliderConnect = document.getElementById("bulbOn");
  let BrightnessDown = document.getElementById("bulb-shadow");

  localStorage.setItem("bulbRangeValue", rangeInput.value);

  if (ball1delay == 0) {
    opacitySliderConnect.style.opacity = "0";
    BrightnessDown.style.opacity = "0";
  } else {
    opacitySliderConnect.style.opacity = ball1delay.toString();

    let InputRangeController = 0.005 + ball1delay * 0.495;
    BrightnessDown.style.opacity = InputRangeController.toFixed(3);
  }
}

document.getElementById("BulbController").addEventListener("input", function () {
  setNewValueOfBulbBallGenerator();
});

let powerSourceGeneratorIndicator = {
  ball3: { element: null, progress: 0 },
  ball4: { element: null, progress: 0 },
  ball5: { element: null, progress: 0 },
  ball6: { element: null, progress: 0 },
};

const ballTypes = {
  ball1: { className: "h-[3%] w-[6%]", src: "./co22.png", interval: 2 },
  ball21: { className: "h-[3%] w-[6%]", src: "./co22.png", interval: 2 },
  ball2: { className: "h-[3%] w-[3%]", src: "./redball2.png", interval: 2 },
  ball22: { className: "h-[3%] w-[3%]", src: "./redball2.png", interval: 2 },
  ball3: { className: "h-[5%] w-[5%]", src: "./greenball1.png", interval: 2 },
  ball31: { className: "h-[5%] w-[5%]", src: "./greenball1.png", interval: 2 },
  ball32: { className: "h-[5%] w-[5%]", src: "./greenball1.png", interval: 2 },
  ball4: { className: "h-[5%] w-[5%]", src: "./greenball1.png", interval: 2 },
  ball41: { className: "h-[5%] w-[5%]", src: "./greenball1.png", interval: 2 },
  ball42: { className: "h-[5%] w-[5%]", src: "./greenball1.png", interval: 2 },
  ball5: { className: "h-[5%] w-[5%]", src: "./greenball1.png", interval: 2 },
  ball51: { className: "h-[5%] w-[5%]", src: "./greenball1.png", interval: 2 },
  ball52: { className: "h-[5%] w-[5%]", src: "./greenball1.png", interval: 2 },
  ball6: { className: "h-[5%] w-[5%]", src: "./greenball1.png", interval: 2 },
  ball61: { className: "h-[5%] w-[5%]", src: "./greenball1.png", interval: 2 },
  ball62: { className: "h-[5%] w-[5%]", src: "./greenball1.png", interval: 2 },
  ball7: { className: "h-[9%] w-[9%]", src: "./yellowball12.png", interval: 2 },
  ball8: { className: "h-[5%] w-[5%]", src: "./yellowball12.png", interval: 2 },
  ball9: { className: "h-[9%] w-[9%]", src: "./yellowball12.png", interval: 2 },
  ball10: { className: "h-[5%] w-[5%]", src: "./yellowball12.png", interval: 2 },
  ball11: { className: "h-[4%] w-[8%]", src: "./green2ball.png", interval: 2 },
  ball12: { className: "h-[3%] w-[3%]", src: "./redball1.png", interval: 2 }, //gfergerg
  ball13: { className: "h-[3%] w-[3%]", src: "./redball1.png", interval: 2 }, //gfergerg
  ball14: { className: "h-[3%] w-[3%]", src: "./h2o.png", interval: 2 },
  ball141: { className: "h-[3%] w-[3%]", src: "./h2o.png", interval: 2 },
  ball142: { className: "h-[3%] w-[3%]", src: "./h2o.png", interval: 2 },
  ball15: { className: "h-[3%] w-[3%]", src: "./h2o.png", interval: 2 },
  ball151: { className: "h-[3%] w-[3%]", src: "./h2o.png", interval: 2 },
  ball152: { className: "h-[3%] w-[3%]", src: "./h2o.png", interval: 2 },
  ball16: { className: "h-[4%] w-[8%]", src: "./green2ball.png", interval: 2 },
};

//
let state = {
  isPlaying: true,
  intervals: new Map(),
  animationFrameId: null,
  elements: {
    heightsAnimationControl: document.getElementById("balls-container"),
    IncreaseOutputSpeed: document.getElementById("toggle-button"),
    buttonText: document.getElementById("button-text"),
    speedControl: document.getElementById("BulbController"),
    opacitySliderConnect: document.getElementById("bulbOn"),
    BrightnessDown: document.getElementById("bulb-shadow"),
    h2Quantity1: document.getElementById("h2_quantity_1"),
    h2Quantity2: document.getElementById("h2_quantity_2"),
    o2Quantity1: document.getElementById("o2_quantity_1"),
  },
  bulbState: false,
};

function trackBallProgress() {
  const ball10IntervalDelayPer10S = document.querySelectorAll(".ball3");
  const ball8IntervalDelayPer5S = document.querySelectorAll(".ball4");
  const ball16IntervalDelayPer6S = document.querySelectorAll(".ball5");
  const ball4IntervalDelayPer10S = document.querySelectorAll(".ball6");

  function estimateProgress(element) {
    if (!element || !element.startTime) return 0;

    const elapsed = Date.now() - element.startTime;
    const duration = getDuration() * 1000;
    return Math.min((elapsed / duration) * 100, 100);
  }

  if (ball10IntervalDelayPer10S.length > 0) powerSourceGeneratorIndicator.ball3.progress = estimateProgress(ball10IntervalDelayPer10S[0]);
  if (ball8IntervalDelayPer5S.length > 0) powerSourceGeneratorIndicator.ball4.progress = estimateProgress(ball8IntervalDelayPer5S[0]);
  if (ball16IntervalDelayPer6S.length > 0) powerSourceGeneratorIndicator.ball5.progress = estimateProgress(ball16IntervalDelayPer6S[0]);
  if (ball4IntervalDelayPer10S.length > 0) powerSourceGeneratorIndicator.ball6.progress = estimateProgress(ball4IntervalDelayPer10S[0]);

  const h2Quantity2Value = parseFloat(localStorage.getItem("h2-quantity-2") || "0");
  const ResetControllerOnCancel = h2Quantity2Value >= 100;

  const rangeController14 = powerSourceGeneratorIndicator.ball3.progress >= 25 && powerSourceGeneratorIndicator.ball3.progress <= 65;
  const rangeController15 = powerSourceGeneratorIndicator.ball4.progress >= 30 && powerSourceGeneratorIndicator.ball4.progress <= 65;
  const rangeController17 = powerSourceGeneratorIndicator.ball5.progress >= 35 && powerSourceGeneratorIndicator.ball5.progress <= 80;
  const rangeController20 = powerSourceGeneratorIndicator.ball6.progress >= 40 && powerSourceGeneratorIndicator.ball6.progress <= 90;

  const OpacityControllerSillicon = rangeController14 || rangeController15 || rangeController17 || rangeController20;

  const rangeValue = parseInt(document.getElementById("BulbController").value);
  if (OpacityControllerSillicon && !ResetControllerOnCancel && rangeValue > 0) {
    if (!state.bulbState && !ResetControllerOnCancel && rangeValue > 0) {
      setNewValueOfBulbBallGenerator(rangeValue / 100);
      state.bulbState = true;
    }
  } else {
    if (ResetControllerOnCancel && state.bulbState) {
      setNewValueOfBulbBallGenerator(0);
      state.bulbState = false;
    }
  }

  state.animationFrameId = requestAnimationFrame(trackBallProgress);
}

function checkResetElementsAndDisableRange() {
  const resetModal = document.getElementById("resetModal");
  const resetBtn = document.getElementById("resetBtn");
  const opacitySliderConnect = document.getElementById("bulbOn");
  const BrightnessDown = document.getElementById("bulb-shadow");
  const heightsAnimationControl = document.getElementById("balls-container");

  const h2Quantity1Value = parseFloat(localStorage.getItem("h2-quantity-1") || "100");

  const isBallNotVisible = resetModal && !resetModal.classList.contains("hidden");
  const ResetControllerOnCancel = h2Quantity1Value <= 0;

  if (resetBtn && resetBtn.classList.contains("hidden")) {
    resetBtn.classList.remove("hidden");
  }

  if (isBallNotVisible || ResetControllerOnCancel) {
    if (opacitySliderConnect) opacitySliderConnect.style.opacity = "0";
    if (BrightnessDown) BrightnessDown.style.opacity = "0";
    state.bulbState = false;
    if (heightsAnimationControl) {
      heightsAnimationControl.classList.add("hidden");
    }
    if (ResetControllerOnCancel && !isBallNotVisible && resetModal) {
      resetModal.classList.remove("hidden");
      bringToaHalt();
    }
  } else {
    if (heightsAnimationControl) {
      heightsAnimationControl.classList.remove("hidden");
    }
  }
}

setInterval(checkResetElementsAndDisableRange, 10);

const resetBtn = document.getElementById("resetBtn");
const resetModal = document.getElementById("resetModal");
const cancelBtn = document.getElementById("cancelBtn");
const confirmResetBtn = document.getElementById("confirmResetBtn");

function resetValues() {
  localStorage.removeItem("timingController");
  localStorage.removeItem("startTime");
  localStorage.removeItem("h2-quantity-1");
  localStorage.removeItem("h2-quantity-2");
  localStorage.removeItem("o2-quantity-1");

  if (state.elements.h2Quantity1) state.elements.h2Quantity1.style.height = "100%";
  if (state.elements.h2Quantity2) state.elements.h2Quantity2.style.height = "0%";
  if (state.elements.o2Quantity1) state.elements.o2Quantity1.style.height = "100%";

  state.bulbState = false;
  setNewValueOfBulbBallGenerator(0);

  controllLiquideFlow();
  updateDuration();
  checkResetElementsAndDisableRange();
}

resetBtn.addEventListener("click", function () {
  resetValues();
  resetModal.classList.add("hidden");
});

confirmResetBtn.addEventListener("click", function () {
  resetValues();
  resetModal.classList.add("hidden");
});
cancelBtn.addEventListener("click", function () {
  resetModal.classList.add("!hidden");
  checkResetElementsAndDisableRange();
});

function controllLiquideFlow() {
  const h2Quantity1 = document.getElementById("h2-quantity-1");
  const h2Quantity2 = document.getElementById("h2-quantity-2");
  const o2Quantity1 = document.getElementById("o2-quantity-1");
  if (!h2Quantity1 || !h2Quantity2 || !o2Quantity1) {
    return;
  }

  state.elements.h2Quantity1 = h2Quantity1;
  state.elements.h2Quantity2 = h2Quantity2;
  state.elements.o2Quantity1 = o2Quantity1;

  const IncreasedDataInPool = localStorage.getItem("bulbRangeValue") || 1;
  const bulbValue = parseInt(IncreasedDataInPool, 10);

  let timingController = 60 - (bulbValue - 1) * (40 / 99);

  let currentH21Height = parseFloat(localStorage.getItem("h2-quantity-1")) || 100;
  let currentH22Height = parseFloat(localStorage.getItem("h2-quantity-2")) || 0;
  let currentO21Height = parseFloat(localStorage.getItem("o2-quantity-1")) || 100;

  let currentProgress = 1 - currentH21Height / 100;

  let newStartTime = Date.now() - currentProgress * timingController * 1000;

  localStorage.setItem("timingController", timingController);
  localStorage.setItem("startTime", newStartTime);

  const newDuration = 12 - ((bulbValue - 1) * (12 - 4)) / 99;
  const durationInMs = newDuration * 1000;

  const AnimationEffex = durationInMs * 1;
  const fourthBatchDelay = AnimationEffex * 3;

  let batch2Started = false;
  let batch4Started = false;

  let batch2StartTime = null;
  let batch4StartTime = null;

  const updateHeights = () => {
    if (!state.elements.h2Quantity1 || !state.elements.h2Quantity2 || !state.elements.o2Quantity1) {
      return;
    }

    let elapsedTime = (Date.now() - newStartTime) / 1000;
    let progress = Math.min(elapsedTime / timingController, 1);

    const currentTime = Date.now();

    if (!batch2Started && currentTime - newStartTime >= AnimationEffex) {
      batch2Started = true;
      batch2StartTime = currentTime;
    }

    if (!batch4Started && currentTime - newStartTime >= fourthBatchDelay) {
      batch4Started = true;
      batch4StartTime = currentTime;
    }

    let new_h2_1_height = 100 - progress * 100;
    new_h2_1_height = Math.max(0, Math.min(100, new_h2_1_height));
    state.elements.h2Quantity1.style.height = `${new_h2_1_height}%`;
    localStorage.setItem("h2-quantity-1", new_h2_1_height);

    if (batch2Started) {
      const timeSinceBatch2 = (currentTime - batch2StartTime) / 1000;
      const batch2Progress = Math.min(timeSinceBatch2 / (timingController * 0.75), 1);

      let new_o2_1_height = 100 - batch2Progress * 80;
      new_o2_1_height = Math.max(20, Math.min(100, new_o2_1_height));
      state.elements.o2Quantity1.style.height = `${new_o2_1_height}%`;
      localStorage.setItem("o2-quantity-1", new_o2_1_height);
    }

    if (batch4Started) {
      const timeSinceBatch4 = (currentTime - batch4StartTime) / 1000;
      const batch4Progress = Math.min(timeSinceBatch4 / (timingController * 0.5), 1);

      let new_h2_2_height = batch4Progress * 60;
      new_h2_2_height = Math.max(0, Math.min(60, new_h2_2_height));
      state.elements.h2Quantity2.style.height = `${new_h2_2_height}%`;
      localStorage.setItem("h2-quantity-2", new_h2_2_height);
    }

    if (new_h2_1_height <= 0) {
      bringToaHalt();

      const resetModal = document.getElementById("resetModal");
      if (resetModal) {
        resetModal.classList.remove("hidden");
      }

      return;
    }

    if (progress < 1) {
      requestAnimationFrame(updateHeights);
    }
  };

  requestAnimationFrame(updateHeights);
}

function getDuration() {
  return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--duration"));
}

function setDuration(value) {
  document.documentElement.style.setProperty("--duration", `${value}s`);
}

function IncreaseHeight(type) {
  const ball = document.createElement("div");
  ball.classList.add("ball", type, ...ballTypes[type].className.split(" "));

  const img = document.createElement("img");
  img.src = ballTypes[type].src;
  img.alt = type;
  ball.appendChild(img);

  state.elements.heightsAnimationControl.appendChild(ball);

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

function bringToaHalt() {
  state.intervals.forEach((interval) => clearInterval(interval));
  state.intervals.clear();

  if (state.animationFrameId) {
    cancelAnimationFrame(state.animationFrameId);
    state.animationFrameId = null;
  }
}

function startIntervals(durationInSeconds) {
  bringToaHalt();
  const totalDuration = durationInSeconds * 1000;

  Object.entries(ballTypes).forEach(([type, config]) => {
    const interval = setInterval(() => IncreaseHeight(type), totalDuration / config.interval);
    state.intervals.set(type, interval);
  });
}

function updateDuration() {
  const speed = parseInt(state.elements.speedControl.value);

  if (speed === 0) {
    bringToaHalt();
    state.elements.heightsAnimationControl.innerHTML = "";

    state.elements.opacitySliderConnect.style.opacity = "0";
    state.elements.BrightnessDown.style.opacity = "0";
    state.bulbState = false;
    return;
  }

  const newDuration = 12 - ((speed - 1) * (12 - 4)) / 99;

  setDuration(newDuration);
  updateBallSpeeds();

  bringToaHalt();
  state.elements.heightsAnimationControl.innerHTML = "";

  state.elements.opacitySliderConnect.style.opacity = "0";
  state.elements.BrightnessDown.style.opacity = "0";
  state.bulbState = false;

  if (window.AnimationStop) {
    clearTimeout(window.AnimationStop);
  }
  if (window.AnimationImprovementsSuccess) {
    clearTimeout(window.AnimationImprovementsSuccess);
  }

  if (window.HeightsAnimationsDecline) {
    clearTimeout(window.HeightsAnimationsDecline);
  }

  if (window.OxygenHydrogenMixture) {
    clearTimeout(window.OxygenHydrogenMixture);
  }

  ["ball11", "ball16"].forEach(IncreaseHeight);

  ["ball11", "ball16"].forEach((type) => {
    const config = ballTypes[type];
    const interval = setInterval(() => IncreaseHeight(type), (newDuration * 1000) / config.interval);
    state.intervals.set(type, interval);
  });

  const durationInMs = newDuration * 1000;

  const AnimationEffex = durationInMs * 1;

  window.AnimationImprovementsSuccess = setTimeout(() => {
    ["ball1", "ball21", "ball22", "ball2", "ball3", "ball31", "ball32", "ball4", "ball41", "ball42", "ball5", "ball51", "ball52", "ball6", "ball61", "ball62", "ball7", "ball8", "ball9", "ball10", "ball12", "ball13"].forEach(IncreaseHeight);

    ["ball1", "ball21", "ball22", "ball2", "ball3", "ball31", "ball32", "ball4", "ball41", "ball42", "ball5", "ball51", "ball52", "ball6", "ball61", "ball62", "ball7", "ball8", "ball9", "ball10", "ball12", "ball13"].forEach((type) => {
      const config = ballTypes[type];
      const interval = setInterval(() => IncreaseHeight(type), (newDuration * 1000) / config.interval);
      state.intervals.set(type, interval);
    });
  }, AnimationEffex);

  window.HeightsAnimationsDecline = setTimeout(() => {
    ["ball14", "ball141", "ball142", "ball15", "ball151", "ball152"].forEach(IncreaseHeight);

    ["ball14", "ball141", "ball142", "ball15", "ball151", "ball152"].forEach((type) => {
      const config = ballTypes[type];
      const interval = setInterval(() => IncreaseHeight(type), (newDuration * 1000) / config.interval);
      state.intervals.set(type, interval);
    });
  }, AnimationEffex * 2);

  window.OxygenHydrogenMixture = setTimeout(() => {}, AnimationEffex * 3);
}
let ChangeControllFlowDuration = null;
state.elements.speedControl.addEventListener("input", () => {
  if (ChangeControllFlowDuration) {
    clearTimeout(ChangeControllFlowDuration);
  }
  ChangeControllFlowDuration = setTimeout(() => {
    updateDuration();
    controllLiquideFlow();
  }, 5);
});
function DecreaseAnimation() {
  if (state.elements.IncreaseOutputSpeed) {
    state.elements.IncreaseOutputSpeed.style.display = "none";
  }
}

function isFirstVisit() {
  return localStorage.getItem("hasVisited") === null;
}

function initializeApp() {
  if (performance.navigation.type === 1) {
    const IncreasedDataInPool = localStorage.getItem("bulbRangeValue");
    if (IncreasedDataInPool !== null) {
      state.elements.speedControl.value = IncreasedDataInPool;
    }

    const currentH21Height = parseFloat(localStorage.getItem("h2-quantity-1")) || 100;
    const currentH22Height = parseFloat(localStorage.getItem("h2-quantity-2")) || 0;
    const currentO21Height = parseFloat(localStorage.getItem("o2-quantity-1")) || 100;

    const currentProgress = 1 - currentH21Height / 100;
    const bulbValue = parseInt(IncreasedDataInPool || "50", 10);
    const timingController = 60 - (bulbValue - 1) * (40 / 99);
    const adjustedStartTime = Date.now() - currentProgress * timingController * 1000;

    localStorage.setItem("timingController", timingController);
    localStorage.setItem("startTime", adjustedStartTime);

    if (state.elements.h2Quantity1) state.elements.h2Quantity1.style.height = `${currentH21Height}%`;
    if (state.elements.h2Quantity2) state.elements.h2Quantity2.style.height = `${currentH22Height}%`;
    if (state.elements.o2Quantity1) state.elements.o2Quantity1.style.height = `${currentO21Height}%`;
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

  setNewValueOfBulbBallGenerator(0);
  updateDuration();
}

window.addEventListener("load", initializeApp);
state.elements.speedControl.addEventListener("mouseup", function () {
  localStorage.setItem("bulbRangeValue", state.elements.speedControl.value);
});

["mouseup", "touchend"].forEach((event) => {
  state.elements.speedControl.addEventListener(event, () => {
    localStorage.setItem("bulbRangeValue", state.elements.speedControl.value);
    location.reload();
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
  k3: "eyJib3R0b20iOiAxMS41NDQ1LCJsZWZ0IjogLTcuNzA2ODQsInJvdGF0ZSI6IDIuNjczMDl9",
  k4: "eyJib3R0b20iOiAxMywibGVmdCI6IC00LCJyb3RhdGUiOiA5MH0=",
  k5: "eyJib3R0b20iOiA5Mi44MTQsImxlZnQiOiA5OS41LCJyb3RhdGUiOiAtMC45fQ==",
  k6: "eyJib3R0b20iOiA5NC4yLCJsZWZ0IjogOTYuNSwicm90YXRlIjogLTkwfQ==",
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
