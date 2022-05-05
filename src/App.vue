<template>
  <v-app id="app">
    <v-main>
      <component v-cloak :is="layout"></component>
    </v-main>
  </v-app>
</template>
<script>
const defaultLayout = "auth";
export default {
  name: 'App',
  computed: {
    layout() {
      return (this.$route.meta.layout || defaultLayout) + "-layout";
    }
  },
  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
[v-cloak] {
  display: none;
}
</style>
