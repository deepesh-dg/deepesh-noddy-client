#! /usr/bin/env node

const childProcess = require("child_process");
const fs = require("fs");
const path = require("path");

/**
 * @param: command (in string)
 */
const runCommand = (command) => {
    try {
        childProcess.execSync(command, { stdio: "inherit" });
    } catch (e) {
        console.log(`Failed to execute command ${command}`, e);
        return false;
    }
    return true;
};

const repoName = process.argv[2];

/**
 * Checking If Repo Name is provided or not
 */
if (repoName == null) {
    console.log("Please Provide Project Name");
    process.exit(-1);
}

/**
 * Verifying If Given Repo Name is Valid or not
 */
const regex = /^(?:@[a-z0-9-*~][a-z0-9-*._~]*)?[a-z0-9-~][a-z0-9-._~]*$/gm;
if (repoName.match(regex) == null) {
    console.log("Name is not valid, Please Try Again with different name...");
    process.exit(-1);
}

const gitCheckoutCommand = `git clone https://github.com/PrinceDeepu/deepesh-noddy-client.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the Repository with name ${repoName}`);

const checkOut = runCommand(gitCheckoutCommand);
if (!checkOut) process.exit(-1);

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

runCommand(`rm -rf ${repoName}/.git`);
runCommand(`rm -rf ${repoName}/bin`);

const pkgPath = path.resolve(`./${repoName}/package.json`);
const pkg = require(pkgPath);
pkg.name = repoName;
pkg.bin = "";
pkg.version = "0.0.1";
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

console.log(
    `Congratulations, Now you are ready to use Noddy as your backend. Follow the following command to start`
);
console.log(`For Development`);
console.log(`cd ${repoName} && npm run dev`);
console.log(`For Production`);
console.log(`cd ${repoName} && npm run build && npm run start`);
