const TENK = {
  name: "TENK",
  ticker: "$TENK",
  chain: "Arc",
  chainId: 5042,
  launchpad: "https://lolpad.fun/",
  ca: "",
};

const caEl = document.getElementById("ca");
const copyBtn = document.getElementById("copy-ca");
const buyBtns = document.querySelectorAll("[data-buy]");

function renderCa() {
  caEl.textContent = TENK.ca || "TBA — launching on lolpad.fun";
}

buyBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (!TENK.ca) return;
    e.preventDefault();
    window.open(TENK.launchpad, "_blank", "noopener");
  });
});

copyBtn.addEventListener("click", async () => {
  const value = TENK.ca || TENK.launchpad;
  try {
    await navigator.clipboard.writeText(value);
    copyBtn.textContent = "copied";
    setTimeout(() => (copyBtn.textContent = "copy"), 1200);
  } catch {
    copyBtn.textContent = "nope";
    setTimeout(() => (copyBtn.textContent = "copy"), 1200);
  }
});

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
