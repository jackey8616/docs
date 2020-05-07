(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{345:function(t,e,s){t.exports=s.p+"assets/img/SwaggerUI.faac8e72.png"},346:function(t,e,s){t.exports=s.p+"assets/img/SwUi-Response.59b451a9.png"},365:function(t,e,s){"use strict";s.r(e);var a=s(21),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"live-reloading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#live-reloading"}},[t._v("#")]),t._v(" Live reloading")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("COMPATIBILITY NOTE")]),t._v(" "),a("p",[t._v("This guide requires Node.js >= 8 and will target "),a("a",{attrs:{href:"https://expressjs.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("express"),a("OutboundLink")],1),t._v(".\nWe currently recommend using "),a("a",{attrs:{href:"https://yarnpkg.com/en/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yarn"),a("OutboundLink")],1),t._v(", npm should work but was not tested.\nWe assume your setup is similar to the one recommended for "),a("a",{attrs:{href:"/getting-started"}},[t._v("getting started")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("We will use "),a("a",{attrs:{href:"https://nodemon.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodemon"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/TypeStrong/ts-node",target:"_blank",rel:"noopener noreferrer"}},[t._v("ts-node"),a("OutboundLink")],1),t._v(" for live reloading, but any tool that allows us to hook into the reloading process will do. Alternatives may, i.e. be a combination of "),a("code",[t._v("tsc -w")]),t._v(" and triggering "),a("code",[t._v("tsoa spec-and-routes")]),t._v(" using "),a("a",{attrs:{href:"https://www.npmjs.com/package/onchange",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("onchange")]),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("p",[a("strong",[t._v("What we will talk about:")])]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#reloading-code"}},[t._v("Reloading Code")]),a("ul",[a("li",[a("a",{attrs:{href:"#installing-nodemon-and-ts-node"}},[t._v("Installing nodemon and ts-node")])]),a("li",[a("a",{attrs:{href:"#creating-a-nodemon-config"}},[t._v("Creating a nodemon config")])]),a("li",[a("a",{attrs:{href:"#adding-a-dev-script"}},[t._v("Adding a dev script")])])])]),a("li",[a("a",{attrs:{href:"#supercharging-our-developer-experience-with-swaggerui-rocket"}},[t._v("Supercharging our developer experience with SwaggerUI 🚀")]),a("ul",[a("li",[a("a",{attrs:{href:"#installing-swagger-ui-express"}},[t._v("Installing Swagger UI Express")])]),a("li",[a("a",{attrs:{href:"#exposing-a-doc-endpoint"}},[t._v("Exposing a /doc endpoint")])]),a("li",[a("a",{attrs:{href:"#inspecting-the-documentation"}},[t._v("Inspecting the Documentation")])]),a("li",[a("a",{attrs:{href:"#sending-request-through-swaggerui"}},[t._v("Sending Request through SwaggerUI")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"reloading-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reloading-code"}},[t._v("#")]),t._v(" Reloading Code")]),t._v(" "),a("h3",{attrs:{id:"installing-nodemon-and-ts-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-nodemon-and-ts-node"}},[t._v("#")]),t._v(" Installing nodemon and ts-node")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D nodemon ts-node concurrently\n")])])]),a("h3",{attrs:{id:"creating-a-nodemon-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-nodemon-config"}},[t._v("#")]),t._v(" Creating a nodemon config")]),t._v(" "),a("p",[t._v("Now, let's create a "),a("code",[t._v("nodemon.json")]),t._v(" inside the root folder of our project that looks like this:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"exec"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ts-node src/server.ts"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"watch"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ext"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ts"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"adding-a-dev-script"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-a-dev-script"}},[t._v("#")]),t._v(" Adding a dev script")]),t._v(" "),a("p",[t._v("Let's automatically start this setup with "),a("code",[t._v("yarn run dev")]),t._v(", and, while we're at it, a "),a("code",[t._v("build")]),t._v(" and a "),a("code",[t._v("start")]),t._v(" command in our "),a("code",[t._v("package.json")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-diff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-diff"}},[a("code",[t._v("{\n"),a("span",{pre:!0,attrs:{class:"token unchanged"}},[t._v('  "name": "starter",\n  "version": "0.0.1",\n')]),a("span",{pre:!0,attrs:{class:"token inserted-sign inserted"}},[t._v('+ "scripts: {\n+   "dev": "concurrently \\"nodemon\\" \\"nodemon -x tsoa spec-and-routes\\"",\n+   "build": "tsoa spec-and-routes && tsc"\n+   "start": "node build/server.js"\n+ },\n')]),a("span",{pre:!0,attrs:{class:"token unchanged"}},[t._v('  "dependencies": {\n  // ...\n')]),t._v("}\n")])])]),a("h2",{attrs:{id:"supercharging-our-developer-experience-with-swaggerui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supercharging-our-developer-experience-with-swaggerui"}},[t._v("#")]),t._v(" Supercharging our developer experience with SwaggerUI 🚀")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://swagger.io/tools/swagger-ui/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SwaggerUI"),a("OutboundLink")],1),t._v(" is a great tool to inspect our OAS and the requests our server can handle.")]),t._v(" "),a("p",[t._v("While other great tools like "),a("a",{attrs:{href:"https://github.com/Redocly/redoc",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redoc"),a("OutboundLink")],1),t._v(' serve beautiful documentation, a major upside of using SwaggerUI during development is the instant feedback via the "Try it out" feature.')]),t._v(" "),a("p",[t._v("In order to make sure we always get the latest documentation during "),a("em",[t._v("development")]),t._v(", we will import the latest OAS file ("),a("em",[t._v("build/swagger.json")]),t._v(") every time someone hits that endpoint.")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("For performance reasons, importing the contents of the OAS file only once after starting the application is recommended in "),a("em",[t._v("production")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"installing-swagger-ui-express"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-swagger-ui-express"}},[t._v("#")]),t._v(" Installing Swagger UI Express")]),t._v(" "),a("p",[t._v("This module allows you to serve auto-generated swagger-ui generated API docs from express, based on our OAS file. The result is living documentation for your API hosted from your API server via a route.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" swagger-ui-express\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" -D @types/swagger-ui-express\n")])])]),a("h3",{attrs:{id:"exposing-a-doc-endpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exposing-a-doc-endpoint"}},[t._v("#")]),t._v(" Exposing a "),a("code",[t._v("/doc")]),t._v(" endpoint")]),t._v(" "),a("p",[t._v("Below the body-parser, let's add another handler "),a("strong",[t._v("before the call to "),a("code",[t._v("RegisterRoutes(app)")])])]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/app.ts")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" express"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Response "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ExResponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Request "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ExRequest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"express"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" swaggerUi "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"swagger-ui-express"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" swaggerUi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("_req"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ExRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ExResponse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    swaggerUi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("generateHTML")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"../build/swagger.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("In order to dynamically import json files, set")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"resolveJsonModule"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("in your "),a("code",[t._v("tsconfig.json")]),t._v(" file.")])]),t._v(" "),a("h3",{attrs:{id:"inspecting-the-documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inspecting-the-documentation"}},[t._v("#")]),t._v(" Inspecting the Documentation")]),t._v(" "),a("p",[t._v("Now, when we navigate to "),a("a",{attrs:{href:"http://localhost:3000/docs",target:"_blank",rel:"noopener noreferrer"}},[t._v("localhost:3000/docs"),a("OutboundLink")],1),t._v(", we should see a current reflection of our API.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(345),alt:"SwaggerUI"}})]),t._v(" "),a("h3",{attrs:{id:"sending-request-through-swaggerui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sending-request-through-swaggerui"}},[t._v("#")]),t._v(" Sending Request through SwaggerUI")]),t._v(" "),a("p",[t._v('We can select Endponts, click the "Try it out" button and submit some data by filling out the form.\nWhen we hit "Execute", that request will be sent to our server and the response will be displayed below the form.')]),t._v(" "),a("p",[a("img",{attrs:{src:s(346),alt:"SwaggerUI Response"}})])])}),[],!1,null,null,null);e.default=n.exports}}]);