import React, { Component } from 'react';
import { 
  connectToggleRefinement,
  connectRange,
  ClearRefinements,
  NumericMenu
} from 'react-instantsearch-dom';
import 'rheostat/initialize';
import Rheostat from 'rheostat';
import 'rc-slider/assets/index.css';
import Slider, { Range } from 'rc-slider';
import { render } from 'react-dom';


function Filters() {
  return (
    <div id="sidebar" className="p-4 z-10 bg-gray-100 rounded-2xl m-6">
      <div className="clearfix">
        <h3 className="text-2xl font-bold inline-block">Filters</h3>
        <ClearRefinements className="pl-3 inline-block" translations={{
          reset: 'Clear all',
        }} />
      </div>
      <div className="facet-container mt-8">
        <label className="text-lg font-bold block mb-4">Dietary Restrictions</label>
        <CustomToggleRefinement
          attribute="VEGETARIAN"
          label="No Meat (Vegetarian)"
          value="TRUE"
        />
        <CustomToggleRefinement
          attribute="DAIRY"
          label="No Dairy"
          value="FALSE"
        />
        <CustomToggleRefinement
          attribute="WHEAT"
          label="No Wheat"
          value="FALSE"
        />
      </div>
      <div className="facet-container clearfix">
        <label className="test-lg font-bold pt-6 pb-6">Calories</label>
        <NumericMenu
          attribute="calories"
          items={[
            { label: '<200', start: 0, end: 200 },
            { label: '<400', start: 0, end: 400 },
            { label: '<600', start: 0, end: 600 },
          ]}
        />
      </div>
{/* 
          <CustomRangeSlider 
            attribute="calories"
            currentRefinement = {{ min: 0, max: 500 }} 
            min={0}
            max={700}
          /> */}
      {/* <CustomRangeSlider 
        attribute="calories" 
        defaultRefinement = {{ min: 100, max: 500 }}
        min={0}
        max={800}
        
      /> */}

    </div>
  );
}

const RangeSlider = ({
  defaultRefinement,
  min, 
  max,
  refine
}) => (
    <Range 
      min={min} 
      max={max} 
      defaultValue={[defaultRefinement.min, defaultRefinement.max]} 
      marks={{0:0,
      100:100,
      200:200, 
      300:300,
      400:400
      }}
      tipFormatter={value => `${value}%`} 
      onAfterChange={({ value }) => {
      refine({ min, max });
    }}
      
      
      
    />
  );



const CustomRangeSlider = connectRange(RangeSlider);

const ToggleRefinement = ({
  currentRefinement,
  label,
  count,
  refine,
  createURL,
}) => (
    <div>
      <label
        htmlFor={label}
        className="container inline-flex mb-3 h-6 align-middle cursor-pointer "
      >
      <input
        className="opacity-0 cursor-pointer w-0" //Hide the browser's default checkbox
        type="checkbox"
        id={label}
        onClick={event => { refine(!currentRefinement); }}

      />
        <span className="checkmark inline-flex h-6 w-6 bg-white border border-gray-400 hover:border-gray-500 rounded-sm"></span>
        {/* <span className="inline-flex leading-6 pl-2">{label} ({currentRefinement ? count.checked : count.unchecked})</span> */}
        <span className="inline-flex leading-6 pl-2">{label} </span>

      </label>
      {/* <a
    href={createURL(!currentRefinement)}
    style={{ fontWeight: currentRefinement ? 'bold' : '' }}
    onClick={ event => {
      event.preventDefault();
      refine(!currentRefinement);
    }}
  >
    {label} ({currentRefinement ? count.checked : count.unchecked})
  </a> */}
    </div>
  );

const CustomToggleRefinement = connectToggleRefinement(ToggleRefinement);


export default Filters;
