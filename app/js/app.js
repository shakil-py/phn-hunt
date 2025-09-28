// console.log("hello world");
const loadPhone = async (searchText) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await response.json();
    displayPhones(data.data);
};

function displayPhones(searchText) {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    for (const phone of searchText) {
        console.log(phone);
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('phone', 'rounded-lg', 'shadow-lg');
        phoneDiv.id = 'phone';
        phoneDiv.innerHTML = `
        <div class="card bg-white  shadow-sm mt-16">
    <figure>
    <img class="w-1/2 h-1/2 mt-5"
      src=${phone.image} />
  </figure>
  <div class="card-body">
    <h2 class="flex justify-center m-10 card-title font-black text-black">${phone.phone_name}</h2>
    <div class=" card-actions justify-end">
      <button class="btn btn-primary w-full bg-amber-500 text-white 
        
      }">Buy Now</button>
    </div>
  </div>
</div>
    `;
        phoneContainer.appendChild(phoneDiv);

    }
    

};
const searchPhone = async () => {
    const searchField = document.getElementById('search-phn');
    const searchText = searchField.value;
    searchField.value = '';
    loadPhone(searchText);
};
