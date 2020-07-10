<template>
  <div id="about">
    <h1>Información</h1>
    <h1>Your IP is {{ this.ip }}</h1>

    <!-- <button>Send</button>
    <br />
    <br />
    <p>{{ response }}</p>-->
  </div>
</template>

<script>

import axios from 'axios'

export default {
  name: "about",
  data() {
    return {
      ip: ""
    };
  },
  mounted() {
    console.log("about");
    this.getIp();
  },
  methods: {
    getIp() {

      axios
      .get('https://httpbin.org/ip')
      .then(response => (this.ip = response.data.origin))

      // axios({ method: "GET", url: "https://httpbin.org/ip" }).then(
      //   result => {
      //     this.ip = result.data.origin;
      //   },
      //   error => {
      //     console.error(error);
      //   }
      // );
    }
  }
};
</script>

<style scoped>
#about {
  background-color: #ffffff;
  border: 1px solid #cccccc;
  padding: 20px;
  margin-top: 10px;
}
</style>