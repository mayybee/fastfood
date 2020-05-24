import React from 'react';
import { 
  connectToggleRefinement,
  connectRefinementList,
  SortBy
} from 'react-instantsearch-dom';
import bestOf from "./bestOf";
import restaurants from "./restaurants";
import { orderBy } from 'lodash';
const bestOfData = bestOf;
const restaurantsData = restaurants;

//imports all svgs
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('./assets/logos', false, /\.svg/));

console.log(images);

function BestOfToggle() {
    return (
      <div className="clearfix">
        <h3 className="text-sm font-semibold pb-2">Sort By</h3>
        <SortBy
          defaultRefinement="mealData"
          items={[
            { value: 'mealData', label: 'Most relevant' },
            { value: 'protein_desc', label: 'Highest protein' },
            { value: 'calories_asc', label: 'Lowest calories' },
            { value: 'protein_carb_ratio_asc', label: 'Highest Protein:Carb Ratio' },
            { value: 'sodium_asc', label: 'Lowest Sodium' },
            { value: 'cholesterol_asc', label: 'Lowest Cholesterol' }



          ]}
        />
        {/* <div className="pt-4 pb-8">
          {bestOfData.map((d, i) => (
            <div>
              <BestOfButton key={i} data={d} width={"24"} />
            </div>
          ))}
        </div> */}
      </div>
    );
  }
  
  
  function BestOfButton(props) {
    return (
      <div className="mr-3 float-left">
        <div className="py-1 px-3 rounded-full border border-gray-300 hover:bg-gray-100 cursor-pointer">
          <div className="text-center text-sm">{props.data.emoji} {props.data.name}</div>
        </div>
      </div>
    );
  }

  const RefinementList = ({ items, currentRefinement, refine }) => (
    <div>
      {items.map(item => (
          <a href="#" 
            style={{ fontWeight: item.isRefined ? 'bold' : '' }} 
            onClick={event => {
            event.preventDefault();
            refine(item.value);
          }}>
          <div key={item.label} className={`rounded-lg mr-4 py-4 float-left hover:bg-gray-300 w-32 ${ item.isRefined ? "bg-gray-300" : "" }`}>
            <img className="rounded-full overflow-hidden w-16 h-16 mx-auto bg-white shadow-lg" src={images[item.label + ".svg"]} alt={item.label} />
            <div className="text-center">{item.label}</div>
          </div>
        </a>
      ))}
    </div>
  );


const CustomRefinementList = connectRefinementList(RefinementList);


  // const CustomRefinementList = connectRefinementList(props => {
  //     const sortedItems = orderBy(props.items, ['label'],['asc']);
  //     const values = sortedItems.map(item => <li key={item.value}>
  //       <input type="checkbox" checked={item.isRefined} onChange={() => props.refine(item.value)}/>
  //       {item.label} - {item.count}
  //     </li>);
  //     return (
  //       <div>
  //       {values}
  //       </div>
  //     )
    



  

export { BestOfToggle };
