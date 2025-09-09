const plantDetails = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
      .then((res) => res.json())
      .then((json) => displayLoadplant(json.categories));
  };
  
  const loadLevelCard = (id) => {
    console.log(id);
    const url = `https://openapi.programming-hero.com/api/category/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayLevelcard(data.plants));
  };
  
  // {
        //     "id": 3,
        //     "image": "https://i.ibb.co.com/xt98PwZq/jackfruit-min.jpg",
        //     "name": "Jackfruit Tree",
        //     "description": "A large tropical tree that bears the world’s biggest fruit, the jackfruit. Its sweet and aromatic flesh is both nutritious and filling, and the tree itself provides generous shade.",
        //     "category": "Fruit Tree",
        //     "price": 800
        // }

  const displayLevelcard = (cards) => {
    console.log(cards);
    const cardContainer = document.getElementById("card-container")
    cardContainer.innerHTML = "";

    cards.forEach(card =>{
        console.log(card);
        const cardFile = document.createElement("div");
        cardFile.innerHTML = `
      
        
    <div class="card bg-white ">
    <div>
        <figure class=" p-4">
            <img class="w-[100%] h-48 object-cover rounded-md" 
              src="${card.image}"
              alt="Shoes"
              class="rounded-xl" />
          </figure>
          <div class="card-body ">
            <h2 class="card-title font-semibold text-[14px]">${card.name}</h2>
            <p class="text-[12px]">${card.description} </p>
            <div class=" flex justify-between">
              <h1 class=" text-[14px] px-2 py-1 rounded-2xl text-[#15803D] bg-[#DCFCE7] ">${card.category}</h1>
             <div class=" font-semibold"> <p>${card.price}</p></div>
            </div>
            <div class="card-actions">
              <button class="btn btn-primary w-full rounded-full">Add to Card</button>
            </div>
          
        </div>
    </div>
  </div>
        `;
        cardContainer.append(cardFile);
    });

    };
  
  const displayLoadplant = (categories) => {
    console.log(categories);
    // 1 get the container
    const leftSide = document.getElementById("left-side");
    leftSide.innerHTML = "";
    console.log(categories);
    // 2. get into every plants
    for (let category of categories) {
      console.log(category);
      // 3. create Element
      const btnDiv = document.createElement("div");
      btnDiv.innerHTML = `
      
      <button onclick="loadLevelCard('${category.id}')" class="btn btn-soft btn-accent">${category.category_name}</button>
      
      
      `;
      leftSide.append(btnDiv);
    }
  
    //     const url = "https://openapi.programming-hero.com/api/categories";
    //     fetch(url)
    //     .then(res=>res.json())
    //     .then(json => console.log(json));
    // }
  };
  
 
  plantDetails();