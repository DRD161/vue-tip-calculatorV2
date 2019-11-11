<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <b-col cols="12">
          <h2 class="text-center mt-2 text-muted">Total</h2>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row align-h="center" class="mt-3">
        <b-col cols="6">
          <b-jumbotron
            bg-variant="light"
            class="text-center w-50 mx-auto mb-2 mt-0 py-5 jumbotron-display"
          >{{ totalMsg }}</b-jumbotron>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row align-h="center" class="mt-5">
        <b-col md="4">
          <input v-model="tipInput" class="w-100 tip-input" placeholder="Tip Percentage %" />
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row align-h="center">
        <b-col md="1">
          <b-btn @click="lower" variant="danger">Lower</b-btn>
        </b-col>
        <b-col md="1">
          <b-btn @click="raise" variant="success" class="ml-2">Higher</b-btn>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <b-row align-h="center" class="mt-5">
        <b-col md="8">
          <input v-model="billInput" class="w-50 bill-input" placeholder="Bill Total $" />
        </b-col>
      </b-row>
      <b-row align-h="center" class="mt-5">
        <b-btn @click="showTotal" size="lg" variant="success">Total</b-btn>
      </b-row>
    </b-container>
    <b-container>
      <b-row align-h="center">
        <b-btn @click="reset" size="sm" variant="dark" class="mb-2">Reset</b-btn>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      totalMsg: "",
      tipInput: "",
      billInput: ""
    };
  },
  methods: {
    showTotal: function() {
      var total = (this.tipInput / 100) * this.billInput;
      var roundedTotal = total.toFixed(2);
      this.totalMsg = "Your tip total is: " + "$" + roundedTotal;
    },
    raise: function() {
      this.tipInput++;
    },
    lower: function() {
      this.tipInput--;
      if (this.tipInput <= 0) {
        alert("You can't put a negative tip amount. That'd be cruel!");
        this.tipInput = 0;
      }
    },
    reset: function() {
      this.totalMsg = "";
      this.tipInput = "";
      this.billInput = "";
    }
  }
};
</script>

<style>
.jumbotron-display {
  box-shadow: 0 6px 15px rgb(145, 144, 144);
}

.tip-input {
  box-shadow: 0 8px 15px rgb(145, 144, 144);
}

.bill-input {
  box-shadow: 0 8px 15px rgb(145, 144, 144);
}
</style>