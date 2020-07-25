<template>
  <div class="container">
    <form v-on:submit.prevent="modifyUser">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Password:</label>
            <input type="password" maxlength="40" class="form-control" v-model="user.password" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Name:</label>
            <input type="text" maxlength="40" class="form-control" v-model="user.name" />
          </div>
        </div>
      </div>
      <br />
      <div class="form-group">
        <button class="btn btn-success">Apply</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {}
    };
  },
  methods: {
    modifyUser() {
      this.user.email = JSON.parse(localStorage.getItem("user")).email;
      if (this.user.password != null && this.user.name != null) {
        let uri = "http://localhost:5000/modify";
        this.axios.post(uri, this.user).then(response => {
          localStorage.setItem("user", JSON.stringify(this.user));
          window.location.href = "/";
        });
      } else {
        alert("Invalid input");
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