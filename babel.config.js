module.exports = {
  "presets": [
    "module:metro-react-native-babel-preset",
  ],
  "plugins": [
    ["module-resolver", {
      "root": ["./src"],
      "extensions": [".js"]
    }],
    "@babel/plugin-transform-runtime",
  ],
  "env": {
    "production": {
      "plugins": ["transform-remove-console"]
    },
  }
}