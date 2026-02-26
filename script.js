const btn = document.getElementById("btn");
const msg = document.getElementById("message");
const confettiContainer = document.getElementById("confetti-container");

btn.addEventListener("click", () => {
  msg.style.opacity = "1";
  btn.innerText = "🎉 BOOM 🎉";
  explodeConfetti(window.innerWidth/2, window.innerHeight/2);
});

function explodeConfetti(x, y){
  const colors = ["#ff0","#0ff","#f0f","#0f0","#f00","#00f","#ffa500"];

  for(let i=0;i<150;i++){
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    const size = Math.random()*6 + 6;
    confetti.style.width = size+"px";
    confetti.style.height = size*1.5+"px";

    confetti.style.background = colors[Math.floor(Math.random()*colors.length)];

    confetti.style.left = x+"px";
    confetti.style.top = y+"px";

    const angle = Math.random() * 2 * Math.PI;
    const velocity = Math.random() * 12 + 4;
    const dx = Math.cos(angle) * velocity;
    const dy = Math.sin(angle) * velocity - 8;

    confettiContainer.appendChild(confetti);

    let posX = x;
    let posY = y;
    let gravity = 0.4;

    let interval = setInterval(()=>{
      posX += dx;
      posY += dy;
      dy += gravity;

      confetti.style.left = posX+"px";
      confetti.style.top = posY+"px";

      if(posY > window.innerHeight){
        confetti.remove();
        clearInterval(interval);
      }
    },16);
  }
}