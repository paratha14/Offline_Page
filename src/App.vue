<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    window.addEventListener("offline", () => {
      this.$router.push("/offline");
    });

    window.addEventListener("online", () => {
      if (this.$route.path === "/offline") {
        this.$router.push("/");
      }
    });
  },
};
</script>
