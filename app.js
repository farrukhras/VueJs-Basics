// All of VueJs code comes here

// Make a  Vue instance
new Vue({ // this Vue instance will control all of the Vue component. 
  el: "#vue-app", // this is the root element. It will link to the root div in index.html file using the id="vue-app". We add a # sign to tell Vue that it is an id referencing to an HTML element
  data: { // the data attribute stores all the data for this Vue instance, this data can be accessed bt the root element in index.html to display different data values in the browser
    name: "Farrukh Rasool"
  }
});