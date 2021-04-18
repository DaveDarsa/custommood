export const Snowcanvas = function () {
  const container = document.getElementById("animcontainer");
  const canvas = document.getElementById("snowcanvas");
  var ctx = canvas.getContext("2d");
  canvas.height = container.offsetHeight;
  canvas.width = container.offsetWidth;
  var animID;
  let small = false;
  let firstRun = true;
  function snowflake() {
    this.x = Math.random() * (canvas.width - 10);
    this.y = firstRun ? Math.random() * canvas.height : Math.random() * -400;
    this.radius = (Math.random() + 1) * 1.8;
    this.velocity = {
      x: (Math.random() - 0.5) * 2,
      y: Math.random() + 3,
    };
    snowflake.prototype.draw = function () {
      ctx.fillStyle = "rgba(250,250,250)";
      ctx.beginPath();
      if (small) {
        ctx.arc(this.x, this.y, this.radius / 3, 0, Math.PI * 2, false);
      } else {
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      }

      ctx.fill();
    };
    snowflake.prototype.update = function () {
      if (this.y + this.radius < canvas.height) {
        this.y += this.velocity.y;
        this.x += this.velocity.x;
      } else {
        this.y = 0;
      }
      this.draw();
    };
  }

  let snowflakes = [];
  function init() {
    snowflakes = [];
    for (let i = 0; i < 150; i++) {
      snowflakes.push(new snowflake());
    }
  }
  window.addEventListener("resize", () => {
    canvas.height = container.offsetHeight;
    canvas.width = container.offsetWidth;
    if (document.documentElement.clientWidth < 1000) {
      small = true;
    } else {
      small = false;
    }
    init();
  });
  function animate() {
    if (!animID) {
      return;
    }
    console.log(snowflakes.length);
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snowflakes.forEach((snowflake) => {
      snowflake.update();
    });
    firstRun = false;
  }

  function start() {
    init();
    if (document.documentElement.clientWidth < 1000) {
      small = true;
    } else {
      small = false;
    }
    animID = requestAnimationFrame(animate);
  }

  function pause() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(animID);
    animID = null;
  }

  return {
    start,
    pause,
  };
};
