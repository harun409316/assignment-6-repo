const plantDetails = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((json) => displayLoadplant(json.categories));
};

 const loadLevelCard = (id) => {
console.log(id);
//     const url = `https://openapi.programming-hero.com/api/plants${id}`
// fetch(url)
// .then(res => res.json())
// .then(data => console.log(data));

 };
 

const displayLoadplant = (categories) => {
    console.log(categories);
    // 1 get the container 
    const leftSide = document.getElementById("left-side");
    leftSide.innerHTML = "";
console.log(categories);
    // 2. get into every plants 
for(let category of categories){
    console.log(category);
    // 3. create Element 
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
    
    <button onclick="loadLevelCard('${category.id}') class="btn btn-soft btn-accent">${category.category_name}</button>
    
    
    `;
    leftSide.append(btnDiv);
}

//     const url = "https://openapi.programming-hero.com/api/categories";
//     fetch(url)
//     .then(res=>res.json())
//     .then(json => console.log(json));
// }
};

// displayLoadplant();
plantDetails();