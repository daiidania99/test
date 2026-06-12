/* GATE */
const SECRET_CODE = "29/04/2025";

function checkCode(){
  const input = document.getElementById("codeInput").value.trim();
  const gate = document.getElementById("gate");
  const error = document.getElementById("gateError");

  if(input === SECRET_CODE){
    gate.style.opacity="0";
    setTimeout(()=>gate.remove(),1000);
  } else {
    error.textContent="ركّز في التاريخ 💗";
  }
}

/* STAR */
const bg = document.querySelector(".hearts");
const stars = [];
const STAR_COUNT = 42;
const starShapes = ["✦", "✧", "✩", "✪", "✨"];


for (let i = 0; i < STAR_COUNT; i++) {
  const star = document.createElement("div");
  star.className = "star";

  star.textContent =
    starShapes[Math.floor(Math.random() * starShapes.length)];

  star.style.left = Math.random() * 100 + "%";
  star.style.top  = Math.random() * 100 + "%";
  star.style.fontSize = 10 + Math.random() * 12 + "px";
  star.style.animationDelay = Math.random() * 6 + "s";

  bg.appendChild(star);
  stars.push(star);
}

/* lie*/
for (let i = 0; i < stars.length - 1; i += 2) {
  const s1 = stars[i];
  const s2 = stars[i + 1];

  const line = document.createElement("div");
  line.className = "line";

  const x1 = s1.offsetLeft;
  const y1 = s1.offsetTop;
  const x2 = s2.offsetLeft;
  const y2 = s2.offsetTop;

  const length = Math.hypot(x2 - x1, y2 - y1);
  const angle  = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

  line.style.width = length + "px";
  line.style.left  = x1 + "px";
  line.style.top   = y1 + "px";
  line.style.transform = `rotate(${angle}deg)`;

  bg.appendChild(line);
}
/* TYPEWRITER */
const text="You are my safe place 💗";
let i=0;
(function type(){
  const el=document.getElementById("typeText");
  if(el && i<text.length){
    el.innerHTML+=text[i++];
    setTimeout(type,120);
  }
})();

/* MUSIC */
let playing=false;
function toggleMusic(){
  const m=document.getElementById("bg-music");
  playing?m.pause():m.play();
  playing=!playing;
}

/* P2 */
function closeP2(){
  document.getElementById("P2").style.opacity = "0";
  setTimeout(()=>{
    document.getElementById("P2").style.display = "none";
  },600);
}
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", ()=>{
  noBtn.style.position="absolute";
  noBtn.style.left=Math.random()*80+"%";
  noBtn.style.top=Math.random()*80+"%";
});
/* =========================
   GALAXY SHOOTING STARS
   RIGHT ➜ LEFT VERSION
========================= */

const SHOOTING_COUNT = 5;

function createShootingStar(){

  const star = document.createElement("div");
  star.className = "shooting-star";

  // تبدأ من برّا على اليمين
  star.style.top = Math.random() * 80 + "%";
  star.style.right = "-300px";
  star.style.left = "auto";

  // حجم عشوائي
  const size = 150 + Math.random() * 150;
  star.style.width = size + "px";
  star.style.height = (3 + Math.random()*3) + "px";

  // سرعة مختلفة
  const duration = 2.5 + Math.random() * 2;
  star.style.animationDuration = duration + "s";

  // زاوية معكوسة (باش تمشي للجهة المعاكسة)
  const angle = -(15 + Math.random() * 30);
  star.style.setProperty("--angle", angle + "deg");

  document.body.appendChild(star);

  // flash effect
  const flash = document.createElement("div");
  flash.className = "star-flash";
  flash.style.top = star.style.top;
  flash.style.right = "0px";
  document.body.appendChild(flash);

  setTimeout(()=>flash.remove(),300);

  setTimeout(()=>{
    star.remove();
    createShootingStar();
  }, duration * 1000);
}

// نخلق 10 نجمات
for(let i=0;i<SHOOTING_COUNT;i++){
  setTimeout(createShootingStar, i * 700);
}


