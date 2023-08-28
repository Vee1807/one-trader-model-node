

// Document
let queryForm = document.getElementById("query-container");
let floatInput = document.getElementById("float-input");


// Query form (only float for now - no API yet)
/*queryForm.addEventListener('submit', e => {
    //e.preventDefault()
    let floatValue = floatInput.value;
    console.log('here')
    //getData();
    //model(data_obj, floatValue);
})*/


// Model
/*function model(data_obj, floatValue) {
    let j = 12;
    let row = [];
    let table = [];
    let nrow = data_obj.length;
    let loopMax = nrow * 2 - 1;

    // First 2 rows
    row.push(-1 * data_obj[0].Volume);
    table.push(row);
    row = [];
    row.push( 1 * table[0][0] +  1 * floatValue);
    row.push(- 1 * table[0][0]);
    table.push(row);


    let colCount = 2;
    let colCount3 = 1;
    let index = 1;

    // Loop through rows
    for(let i = 1; i < loopMax; i++) {
        colCount3 = 1;
        row = [];
        f = 0;

      // Loop through columns
        for(let l = 0; l < colCount; l++) {
            if (i % 2 == 0) {
                row.push(1 * table[i][l] + 1 * table[i - 1][l]);
                f = 1;
            } else {

                row.push(- 1 * data_obj[index].Volume * table[i][l] / floatValue); 
            }

            colCount3++;
        }

        if (f == 1) {
            row.push(1 * data_obj[index].Volume)
            colCount++;
            j += 2;
      }

      table.push(row)

      // Increment i every 2 loops
      if (i % 2 == 0) {
        index++;
      }
    }
    

    // Second table
    let prices = [];

    // Convert xx.x% (String) to xx.x (Number)
    let changeStr = data_obj[nrow - 1]['%Chg'];
    changeStr = changeStr.slice(0, -1);
    let change = changeStr * 1
    let finalValues = [];
    let sum = 0
    let sumLastRow = 0;
    for (let i = 0; i < nrow; i++) {
        prices.push(1 * data_obj[i].Last);
        finalValues.push(- 1 * prices[i] * table[table.length - 1][i + 1] * change / 100);
        sumLastRow += table[table.length - 1][i + 1];

        // Calculate sum
        sum += finalValues[i];
    }

    // Round sum
    let displayedSum = Math.round(sum);
    let displayedSum1 = Math.round(sumLastRow);

    // Format sum to a readable string
    const nFormat = new Intl.NumberFormat();
    displayedSum = nFormat.format(displayedSum);    
    displayedSum1 = nFormat.format(displayedSum1);

    // Display sum
    let totalText = document.getElementById("total");
    totalText.innerHTML = `<span style="color:#F03222; font-weight: 900;">Total1:</span><br>$ ${displayedSum1}<br>
                           <span style="color:#F03222; font-weight: 900;">Total2:</span><br>$ ${displayedSum}`
    
  }

**/

