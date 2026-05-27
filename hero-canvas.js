!function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');

  // Orbs: fractional center, radius, brand RGB, speed, phase offset
  var orbs = [
    { fx: 0.12, fy: 0.30, r: 260, rgb: '14,124,123',  sp: 0.00028, ph: 0.0  },
    { fx: 0.82, fy: 0.18, r: 220, rgb: '23,63,95',     sp: 0.00038, ph: 2.1  },
    { fx: 0.48, fy: 0.80, r: 190, rgb: '200,122,40',   sp: 0.00022, ph: 4.3  },
    { fx: 0.92, fy: 0.62, r: 280, rgb: '14,124,123',   sp: 0.00032, ph: 1.4  },
  ];

  var W, H;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < orbs.length; i++) {
      var o  = orbs[i];
      var cx = (o.fx + Math.sin(t * o.sp + o.ph) * 0.13) * W;
      var cy = (o.fy + Math.cos(t * o.sp * 0.73 + o.ph) * 0.10) * H;
      var g  = ctx.createRadialGradient(cx, cy, 0, cx, cy, o.r);
      g.addColorStop(0,   'rgba(' + o.rgb + ',0.24)');
      g.addColorStop(0.45,'rgba(' + o.rgb + ',0.10)');
      g.addColorStop(1,   'rgba(' + o.rgb + ',0)');
      ctx.beginPath();
      ctx.arc(cx, cy, o.r, 0, Math.PI * 2);
      ctx.fillStyle = g;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(draw);
}();
