// Setup requirejs configuration
requirejs.config({
  paths: {
    "jquery": "libs/jquery/dist/jquery",
    "text": "libs/js/require.text",
    "css": "libs/js/require.css"
  },
  "shim": {
    "main": {
      deps: ["client/js/cachebuster"]
    },
    "client/js/cachebuster": {
      deps: ["jquery"]
    }
  }
});
