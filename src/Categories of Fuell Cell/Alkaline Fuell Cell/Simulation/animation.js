
// function dfgdergerthgrthrytjunytuj(opacity = null) {
//   let rangeInput = document.getElementById("hrtherthrgdgertgyerhyrthrtge");

//   let opacityValue = opacity !== null ? opacity : rangeInput.value / 100;
//   let ufuhgdhfisdfjosjfudufgufoisjfojidhid = document.getElementById("dfhgdfhsgdfghsderhrt");
//   let ghfhfgjkjktgyjghxfgdfgfhgfjhhtrfgdfg = document.getElementById("dfghfdgsasdegertghrteg");

//   localStorage.setItem("fdgdghetrgedsfgdsffg", rangeInput.value);

//   if (opacityValue == 0) {
//     ufuhgdhfisdfjosjfudufgufoisjfojidhid.style.opacity = "0";
//     ghfhfgjkjktgyjghxfgdfgfhgfjhhtrfgdfg.style.opacity = "0";
//   } else {
//     ufuhgdhfisdfjosjfudufgufoisjfojidhid.style.opacity = opacityValue.toString();


//     let shadowOpacity = 0.005 + opacityValue * 0.495;
//     ghfhfgjkjktgyjghxfgdfgfhgfjhhtrfgdfg.style.opacity = shadowOpacity.toFixed(3);
//   }
// }

// let rafId = null;

// function dfgdergerthgrthrytjunytuj(opacity = null) {
//   const rangeInput = document.getElementById("hrtherthrgdgertgyerhyrthrtge");
//   const bulb = document.getElementById("dfhgdfhsgdfghsderhrt");
//   const shadow = document.getElementById("dfghfdgsasdegertghrteg");

//   const opacityValue = opacity !== null ? opacity : rangeInput.value / 100;
//   localStorage.setItem("fdgdghetrgedsfgdsffg", rangeInput.value);

//   // Add smooth transitions
//   bulb.style.transition = "opacity 0.2s ease-in-out";
//   shadow.style.transition = "opacity 0.2s ease-in-out";

//   // Cancel previous frame if still queued
//   if (rafId) {
//     cancelAnimationFrame(rafId);
//   }

//   rafId = requestAnimationFrame(() => {
//     if (opacityValue === 0) {
//       bulb.style.opacity = "0";
//       shadow.style.opacity = "0";
//     } else {
//       const bulbOpacity = opacityValue.toString();
//       const shadowOpacity = (0.005 + opacityValue * 0.495).toFixed(3);

//       bulb.style.opacity = bulbOpacity;
//       shadow.style.opacity = shadowOpacity;
//     }
//   });
// }

let rafId = null;

function dfgdergerthgrthrytjunytuj(opacity = null) {
  const rangeInput = document.getElementById("hrtherthrgdgertgyerhyrthrtge");
  const bulb = document.getElementById("dfhgdfhsgdfghsderhrt");
  const shadow = document.getElementById("dfghfdgsasdegertghrteg");

  // Always save the current range value
  localStorage.setItem("fdgdghetrgedsfgdsffg", rangeInput.value);

  // Cancel previous frame if still queued
  if (rafId) {
    cancelAnimationFrame(rafId);
  }

  rafId = requestAnimationFrame(() => {
    if (opacity === null) {
      // Called from slider – don't glow
      bulb.style.opacity = "0";
      shadow.style.opacity = "0";
    } else {
      // Called intentionally – glow with given opacity
      const glowLevel = Math.min(Math.max(opacity, 0), 1); // Clamp 0-1
      bulb.style.transition = "opacity 0.2s ease-in-out";
      shadow.style.transition = "opacity 0.2s ease-in-out";
      bulb.style.opacity = glowLevel.toString();
      shadow.style.opacity = (0.005 + glowLevel * 0.495).toFixed(3);
    }
  });
}




document.getElementById("hrtherthrgdgertgyerhyrthrtge").addEventListener("input", function () {
  dfgdergerthgrthrytjunytuj();
});


let dejgnhjertngmnfgnoirehfglkerngslkjfgsjfoifsdn = {
  ball3: { element: null, progress: 0 },
  ball4: { element: null, progress: 0 },
  ball5: { element: null, progress: 0 },
  ball6: { element: null, progress: 0 }
};


const ballTypes = {
  ball1: { className: "h-[3%] w-[6%]", src: "../../../assets/blueball2.png", interval: 2 },
  ball2: { className: "h-[3%] w-[3%]", src: "../../../assets/redball2.png", interval: 2 },
  ball3: { className: "h-[5%] w-[5%]", src: "../../../assets/greenball1.png", interval: 2 },
  ball4: { className: "h-[5%] w-[5%]", src: "../../../assets/greenball1.png", interval: 2 },
  ball5: { className: "h-[5%] w-[5%]", src: "../../../assets/greenball1.png", interval: 2 },
  ball6: { className: "h-[5%] w-[5%]", src: "../../../assets/greenball1.png", interval: 2 },
  ball7: { className: "h-[8%] w-[8%] min-w-[20px] min-h-[20px]", src: "../../../assets/OH-Photoroom.png", interval: 2 },
  ball8: { className: "h-[8%] w-[8%] min-w-[20px] min-h-[20px]", src: "../../../assets/OH-Photoroom.png", interval: 2 },
  ball9: { className: "h-[8%] w-[8%] min-w-[20px] min-h-[20px]", src: "../../../assets/OH-Photoroom.png", interval: 2 },
  ball10: { className: "h-[8%] w-[8%] min-w-[20px] min-h-[20px]", src: "../../../assets/OH-Photoroom.png", interval: 2 },
  ball11: { className: "h-[3%] w-[6%]", src: "../../../assets/blueball2.png", interval: 2 },
  ball12: { className: "h-[3%] w-[3%]", src: "../../../assets/redball1.png", interval: 2 },
  ball13: { className: "h-[3%] w-[3%]", src: "../../../assets/redball1.png", interval: 2 },
  ball14: { className: "h-[3%] w-[3%]", src: "../../../assets/2blue1red2.png", interval: 4 },
  ball15: { className: "h-[3%] w-[3%]", src: "../../../assets/2blue1red2.png", interval: 4 },
  ball16: { className: "h-[3%] w-[6%]", src: "../../../assets/blueball2.png", interval: 2 }
};


