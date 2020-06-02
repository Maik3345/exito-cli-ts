export default {
  init: {
    alias: "i",
    description: "Create basic files and folders for your VTEX app",
    handler: "./hello/run-hello"
  },
  run: {
    description: "Custom commands",
    hello: {
      alias: "c",
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
