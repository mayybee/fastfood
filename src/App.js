import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Pagination,
  Configure,
  NumericMenu,
  CurrentRefinements
} from 'react-instantsearch-dom';
import 'instantsearch.css/themes/reset.css';
import './App.css';
import Nav from './Nav';
import { RestaurantToggle } from './RestaurantToggle';
import { BestOfToggle } from './BestOfToggle';
import Filters from './Filters';
import Hits from './Hits';
const searchClient = algoliasearch('35TUHXZA2J', '4ddd955ae32a461b8c97ffd4b904c287');

class App extends Component {
  render() {
    return (
      <InstantSearch indexName="mealData" className="" searchClient={searchClient}>
        <Nav />
        <article className="grid grid-cols-4 bg-gray-100 min-h-100">
          <section className="col-span-1 hidden lg:block pt8">
            <Filters />
          </section>
          <section className="lg:col-span-3 col-span-4 mb-16  min-h-100">
            <div className="">
              <RestaurantToggle/>
              <BestOfToggle/>
              {/* <CurrentRefinements /> */}
              <Hits />
              
            </div>
          </section>
        </article>
        <Configure hitsPerPage={24} />
      </InstantSearch>
    );
  }
}

export default App;