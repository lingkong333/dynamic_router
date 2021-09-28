<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="changeLogin">{{ login }}</button>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      login: "登录",
    };
  },
  methods: {
    changeLogin() {
      this.$store.dispatch("llogin");
    },
  },
};
</script>
