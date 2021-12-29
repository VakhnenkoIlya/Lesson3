"use strict"
const products =[
    {
    id: 3,
    price: 127,
    photos: [
    "1.jpg",
    "2.jpg",
    ]
    },
    {
    id: 5,
    price: 499,
    photos: []
    },
    {
    id: 10,
    price: 26, 
    photos: [ 
    "3.jpg" 
    ]
    },
    {
    id: 8,
    price: 78,
    },
    ];
    //Задание 1 товары с фото
    const productsPhoto = products.filter(element => "photos" in element && element.photos.length >0);
    console.log(productsPhoto);
    //Задание 2 товары по увеличению цены
    const productsPrice = products.sort(function(product1, product2){
        return product1.price - product2.price;
    })
    console.log(productsPrice);