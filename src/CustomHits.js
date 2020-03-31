import React from 'react';
import { connectHits } from 'react-instantsearch-dom';
import PropTypes from 'prop-types';


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./assets/logos', false, /\.svg/));

const Hits = ({ hits }) => (
    <div className="grid xl:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-4 mt-4 mr-4">
      {hits.map((hit) => (
        <CardHit data={hit} />
      ))}
    </div>
  );
  
const CustomHits = connectHits(Hits);
  
  
  function CardHit(props) {
    let fileName = props.data.restaurant + ".svg";
    fileName = fileName.replace(/\s/g, '');

    console.log(fileName);
    return (
      <div className="bg-white hover:opacity-75 shadow-md rounded-lg thumb-meal cursor-pointer">
        <div className="">
          <div className="pt-full w-full text-center align-middle relative overflow-hidden bg-white ">
            <img src={props.data.image} className="thumbnail vertical-center rounded-t-lg" alt="" />
            <div class="overlay"> </div>
            <img className="absolute m-3 top-0 left-0 h-8 w-8 z-20 logo-badge shadow-md bg-white rounded-full" src={images[fileName]} alt="{props.data.restaurant}" />
            <div className="absolute m-3 top-0 right-0 h-8 z-20 bg-gray-400 opacity-50 px-2 rounded-md calorie-badge"><span className="text-lg leading-8 text-black">{props.data.calories} Cal.</span></div>
  
            {/* <div style="background-image: url({props.data.image}) center center no-repeat;" className="w-full h-full"></div> */}
          </div>
        </div>
        <div className="px-3 pt-3">
          <p className="text-md font-bold m-0">{props.data.name}</p>
          <p className="text-sm text-gray-500 m-0">{props.data.restaurant}</p>
          <div className="flex justify-between my-3">
            <div>
              <p className="text-lg ">{props.data.protein}g</p>
              <p className="text-gray-500 text-xs">Protein</p>
            </div>
            <div>
              <p className="text-lg ">{props.data.carbs}g</p>
              <p className="text-gray-500 text-xs ">Carbs</p>
            </div>
            <div>
              <span className="text-lg ">{props.data.fat}g</span><br />
              <span className="text-gray-500 text-xs">Fat</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  function RowHit(props) {
    return (
      <tr className="pr-8" key={props.data.objectID}>
        <td className="h-32 w-32"><img src={props.data.image} className="w-full" alt="" /></td>
        <td>
          <span className="text-md font-bold">{props.data.name}</span><br />
          <span className="text-gray-500">{props.data.restaurant}</span>
          <br />
          {/* <Tag color="bg-gray-200" label="High Protein" />
              <Tag textColor="white" color="bg-green-500" label="Vegetarian" /> */}
        </td>
        <td class="text-right">
          <span className="text-2xl">{props.data.calories}</span><br />
          <span className="text-gray-500 text-xs uppercase">Calories</span>
        </td>
        <td class="text-right">
          <span className="text-2xl">{props.data.protein}g</span><br />
          <span className="text-gray-500 text-xs uppercase">Protein</span>
        </td>
        <td class="text-right">
          <span className="text-2xl">{props.data.fat}g</span><br />
          <span className="text-gray-500 text-xs uppercase">Fat</span>
        </td>
        <td class="text-right pr-4">
          <span className="text-2xl">{props.data.carbs}g</span><br />
          <span className="text-gray-500 text-xs uppercase">Carbs</span>
        </td>
      </tr>
    );
  }
  
  // const HitsTable = ({ hits }) => (
  //   <Table responsive className="">
  //     <thead>
  //       <tr className="hidden">
  //         <th></th>
  //         <th>Restaurant</th>
  //         <th>Meal</th>
  //         <th>Calories</th>
  //         <th>Protein</th>
  //         <th>Fat</th>
  //         <th>Carbs</th>
  //       </tr>
  //     </thead>
  //     <tbody className="">
  //       {hits.map((hit) => (
  //         <RowHit data={hit} />
  //       ))}
  //     </tbody>
  //   </Table>
  // );

CardHit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default CustomHits;
