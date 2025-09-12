


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
  
 const cardDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayModalDetails (data.plants);
 };
//  modal create 
  const displayModalDetails = (modalDetails) => {
    console.log(modalDetails);
    const modalbox = document.getElementById("modals");
    modalbox.innerHTML = `
    <h2 class=" font-bold"> ${modalDetails.name} </h2>
    <img class="w-[100%] h-48 object-cover rounded-md" src="${modalDetails.image}" alt="">
  <p class="text-sm text-gray-500"><span class="font-semibold text-black">Category:</span> ${modalDetails.category}</p>

    <p class="text-sm text-gray-500"> <span class="font-semibold text-black">Price:</span> ${modalDetails.price}</p>
    <p class="text-sm text-gray-500"><span class="font-semibold text-black">Description:</span>${modalDetails.description}</p>
    
    
    `;
    document.getElementById("my_modal_5").showModal();
  };
//  all plants section 
  const allTree = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
    .then(res => res.json())
    .then(data => defultcard(data.plants));

  };
  allTree();
 
  const defultcard = () =>{
    
  }

let cart =[];

function showCardDisplay(){
  const cartList = document.getElementById("cardList");
  const totalMoney = document.getElementById("total-money");
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach((num, indx) =>{
    total += num.price;
    const div = createElement("div");
    div.className = "flex items-center justify-between bg-green-100 rounded py-2 px-3";
    div.innerHTML=`
    <div>
    <span>${num.name}</span>
    <span class="flex items-center gap-2">
      ৳${num.price}
      </span>
    </div>
      <button class="text-red-500 font-bold text-lg remove-cart-btn" data-idx="${indx}">❌</button>
    
    `;
    cartList.appendChild(div);
  });
  totalMoney.textContent = total;

  document.querySelectorAll('.remove-cart-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const indx = parseInt(this.getAttribute('data-idx'));
      cart.splice(indx, 1);
      showCardDisplay();
    });
  });
}






  const displayLevelcard = (cards) => {
    console.log('hi:', cards);
    const cardContainer = document.getElementById("card-container")
    cardContainer.innerHTML = "";

    cards.forEach(card =>{
        console.log(card);
        const cardFile = document.createElement("div");
        cardFile.innerHTML = `
      
        
    <div class="card bg-white ">
    <div>
        <figure class=" p-4">
            <img class=" h-48 object-cover rounded-md" 
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
              <button onclick="cardDetails(${card.id})" class="btn btn-primary w-full rounded-full ">Add to Card</button>
            
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
      
      <button onclick="loadLevelCard('${category.id}')" class="btn btn-soft btn-accent w-[150px] bg-[#dcfce7]  hover:bg-blue-300 ">${category.category_name}</button>
      
      
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