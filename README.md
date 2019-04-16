# Exito CLI

## Instalación

```bash
npm i exito

npm i -g exito
```

Comandos disponibles:

```bash

$ exito
  Usage: exito <command> [options]

  Commands:

    init        Create basic files and folders for your VTEX app

    credentials                              Manage your credentials for aws
    credentials get                          Gets the current credentials used in aws
    credentials clear                        Clear the current credentials used in aws
    credentials set <username> <pwd>         Sets the current credentials for aws

    aws                             Aws options
    aws clone <criteria> [all]      Clone specific list of projectos from aws, if your add the option <all>

    infra             Proyects infra options
    infra update_config Update the continuous integration and prepare the commit for push the changes.
    infra update_triggers Run a local triggers.json

    generate                                                        Generate options for the project
    generate vtex_json                                              Create the json file config of vtex
    generate workspaces                                             Create the workspaces config for develops
    generate config                                                 Get the last config  for projects
    generate docker <environment> <vendor> <workspace> <email>      Create the docker file for aws code-build in environment production (prod) and develop (dev)
    generate sonar <repository> <version> <src>                     Create the sonar file for test
    generate trigger <arn>                                          Create the template for aws cloud-formation for mount the infra structure for continuos integration

    vtex                                           Vtex options
    vtex run <command> [all]                       Execute specific command from vtex, the current commands suport is: <link>, <publish>
    vtex publish                                   Publish only one component into Vtex
    vtex login <account> <workspace> <email>       Set credentials for vtex in the config file from vtex
    vtex set_vendor <vendor>                       Set the vendor name in the manifest file

  Options:

    -h, --help  show help information
```

## Desarollo local

Start `npm run ts-watch`

local `sudo npm link` ò `node npm link`


## Promover a npm

Publish to npm `sudo npm publish`
