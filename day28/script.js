let main = document.querySelector("main")
const developers = [
    {
        name: "Sajda Parveen",
        role: "FullStack Developer",
        about: "A developer who works hard to achieve all her dreams",
        image: "./Assets/WhatsApp Image 2025-04-14 at 11.53.58_66df4e07.jpg"
    },

    {
        name: "Jimmy",
        role: "Cute Cat",
        about: "Sleeps in Sajda's arms and listens to all her stories",
        image: "https://moderncat.com/wp-content/uploads/2025/03/ss_2510990453_Akifyeva-S-1-1440x980.jpg"
    },

    {
        name: "Clifav Technologies",
        role: "Software Company",
        about: "Builds websites, mobile apps, and works with AI, ML & Blockchain",
        image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
    },

    {
        name: "Noor",
        role: "AI Enthusiast",
        about: "Loves learning AI, ML and wants to create a model like ChatGPT",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
    }
];

let sum = ""
let arr = developers.forEach((elem)=>{
    
    sum =sum +  `<div class="card">
            <img src="${elem.image}" alt="image of developer">
            <h1>${elem.name}</h1>
            <h4>${elem.role}</h4>
            <p>${elem.about}</p>
        </div>`
})

main.innerHTML = sum