<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Pi GDO
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

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
