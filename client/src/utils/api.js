import { Platform } from "quasar";
import axios from "axios";
import router from "../router";


var APIObject = {
  GetAPIRoot: function ()
  {
    var APIRoot;

    APIRoot = "/api/";

    return APIRoot;
  },

  PushTheButton: function()
  {
    return new Promise(function (resolve, reject)
    {
      axios.post(APIObject.GetAPIRoot() + "pushthebutton", {})
        .then(function (response)
        {
          resolve(response.data);
        });
    });
  },
};


export default APIObject;
