const circle = document.getElementById("_circle");
const moveMouse = (e) => {
  circle.style.left = `${e.pageX}px`;
  circle.style.top = `${e.pageY}px`;
  circle.style.display = "block";
};

document.addEventListener("mousemove", moveMouse);
