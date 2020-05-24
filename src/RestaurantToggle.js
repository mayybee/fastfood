import React from 'react';
import { 
  connectRefinementList
} from 'react-instantsearch-dom';
import restaurants from "./restaurants";
import { orderBy } from 'lodash';

// const cuisinesData = cuisines;
// const restaurantsData = restaurants;

//imports all svgs
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./assets/logos', false, /\.svg/));

console.log(images);
  
  function RestaurantToggle() {
    return (
      <div id="restaurant-list-wrapper" className="mt-5 mb-4 pt-4 pb-2 mr-4 border-b border-black-300 clearfix">
      <h3 className="text-lg font-semibold pb-4">Popular Restaurants</h3>
        <div className="pb-10">
          <CustomRefinementList 
            attribute="restaurant" 
            transformItems={items => orderBy(items, "label", "asc")}
          />
        </div>   
      </div>
    )
  }
  
  // function ListItem(props) {
  //   return (
  //     <div className="mr-8 float-left w-16 rounded overflow-hidden">
  //       <img className="rounded-full overflow-hidden w-full h-16 mx-auto bg-white shadow-lg" src={images[props.data.image]} alt={props.data.name} />
  //       <div className="py-2">
  //         <div className="text-center text-xs">{props.data.name}</div>
  //       </div>
  //     </div>
  //   );
  // }

  const RefinementList = ({ items, currentRefinement, refine }) => (
    <div>
    <div className="table-fixed rounded-xl">
      {items.map(item => (
          <a href="#" 
            style={{ fontWeight: item.isRefined ? '' : '' }} 
            onClick={event => {
            event.preventDefault();
            refine(item.value);
          }}>
          <div key={item.label} className={`rounded-xl pt-3 mr-2 pb-2 float-left hover:bg-gray-200 w-24 ${ item.isRefined ? "bg-gray-200" : "" }`}>
            <img className="rounded-full overflow-hidden w-10 h-10 mx-auto bg-white mb-2" src={images[item.label.replace(/\s+/g, '') + ".svg"]} alt={item.label} />
            <div className="text-center text-sm">{item.label}</div>
          </div>
        </a>
      ))}
      </div>
    </div>
  );


const CustomRefinementList = connectRefinementList(RefinementList);


export { RestaurantToggle };
