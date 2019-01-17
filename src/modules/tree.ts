export default {
  clone: {
    description:
      "Clone specific list of projectos from aws, if your add the option <all>, this automatical download all projects found with the specific <criteria>",
    handler: "./aws/clone/clone-projects",
    requiredArgs: "criteria",
    optionalArgs: ["all"]
  },
  credentials: {
    description: "Manage your credentials for aws",
    get: {
      alias: "g",
      description: "Gets the current credentials used in aws",
      handler: "./aws/config/get-credentials"
    },
    clear: {
      alias: "c",
      description: "Clear the current credentials used in aws",
      handler: "./aws/config/clear-credentials"
    },
    set: {
      alias: "s",
      description: "Sets the current credentials for aws",
      handler: "./aws/config/set-credentials",
      requiredArgs: ["username", "pwd"]
    }
  },
  handler: "./",
  options: [
    {
      description: "show help information",
      long: "help",
      short: "h",
      type: "boolean"
    }
  ]
};
