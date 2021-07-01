import { ICar } from "../types";

const product: ICar =
{
    id: 1,
    name: 'black car',
    images: [
        {
            src: "./images/products/black-car.jpg",
            btnSrc: "/images/icons/icon-black.jpg"
        },
        {
            src: "./images/products/red-car.jpg",
            btnSrc: "/images/icons/icon-red.jpg"
        },
        {
            src: "./images/products/silver-car.jpg",
            btnSrc: "/images/icons/icon-silver.jpg"
        },
        {
            src: "./images/products/steel-car.jpg",
            btnSrc: "/images/icons/icon-steel.jpg"
        }
    ],
    price: 1000,
    color: "black",
    engineType: "SOHC",
    displacement: 1000,
    horsePower: 100,
    torque: 35,
    redline: 500
}

export default product;
