/*
http://stackoverflow.com/questions/39560638/why-are-some-typescript-module-names-given-as-strings/42445987#42445987
Note: All of these files in the same folder, i.e. the same path!
*/

// declare a namespace, demoNamespace.d.ts
declare namespace "DemoNamespace" {
    export function fn(): string;
}

// using a namespace, demoNamespaceModule.ts
import * as n from "demoNamespace";

//let f = new n.DemoNamespace.fn(); ???


// export a module, demoModule.ts
export class Alpha { /* ... */ }
export class Beta { /* ... */ }

// using a module, demoModuleTest.ts
import * as m from "./demoModule";

let a = new m.Alpha();
let b = new m.Beta();
