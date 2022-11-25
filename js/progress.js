document.addEventListener(
  "scroll",
  function () {
    let scrollTop =
      document.documentElement["scrollTop"] || document.body["scrollTop"];
    let scrollBottom =
      (document.documentElement["scrollHeight"] ||
        document.body["scrollHeight"]) - document.documentElement.clientHeight;
    let scrollPercent = (scrollTop / scrollBottom) * 100 + "%";
    document
      .getElementById("_progress")
      .style.setProperty("--scroll", scrollPercent);
  },
  { passive: true }
);
