const bars = document.querySelectorAll(".stats_bars");
bars.forEach((bar) => {
  const wd = bar.getAttribute("data-value");
  bar.style.width = `${wd}%`;
});
