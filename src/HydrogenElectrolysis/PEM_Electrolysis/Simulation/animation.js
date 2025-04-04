function initializeBalls() {
  const storedVoltValue = localStorage.getItem("currentVoltValue");
  let duration = 10;
  if (storedVoltValue === "0" || !storedVoltValue) {
    document.documentElement.style.setProperty("--duration", "10s");
  } else {
    const voltValue = parseInt(storedVoltValue);
    if (voltValue >= 1 && voltValue <= 25) {
      duration = 10 - (voltValue - 1) * (7 / 24);
      document.documentElement.style.setProperty("--duration", `${duration}s`);
    }
  }
  const h2oClassName = "BLUE_H2O_BALL moveBlueH2OBalls";
  const h2oSrc = "../../../assets/H2O.png";
  const h2oWidth = "!w-[10%] sm:!w-[18%]";
  const h2oSelector = ".BLUE_H2O_BALLS_ANIMATIONS";
  const ooClassName = "BLUE_OO_BALL moveBlueOOBalls";
  const ooSrc = "../../../assets/OO.png";
  const ooWidth = "!w-[10%] sm:!w-[14%]";
  const ooSelector = ".BLUE_OO_BALLS_ANIMATIONS";
  const eplusClassName = "GREEN_E_PLUS_BALL moveGreenEPlusBalls";
  const eplusSrc = "../../../assets/E+.png";
  const eplusWidth = "!w-[10%] sm:!w-[13%]";
  const eplusSelector = ".GREEN_E_PLUS_BALLS_ANIMATIONS";
  const h2ClassName = "RED_H2_BALL moveRedH2Balls";
  const h2Src = "../../../assets/HH.png";
  const h2Width = "!w-[10%] sm:!w-[14%]";
  const h2Selector = ".RED_H2_BALLS_ANIMATIONS";
  const h24ClassName = "ORANGE_H2_BALL";
  const h24Src = "../../../assets/h24.png";
  const h24Width = "!w-[90%]";
  const h24Selector = ".ORANGE_H2_BALL_SANIMATIONS";
  function createBall(type, hide = false) {
    let className, src, width, selector;
    switch (type) {
      case "h2o":
        className = h2oClassName;
        src = h2oSrc;
        width = h2oWidth;
        selector = h2oSelector;
        break;
      case "oo":
        className = ooClassName;
        src = ooSrc;
        width = ooWidth;
        selector = ooSelector;
        break;
      case "eplus":
        className = eplusClassName;
        src = eplusSrc;
        width = eplusWidth;
        selector = eplusSelector;
        break;
      case "h2":
        className = h2ClassName;
        src = h2Src;
        width = h2Width;
        selector = h2Selector;
        break;
      case "h24":
        className = h24ClassName;
        src = h24Src;
        width = h24Width;
        selector = h24Selector;
        break;
      default:
        console.error(`Unknown type: ${type}`);
        return;
    }
    const container = document.querySelector(selector);
    if (!container) {
      console.error(`Container not found for selector: ${selector}`);
      return;
    }
    const existingBalls = container.querySelectorAll(`.${className}`);
    existingBalls.forEach((ball) => ball.remove());
    const ball = document.createElement("div");
    ball.className = className;
    ball.innerHTML = `<img src="${src}" alt="${type}" class="${width} h-auto" />`;
    if (hide) {
      ball.classList.add("hidden");
    }
    ball.addEventListener("animationend", () => {
      ball.remove();
    });
    container.appendChild(ball);
  }
  const durationMs = duration * 1000;
  createBall("h2o", false);
  setInterval(() => createBall("h2o", false), durationMs / 5);
  createBall("oo", true);
  createBall("eplus", true);
  createBall("h2", true);
  createBall("h24", true);
  const intervals = {
    oo: durationMs / 2.5,
    eplus: durationMs / 12,
    h2: durationMs / 5,
    h24: durationMs / 5,
  };
  setTimeout(() => {
    createBall("oo", false);
    createBall("eplus", false);
    createBall("h2", false);
    createBall("h24", false);
    Object.entries(intervals).forEach(([type, interval]) => {
      setInterval(() => createBall(type, false), Math.round(interval));
    });
  }, duration * 1000);
}
const resetBtn = document.querySelector(".resetBtn");
if (resetBtn) {
  const animationClasses = [".ORANGE_H2_BALL_SANIMATIONS", ".BLUE_H2O_BALLS_ANIMATIONS", ".BLUE_OO_BALLS_ANIMATIONS", ".GREEN_E_PLUS_BALLS_ANIMATIONS", ".RED_H2_BALLS_ANIMATIONS"];
  setInterval(() => {
    if (!resetBtn.classList.contains("hidden")) {
      animationClasses.forEach((className) => {
        const element = document.querySelector(className);
        if (element) {
          element.classList.add("!hidden");
        }
      });
    } else {
      animationClasses.forEach((className) => {
        const element = document.querySelector(className);
        if (element) {
          element.classList.remove("!hidden");
        }
      });
    }
  }, 1);
}
function setHeights() {
  const h2odivElement = document.getElementById("h2o-quantity");
  const h2o2divElement = document.getElementById("h2o-2-quantity");
  const h2divElement = document.getElementById("h2-quantity");
  const o2divElement = document.getElementById("o2-quantity");
  let h2oHeight = parseFloat(localStorage.getItem("h2oHeight") || "100");
  let h2o2Height = parseFloat(localStorage.getItem("h2o2Height") || "0");
  let h2Height = parseFloat(localStorage.getItem("h2Height") || "0");
  let o2Height = parseFloat(localStorage.getItem("o2Height") || "0");
  const currentVoltValue_ = parseInt(localStorage.getItem("currentVoltValue"));
  if (localStorage.getItem("currentVoltValue") === "0") {
    h2odivElement.setAttribute("height", h2oHeight + "%");
    h2odivElement.setAttribute("style", "height:" + h2oHeight + "%");
    h2divElement.setAttribute("height", h2Height + "%");
    h2divElement.setAttribute("style", "height:" + h2Height + "%");
    o2divElement.setAttribute("height", o2Height + "%");
    o2divElement.setAttribute("style", "height:" + o2Height + "%");
    h2o2divElement.setAttribute("height", h2o2Height + "%");
    h2o2divElement.setAttribute("style", "height:" + h2o2Height + "%");
  } else {
    h2oHeight -= 100 / (60 - currentVoltValue_);
    h2o2Height += 80 / (60 - currentVoltValue_);
    h2Height += 100 / (60 - currentVoltValue_);
    o2Height += 100 / (60 - currentVoltValue_) / 2;
    h2oHeight = Math.max(0, h2oHeight);
    h2Height = Math.min(100, h2Height);
    o2Height = Math.min(50, o2Height);
    h2o2Height = Math.min(100, h2o2Height);
    localStorage.setItem("h2oHeight", h2oHeight.toString());
    localStorage.setItem("h2Height", h2Height.toString());
    localStorage.setItem("o2Height", o2Height.toString());
    localStorage.setItem("h2o2Height", h2o2Height.toString());
    h2odivElement.setAttribute("height", h2oHeight + "%");
    h2odivElement.setAttribute("style", "height:" + h2oHeight + "%");
    h2divElement.setAttribute("height", h2Height + "%");
    h2divElement.setAttribute("style", "height:" + h2Height + "%");
    o2divElement.setAttribute("height", o2Height + "%");
    o2divElement.setAttribute("style", "height:" + o2Height + "%");
    h2o2divElement.setAttribute("height", h2o2Height + "%");
    h2o2divElement.setAttribute("style", "height:" + h2o2Height + "%");
    if (h2oHeight <= 0) {
      clearInterval(window._heightInterval);
      const resetModal = document.getElementById("resetModal");
      resetModal.classList.remove("hidden");
      resetBtn.classList.remove("hidden");
    }
  }
  const currentVoltValue = parseInt(localStorage.getItem("currentVoltValue") || "0");
  if (currentVoltValue === 22 && h2Height === 100 && h2oHeight === 0 && o2Height === 50 && h2o2Height === 0) {
    localStorage.setItem("currentVoltValue", "12");
    location.reload();
  }
}
if (window._heightInterval) {
  clearInterval(window._heightInterval);
}
window._heightInterval = setInterval(setHeights, 1000);
function setupResetModal() {
  const confirmResetBtn = document.getElementById("confirmResetBtn");
  const resetBtn = document.getElementById("resetBtn");
  const cancelBtn = document.getElementById("cancelBtn");
  const resetModal = document.getElementById("resetModal");
  const reloadAfterReset = () => {
    setTimeout(() => {
      window.location.reload();
    }, 0.1);
  };
  resetBtn.addEventListener("click", reloadAfterReset);
  confirmResetBtn.addEventListener("click", reloadAfterReset);
  resetBtn.addEventListener("click", () => {
    resetBtn.classList.add("hidden");
    resetModal.classList.add("hidden");
    localStorage.setItem("h2oHeight", "100");
    localStorage.setItem("h2Height", "0");
    localStorage.setItem("o2Height", "0");
    localStorage.setItem("h2o2Height", "0");
    const h2odivElement = document.getElementById("h2o-quantity");
    const h2divElement = document.getElementById("h2-quantity");
    const o2divElement = document.getElementById("o2-quantity");
    const h2o2divElement = document.getElementById("h2o-2-quantity");
    h2odivElement.setAttribute("height", 100 + "%");
    h2odivElement.setAttribute("style", "height:" + 100 + "%");
    h2divElement.setAttribute("height", 0 + "%");
    h2divElement.setAttribute("style", "height:" + 0 + "%");
    o2divElement.setAttribute("height", 0 + "%");
    o2divElement.setAttribute("style", "height:" + 0 + "%");
    h2o2divElement.setAttribute("height", 0 + "%");
    h2o2divElement.setAttribute("style", "height:" + 0 + "%");
    if (window._heightInterval) {
      clearInterval(window._heightInterval);
    }
    window._heightInterval = setInterval(setHeights, 1000);
  });
  confirmResetBtn.addEventListener("click", () => {
    resetBtn.classList.add("hidden");
    resetModal.classList.add("hidden");
    localStorage.setItem("h2oHeight", "100");
    localStorage.setItem("h2Height", "0");
    localStorage.setItem("o2Height", "0");
    localStorage.setItem("h2o2Height", "0");
    const h2odivElement = document.getElementById("h2o-quantity");
    const h2divElement = document.getElementById("h2-quantity");
    const o2divElement = document.getElementById("o2-quantity");
    const h2o2divElement = document.getElementById("h2o-2-quantity");
    h2odivElement.setAttribute("height", 100 + "%");
    h2odivElement.setAttribute("style", "height:" + 100 + "%");
    h2divElement.setAttribute("height", 0 + "%");
    h2divElement.setAttribute("style", "height:" + 0 + "%");
    o2divElement.setAttribute("height", 0 + "%");
    o2divElement.setAttribute("style", "height:" + 0 + "%");
    h2o2divElement.setAttribute("height", 0 + "%");
    h2o2divElement.setAttribute("style", "height:" + 0 + "%");
    if (window._heightInterval) {
      clearInterval(window._heightInterval);
    }
    window._heightInterval = setInterval(setHeights, 1000);
  });
  cancelBtn.addEventListener("click", () => {
    resetModal.classList.add("hidden");
    resetBtn?.classList.remove("hidden");
    resetBtn?.addEventListener("click", () => {
      const h2odivElement = document.getElementById("h2o-quantity");
      const h2divElement = document.getElementById("h2-quantity");
      const o2divElement = document.getElementById("o2-quantity");
      const h2o2divElement = document.getElementById("h2o-2-quantity");
      h2odivElement.setAttribute("height", 100 + "%");
      h2odivElement.setAttribute("style", "height:" + 100 + "%");
      h2divElement.setAttribute("height", 0 + "%");
      h2divElement.setAttribute("style", "height:" + 0 + "%");
      o2divElement.setAttribute("height", 0 + "%");
      o2divElement.setAttribute("style", "height:" + 0 + "%");
      h2o2divElement.setAttribute("height", 0 + "%");
      h2o2divElement.setAttribute("style", "height:" + 0 + "%");
      if (window._heightInterval) {
        clearInterval(window._heightInterval);
      }
      window._heightInterval = setInterval(setHeights, 1000);
    });
  });
}
function initializeSunRaysController() {
  const sunRaysControllerDiv = document.querySelector(".sunRaysController");
  let maxVolts = 25;
  let currentVoltValue = localStorage.getItem("currentVoltValue");
  currentVoltValue = currentVoltValue ? parseInt(currentVoltValue) : maxVolts / 2;
  let currentValue = (currentVoltValue / maxVolts) * 100;
  const inputRangeHTML = `<input type="range" min="0" max="100" value="${currentValue}" id="sunRaysController" />`;
  sunRaysControllerDiv.insertAdjacentHTML("beforeend", inputRangeHTML);
  const sunRaysController = document.getElementById("sunRaysController");
  sunRaysController.onmouseup = () => {
    location.reload();
  };
  const voltCount = document.querySelector(".VOLT_COUNT");
  const styleElement = document.createElement("style");
  document.head.appendChild(styleElement);
  const voltLow = document.querySelector(".VOLT_LOW");
  const voltHigh = document.querySelector(".VOLT_HIGH");
  if (voltLow) voltLow.textContent = "0 %";
  if (voltHigh) voltHigh.textContent = "100 %";
  // if (voltHigh) voltHigh.textContent = `${maxVolts} %`;
  const animationClasses = [".ORANGE_H2_BALL_SANIMATIONS", ".BLUE_H2O_BALLS_ANIMATIONS", ".BLUE_OO_BALLS_ANIMATIONS", ".GREEN_E_PLUS_BALLS_ANIMATIONS", ".RED_H2_BALLS_ANIMATIONS"];
  function toggleAnimations(voltValue) {
    animationClasses.forEach((className) => {
      const element = document.querySelector(className);
      if (element) {
        if (voltValue === 0) {
          element.classList.add("hidden");
        } else {
          element.classList.remove("hidden");
        }
      }
    });
  }
  function updateSunRaysColor() {
    const value = sunRaysController.value;
    const voltCountValue = Math.floor((value / 100) * maxVolts);
    localStorage.setItem("currentVoltValue", voltCountValue);
    if (voltCount) {
      voltCount.textContent = `${voltCountValue}V`;
    }
    const opacity = value / 100;
    styleElement.textContent = `
    .SUN_RAYS {
      opacity: ${opacity};
      }
      `;
    toggleAnimations(voltCountValue);
  }
  toggleAnimations(currentVoltValue);
  updateSunRaysColor();
  sunRaysController.addEventListener("input", updateSunRaysColor);
}
document.addEventListener("DOMContentLoaded", () => {
  let h2oHeight = parseFloat(localStorage.getItem("h2oHeight"));
  if (isNaN(h2oHeight)) {
    localStorage.setItem("currentVoltValue", "12");
    localStorage.setItem("h2oHeight", "100");
    localStorage.setItem("h2Height", "0");
    localStorage.setItem("o2Height", "0");
    localStorage.setItem("h2o2Height", "0");
  }
  initializeBalls();
  setHeights();
  initializeSunRaysController();
  setupResetModal();
});
async function getHeightsForVoltage(voltage) {
  const response = await fetch("path/to/prompt.md");
  const text = await response.text();
  const lines = text.split("\n");
  const headers = lines[0].split("\t");
  const voltIndex = headers.indexOf("Current Volts");
  const h2oIndex = headers.indexOf("H2O Height (%)");
  const h2o2Index = headers.indexOf("H2O2 Height (%)");
  const h2Index = headers.indexOf("H2 Height (%)");
  const o2Index = headers.indexOf("O2 Height (%)");
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split("\t");
    if (parseInt(cols[voltIndex], 10) === voltage) {
      return {
        h2oHeight: parseFloat(cols[h2oIndex]),
        h2o2Height: parseFloat(cols[h2o2Index]),
        h2Height: parseFloat(cols[h2Index]),
        o2Height: parseFloat(cols[o2Index]),
      };
    }
  }
  return {
    h2oHeight: 100.0,
    h2o2Height: 0.0,
    h2Height: 0.0,
    o2Height: 0.0,
  };
}
