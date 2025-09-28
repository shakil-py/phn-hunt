// console.log("hello world");
const loadePhone = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await response.json();
    displayPhones(data.data);
}
loadePhone();
// function displayPhones(phones) {
//     const phoneContainer = document.getElementById('phone-container');
//     for (const phone of phones) {
//         console.log(phone);
//         const phoneDiv = document.createElement('div');
//         phoneDiv.classList.add('phone', 'rounded-lg', 'shadow-lg');
//         phoneDiv.id = 'phone';
//         phoneDiv.innerHTML = `
//         <div class="flex flex-col bg-white justify-center items-center  p-5 items-center  mx-auto m-10 border-white">
//         <img class="" src="${phone.image}" alt="">
//     <h3 class=" text-center font-bold ">${phone.phone_name}</h3>
//     <p>Brand: ${phone.brand}</p>

//     </div>
//     `;
//         phoneContainer.appendChild(phoneDiv);



//     }
function displayPhones(phones) {
    const phoneContainer = document.getElementById('phone-container');
    for (const phone of phones) {
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

}
{/* <div class="flex flex-col bg-white justify-center items-center  p-5 items-center  mx-auto m-10 border-white">
    <img class="" src="${phone.image}" alt="">
        <h3 class=" text-center font-bold ">${phone.phone_name}</h3>
        <p>Brand: ${phone.brand}</p>

</div> */}