<template>
  
    <div class="row container">
        <div class="col-12">
            
        </div>
       <div id="loginForm" class="col-6">
           <h1>Login</h1>
           <form @submit="login">
              <div class="form-group">
                <label for="loginUsername">E-mail address</label>
                <input type="text" class="form-control" aria-describedby="emailHelp" v-model="log.user.email">
              </div>
              <div class="form-group">
                <label for="loginPassw">Password</label>
                <input type="password" class="form-control" v-model="log.user.password">
              </div>
              <button type="submit" class="btn btn-success">Log in</button>
            </form>
        </div>
        <div id="registerForm" class="col-6">
            <h1>Register</h1>
            <form @submit="register">
              <div class="form-group">
                <label for="regUsername">Username</label>
                <input type="text" class="form-control" id="regUsername" v-model="reg.user.name">
              </div>
              <div class="form-group">
                <label for="regEmail">E-mail address</label>
                <input type="email" class="form-control" id="regEmail" aria-describedby="emailHelp" v-model="reg.user.email">
              </div>
              <div class="form-group">
                <label for="regPassw">Password</label>
                <input type="password" class="form-control" id="regPassw" v-model="reg.user.password">
              </div>
              <button type="submit" class="btn btn-success">Register</button>
            </form>
        </div>
    </div> 
    
</template>

<script>
import axios from 'axios'

export default {
    name: 'Login',
    data: () => {
        return {
           reg : {
                user: {}
            },
            log : {
                user: {}
            },
            
            
        }
    },
    methods: {
        login() {
      if (this.log.user.email != null && this.log.user.password != null) {
        let uri = "http://localhost:5000/login";
        this.axios.post(uri, this.log.user).then(response => {
          if (response.data != "") {
            localStorage.setItem("user", JSON.stringify(response.data));
            window.location.href = "/";
          } else {
            alert("E-mail or password doesn't match!");
          }
        });
      } else {
        alert("Please fill all the fields");
      }
	}	,
        register() {
      if (
        this.reg.user.email != null &&
        this.reg.user.name != null &&
        this.reg.user.password != null
      ) {
        let uri = "http://localhost:5000/register";
        this.axios.post(uri, this.reg.user).then(response => {
          window.location.href = "/register";
        });
      } else {
        alert("Please fill all the fields!");
      }
    }
    }
}
</script>

<style scoped>
.alert {
    text-align: center;
    position: fixed;
    z-index: 999;
    width: 80vw;
    top: 70px;
    left: 10vw;
}
.row {
    margin: auto;
    margin-top: 60px;
}
#loginForm {
    border-right: 1px solid rgba(0, 0, 0, 0.5);
}

</style>>



