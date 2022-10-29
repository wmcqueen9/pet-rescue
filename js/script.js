const statusButton = document.querySelector("button");
const pets = document.querySelector(".all-pets");
const createPets = function (name, species) {
  const pet = {
    name: name,
    species: species,
    isTired: 5,
    sleep: function () {
      console.log(`${pet.name} needs a nap Zzzz...`);
      this.isTired = 1;
    },
    play: function () {
      if (this.isTired === 10) {
        console.log("Too tired to play.");
        this.sleep();
      } else {
        console.log(`YAY! ${pet.name} loves to play!`);
        this.isTired += 1;
      }
    }
  };
  return pet;
};
const sora = createPets("Sora", "ferret");
const clover = createPets("Clover", "rabbit", 8);
const baxter = createPets("Baxter", "hamster");
const cleo = createPets("Cleo", "rat");
const fancine = createPets("Fancine", "turtle", 9);
//console.log(sora, baxter, cleo, fancine);
//clover.sleep();
//baxter.play();
//console.log(clover, baxter);
clover.isTired = 8;
fancine.isTired = 9;

const allPets = [sora, clover, baxter, cleo, fancine];
console.log(allPets);
const showPets = function (petArray) {
  pets.innerText = "";
  for (let pet of petArray) {
    let status = "Ready to play";
    if (pet.isTired >= 7) {
      status = "Sleeping";
    }
    const li = document.createElement("li");
    li.innerHTML = `<span class="pet-name">${pet.name}</span> the ${pet.species}, is ${status}`;
    pets.append(li);
  }
};
statusButton.addEventListener("click", function () {
  showPets(allPets);
});
