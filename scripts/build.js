const { lstatSync, readdirSync } = require("fs");
const { join } = require("path");
const { execSync } = require("child_process");
const args = process.argv;
const target = (args[2] || "").replace("@stejar/", "");

const exec = (command, extraEnv) =>
    execSync(command, {
        stdio: "inherit",
        env: Object.assign({}, process.env, extraEnv),
    });

const isDirectory = (source, name) => lstatSync(join(source, name)).isDirectory();
const getDirectories = source => readdirSync(source).filter(name => isDirectory(source, name));

const dirs = getDirectories("./src")
    .filter(item => !target || item == target)
    .filter(item => item !== "create-stejar-app");

dirs.forEach(dir => {
    console.log(`Building ${dir} \n--`);
    exec(`babel src/${dir}/src -d src/${dir}/es --ignore tests`);
    console.log(`\n`);
});