let state = {
  isPlaying: true,
  intervals: new Map(),
  animationFrameId: null,
  elements: {
    gnerjlkgnhoierghoerhguorhfgjhsdjhfgs: document.getElementById("dfghdfssdfgasdfgsdghergrsaf"),
    ohjudeghsjfgksdjfisdfhgfjdsghsdisifj: document.getElementById("sdfgsdergergherghergherg"),
    rsrgjhklrhgjslkdhfgasdhfgljksdhfgksd: document.getElementById("rsfgresdgerfgwergfregergerg"),
    djfgdfjlghisdfjhgisdfjhgoisdigsgfids: document.getElementById("hrtherthrgdgertgyerhyrthrtge"),
    ufuhgdhfisdfjosjfudufgufoisjfojidhid: document.getElementById("dfhgdfhsgdfghsderhrt"),
    ghfhfgjkjktgyjghxfgdfgfhgfjhhtrfgdfg: document.getElementById("dfghfdgsasdegertghrteg"),
    fghhergfsdfdhgtjtrjhytrjrytjtrhergtt: document.getElementById("fdgdergwergergwerfwefwefwe"),
    regrthtrjuytjuytjhdfgsdfsefefrwefgre: document.getElementById("rfgergertghrthrytjhytjkytukjhr"),
    rtjtyjufhdfgsdfgsdfergerhtrhtrjhryth: document.getElementById("gertghrthrytjytjkhdfgsdfsd")
  },
  rtfhrtfhrgdsgdfsgehetrghreghsertgegegf: false
};



function yhrthrtghergwerferghrthrytjhytrj() {

  const efrgerfgerjigjerij = document.querySelectorAll(".ball3");
  const rtghertghertjhyrtj = document.querySelectorAll(".ball4");
  const dfghtrthrtgfdsfsdf = document.querySelectorAll(".ball5");
  const tyjytjrfhdfgsdfgrg = document.querySelectorAll(".ball6");


  function estimateProgress(element) {
    if (!element || !element.startTime) return 0;

    const elapsed = Date.now() - element.startTime;
    const duration = getDuration() * 1000;
    return Math.min(elapsed / duration * 100, 100);
  }


  if (efrgerfgerjigjerij.length > 0) dejgnhjertngmnfgnoirehfglkerngslkjfgsjfoifsdn.ball3.progress = estimateProgress(efrgerfgerjigjerij[0]);
  if (rtghertghertjhyrtj.length > 0) dejgnhjertngmnfgnoirehfglkerngslkjfgsjfoifsdn.ball4.progress = estimateProgress(rtghertghertjhyrtj[0]);
  if (dfghtrthrtgfdsfsdf.length > 0) dejgnhjertngmnfgnoirehfglkerngslkjfgsjfoifsdn.ball5.progress = estimateProgress(dfghtrthrtgfdsfsdf[0]);
  if (tyjytjrfhdfgsdfgrg.length > 0) dejgnhjertngmnfgnoirehfglkerngslkjfgsjfoifsdn.ball6.progress = estimateProgress(tyjytjrfhdfgsdfgrg[0]);


  const regrthtrjuytjuytjhdfgsdfsefefrwefgreValue = parseFloat(localStorage.getItem("edgoejgoijrogojfgjiihh") || "0");
  const isReactionComplete = regrthtrjuytjuytjhdfgsdfsefefrwefgreValue >= 30;


  const ergergergrgvf = dejgnhjertngmnfgnoirehfglkerngslkjfgsjfoifsdn.ball3.progress >= 25 && dejgnhjertngmnfgnoirehfglkerngslkjfgsjfoifsdn.ball3.progress <= 65;
  const gthdertgerger = dejgnhjertngmnfgnoirehfglkerngslkjfgsjfoifsdn.ball4.progress >= 30 && dejgnhjertngmnfgnoirehfglkerngslkjfgsjfoifsdn.ball4.progress <= 65;
  const rytjthdghghrg = dejgnhjertngmnfgnoirehfglkerngslkjfgsjfoifsdn.ball5.progress >= 35 && dejgnhjertngmnfgnoirehfglkerngslkjfgsjfoifsdn.ball5.progress <= 80;
  const erhrtjhhrthrt = dejgnhjertngmnfgnoirehfglkerngslkjfgsjfoifsdn.ball6.progress >= 40 && dejgnhjertngmnfgnoirehfglkerngslkjfgsjfoifsdn.ball6.progress <= 90;

  const dergergegerg = ergergergrgvf || gthdertgerger || rytjthdghghrg || erhrtjhhrthrt;


  const gerignkerggigi = parseInt(document.getElementById("hrtherthrgdgertgyerhyrthrtge").value);

  if (dergergegerg && !isReactionComplete && gerignkerggigi > 0) {

    if (!state.rtfhrtfhrgdsgdfsgehetrghreghsertgegegf && !isReactionComplete && gerignkerggigi > 0) {
      dfgdergerthgrthrytjunytuj(gerignkerggigi / 100);
      state.rtfhrtfhrgdsgdfsgehetrghreghsertgegegf = true;

    }
  } else {




    if (isReactionComplete && state.rtfhrtfhrgdsgdfsgehetrghreghsertgegegf) {
      dfgdergerthgrthrytjunytuj(0);
      state.rtfhrtfhrgdsgdfsgehetrghreghsertgegegf = false;

    }
  }


  state.animationFrameId = requestAnimationFrame(yhrthrtghergwerferghrthrytjhytrj);
}

