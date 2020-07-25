<template>
  <div class="container">
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
            <b>Posted by</b>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="car in cars" :key="car._id">
          <td>{{ car.name }}</td>
          <td>{{car.manufacturer}}</td>
          <td>{{car.color}}</td>
          <td>{{car.year}}</td>
          <td>{{car.hp}}</td>
          <td>{{car.user}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cars: []
    };
  },

  created: function() {
    this.fetchItems();
  },

  methods: {
    fetchItems() {
      if (localStorage.getItem("user") != null) {
        let uri = "http://localhost:5000/getCars";
        this.axios.get(uri).then(response => {
          this.cars = response.data;
        });
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