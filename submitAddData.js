import { readJSON } from './loadData.js';

function addData(){

  var jsonData = readJSON("data/test.json")


  myData = {}

  var form = document.getElementById('add-data-form');
  for (const x of form){
    // get the tagname
    var tagName = x.tagName
    if (tagName==="INPUT"){
      var xType = x.type
      var xId = x.id
      var value = x.value

      // skip those not valid
      if (!xId){ continue;}

      // skip non-selected radio buttons
      if (xType==="radio" & ! x.checked){continue;}

      // otherwise, add
      myData[xId] = value

    }

  }
  // Data looks good!
  console.log(myData)

  // Save the file
  // Assume we have a nice way of loading the data (And saving it)

}
