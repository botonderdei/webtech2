<template>
  <div class="container">
    <form v-on:submit.prevent="login">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>E-mail adress:</label>
            <input type="text" maxlength="40" class="form-control" v-model="user.email" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Password:</label>
            <input type="password" maxlength="40" class="form-control" v-model="user.password" />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div class="form-group">
        <button class="btn btn-success">Login</button>
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
    login() {
      if (this.user.email != null && this.user.password != null) {
        let uri = "http://localhost:5000/login";
        this.axios.post(uri, this.user).then(response => {
          if (response.data != "") {
            localStorage.setItem("user", JSON.stringify(response.data));
            window.location.href = "/";
          } else {
            alert("email or password not match");
          }
        });
      } else {
        alert("Null input");
      }
    }
  }
};
</script>