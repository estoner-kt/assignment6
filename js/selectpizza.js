var pizza = {
    thincrust: ["Medium ($12.99)", "Large ($13.99)"],
    handtossed: ["Small ($9.99)", "Medium ($11.99)", "Large ($14.99)"],
    newyork:  ["Large ($16.99)", "Extra Large (19.99)"],
    glutenfree: ["Small ($10.99)"]
};

var select = document.getElementById("options");

pizza.thincrust.forEach(function (element) {
    "use strict";
    var opt = document.createElement("option");
    opt.innerHTML = element;
    select.appendChild(opt);
});

select.addEventListener("change", function () {
    "use strict";
    window.console.log(select.options[select.selectedIndex].value);
});

// PIZZA 2


var select1 = document.getElementById("options1");

pizza.handtossed.forEach(function (element) {
    "use strict";
    var opt = document.createElement("option");
    opt.innerHTML = element;
    select1.appendChild(opt);
});

select1.addEventListener("change", function () {
    "use strict";
    window.console.log(select1.options[select1.selectedIndex].value);
});


// PIZZA 3

var select2 = document.getElementById("options2");

pizza.newyork.forEach(function (element) {
    "use strict";
    var opt = document.createElement("option");
    opt.innerHTML = element;
    select2.appendChild(opt);
});

select2.addEventListener("change", function () {
    "use strict";
    window.console.log(select2.options[select2.selectedIndex].value);
});

// PIZZA 4

var select3 = document.getElementById("options3");

pizza.glutenfree.forEach(function (element) {
    "use strict";
    var opt = document.createElement("option");
    opt.innerHTML = element;
    select3.appendChild(opt);
});

select3.addEventListener("change", function () {
    "use strict";
    window.console.log(select3.options[select3.selectedIndex].value);
});


// Show one option on clicked pizza (version 1 )

//var pick = document.getElementById("hand"); 
//var options = document.getElementById("options"); 
//
//pick.addEventListener("click", function(){
//    
//    console.log("Click"); 
//    if (options.className === "hideme"){
//        options.className = ""; 
//    } else{
//        options.className = "hideme"
//    }
//}); 

// Show one option on clicked pizza (version 2 )
hand.addEventListener("click", pickLink); 
thin.addEventListener("click", pickLink); 
ny.addEventListener("click", pickLink); 
gf.addEventListener("click", pickLink); 

function pickLink (){
    var optionsId = this.attributes["data-input"].value; 
    var options = document.getElementById(optionsId); 
    if (options.className === "hideme"){
        options.className = ""; 
    } else{
        options.className = "hideme"
    }
}; 

// STEP 4 ADD SCHEESE (will show when clicked previous step)


var cheese = document.getElementById("cheese"); 
select.addEventListener("click", funcChese);
select1.addEventListener("click", funcChese); 
select2.addEventListener("click", funcChese); 
select3.addEventListener("click", funcChese); 


function funcChese() {
 cheese.className = ""
}


// STEP 5 ADD Souce (will show when clicked previous step)

var sause = document.getElementById("sauce"); 
cheese.addEventListener("change", funcSause);


function funcSause() {
 sauce.className = ""
}


// Counting total
var total = document.getElementById("total"); 
total.addEventListener("load", functotal); 

function functotal(){
    
}