function checkResetElementsAndDisableRange() {
  const resetModal = document.getElementById("resetModal");
  const resetBtn = document.getElementById("resetBtn");
  const ufuhgdhfisdfjosjfudufgufoisjfojidhid = document.getElementById("dfhgdfhsgdfghsderhrt");
  const ghfhfgjkjktgyjghxfgdfgfhgfjhhtrfgdfg = document.getElementById("dfghfdgsasdegertghrteg");
  const gnerjlkgnhoierghoerhguorhfgjhsdjhfgs = document.getElementById("dfghdfssdfgasdfgsdghergrsaf");


  const regrthtrjuytjuytjhdfgsdfsefefrwefgreValue = parseFloat(localStorage.getItem("edgoejgoijrogojfgjiihh") || "0");


  const isResetModalVisible = resetModal && !resetModal.classList.contains("hidden");
  const isReactionComplete = regrthtrjuytjuytjhdfgsdfsefefrwefgreValue >= 30;


  if (resetBtn && resetBtn.classList.contains("hidden")) {
    resetBtn.classList.remove("hidden");
  }


  if (isResetModalVisible || isReactionComplete) {

    if (ufuhgdhfisdfjosjfudufgufoisjfojidhid) ufuhgdhfisdfjosjfudufgufoisjfojidhid.style.opacity = "0";
    if (ghfhfgjkjktgyjghxfgdfgfhgfjhhtrfgdfg) ghfhfgjkjktgyjghxfgdfgfhgfjhhtrfgdfg.style.opacity = "0";
    state.rtfhrtfhrgdsgdfsgehetrghreghsertgegegf = false;


    if (gnerjlkgnhoierghoerhguorhfgjhsdjhfgs) {
      gnerjlkgnhoierghoerhguorhfgjhsdjhfgs.classList.add("hidden");
    }


    if (isReactionComplete && !isResetModalVisible && resetModal) {
      resetModal.classList.remove("hidden");
      stopIntervals();
    }
  } else {

    if (gnerjlkgnhoierghoerhguorhfgjhsdjhfgs) {
      gnerjlkgnhoierghoerhguorhfgjhsdjhfgs.classList.remove("hidden");
    }
  }
}
setInterval(checkResetElementsAndDisableRange, 10);

const resetBtn = document.getElementById("resetBtn");
const resetModal = document.getElementById("resetModal");
const hgdfghdsghdehgehtersdgdetsegdf = document.getElementById("hgdfghdsghdehgehtersdgdetsegdf");
const ergsgergergrthrthytjytjytjytjj = document.getElementById("ergsgergergrthrthytjytjytjytjj");

resetBtn.addEventListener("click", function () {

  localStorage.removeItem("werfwergergertgtrhrthe");
  localStorage.removeItem("grerikgjoierjgosdfjfij");
  localStorage.removeItem("egefrokgoskdfgoksdofoo");
  localStorage.removeItem("edgoejgoijrogojfgjiihh");
  localStorage.removeItem("eriofgjierjgjsdijdsffd");
  // ✅ Stop the existing interval (if it's running)
  // Clear any running fill interval
  if (window.fillIntervalId) {
    clearInterval(window.fillIntervalId);
    window.fillIntervalId = null;
  }

  // Reset height immediately
  fillHeight = 0;
  fillDiv.style.height = "0%";

  // Restart fill after short delay
  // setTimeout(() => {
  //   fillContainer();
  // }, 32000);



  const fillDelay = getFillContainerDelay();
  setTimeout(() => {
    fillContainer();
  }, fillDelay);

  resetModal.classList.add("hidden");


  if (state.elements.fghhergfsdfdhgtjtrjhytrjrytjtrhergtt) state.elements.fghhergfsdfdhgtjtrjhytrjrytjtrhergtt.style.height = "100%";
  if (state.elements.regrthtrjuytjuytjhdfgsdfsefefrwefgre) state.elements.regrthtrjuytjuytjhdfgsdfsefefrwefgre.style.height = "0%";
  if (state.elements.rtjtyjufhdfgsdfgsdfergerhtrhtrjhryth) state.elements.rtjtyjufhdfgsdfgsdfergerhtrhtrjhryth.style.height = "100%";


  state.rtfhrtfhrgdsgdfsgehetrghreghsertgegegf = false;
  dfgdergerthgrthrytjunytuj(0);


  controllLiquideFlow();


  updateDuration();

  checkResetElementsAndDisableRange();
});

hgdfghdsghdehgehtersdgdetsegdf.addEventListener("click", function () {
  resetModal.classList.add("!hidden");


  checkResetElementsAndDisableRange();
});

