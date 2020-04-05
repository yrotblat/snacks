// alert("you have loaded the file!")

allSnacks = {
  "oreo":{
    "company":"Nabisco",
    "weight":68, // Weight is in grams
    "calories":320,
    "calories-from-fat":120,
    "flavor":"chocolate",
  },
  "nut-bar":{
    "company":"Kirkland",
    "weight":40, // Weight is in grams
    "calories":210,
    "calories-from-fat":140,
    "flavor":"chocolate",
  },
  "pretzels":{
    "company":"Snyders",
    "weight":26, // Weight is in grams
    "calories":100,
    "calories-from-fat":0,
    "flavor":"salty",
  },
  "popcorn":{
    "company":"Skinny Pop",
    "weight":18, // Weight is in grams
    "calories":100,
    "calories-from-fat":0,
    "flavor":"salty",
  },
}

function snackInfoFinder(){

  var mySnack = window.document.getElementById("select-a-snack").selectedOptions[0].value
  var mySnackInfo= allSnacks[mySnack]
  var mySnackInfoString = JSON.stringify(mySnackInfo)

  // Display on web page
  window.document.getElementById("output-1").innerHTML = mySnackInfoString
}


function snackSelector(){

  var myFlavor = window.document.getElementById("select-flavor").selectedOptions[0].value
  var filteredSnacks = []

  // 1. Go through all the snacks
  // 2. If the flavor is my flavor, keep it

  for (const snack in allSnacks){
    var snackInfo = allSnacks[snack]
    var snackFlavor = snackInfo["flavor"]

    // Check if it matches
    if (snackFlavor==myFlavor){
      // Keep it
      filteredSnacks.push(snack)
    }
    else{
      // Do nothing...
    }
  }

  // Display on web page
  window.document.getElementById("output-2").innerHTML = JSON.stringify(filteredSnacks)
}

// Run on load
// snackInfoFinder()
