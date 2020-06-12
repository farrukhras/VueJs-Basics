// All of VueJs code comes here

// Make a  Vue instance
new Vue({ // this Vue instance will control all of the Vue component. 
  el: "#vue-app", // this is the root element. It will link to the root div in index.html file using the id="vue-app". We add a # sign to tell Vue that it is an id referencing to an HTML element
  data: { // the data attribute stores all the data for this Vue instance, this data can be accessed bt the root element in index.html to display different data values in the browser
    name: "Farrukh",
    job: "Student",
    website: "https://web.whatsapp.com/",
    websiteTag: '<a href="https://web.whatsapp.com/">WhatsApp Website Web</a>',
    age: 21,
    x: 0,
    y: 0,
    keyName: '',
    keyAge: '',
    a: 0,
    b: 0,
    error: false,
    success: false,
  },
  methods: { // methods is like an object. Like data stores all the data elements on the vue instance, methods will store all the functions(methods) for this vue instance
    // greet is the name of the function that we will use to access this function. function() is to tell the vue that treat greet as a function(method)
    // a method can take in parameters that can be used to display the data
    // the methods can also access the data elements of the same vue instance. "this" keyword is used to access the data elements. "this"
    // keyword does something like taking the data elements and putting them at the same level as the data object. So we won't have to do
    // this.data.name, rather we can do this.name directly to access the data element: name.
    greet: function(time){
      return "Good " + time + " " + this.name;
    },
    add: function(inc) {
      this.age += inc;
    },
    subtract: function(dec) {
      this.age -= dec;
    },
    updateXY: function(event) {
      this.x = event.offsetX
      this.y = event.offsetY
    },
    logName: function(event) {
      console.log(event)
    },
    logAge: function(event) {
      console.log(event)
    }
  },
  computed: { // computed properties are used when the we want to prevent multiple methods from running at the same time on some event 
  // even though they are not resulting in any change in the logic and/or vue instance.
  // computed property solves this problem. It only runs the function which is triggered from an event handler.
  addToA: function() {
    console.log("adding to A")
    return this.age + this.a
  },
  addToB: function() {
    console.log("adding to B")
    return this.age + this.b
  }
  }
});