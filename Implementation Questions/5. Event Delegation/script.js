function delegate() {
  const parent = document.getElementById("list");

  parent.addEventListener("click", (e) => {
    const child = e.target.closest("li");
    if (!child) return;
    child.classList.toggle("select");
  });
}

window.addEventListener("DOMContentLoaded", delegate);
