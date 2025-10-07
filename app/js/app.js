// console.log("hello world");
const loadPhone = async (searchText = "13", ishowAll) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await response.json();
    const phones = data.data;
    displayPhones(phones, ishowAll);

};


function displayPhones(phones, ishowAll) {
    // console.log(phones);
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    const phonelength = phones.length;
    const btn = document.getElementById('show-all-btn');
    if (phonelength > 10) {
        btn.classList.remove('hidden');

    }
    else {
        btn.classList.add('hidden');
    }
    if (!ishowAll) {
        phones = phones.slice(0, 12);
    }
    else {
        btn.classList.add('hidden');
    }
    for (const phone of phones) {

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
      <button onclick="loadPhoneDetails('${phone.slug}')" class="btn btn-primary w-full bg-amber-500 text-white 
        
      }">showdetails</button>
    </div>
  </div>
</div>
    `;
        phoneContainer.appendChild(phoneDiv);

    }


};
const loadPhoneDetails = async (slug) => {
    const url = `https://openapi.programming-hero.com/api/phone/${slug}`;
    const res = await fetch(url);
    const data = await res.json();
    const phoneDetails = data.data;
    // console.log(phoneDetails);
    displayPhoneDetails(phoneDetails);
};
const displayPhoneDetails = (phoneDetails) => {
    const modalTitle = document.getElementById('my_modal_1');
    modalTitle.innerHTML = `
    <div class="modal-box">
    <h3 class="text-lg font-bold">${phoneDetails.name}</h3>
    <img class="w-1/2 h-1/2 mt-5"   src=${phoneDetails.image} />
    <p class="py-4">Release Date: ${phoneDetails.releaseDate ? phoneDetails.releaseDate : 'No release date found'}</p>
    <p class="py-4">Storage: ${phoneDetails.mainFeatures ? phoneDetails.mainFeatures.storage : 'No storage information found'}</p>  
    <p class="py-4">Bluetooth: ${phoneDetails.others ? phoneDetails.others.Bluetooth : 'No Bluetooth information found'}</p>
    <div class="modal-action">
        <form method="dialog">  
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Close</button>
        </form>
    </div>  
    </div>
    `;
    modalTitle.showModal();
}

    const searchPhone = async (ishowAll) => {
        loadspiner(true);
        const searchField = document.getElementById('search-phn');
        const searchText = searchField.value;
        // searchField.value = '';
        loadPhone(searchText, ishowAll);
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
    };
    const showAllbtn = () => {
        searchPhone(true);
    };

    loadPhone();