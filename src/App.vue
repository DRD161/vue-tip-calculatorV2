<template>
  <div id="app">
    <div class="wrapper">
      <b-container fluid>
        <b-row>
          <b-col cols="12">
            <h2 class="text-center mt-2 text-muted">Total</h2>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row align-h="center" class="mt-3">
          <b-col sm="12" md="6">
            <b-jumbotron
              bg-variant="light"
              class="text-center mx-auto mb-2 mt-0 py-5 jumbotron-display"
            >{{ totalMsg }}</b-jumbotron>
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row align-h="center" class="mt-5">
          <b-col md="6">
            <input v-model="tipInput" class="w-100 tip-input" placeholder="% Tip Percentage" />
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row align-h="center">
          <b-col md="3" class="d-flex justify-content-around mt-3">
            <font-awesome-icon @click="lower" icon="minus-circle" size="2x" class="icon minus" />
            <font-awesome-icon @click="raise" icon="plus-circle" size="2x" class="icon plus" />
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row align-h="center" class="mt-5">
          <b-col md="6">
            <input v-model="billInput" class="w-100 tip-input" placeholder="$ Bill Total" />
          </b-col>
        </b-row>
      </b-container>
      <b-container>
        <b-row align-h="center">
          <b-col md="4" class="d-flex justify-content-around mt-3">
            <b-btn @click="showTotal" size="md" variant="success">Total</b-btn>
            <b-btn @click="reset" size="md" variant="dark">Clear</b-btn>
          </b-col>
        </b-row>
      </b-container>
    </div>
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
      if (this.tipInput < 0) {
        alert("You can't put a negative tip amount.");
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
.wrapper {
  position: relative;
  top: 20vh;
  background: #eee;
  box-shadow: 0 6px 15px rgb(145, 144, 144);
  width: 40%;
  margin: auto;
  padding: 20px 0;
}

.jumbotron-display {
  box-shadow: 0 6px 15px rgb(145, 144, 144);
}

.tip-input {
  box-shadow: 0 8px 15px rgb(145, 144, 144);
}

.bill-input {
  box-shadow: 0 8px 15px rgb(145, 144, 144);
}

.icon {
  cursor: pointer;
}

.plus {
  color: #28a745;
}

.plus:hover {
  color: #218838;
}

.minus {
  color: #dc3545;
}

.minus:hover {
  color: #c82333;
}
@media screen and (max-width: 1024px) {
  .wrapper {
    width: 90%;
  }
}
</style>