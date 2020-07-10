<template>
  <div id="login">
    <h1>Login</h1>

    <b-input-group>
      <b-form-input type="text" placeholder="Usuario" v-model="input.username"></b-form-input>
    </b-input-group>

    <b-input-group>
      <b-form-input type="password" placeholder="Password" v-model="input.password"></b-form-input>
    </b-input-group>

    <div class="mt-3" style="align:right;">
      <b-button-group>
        <b-button variant="primary" v-on:click="login()">Login</b-button>
      </b-button-group>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (this.input.username != "" && this.input.password != "") {
        let config = {
          headers: {
            "api-key": 123
          }
        };

        let data = {
          Usuario: this.input.username,
          Password: this.input.password
        };

        axios
          .post("http://localhost:49478/seguridad/login", data, config)
          .then(response => {
            console.log(response.data.data);
            this.$emit("authenticated", true);
            this.$router.push("/secure").catch(() => {});
          });

        // axios.post(
        //   "http://localhost:49478/seguridad/login",
        //   {
        //     Usuario: this.input.username,
        //     Password: this.input.password
        //   },
        //   {
        //     headers: {
        //       "api-key": 123
        //     }
        //   }
        // );

        //.post("http://localhost:49478/seguridad/login", datos)

        // if (
        //   this.input.username == this.$parent.mockAccount.username &&
        //   this.input.password == this.$parent.mockAccount.password
        // ) {
        //   this.$emit("authenticated", true);
        //   //this.$router.replace({ name: "secure" });
        //   this.$router.push("/secure").catch(()=>{});
        // }
        // else {
        //   console.log("The username and / or password is incorrect");
        // }
      } else {
        console.log("A username and password must be present");
      }
    }
  }
};
</script>

<style scoped>
#login {
  width: 500px;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  margin: auto;
  margin-top: 200px;
  padding: 20px;
}
</style>