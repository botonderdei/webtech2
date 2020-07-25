<template>
  <div class="container" >
    <form v-on:submit.prevent="addCar">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Name:</label>
            <input type="text" maxlength="25" class="form-control" v-model="car.name" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Manufacturer:</label>
            <input type="text" maxlength="25" class="form-control" v-model="car.manufacturer" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Color:</label>
            <input type="text" maxlength="15" class="form-control" v-model="car.color" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Year:</label>
            <select class="form-control" v-model="car.year">
              <option v-if="n>1900" v-for="n in 2020" :value="n">{{ n }}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Horsepower:</label>
            <select class="form-control" v-model="car.hp">
              <option v-for="n in 500" :value="n">{{ n }}</option>
            </select>
          </div>
        </div>
      </div>
      <br />
      <div class="form-group">
        <button class="btn btn-success">Add car</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      car: {
        _id: "",
        name: "",
        manufacturer: "",
        color: "",
        year: "",
        hp: "",
        user: ""
      }
    };
  },
  methods: {
    addCar() {
      if (localStorage.getItem("user") != null) {
        if(this.car.name != "" && this.car.manufacturer !="" && this.car.color != "" && this.car.year!=""&&this.car.hp!=""){
        this.car.user = JSON.parse(localStorage.getItem("user")).name;
        let uri = "http://localhost:5000/addCar";
        this.axios.post(uri, this.car).then(response => {
          window.location.href = "/getMyCars";
        });
        }
        else{
          alert("Invalid input. Please fill all of the boxes!");
        }
      } else {
        window.location.href = "/register";
      }
    }
  }
};
</script>

<style scoped>

.container {
    
    margin-top: 50px;
 
}

</style>>
