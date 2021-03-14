export const Raincanvas = (function () {
  const container = document.getElementById("animcontainer");
  const canvas = document.getElementById("raincanvas");
  canvas.height = container.offsetHeight;
  canvas.width = container.offsetWidth;
  var ctx = canvas.getContext("2d");
  var firstRun = true;

  function splash(x, y) {
    this.x = x;
    this.y = y + 2;
    this.velocity = {
      x: Math.floor(Math.random() * 11) - 4,
      y: Math.floor(Math.random() * 5) - 5,
    };
    this.r = Math.random() * 1 + 1.5;
    this.gravity = 2;

    splash.prototype.draw = function () {
      ctx.fillStyle = "rgba(78, 131, 181,.5)";
      ctx.fillStyle = "rgba(255,255,255,.35)";
      ctx.fillStyle = "rgba(147, 176, 204,.4)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
      ctx.fill();
    };
    splash.prototype.update = function () {
      this.draw();

      this.x += this.velocity.x;
      this.y += this.velocity.y + (this.gravity * 1) / 2;
      let idx = splashes.indexOf(this);

      setTimeout(() => {
        splashes.splice(idx, 1);
      }, 100);
    };
  }

  function drop(pos) {
    this.arrpos = pos;
    this.width = 2;
    this.height = Math.random() * 5 + 30;
    this.x = Math.random() * (container.offsetWidth + 1000);
    this.y = firstRun ? Math.random() * canvas.height : Math.random() - 0.5;
    this.d = Math.random() * 15 + 10;
    drop.prototype.draw = function () {
      // ctx.fillStyle = "rgba(52, 96, 138,.8)";
      // ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.strokeStyle = "rgba(52,96,138,.4)";
      ctx.strokeStyle = "rgba(255,255,255,.3)";
      ctx.fillStyle = "rgba(143, 190, 235,.8)";
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineWidth = 1.5;
      ctx.lineTo(this.x - this.height, this.y + this.height);
      ctx.stroke();
    };

    drop.prototype.update = function () {
      //update then draw;
      this.y += this.d;
      this.x += -this.d;
      //water interaction with the land
      if (this.y + this.height > canvas.height - 5) {
        for (let k = 0; k < 3; k++) {
          splashes.push(new splash(this.x, this.y));
        }
      }
      //collision detection and removal.
      if (this.y + this.height > canvas.height || this.x - 2 < 0) {
        //replace itself with new one;
        rain[this.arrpos] = new drop(this.arrpos);
      }
      this.draw();
    };
  }

  let rain = [];
  let splashes = [];
  //init function
  function init() {
    //create and add rain elements customized;
    rain = [];
    splashes = [];
    for (let i = 0; i < 80; i++) {
      rain.push(new drop(i));
    }
  }
  //resize
  window.addEventListener("resize", () => {
    canvas.height = container.offsetHeight;
    canvas.width = container.offsetWidth;
    init();
  });

  //animation
  function animate() {
    requestAnimationFrame(animate);

    ctx.fillStyle = "rgba(100, 100, 150,.8)";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    rain.forEach((drop) => {
      drop.update();
    });
    splashes.forEach((splashs) => {
      splashs.update();
    });

    firstRun = false;
  }
  return {
    init,
    animate,
  };
})();
