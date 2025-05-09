export const Fireflies = function fireflies() {
  const container = document.getElementById("animcontainer");
  var canvas = document.getElementById("fireflies");
  var ctx = canvas.getContext("2d");
  canvas.height = container.offsetHeight;
  canvas.width = container.offsetWidth;
  let small = false;
  let day = false;
  let fireflies = [];

  function randomFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function firefly() {
    this.x = randomFromRange(canvas.width / 10, (canvas.width * 9) / 10);
    this.y = randomFromRange(canvas.height / 1.25, canvas.height);
    this.radius = randomFromRange(2, 4);
    this.rspeed = 0.02;
    this.speed = {
      x: (Math.random() - 0.5) * 0.5,
      y: (Math.random() - 0.5) * 0.5,
    };
    this.max = {
      xbound: this.x + 20,
      ybound: canvas.height / 2.5,
      maxRadius: this.radius + 3,
    };
    this.min = {
      xbound: this.x - 5,
      ybound: this.y - 30,
      minRadius: this.radius,
    };
  }

  firefly.prototype.draw = function () {
    ctx.fillStyle = "rgb(124,253,254)";
    ctx.shadowColor = "rgb(95,201,33)";
    ctx.shadowBlur = 15;
    ctx.beginPath();
    if (small) {
      ctx.shadowBlur = 2;
      ctx.arc(this.x, this.y, this.radius / 4, 0, Math.PI * 2, false);
    } else {
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    }
    ctx.fill();
  };

  firefly.prototype.update = function () {
    if (this.x < this.max.xbound || this.x <= this.min.xbound) {
      this.x += this.speed.x;
    } else {
      this.x -= this.speed.x;
    }
    if (this.y < this.max.ybound || this.y <= this.min.ybound) {
      this.y += this.speed.y;
    } else {
      this.y -= this.speed.y;
    }
    if (this.radius < this.max.maxRadius) {
      this.radius -= 0.0099;
    }
    if (this.radius < this.min.minRadius) {
      this.radius += 0.5;
    }
    this.draw();
  };

  function init() {
    fireflies = [];
    for (let i = 0; i < 50; i++) {
      fireflies.push(new firefly());
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
  });

  let lastToggle = Date.now();
  function animate() {
    requestAnimationFrame(animate);
    const now = Date.now();
    if (now - lastToggle > 75000) {
      day = !day;
      lastToggle = now;
    }
    ctx.fillStyle = "rgb(2,17,28)";
    ctx.shadowBlur = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (day) {
      fireflies.forEach((firefly) => {
        firefly.update();
      });
    }
  }

  function start() {
    init();
    canvas.height = container.offsetHeight;
    canvas.width = container.offsetWidth;
    if (document.documentElement.clientWidth < 1000) {
      small = true;
    } else {
      small = false;
    }
    requestAnimationFrame(animate);
  }

  setInterval(() => {
    if (day) {
      fireflies.forEach(f => {
        f.x = randomFromRange(canvas.width / 10, (canvas.width * 9) / 10);
        f.y = randomFromRange(canvas.height / 1.25, canvas.height);
        f.radius = randomFromRange(2, 4);
      });
    }
  }, 75000);

  return {
    start,
    animate,
    init,
  };
};
