<template>
  <div class="container">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
    <table class="table table-hover">
      <thead>
        <tr>
          <td>
            <b>Name</b>
          </td>
          <td>
            <b>Manufacturer</b>
          </td>
          <td>
            <b>Color</b>
          </td>
          <td>
            <b>Year</b>
          </td>
          <td>
            <b>Horsepower</b>
          </td>
          <td>
            <b>Modify</b>
          </td>
          <td>
            <b>Delete</b>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="car in cars" :key="car._id">
          <td>
            <input class="form-control" type="text" v-model="car.name" />
          </td>
          <td>
            <input class="form-control" type="text" v-model="car.manufacturer" />
          </td>
          <td>
            <input class="form-control" type="text" v-model="car.color" />
          </td>
          <td>
            <select class="form-control" v-model="car.year">
              <option v-if="n>1900" v-for="n in 2020" :value="n">{{ n }}</option>
            </select>
          </td>
          <td>
            <select class="form-control" v-model="car.hp">
              <option v-for="n in 500" :value="n">{{ n }}</option>
            </select>
          </td>
          <td>
            <button class="form-control"
              v-on:click="modify(car)"
              style="background-color:rgba(0,0,0,0);border: none;color: white;"
            >✔️</button>
          </td>
          <td>
            <button class="form-control"
              style="background-color:rgba(0,0,0,0);border: none;color: white;"
              v-on:click="removeCar(car._id)"
            >❌</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cars: [],
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

  created: function() {
    this.fetchItems();
  },

  methods: {
    addCar() {
      if (localStorage.getItem("user") != null) {
        this.car.user = JSON.parse(localStorage.getItem("user")).name;
        let uri = "http://localhost:5000/addCar";
        this.axios.post(uri, this.car).then(response => {
          window.location.href = "/car/getMyCars";
        });
      } else {
        window.location.href = "/user/log";
      }
    },
    modify(car) {
      if (localStorage.getItem("user") != null) {
        if (car.name != "" && car.manufacturer != "" && car.color != "") {
          this.car.user = JSON.parse(localStorage.getItem("user")).name;
          this.car._id = car._id;
          this.car.name = car.name;
          this.car.manufacturer = car.manufacturer;
          this.car.color = car.color;
          this.car.year = car.year;
          this.car.hp = car.hp;
          let uri = "http://localhost:5000/modifyCar";
          this.axios.post(uri, this.car).then(response => {
            window.location.href = "/getMyCars";
          });
        } else {
          alert("null input");
        }
      } else {
        window.location.href = "/register";
      }

      console.log(this.car);
    },
    fetchItems() {
      if (localStorage.getItem("user") != null) {
        var user = JSON.parse(localStorage.getItem("user")).name;
        this.axios
          .post("http://localhost:5000/getMyCars", { user: user })
          .then(response => {
            this.cars = response.data;
          });
      } else {
        window.location.href = "/register";
      }
    },
    removeCar(id) {
      this.axios
        .post("http://localhost:5000/removeCar", {
          id: id
        })
        .then(response => {
          window.location.href = "/getMyCars";
        });
    }
  }
};
</script>

<style scoped>

.container {
    
    margin-top: 50px;
 
}

</style>>