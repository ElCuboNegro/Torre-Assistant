const { exec } = require("child_process");
const fse = require('fs-extra');

const srcDir = `./src/actions`;
const destDir = `./release/action`;
                              
fse.copySync(srcDir, destDir, { overwrite: true })

//environment variables installation
exec("envsub --syntax handlebars --env-file '.env' /release/actions/settings/settings.yaml")

//frontend build
exec("cd src/frontend && npm run build")