ergsgergergrthrthytjytjytjytjj.addEventListener("click", function () {

  localStorage.removeItem("werfwergergertgtrhrthe");
  localStorage.removeItem("grerikgjoierjgosdfjfij");
  localStorage.removeItem("egefrokgoskdfgoksdofoo");
  localStorage.removeItem("edgoejgoijrogojfgjiihh");
  localStorage.removeItem("eriofgjierjgjsdijdsffd");

  if (window.fillIntervalId) {
    clearInterval(window.fillIntervalId);
    window.fillIntervalId = null;
  }


  const fillDiv = document.getElementById("h2-quantity-2");
  fillDiv.style.height = "0%";

  // setTimeout(() => {
  //   fillContainer();
  // }, 33000);

  const fillDelay = getFillContainerDelay();
  setTimeout(() => {
    fillContainer();
  }, fillDelay);
  resetModal.classList.add("hidden");


  if (state.elements.fghhergfsdfdhgtjtrjhytrjrytjtrhergtt) state.elements.fghhergfsdfdhgtjtrjhytrjrytjtrhergtt.style.height = "100%";
  if (state.elements.regrthtrjuytjuytjhdfgsdfsefefrwefgre) state.elements.regrthtrjuytjuytjhdfgsdfsefefrwefgre.style.height = "0%";
  if (state.elements.rtjtyjufhdfgsdfgsdfergerhtrhtrjhryth) state.elements.rtjtyjufhdfgsdfgsdfergerhtrhtrjhryth.style.height = "100%";


  state.rtfhrtfhrgdsgdfsgehetrghreghsertgegegf = false;
  dfgdergerthgrthrytjunytuj(0);


  controllLiquideFlow();


  updateDuration();

  checkResetElementsAndDisableRange();
});

const controllLiquideFlow = () => {

  const fghhergfsdfdhgtjtrjhytrjrytjtrhergtt = document.getElementById("fdgdergwergergwerfwefwefwe");
  const regrthtrjuytjuytjhdfgsdfsefefrwefgre = document.getElementById("rfgergertghrthrytjhytjkytukjhr");
  const rtjtyjufhdfgsdfgsdfergerhtrhtrjhryth = document.getElementById("gertghrthrytjytjkhdfgsdfsd");


  if (!fghhergfsdfdhgtjtrjhytrjrytjtrhergtt || !regrthtrjuytjuytjhdfgsdfsefefrwefgre || !rtjtyjufhdfgsdfgsdfergerhtrhtrjhryth) {
    console.warn('Required elements not found. Skipping liquid flow control.');
    return;
  }


  state.elements.fghhergfsdfdhgtjtrjhytrjrytjtrhergtt = fghhergfsdfdhgtjtrjhytrjrytjtrhergtt;
  state.elements.regrthtrjuytjuytjhdfgsdfsefefrwefgre = regrthtrjuytjuytjhdfgsdfsefefrwefgre;
  state.elements.rtjtyjufhdfgsdfgsdfergerhtrhtrjhryth = rtjtyjufhdfgsdfgsdfergerhtrhtrjhryth;

  const savedValue = localStorage.getItem("fdgdghetrgedsfgdsffg") || 1;
  const bulbValue = parseInt(savedValue, 10);


  let gijrijfijodkoskdokvfcdi = 60 - ((bulbValue - 1) * (40 / 99));
  localStorage.setItem("gijrijfijodkoskdokvfcdi", gijrijfijodkoskdokvfcdi);

  let savedStartTime = localStorage.getItem("grerikgjoierjgosdfjfij");
  let startTime = savedStartTime ? parseFloat(savedStartTime) : Date.now();

  localStorage.setItem("grerikgjoierjgosdfjfij", startTime);

  const updateHeights = () => {
    if (!state.elements.fghhergfsdfdhgtjtrjhytrjrytjtrhergtt || !state.elements.regrthtrjuytjuytjhdfgsdfsefefrwefgre || !state.elements.rtjtyjufhdfgsdfgsdfergerhtrhtrjhryth) {
      return;
    }

    let elapsedTime = (Date.now() - startTime) / 1000;
    let progress = Math.min(elapsedTime / gijrijfijodkoskdokvfcdi, 1);


    let new_h2_1_height = 100 - (progress * 100);

    let new_h2_2_height = progress * 30;
    let new_o2_1_height = 100 - (progress * 100);


    new_h2_1_height = Math.max(0, Math.min(100, new_h2_1_height));
    new_h2_2_height = Math.max(0, Math.min(30, new_h2_2_height));
    new_o2_1_height = Math.max(0, Math.min(100, new_o2_1_height));

    state.elements.fghhergfsdfdhgtjtrjhytrjrytjtrhergtt.style.height = `${new_h2_1_height}%`;
    state.elements.regrthtrjuytjuytjhdfgsdfsefefrwefgre.style.height = `${new_h2_2_height}%`;
    state.elements.rtjtyjufhdfgsdfgsdfergerhtrhtrjhryth.style.height = `${new_o2_1_height}%`;

    localStorage.setItem("egefrokgoskdfgoksdofoo", new_h2_1_height);
    localStorage.setItem("edgoejgoijrogojfgjiihh", new_h2_2_height);
    localStorage.setItem("eriofgjierjgjsdijdsffd", new_o2_1_height);

    if (new_h2_2_height >= 30) {

      stopIntervals();
      return;
    }

    if (progress < 1) {
      requestAnimationFrame(updateHeights);
    }
  };

  requestAnimationFrame(updateHeights);
};


function getDuration() {
  return parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--duration"));
}

