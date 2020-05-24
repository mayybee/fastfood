import React from "react";
import Modal from "./Modal";
import Popup from "reactjs-popup";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('./assets/logos', false, /\.svg/));

function Card(props) {
  let fileName = props.data.restaurant + ".svg";
  fileName = fileName.replace(/\s/g, '');
  return (
    <Popup trigger={
    <div className="bg-white hover:opacity-50 shadow-custom-md rounded-2xl thumb-meal cursor-pointer overflow-hidden">
        <div className="pt-4 pb-3 px-4">
          <div className="flex">
          <img className="h-10 w-10 logo-badge bg-white rounded-full mr-3" src={images[fileName]} alt="{props.data.restaurant}" />
            <div className="">
              <p className="text-sm text-gray-700 m-0">{props.data.restaurant}</p>
              <p className="text-md font-bold m-0">{props.data.name}</p>
            </div>
          </div>
        </div>
        <div className="px-4 relative">
        {/* <span className="z-30 absolute top-sm left-0 bg-black rounded-r-full px-3 py-1 text-sm italic font-semibold text-white opacity-75">{props.data.calories} CAL</span> */}
          <div className="pt-75 w-full text-center align-middle relative overflow-hidden bg-white rounded-xl ">
            <img src={props.data.image} className="thumbnail vertical-center" alt="" />
            {/* <div className="absolute m-3 top-0 right-0 h-8 z-20 bg-blue-100 opacity-75 px-2 rounded-md calorie-badge">
              <span className="text-lg leading-8 text-blue-600">{props.data.calories} cal</span>
            </div> */}
          </div>
        </div>
        
        <div className="">
          <div className="pt-2 px-4 pb-4">
            <span className="inline-block bg-black opacity-75 rounded-full px-2 py-1 mt-2 text-sm font-semibold text-white mr-2">{props.data.calories} CAL</span>
            <span className="inline-block bg-gray-200 rounded-full px-2 py-1 mt-2 text-sm font-semibold text-gray-700 mr-2">{props.data.protein}g protein</span>
            <span className="inline-block bg-gray-200 rounded-full px-2 py-1 mt-2 text-sm font-semibold text-gray-700 mr-2">{props.data.carbs}g carbs</span>
            <span className="inline-block bg-gray-200 rounded-full px-2 py-1 mt-2 text-sm font-semibold text-gray-700">{props.data.fat}g fat</span>
          </div>
        </div>
      </div>  
    }
      modal closeOnDocumentClick overlayStyle={{ background: "rgba(255,255,255,0.80" }}
      contentStyle={{ 'background':'none', 'border':'none', width: "660px"}}
    >
      <Modal data={props.data} />
    </Popup>
  )
}


export default Card;