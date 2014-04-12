// Setup requirejs configuration
requirejs.config({
  paths: {
    "jquery": "libs/jquery/dist/jquery",
    "md5": "libs/js/md5"
  },
  "shim": {
    "main": {
      deps: ["jquery", "md5"]
    }
  }
});
