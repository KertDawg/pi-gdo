<template>
  <q-page class="IndexPage">
    <div class="row" style="width: 100%;">
      <div class="col-xs-12 q-pt-md">
        <q-btn color="primary" @click="ActivateClick">Activate</q-btn>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 q-pt-md">
        <Video URL="http://192.168.1.50:8080/101/mjpg/stream" />
      </div>
    </div>
  </q-page>
</template>

<script>

import api from "../utils/api";

export default {
  name: "PageIndex",

  mounted()
  {
  },

  methods:
  {
    ActivateClick: function()
    {
      api.PushTheButton().then(r => {
        console.log("PushTheButton: " + r);
      });
    },
  },
};

</script>

<style scoped>

.IndexPage
{
  text-align: center;
}

</style>
