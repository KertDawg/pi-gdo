<template>
  <div class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center">
    <div>
      Nothing here, man.
    </div>
  </div>
</template>

<script>

export default {
  name: "PageNotFound",

  mounted()
  {
    this.$router.push({ name: "home" });
  },
};

</script>
