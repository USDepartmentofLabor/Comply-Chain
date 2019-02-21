var Koa = require("koa");
var logger = require("koa-logger");
var serve = require("koa-static-server");
var app = new Koa();

app.use(logger());

app.use(
    serve({
        rootDir: "build",
        rootPath: "/",
        notFoundFile: "index.html"
    })
);

app.listen(8080, () => {
    console.log("listening on port 8080");
});
