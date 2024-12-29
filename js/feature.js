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

    btn.classList =
      "btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg px-16 border-gray-300 hover:bg-[#0E7A811A] hover:border-primary hover:text-black";

    btn.innerHTML = `<img src=${pet?.category_icon} width="20px md:30px" alt=""> ${pet.category}`;
    btn.setAttribute("onclick", `categoryPets('${pet.category}')`);
    btn.setAttribute("id", `btn-${pet.category}`);

    categoriesContainer.append(btn);
  });
};

const categoryPets = (id) => {
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      showPets(data.data);
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

  if (data.length === 0) {
    petContainer.classList.remove("grid");
    petContainer.classList.add("w-full");

    petContainer.innerHTML = `
       <div class="w-full flex flex-col justify-center text-center items-center bg-[#13131308] rounded-lg p-10">
        <img src='../images/error.webp' width="400px"/>
        <h1 class='text-4xl font-bold my-4' >No Information Available</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at </br>
its layout. The point of using Lorem Ipsum is that it has a.</p>
       </div>
        `;
  } else {
    petContainer.innerHTML = "";
    petContainer.classList.add("grid");
    petContainer.classList.add("w-full");
    data.forEach((pet) => {
      const item = document.createElement("div");
      item.classList = "card card-compact bg-base-100  shadow-xl border pt-5";
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
                      <button onclick={likePet(${
                        pet?.petId
                      })}  class="btn btn-sm text-primary text-xl px-8"><i class="fa-regular fa-thumbs-up"></i></button>
                      <button class="btn btn-sm text-primary text-lg">Adopt</button>
                      <button onclick={petDetails(${
                        pet?.petId
                      })}  class="btn btn-sm text-primary text-lg" >Details</button>
                    </div>
              `;
      petContainer.append(item);
    });
  }
};

const petDetails = (id) => {
  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    .then((res) => res.json())
    .then((data) => showPetDetails(data.petData));
};

const showPetDetails = (data) => {
  const model = document.getElementById("modal");
  model.click();
  const modalContent = document.getElementById("modal-content");
  modalContent.innerHTML = `
    <div class='w-full'>
    <img src=${data.image} width="100%"/>
    </div>
    
  <div class="card-body text-gray-500">
                    <h2 class="card-title text-black">${
                      data?.pet_name ? data?.pet_name : "Not Available"
                    }</h2>
                    <p><i class="fa-brands fa-squarespace"></i> Breed: ${
                      data?.breed ? data?.breed : "Not Available"
                    }</}</p>
                    <p><i class="fa-solid fa-calendar-days"></i> Birth: ${
                      data?.date_of_birth ? data.date_of_birth : "Not Available"
                    }</p>
                    <p><i class="fa-solid fa-mercury"></i> Gender: ${
                      data?.gender ? data?.gender : "Not Available"
                    }</p>
                    <p><i class="fa-solid fa-mercury"></i> Price : ${
                      data?.price ? data?.price : "Not Available"
                    }</p>
                    <hr />
                    <h3 class="text-2xl font-bold">
                    Details Information
                    <h3>
                    <p>${data.pet_details}</p>
    `;
};

petsData();

// like button
const likePet = (id) => {
  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    .then((res) => res.json())
    .then((data) => showLikePet(data.petData));
};

const showLikePet = (data) => {
  const likePet = document.getElementById("like-pet");

  const element = document.createElement("div");
  element.classList = "mb-5   ";
  element.innerHTML = `
      <img src=${data?.image}/>
      `;
  likePet.append(element);
  console.log(element);
};
