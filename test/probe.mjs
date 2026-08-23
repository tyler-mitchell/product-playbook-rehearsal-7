import { greet } from "@hyphened/product-playbook-rehearsal-7";
if (greet("rehearsal") !== "hello, rehearsal") throw new Error("probe failed");
console.log("probe ok");
