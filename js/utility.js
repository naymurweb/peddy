const removeActive = () => {
  const categoryBtn = document.getElementsByClassName("category-btn");
  for (const btn of categoryBtn) {
    btn.classList.remove("active");
  }
};


// adopt btn feature apply
const adoptClick = (id) => {
  const modal = document.getElementById("modal-two");
  modal.click();
  let i = 0;

  const idd = setInterval(() => {
    i += 1;
    if (i === 3) {
      clearInterval(idd);
    }
    const count = document.getElementById("count");
    count.innerText = `${i}`;
  }, 1000);

  setTimeout(() => {
    const btn = document.getElementById("close");
    btn.click();
  }, 3500);
};
