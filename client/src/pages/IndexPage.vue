<template>
  <q-page class="flex flex-center">
    <q-btn color="primary" @click="ActivateClick">Activate</q-btn>
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
