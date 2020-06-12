var one = new Vue({
  el: "#vue-app-one",
  data: {
    title: "Vue App One",
  },
  methods: {

  },
  computed: {
    greet: function() {
      return "Hello from Vue App One";
    }
  }
});

var two = new Vue({
  el: "#vue-app-two",
  data: {
    title: "Vue App Two",
    oneTitle: "",
  },
  methods: {
    setTitle: function(event) {
      this.oneTitle = event.target.value
    },
    changeTitle: function() {
      one.title = this.oneTitle
    }
  },
  computed: {
    greet: function() {
      return "App 2 here!!!";
    }
  }
})