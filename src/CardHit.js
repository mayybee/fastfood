import React from "react";
import Popup from "reactjs-popup";
import styled from 'styled-components';
import NutritionFacts from './NutritionFacts'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./assets/logos', false, /\.svg/));


// const StyledPopup = styled(Popup)`
//   &-overlay {
    
//   }
//   &-content {
//     background: red;
//     width: 75%;
//   }
// `


function CardHit(props) {
  let fileName = props.data.restaurant + ".svg";
  fileName = fileName.replace(/\s/g, '');
  return (
    <Popup trigger={
    <div className="bg-white hover:opacity-75 shadow-md rounded-xl thumb-meal cursor-pointer overflow-hidden">
      <div className="">
        <div className="pt-full w-full text-center align-middle relative overflow-hidden bg-white ">
          <img src={props.data.image} className="thumbnail vertical-center" alt="" />
          <div class="overlay"> </div>
          <img className="absolute m-3 top-0 left-0 h-8 w-8 z-20 logo-badge shadow-md bg-white rounded-tl-lg rounded-br-lg" src={images[fileName]} alt="{props.data.restaurant}" />
          <div className="absolute m-3 top-0 right-0 h-8 z-20 bg-blue-100 opacity-75 px-2 rounded-md calorie-badge"><span className="text-lg leading-8 text-blue-600">{props.data.calories} cal</span></div>

          {/* <div style="background-image: url({props.data.image}) center center no-repeat;" className="w-full h-full"></div> */}
        </div>
      </div>
      <div className="px-3 pt-3">
        <p className="text-md font-bold m-0">{props.data.name}</p>
        <p className="text-sm text-gray-500 m-0">{props.data.restaurant}</p>
      </div>
      {/* <div className="px-3 pt-3">
        
        <div className="flex justify-between my-3">
          <div>
            <p className="text-lg ">{props.data.protein}g</p>
            <p className="text-gray-500 text-xs">Protein</p>
          </div>
          <div>
            <p className="text-lg ">{props.data.carbs}g</p>
            <p className="text-gray-500 text-xs ">Carbs</p>
          </div>
          <div>
            <span className="text-lg ">{props.data.fat}g</span><br />
            <span className="text-gray-500 text-xs">Fat</span>
          </div>
        </div>
      </div> */}
    </div>
    } modal
      closeOnDocumentClick
      //what to do here?? maybe try CSS modules
      overlayStyle={{ background: "rgba(0,0,0,0.30" }}
      contentStyle={{ "borderRadius": "1rem", width: "80%", height: "80%"}}
      >
       <div className="grid grid-cols-3 gap-4 p-5">
        <div className="col-span-1">
          <ImageContainer imageName={props.data.image} className="w-32" />
        </div>
        <div className="col-span-1">
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
        </div>
        <div className="col-span-1">
          <NutritionFacts data={props.data}/>
        </div>
       </div>
    </Popup>
  )
}

function ImageContainer(props){
  return (
    <div className="pt-full w-full text-center align-middle relative overflow-hidden bg-white ">
          <img src={props.imageName} className="thumbnail vertical-center rounded-t-lg" alt="" />
          <div class="overlay"> </div>
        </div>
  )
}

export default CardHit;