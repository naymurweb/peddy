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
  });
};

categories();

// all pets load

const petsData = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => showPets(data.pets));
};

const showPets = (data) => {
  const petContainer = document.getElementById("pet-container");
  data.forEach((pet) => {
    const item = document.createElement("div");
    item.classList = "card card-compact bg-base-100 w-96 shadow-xl border pt-5";
    item.innerHTML = `
          <figure >
              <img
              class="rounded-lg"
                src=${pet?.image}
                alt="Shoes" />
            </figure>
            <div class="card-body text-gray-500">
              <h2 class="card-title text-black">${
                pet?.pet_name ? pet?.pet_name : "Not Available"
              }</h2>
              <p><i class="fa-brands fa-squarespace"></i> Breed: ${
                pet?.breed ? pet?.breed : "Not Available"
              }</}</p>
              <p><i class="fa-solid fa-calendar-days"></i> Birth: ${
                pet?.date_of_birth ? pet?.date_of_birth : "Not Available"
              }</p>
              <p><i class="fa-solid fa-mercury"></i> Gender: ${
                pet?.gender ? pet?.gender : "Not Available"
              }</p>
              <p><i class="fa-solid fa-mercury"></i> Price : ${
                pet?.price ? pet?.price : "Not Available"
              }</p>
              <div class="flex justify-between border-t-2 py-3 items-center">
                <button class="btn btn-sm text-primary text-xl px-8"><i class="fa-regular fa-thumbs-up"></i></button>
                <button class="btn btn-sm text-primary text-lg">Adopt</button>
                <button class="btn btn-sm text-primary text-lg">Details</button>
              </div>
        `;
    petContainer.append(item);
  });
};
petsData();
