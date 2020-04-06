import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Pagination,
  Configure,
  NumericMenu
} from 'react-instantsearch-dom';
import 'instantsearch.css/themes/reset.css';
import './App.css';
import Nav from './Nav';
import NutritionFacts from './NutritionFacts';

import { RestaurantList, CuisineList } from './Lists';
import Settings from './Settings';
import CustomInfiniteHits from './CustomInfiniteHits';

const searchClient = algoliasearch('35TUHXZA2J', '4ddd955ae32a461b8c97ffd4b904c287');

class App extends Component {
  render() {
    return (
      <InstantSearch indexName="mealData" className="" searchClient={searchClient}>
        <Nav />
        <article className="grid grid-cols-5 mt-16 bg-gray-100">
          <section className="col-span-1 hidden lg:block pt8">
            
            <Settings />
          </section>
          <section className="col-span-4 lg:col-span-4">
            <div className="">
              <RestaurantList /> 
              <CustomInfiniteHits />
            </div>
          </section>
        </article>
        <Configure hitsPerPage={16} />
      </InstantSearch>
    );
  }
}

export default App;