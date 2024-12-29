// categories data load---------------------------
const categories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => showCategory(data.categories));
};

const showCategory = (data) => {
  const categoriesContainer = document.getElementById("categories-container");

  data.forEach((pet) => {
    const btn = document.createElement("button");
    btn.classList.add(
      "btn",
      "btn-outline",
      "btn-xs",
      "sm:btn-sm",
      "md:btn-md",
      "lg:btn-lg",
      "px-16",
      "border-gray-300",
      "hover:text-black",
      "hover:bg-[#0E7A811A]",
      "hover:border-primary"
    );
    btn.innerHTML = `<img src=${pet?.category_icon} width="20px md:30px" alt=""> ${pet.category}`;
    categoriesContainer.append(btn);
    console.log(btn);
  });
};

categories();
