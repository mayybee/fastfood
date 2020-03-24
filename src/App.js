import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  connectHits,
  SearchBox,
  Pagination,
  ClearRefinements,
  RefinementList,
  Configure,
  ToggleRefinement,
  NumericMenu
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Table,
} from 'react-bootstrap';

import cuisineList from "./cuisinelist";

import restaurantList from "./restaurantlist";
const cuisineListData = cuisineList;
const restaurantListData = restaurantList;

const searchClient = algoliasearch('35TUHXZA2J', '4ddd955ae32a461b8c97ffd4b904c287');

class App extends Component {
  render() {
    return (
      <InstantSearch indexName="mealData" className="root" searchClient={searchClient}>
        <div className="flex border-b bg-white border-gray-200 fixed top-0 inset-x-0 z-100 h-16 items-center">
          <div className="flex w-full relative mx-auto">
            <div className="flex lg:w-1/4 xl:w-1/5 pl-6 pr-6 lg:pr-8"><h1 className="text-xl font-bold font-serif">Healthy Fast Food</h1></div>
            <div className="flex flex-grow lg:w-3/4 xl:w-4/5"><SearchBox /></div>
          </div>
        </div>
        <div className="grid grid-cols-4 mt-16">
          <div className="col-span-1 hidden lg:block bg-pink-100 pt8">
            <Settings />
          </div>
          <div className="col-span-4 lg:col-span-3">
            <div className="">
             {/* <CuisineList /> */}
              <RestaurantList />
              <CustomHits />
              <Pagination />
            </div>
          </div>
        </div>
        <Configure hitsPerPage={16} />
      </InstantSearch>
    );
  }
}

function CuisineList() {
  return (
    <div id="cuisine-wrapper " className="p-4 clearfix border-b border-black-300">
      <h3 className="font-serif text-xl text-bold">Best Of Lists</h3>
      <div className="pt-4 pb-8">
      {cuisineListData.map((d, i) => (
        <div>
          <Card key={i} data={d} width={"24"}/>
        </div>
      ))}
      </div>
    </div>
  );
}

function RestaurantList() {
  return (
    <div id="restaurant-list-wrapper" className="p-4 clearfix border-b border-black-300 clearfix">
      <h3 className="font-serif text-xl text-bold">Popular Restaurants</h3>
      <div className="pt-4 pb-8">
      {restaurantListData.map((d, i) => (
        <div>
          <Card key={i} data={d} width={"20"}/>
        </div>
      ))}
      </div>
    </div>
  )
}

function Card(props) {
  return (
    <div className={`float-left pr-4 rounded overflow-hidden w-${props.width}`}>
      <img className={`rounded-full overflow-hidden h-${props.width}`} src={props.data.image} alt={props.data.name} />
      <div className="py-2">
        <div className="text-center text-xs">{props.data.name}</div>
      </div>
    </div>
  );
}

function Tag(props){
  return (
    <span className={`text-xs py-1 px-1 ${props.color}`}>
      {props.label}
    </span>
  )
}

function Settings() {
  return (
    <div id="sidebar" className="p-4">
      <h3 className="text-xl font-serif">Filters</h3>
      <ClearRefinements className="" translations={{
        reset: 'CLEAR ALL',
      }} />

      <div className="facet-container">
        <label className="test-lg font-serif">Dietary Restrictions</label>
        <ToggleRefinement
          attribute="vegetarian"
          label="Vegetarian"
          value="TRUE"
        />
        <ToggleRefinement
          attribute="vegan"
          label="Vegan"
          value="TRUE"
        />
        <ToggleRefinement
          attribute="paleo"
          label="Paleo"
          value="TRUE"
        />
        <ToggleRefinement
          attribute="no_lactose"
          label="Lactose Allergy"
          value="TRUE"
        />
        <ToggleRefinement
          attribute="no_gluten"
          label="Gluten Allergy"
          value="TRUE"
        />
        <ToggleRefinement
          attribute="no_nuts"
          label="Peanut/Tree Nut Allergy"
          value="TRUE"
        />

      </div>
      <div className="facet-container clearfix">
        <label className="test-lg font-serif">Calories</label>
        <NumericMenu
          attribute="calories"
          items={[
            { label: '0 - 100', start: 0, end: 100 },
            { label: '100 - 300', start: 100, end: 300 },
            { label: '300 - 500', start: 300, end: 500 },
            { label: '500+', start: 501, end: 10000 }
          ]}
        />
      </div>
    </div>
  );
}

const Hits = ({ hits }) => (
  <Table responsive className="">
    <thead>
      <tr className="hidden">
        <th></th>
        <th>Restaurant</th>
        <th>Meal</th>
        <th>Calories</th>
        <th>Protein</th>
        <th>Fat</th>
        <th>Carbs</th>
      </tr>
    </thead>
    <tbody className="">
      {hits.map((hit) => (
        <tr className="pr-8" key={hit.objectID}>
          <td className="h-32 w-32"><img src={hit.image} className="w-full" alt=""/></td>
          <td>
            <span className="text-md font-bold">{hit.name}</span><br/>
            <span className="text-gray-500">{hit.restaurant}</span>
            <br />
            <Tag color="bg-gray-200" label="High Protein" />
            <Tag textColor="white" color="bg-green-500" label="Vegetarian" />
          </td>
          <td class="text-right">
            <span className="text-2xl">{hit.calories}</span><br/>
            <span className="text-gray-500 text-xs uppercase">Calories</span>
          </td>
          <td class="text-right">
            <span className="text-2xl">{hit.protein}g</span><br/>
            <span className="text-gray-500 text-xs uppercase">Protein</span>
          </td>
          <td class="text-right">
            <span className="text-2xl">{hit.fat}g</span><br/>
            <span className="text-gray-500 text-xs uppercase">Fat</span>
          </td>
          <td class="text-right pr-4">
            <span className="text-2xl">{hit.carbs}g</span><br/>
            <span className="text-gray-500 text-xs uppercase">Carbs</span>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>

);

const CustomHits = connectHits(Hits);

// Hit.propTypes = {
//   hit: PropTypes.object.isRequired,
// };


// function Hit(props) {
//   return (
//     <article>
//       <img src={props.hit.image} align="left" alt={props.hit.name} />
//       <div className="hit-name">{props.hit.restaurant}</div>
//       <div className="hit-name">{props.hit.name}</div>
//       <div className="hit-calories">{props.hit.calories} calories</div>
//       <div className="hit-calories">{props.hit.fat} g Fat</div>
//       <div className="hit-calories">{props.hit.protein} g Protein</div>
//       <div className="hit-calories">{props.hit.carbs} g Carbs</div>
//     </article>
//   );
// }

export default App;

//taco bell
//KFC
//dunkin
//krispy kreme

