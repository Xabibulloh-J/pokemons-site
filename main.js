var elPokeList = document.querySelector(".js-poke-list");

for (var poke of pokemons) {
   
   var newItem = document.createElement("li");
   newItem.classList.add("relative");
   newItem.classList.add("w-[210px]")
   newItem.classList.add("rounded-[10px]")
   newItem.classList.add("py-[15px]")
   newItem.classList.add("bg-[#FFEBCD]")

   var newSpan = document.createElement("span");
   var newImg = document.createElement("img");
   var newTitle = document.createElement("h3");
   var newDesc = document.createElement("p");

   newSpan.textContent = poke.num;
   newSpan.title = poke.num;
   newSpan.classList.add("absolute");
   newSpan.classList.add("top-[0px]");
   newSpan.classList.add("left-[0px]");
   newSpan.classList.add("p-[5px]")
   newSpan.classList.add("rounded-tl-[10px]")
   newSpan.classList.add("rounded-br-[10px]")
   newSpan.classList.add("bg-[#FFD700]")
   newSpan.classList.add("text-[#fff]");

   newImg.src = poke.img;
   newImg.title = poke.name;
   newImg.classList.add("mx-auto")
   newImg.classList.add("mb-[10px]")

   newTitle.textContent = poke.name;
   newTitle.title = poke.name;
   newTitle.classList.add("border-t-[0.5px]");
   newTitle.classList.add("border-solid");
   newTitle.classList.add("border-[#000]");
   newTitle.classList.add("text-center");
   newTitle.classList.add("text-[24px]");
   newTitle.classList.add("py-[5px]");

   newDesc.textContent = poke.type.join(" ");
   newDesc.title = poke.type.join(" ");
   newDesc.classList.add("mt-[5px]");
   newDesc.classList.add("text-center");
   newDesc.classList.add("text-[18px]");

   newItem.append(newSpan, newImg, newTitle, newDesc);

   elPokeList.appendChild(newItem);
}