function setDuration(value) {
  document.documentElement.style.setProperty("--duration", `${value}s`);
}


// function createBall (type) {
//   const ball = document.createElement("div");
//   ball.classList.add("ball",type,...ballTypes[ type ].className.split(" "));

//   const img = document.createElement("img");
//   img.src = ballTypes[ type ].src;
//   img.alt = type;
//   ball.appendChild(img);

//   state.elements.gnerjlkgnhoierghoerhguorhfgjhsdjhfgs.appendChild(ball);

//   const duration = getDuration();
//   console.log(type, "animation duration:", duration);

//   ball.style.animationDuration = `${ duration }s`;
//   ball.startTime = Date.now();

//   ball.addEventListener("animationend",() => ball.remove());


//   if ([ "ball3","ball4","ball5","ball6" ].includes(type) && !state.animationFrameId)
//   {
//     state.animationFrameId = requestAnimationFrame(yhrthrtghergwerferghrthrytjhytrj);
//   }

//   return ball;
// }


function createBall(type) {
  const ball = document.createElement("div");
  ball.classList.add("ball", type, ...ballTypes[type].className.split(" "));

  const img = document.createElement("img");
  img.src = ballTypes[type].src;
  img.alt = type;
  ball.appendChild(img);

  state.elements.gnerjlkgnhoierghoerhguorhfgjhsdjhfgs.appendChild(ball);

  const baseDuration = getDuration();

  // 👇 Adjust only ball2's animation duration
  const adjustedDuration =
    type === "ball2" ? baseDuration * 2.2 : baseDuration;

  // console.log(type, "animation duration:", adjustedDuration);

  ball.style.animationDuration = `${adjustedDuration}s`;
  ball.startTime = Date.now();

  ball.addEventListener("animationend", () => ball.remove());

  if (
    ["ball3", "ball4", "ball5", "ball6"].includes(type) &&
    !state.animationFrameId
  ) {
    state.animationFrameId = requestAnimationFrame(yhrthrtghergwerferghrthrytjhytrj);
  }

  return ball;
}

function updateBallSpeeds() {
  document.querySelectorAll(".ball").forEach(ball => {
    const elapsedTime = (Date.now() - ball.startTime) / 1000;
    const remainingTime = Math.max(getDuration() - elapsedTime, 0);
    ball.style.animationDuration = `${remainingTime}s`;
  });
}


function stopIntervals() {
  state.intervals.forEach(interval => clearInterval(interval));
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
    const interval = setInterval(
      () => createBall(type),
      totalDuration / config.interval
    );
    state.intervals.set(type, interval);
  });
}

function updateDuration() {
  const speed = parseInt(state.elements.djfgdfjlghisdfjhgisdfjhgoisdigsgfids.value);


  if (speed === 0) {
    stopIntervals();
    state.elements.gnerjlkgnhoierghoerhguorhfgjhsdjhfgs.innerHTML = "";

    state.elements.ufuhgdhfisdfjosjfudufgufoisjfojidhid.style.opacity = "0";
    state.elements.ghfhfgjkjktgyjghxfgdfgfhgfjhhtrfgdfg.style.opacity = "0";
    state.rtfhrtfhrgdsgdfsgehetrghreghsertgegegf = false;
    return;
  }


  const newDuration = 16 - ((speed - 1) * (16 - 6) / 99);

  setDuration(newDuration);
  updateBallSpeeds();


  stopIntervals();
  state.elements.gnerjlkgnhoierghoerhguorhfgjhsdjhfgs.innerHTML = "";


  state.elements.ufuhgdhfisdfjosjfudufgufoisjfojidhid.style.opacity = "0";
  state.elements.ghfhfgjkjktgyjghxfgdfgfhgfjhhtrfgdfg.style.opacity = "0";
  state.rtfhrtfhrgdsgdfsgehetrghreghsertgegegf = false;


  if (window.bulbTimeout) {
    clearTimeout(window.bulbTimeout);
  }
  if (window.secondBatchTimeout) {
    clearTimeout(window.secondBatchTimeout);
  }

  if (window.thirdBatchTimeout) {
    clearTimeout(window.thirdBatchTimeout);
  }



  ["ball2", "ball11", "ball16"].forEach(createBall);


  ["ball2", "ball11", "ball16"].forEach(type => {
    const config = ballTypes[type];
    const interval = setInterval(
      () => createBall(type),
      newDuration * 1000 / config.interval
    );
    state.intervals.set(type, interval);
  });


  const durationInMs = newDuration * 1000;


  const secondBatchDelay = durationInMs * 1;



  window.secondBatchTimeout = setTimeout(() => {



    ["ball3", "ball4", "ball5", "ball6", "ball7", "ball8", "ball9", "ball10",
    ].forEach(createBall);


    ["ball3", "ball4", "ball5", "ball6", "ball7", "ball8", "ball9", "ball10"].forEach(type => {
      const config = ballTypes[type];
      const interval = setInterval(
        () => createBall(type),
        newDuration * 1000 / config.interval
      );
      state.intervals.set(type, interval);
    });
  }, secondBatchDelay);


  window.thirdBatchTimeout = setTimeout(() => {



    ["ball14", "ball15"].forEach(createBall);


    ["ball14", "ball15"].forEach(type => {
      const config = ballTypes[type];
      const interval = setInterval(
        () => createBall(type),
        newDuration * 1000 / config.interval
      );
      state.intervals.set(type, interval);
    });
  }, secondBatchDelay * 1);
}

