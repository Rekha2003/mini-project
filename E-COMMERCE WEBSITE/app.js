const wrapper=document.querySelector(".sliderWrapper");
const menuItems= document.querySelectorAll(".menuItem");
const products = [
    {
        id:1,
        title:"Puma",
        price:2500,
        colors:[
            {
                code:"black",
                img:"./image/ecommerce/puma-black.jpg" ,
            },
            {
                code:"darkblue",
                img: "./image/ecommerce/puma-blue.jpg",
            },
        ],

    },
    {
        id:2,
        title:"Air Jorden",
        price:2500,
        colors:[
            {
                code:"black",
                img: "./image/ecommerce/jordan-black.png",
            },
            {
                code:"darkblue",
                img: "./image/ecommerce/jordan-blue.jpg",
            },
        ],

    },
    {
        id:3,
        title:"Blazer",
        price:3000,
        colors:[
            {
                code:"black",
                img: "./image/ecommerce/blazer-black.jpeg",
            },
            {
                code:"darkblue",
                img: "./image/ecommerce/blazer-blue.jpeg",
            },
        ],

    },
    {
        id:4,
        title:"Hrater",
        price:2500,
        colors:[
            {
                code:"black",
                img: "./image/ecommerce/hrater-black.jpeg",
            },
            {
                code:"darkblue",
                img: "./image/ecommerce/hrater-blue.jpeg",
            },
        ],

    },
    {
        id:5,
        title:"Nike",
        price:2500,
        colors:[
            {
                code:"black",
                img: "./image/ecommerce/nike-black.jpg",
            },
            {
                code:"darkblue",
                img: "./image/ecommerce/nike-blue.png",
            },
        ],

    },
    
];
let choosenProduct=products[0]
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductcolors= document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item,index) => {
    item.addEventListener("click",() => {
        //change the current slide
    wrapper.style.transform = `translatex(${-100 * index}vw)`;
    // change the choosen product
choosenProduct = products[index]
    //change  texts of currentProduct
 currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = choosenProduct.price + "/-";
    currentProductImg.src = choosenProduct.colors[0].img;
    //assigning new colors
    currentProductColors.forEach((color,index) =>{
        color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});


currentProductColors.forEach((color,index) =>{
    color.addEventListener("click",() => {
    currentProductImg.src = choosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size,index) =>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size) =>{
            size.style.backgroundColor= "white";
            size.style.color= "black";
        });
     size.style.backgroundColor= "black";
     size.style.color="white";
    });
});

const productButton = document.querySelector(".productButton");
const payment =document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",() =>{
    payment.style.display="flex"
})

close.addEventListener("click",()=>{
    payment.style.display="none"
})