<template>
  <div>
    <v-container>
      <site-content></site-content>
    </v-container>
    <site-footer></site-footer>
  </div>
</template>
<script>
export default {
  name: 'AuthLayout',
  components: {
    SiteContent: () => import(/* webpackChunkName: "site-content" */ "@/layout/components/site-content"),
    SiteFooter: () => import(/* webpackChunkName: "site-content" */ "@/layout/components/site-footer"),

  }
}
</script>
