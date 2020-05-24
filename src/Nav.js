import React from 'react';
import { connectSearchBox } from 'react-instantsearch-dom';
import logo from './assets/img/hff-logo.svg';

function Nav() {
    return (
        <nav className="bg-white w-full flex h-20 top-0 left-0 p-4 z-50">
                <div className="flex items-center w-full">
                    <div id="nav-brand" className="flex flex-grow lg:w-1/4">
                        <img className="h-12" src={logo} alt="Healthy Fast Food Logo" />   
                    </div>
                    <div className="flex flex-grow lg:w-3/4 xl:w-4/5">
                        <CustomSearchBox/>
                    </div>
                    <div className="flex items-center">
                    {/* <a href="#" className="inline-flex px-3 py-2 rounded-md text-md shadow-md hover:shadow-lg font-medium text-gray-500 hover:text-gray-500 bg-white hover:outline-none hover:text-gray-800 hover:bg-gray-500"><span className="inline-flex mr-2">🎉 </span> Deals</a>
                    <a href="#" className="inline-flex ml-3 px-3 py-2 rounded-md text-md shadow-md font-medium text-gray-500 bg-white focus:outline-none focus:text-gray-800 focus:bg-gray-500"><span className="inline-flex mr-2">🚚 </span>Order</a> */}

                    </div>
                </div>
        </nav>
    )
}

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
    <div className="w-full xl:w-3/4 ">
        <form className="bg-gray-100 focus:bg-gray-200 hover:bg-gray-200 px-2 py-3 w-448 w-full flex items-center rounded-full">
            <div className="flex-grow-0 flex-shrink-0 h-4 w-4 mr-3 ml-2 ">
                <svg className="block h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path  d="M19.71,18.29,16,14.61A9,9,0,1,0,14.61,16l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,19.71,18.29ZM2,9a7,7,0,1,1,12,4.93h0s0,0,0,0A7,7,0,0,1,2,9Z">
                    </path>
                </svg>
            </div>
            <input
                className="bg-transparent w-full placeholder-gray-600 text-gray-600 text-lg"
                placeholder="Search for restaurants and meals"
                type="search"
                value={currentRefinement}
                onChange={event => refine(event.currentTarget.value)}
            />
            {/* <button onClick={() => refine('')}>reset</button> */}
            {/* {isSearchStalled ? 'Loading' : ''} */}
            
        </form>
    </div>
  );

const CustomSearchBox = connectSearchBox(SearchBox);

export default Nav;
