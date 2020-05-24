import React from 'react';
import {
  connectHits,
  connectInfiniteHits
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import Card from './Card'
import CardTest from './CardTest'

const InfiniteHits = ({ hits }) => (
  <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-3 gap-6 mt-8 mr-4">
    {hits.map((hit) => (
      <Card data={hit} />
    ))}
  </div>
);

const Hits = connectInfiniteHits(InfiniteHits);

// RowHit is being saved for table view, to be implemented

// function RowHit(props) {
//   return (
//     <tr className="pr-8" key={props.data.objectID}>
//       <td className="h-32 w-32"><img src={props.data.image} className="w-full" alt="" /></td>
//       <td>
//         <span className="text-md font-bold">{props.data.name}</span><br />
//         <span className="text-gray-500">{props.data.restaurant}</span>
//         <br />
//         {/* <Tag color="bg-gray-200" label="High Protein" />
//             <Tag textColor="white" color="bg-green-500" label="Vegetarian" /> */}
//       </td>
//       <td class="text-right">
//         <span className="text-2xl">{props.data.calories}</span><br />
//         <span className="text-gray-500 text-xs uppercase">Calories</span>
//       </td>
//       <td class="text-right">
//         <span className="text-2xl">{props.data.protein}g</span><br />
//         <span className="text-gray-500 text-xs uppercase">Protein</span>
//       </td>
//       <td class="text-right">
//         <span className="text-2xl">{props.data.fat}g</span><br />
//         <span className="text-gray-500 text-xs uppercase">Fat</span>
//       </td>
//       <td class="text-right pr-4">
//         <span className="text-2xl">{props.data.carbs}g</span><br />
//         <span className="text-gray-500 text-xs uppercase">Carbs</span>
//       </td>
//     </tr>
//   );
// }

// DEPRECIATED No longer using Hits, using InfiniteHits for infinite scrolling

// const Hits = ({ hits }) => (
//     <div className="grid xl:grid-cols-5 md:grid-cols-4 grid-cols-3 gap-4 mt-4 mr-4">
//       {hits.map((hit) => (
//         <CardHit data={hit} />
//       ))}
//     </div>
//   );

// const CustomHits = connectHits(Hits);


Card.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default Hits;
