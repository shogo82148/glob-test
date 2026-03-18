import * as glob from "@actions/glob";

const globber = await glob.create("*.json");
const files = await globber.glob();
console.log(files);
