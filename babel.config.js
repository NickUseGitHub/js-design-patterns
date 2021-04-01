const presets = [
  [
    "@babel/env",
    {
      targets: {
        "esmodules": true,
        "node": '10.16.3',
      },
      useBuiltIns: "usage",
      corejs: "3.6.4",
    },
  ],
];

module.exports = { presets };