// function updateDuration () {
//   const speed = parseInt(state.elements.djfgdfjlghisdfjhgisdfjhgoisdigsgfids.value);

//   if (speed === 0) {
//     stopIntervals();
//     state.elements.gnerjlkgnhoierghoerhguorhfgjhsdjhfgs.innerHTML = "";
//     state.elements.ufuhgdhfisdfjosjfudufgufoisjfojidhid.style.opacity = "0";
//     state.elements.ghfhfgjkjktgyjghxfgdfgfhgfjhhtrfgdfg.style.opacity = "0";
//     state.rtfhrtfhrgdsgdfsgehetrghreghsertgegegf = false;
//     return;
//   }

//   const newDuration = 16 - ((speed - 1) * (16 - 6) / 99);

//   setDuration(newDuration);
//   updateBallSpeeds();

//   stopIntervals();
//   state.elements.gnerjlkgnhoierghoerhguorhfgjhsdjhfgs.innerHTML = "";
//   state.elements.ufuhgdhfisdfjosjfudufgufoisjfojidhid.style.opacity = "0";
//   state.elements.ghfhfgjkjktgyjghxfgdfgfhgfjhhtrfgdfg.style.opacity = "0";
//   state.rtfhrtfhrgdsgdfsgehetrghreghsertgegegf = false;

//   if (window.bulbTimeout) clearTimeout(window.bulbTimeout);
//   if (window.secondBatchTimeout) clearTimeout(window.secondBatchTimeout);
//   if (window.thirdBatchTimeout) clearTimeout(window.thirdBatchTimeout);

//   ["ball11", "ball16"].forEach(createBall);

//   // Delay ball2 creation a little more (e.g., 500ms)
//   setTimeout(() => {
//     createBall("ball2");

//     const config = ballTypes["ball2"];
//     const interval = setInterval(() => {
//       createBall("ball2");

//       // Trigger ball7–10 halfway through ball2’s duration
//       setTimeout(() => {
//         ["ball7", "ball8", "ball9", "ball10"].forEach(createBall);
//       }, (newDuration * 1000) / 2);
//     }, newDuration * 1000 / config.interval);

//     state.intervals.set("ball2", interval);
//   }, 500); // 🔁 Delay ball2 start by 500ms

//   ["ball11", "ball16"].forEach(type => {
//     const config = ballTypes[type];
//     const interval = setInterval(() => createBall(type), newDuration * 1000 / config.interval);
//     state.intervals.set(type, interval);
//   });

//   const durationInMs = newDuration * 1000;
//   const secondBatchDelay = durationInMs * 1;

//   window.secondBatchTimeout = setTimeout(() => {
//     [ "ball3","ball4","ball5","ball6","ball7","ball8","ball9","ball10",
//       "ball12","ball13" ].forEach(createBall);

//     [ "ball3","ball4","ball5","ball6","ball7","ball8","ball9","ball10",
//       "ball12","ball13" ].forEach(type => {
//         const config = ballTypes[ type ];
//         const interval = setInterval(
//           () => createBall(type),
//           newDuration * 1000 / config.interval
//         );
//         state.intervals.set(type,interval);
//       });
//   }, secondBatchDelay);

//   window.thirdBatchTimeout = setTimeout(() => {
//     ["ball14", "ball15"].forEach(createBall);
//     ["ball14", "ball15"].forEach(type => {
//       const config = ballTypes[type];
//       const interval = setInterval(() => createBall(type), newDuration * 1000 / config.interval);
//       state.intervals.set(type, interval);
//     });
//   }, secondBatchDelay * 2);
// }


let updateTimeoutId = null;
state.elements.djfgdfjlghisdfjhgisdfjhgoisdigsgfids.addEventListener("input", () => {
  if (updateTimeoutId) {
    clearTimeout(updateTimeoutId);
  }
  updateTimeoutId = setTimeout(updateDuration, 50);
});


function hideohjudeghsjfgksdjfisdfhgfjdsghsdisifj() {
  if (state.elements.ohjudeghsjfgksdjfisdfhgfjdsghsdisifj) {

    state.elements.ohjudeghsjfgksdjfisdfhgfjdsghsdisifj.style.display = 'none';



  }
}

function isFirstVisit() {
  return localStorage.getItem("hasVisited") === null;
}
function initializeApp() {

  if (performance.navigation.type === 1) {
    const savedValue = localStorage.getItem("fdgdghetrgedsfgdsffg");
    if (savedValue !== null) {
      state.elements.djfgdfjlghisdfjhgisdfjhgoisdigsgfids.value = savedValue;
    }
  } else {

    localStorage.removeItem("werfwergergertgtrhrthe");
    localStorage.removeItem("grerikgjoierjgosdfjfij");
    localStorage.removeItem("egefrokgoskdfgoksdofoo");
    localStorage.removeItem("edgoejgoijrogojfgjiihh");
    localStorage.removeItem("eriofgjierjgjsdijdsffd");
    localStorage.removeItem("fdgdghetrgedsfgdsffg");


    state.elements.djfgdfjlghisdfjhgisdfjhgoisdigsgfids.value = "50";
    localStorage.setItem("fdgdghetrgedsfgdsffg", "50");


    localStorage.setItem("hasVisited", "true");
  }


  state.elements.ufuhgdhfisdfjosjfudufgufoisjfojidhid.style.opacity = "0";
  state.elements.ghfhfgjkjktgyjghxfgdfgfhgfjhhtrfgdfg.style.opacity = "0";
  state.rtfhrtfhrgdsgdfsgehetrghreghsertgegegf = false;

  hideohjudeghsjfgksdjfisdfhgfjdsghsdisifj();


  if (state.elements.fghhergfsdfdhgtjtrjhytrjrytjtrhergtt) state.elements.fghhergfsdfdhgtjtrjhytrjrytjtrhergtt.style.height = "100%";
  if (state.elements.regrthtrjuytjuytjhdfgsdfsefefrwefgre) state.elements.regrthtrjuytjuytjhdfgsdfsefefrwefgre.style.height = "0%";
  if (state.elements.rtjtyjufhdfgsdfgsdfergerhtrhtrjhryth) state.elements.rtjtyjufhdfgsdfgsdfergerhtrhtrjhryth.style.height = "100%";

  controllLiquideFlow();
  checkResetElementsAndDisableRange();

  dfgdergerthgrthrytjunytuj(0);
  updateDuration();
}


