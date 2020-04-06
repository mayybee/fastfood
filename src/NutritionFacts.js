import React from 'react';

function NutritionFacts(props) {
  return (
    <section className="performance-facts border border-gray-800 bg-gray-100 w-full mr-5 py-1 px-2 rounded-md">
      <header className="performance-facts__header m-0 pb-1">
        <h1 className="performance-facts__title text-3xl leading-none m-0 p-0">Nutrition Facts</h1>
        <p className="leading-extratight text-sm">Serving Size 1 Burger</p>
      </header>
      <table class="performance-facts__table">
        <thead>
          <tr>
            <th colspan="3" class="small-info text-xs">
              Amount Per Serving
            </th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <th colspan="2">
                <span className="font-black">Calories </span>
                {props.data.calories}
              </th>
              <td>
                Calories from Fat
                111
              </td>
            </tr>
            <tr class="thick-row">
              <td colspan="3" class="small-info text-xs">
                % Daily Value*
              </td>
            </tr>
      </tbody>
    </table>
      <table class="performance-facts__table">
          <tbody>
            <tr>
              <th colspan="2">
              <span className="font-black">Total Fat </span>
              {props.data.fat}g
              </th>
              <td>
              <span className="font-black">22%</span>
              </td>
            </tr>
            <tr>
              <td class="blank-cell">
              </td>
              <th>
                Saturated Fat
                9g
              </th>
              <td>
                <b>22%</b>
              </td>
            </tr>
            <tr>
              <td class="blank-cell">
              </td>
              <th>
                Trans Fat
                0g
              </th>
              <td>
              </td>
            </tr>
            <tr>
              <th colspan="2">
              <span className="font-black">Cholesterol </span>
              55mg
            </th>
            <td>
            <span className="font-black">18%</span>
              </td>
            </tr>
            <tr>
              <th colspan="2">
                <span className="font-black">Sodium </span>
                40mg
              </th>
              <td>
              <span className="font-black">2%</span>
              </td>
            </tr>
            <tr>
              <th colspan="2">
              <span className="font-black">Total Carbs </span>
                {props.data.carbs}g
              </th>
              <td>
              <span className="font-black">6%</span>
              </td>
            </tr>
            <tr>
              <td class="blank-cell">
              </td>
              <th>
                Dietary Fiber
                1g
             </th>
              <td>
                <b>4%</b>
              </td>
            </tr>
            <tr>
              <td class="blank-cell">
              </td>
              <th>
                Sugars 
                12g
              </th>
              <td>
              </td>
            </tr>
            <tr class="thick-end">
              <th colspan="2">
              <span className="font-black">Protein </span>
              3g
            </th>
              <td>
              </td>
            </tr>
          </tbody>
        </table>

        <table class="performance-facts__table performance-facts__table--dots">
          <tbody>
            <tr>
              <td className="w-1/3">
                Vitamin A
                10%
              </td>
              <td className="text-center w-1/3">•</td>
              <td className="w-1/3">
                Vitamin C
                0%
              </td>
            </tr>
            <tr class="thin-end">
              <td colspan="">
                Calcium
                10%
              </td>
              <td className="text-center">•</td>
              <td className="">
                Iron
                6%
              </td>
            </tr>
          </tbody>
        </table>

        <p class="text-xs leading-extratight pt-1">* Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs:</p>
{/* 
        <table class="performance-facts__table--small small-info">
          <thead>
            <tr>
              <td colspan="2"></td>
              <th>Calories:</th>
              <th>2,000</th>
              <th>2,500</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colspan="2">Total Fat</th>
              <td>Less than</td>
              <td>65g</td>
              <td>80g</td>
            </tr>
            <tr>
              <td class="blank-cell"></td>
              <th>Saturated Fat</th>
              <td>Less than</td>
              <td>20g</td>
              <td>25g</td>
            </tr>
            <tr>
              <th colspan="2">Cholesterol</th>
              <td>Less than</td>
              <td>300mg</td>
              <td>300 mg</td>
            </tr>
            <tr>
              <th colspan="2">Sodium</th>
              <td>Less than</td>
              <td>2,400mg</td>
              <td>2,400mg</td>
            </tr>
            <tr>
              <th colspan="3">Total Carbohydrate</th>
              <td>300g</td>
              <td>375g</td>
            </tr>
            <tr>
              <td class="blank-cell"></td>
              <th colspan="2">Dietary Fiber</th>
              <td>25g</td>
              <td>30g</td>
            </tr>
          </tbody>
        </table>

        <p class="small-info">
          Calories per gram:
  </p>
        <p class="small-info text-center">
          Fat 9
          &bull;
          Carbohydrate 4
          &bull;
          Protein 4
  </p> */}
  
</section>
  );
}

export default NutritionFacts;
