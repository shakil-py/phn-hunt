// console.log("hello world");
const loadPhone = async (searchText) => {
  const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await response.json();

  if (data.length == 0) {
    alert('no result found');

  }
  displayPhones(data.data);

};
showall = () => {
  const searchField = document.getElementById('search-phn');
  const searchText = searchField.value;
  loadPhone(searchText);
}

function displayPhones(searchText) {
  const phoneContainer = document.getElementById('phone-container');
  phoneContainer.textContent = '';
  const phonelength = searchText.length;
  const btn = document.getElementById('show-all-btn');
  if (phonelength > 10) {
    btn.classList.remove('hidden');
    searchText = searchText.slice(0, 12);
  }
  else {
    btn.classList.add('hidden');
  }

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
  loadspiner(true);
  const searchField = document.getElementById('search-phn');
  const searchText = searchField.value;
  searchField.value = '';
  loadPhone(searchText);
};

const loadspiner = (isLoading) => {
  const loaderSection = document.getElementById('loader');
  // loaderSection.classList.remove('hidden');
  if (isLoading) {
    loaderSection.classList.remove('hidden');

  }
  else {
    loaderSection.classList.add('hidden');

  }
}