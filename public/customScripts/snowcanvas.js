window.onload = () => {
  var canvas = document.getElementById("snowcanvas");
  var ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let firstRun = true;
  function snowflake() {
    this.x = Math.random() * (canvas.width - 100);
    this.y = firstRun ? Math.random() * canvas.height : -500;
    this.radius = (Math.random() + 1) * 3.4;
    this.velocity = {
      x: (Math.random() - 0.5) * 2,
      y: Math.random() + 5,
    };
    snowflake.prototype.draw = function () {
      ctx.fillStyle = "rgba(255,255,255)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fill();
    };
    snowflake.prototype.update = function () {
      if (this.y + this.radius < canvas.height) {
        this.y += this.velocity.y;
        this.x += this.velocity.x;
      } else {
        // let idx = snowflakes.indexOf(this);
        // snowflakes.splice(idx, 1);
        // snowflakes.push(new snowflake());
        this.y = -50;
      }
      this.draw();
    };
  }

  let snowflakes = [];
  function init() {
    snowflakes = [];
    for (let i = 0; i < 200; i++) {
      snowflakes.push(new snowflake());
    }
  }
  //   setInterval(() => {
  //     init();
  //   }, 2000);
  function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    snowflakes.forEach((snowflake) => {
      snowflake.update();
    });
    firstrun = false;
  }

  init();
  animate();
};