window.addEventListener("load", initializeApp);
state.elements.djfgdfjlghisdfjhgisdfjhgoisdigsgfids.addEventListener("mouseup", function () {
  localStorage.setItem("fdgdghetrgedsfgdsffg", state.elements.djfgdfjlghisdfjhgisdfjhgoisdigsgfids.value);
});


["mouseup", "touchend"].forEach(event => {
  state.elements.djfgdfjlghisdfjhgisdfjhgoisdigsgfids.addEventListener(event, () => {
    localStorage.setItem("fdgdghetrgedsfgdsffg", state.elements.djfgdfjlghisdfjhgisdfjhgoisdigsgfids.value);
    // location.reload();
  });
});




const qwkx81nsq = document.getElementById('hrtherthrgdgertgyerhyrthrtge');
const plzv0smcr = document.querySelector('.tfnnhdrfnjsetbgw');
const smdp4ujzx = document.querySelector('.njsertnsetneyerynsenter');
const wmnz58lvo = document.querySelectorAll('.ghjfytjytulkryjtjykjk');
const vuhs6tcar = document.querySelectorAll('.yjytgkyuluilidetgsefsdfsef');


const storageKeys = {
  a1: "bQX8VpL2",
  a2: "ZyM4TnP9",
  a3: "WdJ5FkX1",
  a4: "TrC7QmB6",
  range: "Xn9LpTQ3"
};


const dataPool = {
  k1: "eyJib3R0b20iOiA5Mi41LCJsZWZ0IjogLTQuOCwicm90YXRlIjogMH0=",
  k2: "eyJib3R0b20iOiA5NCwibGVmdCI6IC0yLCJyb3RhdGUiOiA5MH0=",
  k3: "eyJib3R0b20iOiAyMi41LCJsZWZ0IjogLTQuOCwicm90YXRlIjogMH0=",
  k4: "eyJib3R0b20iOiAyNCwibGVmdCI6IC0yLCJyb3RhdGUiOiA5MH0=",
  k5: "eyJib3R0b20iOiA5Mi44LCJsZWZ0IjogOTYuNSwicm90YXRlIjogMH0=",
  k6: "eyJib3R0b20iOiA5NC4yLCJsZWZ0IjogOTMuNSwicm90YXRlIjogLTkwfQ==",
  k7: "eyJib3R0b20iOiAxOCwibGVmdCI6IDk2LjUsInJvdGF0ZSI6IDB9",
  k8: "eyJib3R0b20iOiAxOSwibGVmdCI6IDkzLjUsInJvdGF0ZSI6IC05MH0="
};


function yfxr2po1(encoded) {
  return JSON.parse(atob(encoded));
}


