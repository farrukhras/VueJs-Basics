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
    changeTitle: function() {
      console.log(this.$refs.input.value);
      one.title = this.$refs.input.value;
    }
  },
  computed: {
    greet: function() {
      return "App 2 here!!!";
    }
  }
})