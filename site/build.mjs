import { mkdirSync, writeFileSync } from "node:fs";
mkdirSync("dist", { recursive: true });
const label = process.env.PUBLIC_LABEL ?? "sans variable";
writeFileSync("dist/index.html", `<!doctype html><meta charset="utf-8"><title>wsd deploy test</title><h1>Construit par Wasied</h1><p id="v">version 1 - ${label} - node ${process.version}</p>\n`);
console.log("build ok");
