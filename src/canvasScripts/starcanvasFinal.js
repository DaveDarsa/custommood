const Starcanvas = (function starcanvas() {
  const container = document.getElementById("animcontainer");
  let canvas = document.getElementById("starcanvas");
  let ctx = canvas.getContext("2d");
  canvas.height = container.offsetHeight;
  canvas.width = container.offsetWidth;
  let paused = true;
  let day = true;
  function star() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.r = Math.abs(Math.random()) + 0.3;

    star.prototype.draw = function () {
      ctx.fillStyle = "rgba(255,255,255,.8)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
      ctx.fill();
    };
    star.prototype.update = function () {
      //   this.x += Math.random() * 0.1 + 0.01;
      this.x += 0.02;
      if (this.x > canvas.width) {
        this.x = -2;
      }
      if (this.r < 5) {
        this.r -= 0.02;
      }
      if (this.r < 1.5) {
        this.r += 0.5;
      }

      this.draw();
    };
  }
  function comet() {
    this.x = Math.random() * (canvas.width - 100);
    this.y = -50;

    comet.prototype.draw = function () {
      //draw a comet shape-ish
      ctx.beginPath();
      ctx.fillStyle = "rgba(255,255,255,.8)";
      ctx.arc(this.x, this.y, 10, Math.PI / 4.5, Math.PI, false);
      ctx.lineTo(this.x + 35, this.y - 180);
      ctx.lineTo(this.x + 19, this.y - 90);
      ctx.lineTo(this.x + 40, this.y - 180);
      ctx.closePath();
      ctx.shadowColor = "rgba(122,177,188,.9)";
      ctx.shadowBlur = 45;
      ctx.fill();
    };
    comet.prototype.update = function () {
      this.y += 40;
      this.x -= 8;
      this.draw();
    };
  }

  let stars = [];
  let comets = [];
  function init() {
    comets = [];
    stars = [];
    for (let i = 0; i < 150; i++) {
      stars.push(new star());
    }
  }
  //create new comet
  setInterval(() => {
    if (!day) {
      comets.push(new comet());
    }
  }, 10000);
  //clear the comets
  setInterval(() => {
    comets = [];
  }, 50000);

  //play at nights
  setInterval(() => {
    paused = !paused;
    //change appearing/disappearing animations
  }, 75000);
  //fade in and out
  setInterval(() => {
    day = !day;
  }, 74800);
  //resizing
  window.addEventListener("resize", () => {
    canvas.height = container.offsetHeight;
    canvas.width = container.offsetWidth;

    init();
  });
  function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = "rgba(48,36,112,.9)";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (day) {
      ctx.globalAlpha -= 0.02;
    } else {
      ctx.globalAlpha += 0.02;
    }
    if (!paused) {
      stars.forEach((star) => {
        star.update();
      });
      comets.forEach((comet) => {
        comet.update();
      });
    }
  }
  return {
    init,
    animate,
    paused,
    day,
  };
})();
