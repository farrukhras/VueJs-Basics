// Vue Component is a re usable component that we use for multiple Vue instance. Without a component, if say 2 components share the same
// html template of tags, we would have to copy that template for each instance separately. However, with a component, we can define/write
// a template once and re-use it for vue instances that share the same html code.
Vue.component("greeting", {
  // template is the html template that we want to re-use for multiple Vue instances
  template: '<p>Hey there, this is {{ name }}. <button v-on:click="changeName">Change Name</button></p>',
  data: function() { // the reason data is function is because, we do not want to change the data for each vue instance. For example,
    // if we click on the Change Name button, we do not want that the name is changed in both the vue instances, even though we only 
    // clicked the button in vue-app-one. Returning the data as fresh object every time solves this issue and only changes the state of 
    // the data for that specific vue instance only.
    return {
      name: "Farrukh"
    }
  },
  methods: {
    changeName: function() {
      this.name = "Malik"
    }
  }
});

new Vue({
  el: "#vue-app-one"
});

new Vue({
  el: "#vue-app-two"
});