export default {
  run: {
    description: "Custom commands",
    hello: {
      alias: "h",
      description: "Print hello word",
      handler: "./hello/run-hello",
    },
  },
  handler: "./",
  options: [
    {
      description: "show help information",
      long: "help",
      short: "h",
      type: "boolean",
    },
  ],
};
