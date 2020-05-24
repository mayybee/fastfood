import React from "react";
import NutritionFacts from './NutritionFacts'

function ImageContainer(props) {
  return (
    <div className="pt-75 w-full rounded-xl text-center align-middle relative overflow-hidden bg-white ">
      <img src={props.imageName} className="thumbnail vertical-center" alt="" />
      <div class="overlay"> </div>
    </div>
  )
}

function Button(props) {
  return (
    <a class="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg inline-flex items-center" href={props.data.link}>
      <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
      <span>Order Now</span>
    </a>
  )
}

function Modal(props) {
  return (
    <div className="shadow-custom-md rounded-xl bg-white grid grid-cols-5 gap-8 p-8">
      <div className="col-span-2">
       <ImageContainer imageName={props.data.image} className="" />
       <a class="bg-red-600 hover:bg-red-800 text-white font-bold mt-4 py-2 px-4 rounded-lg inline-flex items-center" href={props.data.order_link}>
          <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
          <span>Order Now</span>
        </a>
      </div>

      <div className="col-span-3">
        <p className="text-2xl font-bold m-0">{props.data.name}</p>
        <p className="text-lg text-gray-500 m-0">{props.data.restaurant}</p>
        <div className="flex justify-between my-3 w-full">
          <div>
            <p className="text-2xl text-blue-500">{props.data.calories}</p>
            <p className="text-blue-300 text-sm">Calories</p>
          </div>
          <div>
            <p className="text-2xl ">{props.data.protein}g</p>
            <p className="text-gray-500 text-sm">Protein</p>
          </div>
          <div>
            <p className="text-2xl ">{props.data.carbs}g</p>
            <p className="text-gray-500 text-sm ">Carbs</p>
          </div>
          <div>
            <span className="text-2xl ">{props.data.fat}g</span><br />
            <span className="text-gray-500 text-sm">Fat</span>
          </div>
        </div>
        <NutritionFacts data={props.data} />

      </div>

    </div>
  )
}

export default Modal;


