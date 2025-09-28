// console.log("hello world");
const loadePhone = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data = await response.json();
    displayPhones(data.data);
}
loadePhone();
function displayPhones(phones) {
    const phoneContainer = document.getElementById('phone-container');
    for (const phone of phones) {
        console.log(phone);
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('phone', 'rounded-lg', 'shadow-lg');
        phoneDiv.id = 'phone';
        phoneDiv.innerHTML = `
        <div class="flex flex-col  p-5 items-center w-96 mx-auto m-10 border-white">
        <img class="" src="${phone.image}" alt="">
    <h3 class=" text-center font-bold ">${phone.phone_name}</h3>
    <p>Brand: ${phone.brand}</p>
    
    </div>
    `;
        phoneContainer.appendChild(phoneDiv);



    }

}