function xzjw6lfa(value, ntype = 1) {
  const p = value / 100;
  let start, end;

  switch (ntype) {
    case 2: start = yfxr2po1(dataPool.k3); end = yfxr2po1(dataPool.k4); break;
    case 3: start = yfxr2po1(dataPool.k5); end = yfxr2po1(dataPool.k6); break;
    case 4: start = yfxr2po1(dataPool.k7); end = yfxr2po1(dataPool.k8); break;
    default: start = yfxr2po1(dataPool.k1); end = yfxr2po1(dataPool.k2);
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
    wmnz58lvo.forEach(valve => {
      valve.style.bottom = `${c.bottom}%`;
      valve.style.left = `${c.left}%`;
      valve.style.transform = `rotate(${c.rotate}deg)`;
    });
    localStorage.setItem(storageKeys.a3, JSON.stringify(c));
  }

  if (vuhs6tcar.length > 0) {
    const d = xzjw6lfa(value, 4);
    vuhs6tcar.forEach(valve => {
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

  const value = localStorage.getItem("fdgdghetrgedsfgdsffg") ? parseInt(localStorage.getItem("fdgdghetrgedsfgdsffg")) : 50;

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
    wmnz58lvo.forEach(valve => {
      valve.style.bottom = `${c.bottom}%`;
      valve.style.left = `${c.left}%`;
      valve.style.transform = `rotate(${c.rotate}deg)`;
    });
    localStorage.setItem(storageKeys.a3, JSON.stringify(c));
  }

  if (vuhs6tcar.length > 0) {
    const d = xzjw6lfa(value, 4);
    vuhs6tcar.forEach(valve => {
      valve.style.bottom = `${d.bottom}%`;
      valve.style.left = `${d.left}%`;
      valve.style.transform = `rotate(${d.rotate}deg)`;
    });
    localStorage.setItem(storageKeys.a4, JSON.stringify(d));
  }
}




if (qwkx81nsq) {
  qwkx81nsq.addEventListener('input', function () {
    btzu9yop(parseInt(this.value));
  });
}


document.addEventListener('DOMContentLoaded', vbmz6twr);
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  vbmz6twr();
}

function getFillContainerDelay() {
  const sliderValue = parseInt(state.elements.djfgdfjlghisdfjhgisdfjhgoisdigsgfids.value);
  console.log("Slider value:", sliderValue);
  // Calculate delay in milliseconds based on slider value
  let delay;

  if (sliderValue === 0) {
    return 60000; // 60 seconds at slider = 0
  } else if (sliderValue <= 10) {
    return 55000; // 55 seconds
  } else if (sliderValue <= 20) {
    return 50000; // 50 seconds
  } else if (sliderValue <= 30) {
    return 45000; // 45 seconds
  } else if (sliderValue <= 40) {
    return 36000; // 40 seconds
  } else if (sliderValue <= 50) {
    return 22000; // 35 seconds
  } else if (sliderValue <= 60) {
    return 380000; // 30 seconds
  } else if (sliderValue <= 70) {
    return 29000; // 25 seconds
  } else if (sliderValue <= 80) {
    return 24000; // 20 seconds
  } else if (sliderValue <= 90) {
    return 18000; // 15 seconds
  } else {
    return 21000; // 10 seconds at slider = 91-100
  }
}
let fillHeight = 0; // Global to persist height state
let fillDiv = document.getElementById("h2-quantity-2");

function fillContainer() {
  // Clear previous interval if any
  if (window.fillIntervalId) {
    clearInterval(window.fillIntervalId);
  }
  //   // Reset height to 0 before starting
  fillHeight = 0;
  fillDiv.style.height = "0%";
  const sliderValue = parseInt(state.elements.djfgdfjlghisdfjhgisdfjhgoisdigsgfids.value);
  // Calculate the fill increment and interval based on slider value
  // Higher slider values = faster filling (smaller interval, larger increment)
  let fillIncrement, fillInterval;

  if (sliderValue <= 20) {
    fillIncrement = 4;  // Smaller increments for slower speed
    fillInterval = 700; // Longer interval for slower speed
  } else if (sliderValue <= 50) {
    fillIncrement = 3;
    fillInterval = 700;
  } else if (sliderValue <= 80) {
    fillIncrement = 7;
    fillInterval = 500;
  } else {
    fillIncrement = 8;  // Larger increments for faster speed
    fillInterval = 400; // Shorter interval for faster speed
  }

  // Start filling
  window.fillIntervalId = setInterval(() => {
    if (fillHeight >= 80) {
      clearInterval(window.fillIntervalId);
      window.fillIntervalId = null;
    } else {
      fillHeight += fillIncrement;
      fillDiv.style.height = fillHeight + "%";
    }
  }, fillInterval);
}

// 3. Update the window.onload function
window.onload = () => {
  // Call your existing initializeApp function if needed
  initializeApp();

  // Use dynamic delay for fillContainer
  const fillDelay = getFillContainerDelay();
  console.log("Setting fill container delay to:", fillDelay, "ms");

  setTimeout(fillContainer, fillDelay);
};

//   let fillHeight = 0; // Global to persist height state
// let fillDiv = document.getElementById("h2-quantity-2");

// function fillContainer() {
//   // Clear previous interval if any
//   if (window.fillIntervalId) {
//     clearInterval(window.fillIntervalId);
//   }

//   // Reset height to 0 before starting
//   fillHeight = 0;
//   fillDiv.style.height = "0%";
//   const sliderValue = parseInt(state.elements.djfgdfjlghisdfjhgisdfjhgoisdigsgfids.value);
//   // Start filling
//   window.fillIntervalId = setInterval(() => {
//     if (fillHeight >= 80) {
//       clearInterval(window.fillIntervalId);
//       window.fillIntervalId = null;
//     } else {
//       fillHeight += 6;
//       fillDiv.style.height = fillHeight + "%";
//     }
//   }, 500);
// }

// // Start the animation automatically after page loads
// window.onload = () => {
//   setTimeout(fillContainer, 33000);
// };


// const fillDiv = document.getElementById("h2-quantity-2");
// let fillHeight = 0;

// function fillContainer(speed) {
//   if (window.fillIntervalId) {
//     clearInterval(window.fillIntervalId);
//   }

//   fillHeight = 0;
//   fillDiv.style.height = "0%";

//   // Calculate delay based on speed (range: 0-100)
//   const maxDelay = 800;
//   const minDelay = 100;
//   const delay = maxDelay - ((speed / 100) * (maxDelay - minDelay));

//   window.fillIntervalId = setInterval(() => {
//     if (fillHeight >= 80) {
//       clearInterval(window.fillIntervalId);
//       window.fillIntervalId = null;
//     } else {
//       fillHeight += 4;
//       fillDiv.style.height = fillHeight + "%";
//     }
//   }, delay);
// }

// // Hook into your existing speed control logic
// const speedControl = document.getElementById("hrtherthrgdgertgyerhyrthrtge");

// speedControl.addEventListener("input", () => {
//   const speed = parseInt(speedControl.value);
//   fillContainer(speed);
// });

// // Optionally start fill automatically on page load
// window.onload = () => {
//   const savedSpeed = parseInt(localStorage.getItem("bulbRangeValue")) || 50;
//   speedControl.value = savedSpeed;
//   fillContainer(savedSpeed);
// };

// Start the animation automatically after page loads


window.btzu9yop = btzu9yop;

