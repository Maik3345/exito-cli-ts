import { ContentManifest } from "../../../shared/interface";
import { resolve } from "path";
import log from "../../../shared/logger";
const fs = require("fs");
const path = require("path");

let manifests: Array<ContentManifest> = [];

exports.getDirectories = function(srcpath: string) {
  return fs
    .readdirSync(srcpath)
    .map((file: any) => path.join(srcpath, file))
    .filter((path: any) => fs.statSync(path).isDirectory());
};

// Método que permite traer el contenido de todos los directorios indicados
exports.getContentFiles = async function(files: any) {
  await files.forEach(async (file: any) => {
    await getContent(resolve(file));
  });

  return manifests;
};

// Metodo que trae el contenido de un directorio indicado
const getContent = async function(dir: string) {
  try {
    if (fs.existsSync(`${dir}/manifest.json`)) {
      // Do something
      var result = await JSON.parse(
        fs.readFileSync(`${dir}/manifest.json`, "utf8")
      );

      if (result) {
        result.path = dir;
        manifests.push(result);
      }
    } else {
      log.debug(`manifest.json not found in ${dir}`);
    }
  } catch (error) {
    console.log(
      log.debug(`error on read the manifest file in ${dir} check the content`)
    );
  }
};
