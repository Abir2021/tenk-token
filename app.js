const TENK = {
  name: "TENK",
  ticker: "$TENK",
  chain: "Arc",
  chainId: 5042,
  launchpad: "https://lolpad.fun/token/0x68713a4efeb44c3f92dae4cbe7b0ba9c53c7ae07?tab=holders",
  ca: "0x68713a4efeb44c3f92dae4cbe7b0ba9c53c7ae07",
};

const caEl = document.getElementById("ca");
const copyBtn = document.getElementById("copy-ca");

function renderCa() {
  if (caEl) caEl.textContent = TENK.ca;
}

if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(TENK.ca);
      copyBtn.textContent = "copied";
      setTimeout(() => (copyBtn.textContent = "copy"), 1200);
    } catch {
      copyBtn.textContent = "nope";
      setTimeout(() => (copyBtn.textContent = "copy"), 1200);
    }
  });
}

renderCa();

const path = document.getElementById("curve-path");
if (path) {
  let t = 0;
  const draw = () => {
    t += 0.008;
    const pts = [];
    for (let i = 0; i <= 24; i++) {
      const x = (i / 24) * 100;
      const bump = Math.pow(i / 24, 1.65) * 62;
      const wobble = Math.sin(t + i * 0.35) * 2.2;
      const y = 78 - bump - wobble;
      pts.push(`${x},${y}`);
    }
    path.setAttribute("d", `M ${pts.join(" L ")}`);
    requestAnimationFrame(draw);
  };
  draw();
}
