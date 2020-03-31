import React from 'react';
import { 
  connectToggleRefinement,
  ClearRefinements,
  NumericMenu
} from 'react-instantsearch-dom';


function Settings() {
  return (
    <div id="sidebar" className="p-4 z-10">
      <div className="clearfix">
        <h3 className="text-2xl font-bold inline-block">Filters</h3>
        <ClearRefinements className="pl-3 inline-block" translations={{
          reset: 'Clear all',
        }} />
      </div>
      <div className="facet-container mt-8">
        <label className="text-lg font-bold block mb-4">Feature</label>
        <CustomToggleRefinement
          attribute="vegetarian"
          label="Vegetarian"
          value="TRUE"
        />
        <CustomToggleRefinement
          attribute="vegan"
          label="Vegan"
          value="TRUE"
        />
        <CustomToggleRefinement
          attribute="paleo"
          label="Paleo"
          value="TRUE"
        />
        <CustomToggleRefinement
          attribute="no_lactose"
          label="Lactose Intolerant"
          value="TRUE"
        />
        <CustomToggleRefinement
          attribute="no_gluten"
          label="Gluten Allergy"
          value="TRUE"
        />
        <CustomToggleRefinement
          attribute="no_nuts"
          label="Nut Allergy"
          value="TRUE"
        />

      </div>
      <div className="facet-container clearfix">
        <label className="test-lg font-bold pt-6">Calories</label>
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

      {/* <CustomRange attribute="calories" /> */}

    </div>
  );
}


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
        <span className="inline-flex leading-6 pl-2">{label} ({currentRefinement ? count.checked : count.unchecked})</span>
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


export default Settings;
