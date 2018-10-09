// Code your solution in this file!

//logDriverNames() — Receives an array of driver objects and logs the name attribute of 
//each driver to the console.
function logDriverNames(array) {
    array.forEach(function(element, index, arr) {
        console.log(element.name);
    })
  }

//logDriversByHometown() — Receives an array of driver objects as the first argument and 
//a location as the second argument. The function logs to the console the name attribute 
//of each driver whose hometown matches the string passed in as the 'location' argument.
function logDriversByHometown(array, location) {
    newArray = array.filter(function(obj) {return obj.hometown === location; });
    newArray.forEach(function(element, index, arr) {
        console.log(element.name);
    })
}

//driversByRevenue() — Receives an array of driver objects and returns a new array of driver 
//objects sorted by their revenue attribute from lowest to highest.
function driversByRevenue(array) {
    return [...array].sort(function(a, b) {return a.revenue - b.revenue; });
}

//driversByName() — Receives an array of driver objects and returns a new array of driver 
//objects sorted by their name attribute from A to Z. Here, you may have to use the 
//String.prototype.localeCompare() method.
function driversByName(array) {
    return [...array].sort(function(a, b) {return a.name.localeCompare(b.name); })
}

//totalRevenue() — Receives an array of driver objects and returns the sum of the revenue 
//earned by each driver.
function totalRevenue(array) {
    return [...array].reduce(function(aggregate, element, index, array) {
        return aggregate + element.revenue;
    }, 0)
}

//averageRevenue() — Receives an array of driver objects and returns the average revenue 
//earned by each driver.
function averageRevenue(array) {
    return totalRevenue(array)/array.length;
}