<template>
  <q-layout view="lHh Lpr lFf" style="min-height: 200px; height: 200px;">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: "LayoutMain",

  components:
  {
  },

  mounted()
  {
    if (this.$route.path === "/")
    {
      this.$router.push("/home");
    }
  },
};

</script>
