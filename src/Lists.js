import React from 'react';

import cuisines from "./cuisines";
import restaurants from "./restaurants";
const cuisinesData = cuisines;
const restaurantsData = restaurants;


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./assets/logos', false, /\.svg/));

console.log(images);

function CuisineList() {
    return (
      <div id="cuisine-wrapper " className="p-4 clearfix border-b border-black-300">
        <h3 className="text-xl text-bold">Best Of Lists</h3>
        <div className="pt-4 pb-8">
          {cuisinesData.map((d, i) => (
            <div>
              <ListItem key={i} data={d} width={"24"} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  function RestaurantList() {
    return (
      <div id="restaurant-list-wrapper" className="my-4 py-4 mr-4 clearfix border-b border-black-300 clearfix">
        <div className="pb-4">
          {restaurantsData.map((d, i) => (
            <div>
              <ListItem key={i} data={d} width={"16"} />
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  function ListItem(props) {
    return (
      <div className="mr-8 float-left w-16 rounded overflow-hidden">
        <img className="rounded-full overflow-hidden w-full h-16 mx-auto bg-white shadow-lg" src={images[props.data.image]} alt={props.data.name} />
        <div className="py-2">
          <div className="text-center text-xs">{props.data.name}</div>
        </div>
      </div>
    );
  }

export { CuisineList, RestaurantList };
