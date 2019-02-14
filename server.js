const Koa = require("koa");
const BodyParser = require("koa-body");
const logger = require("koa-logger");
const koaStatic = require("koa-static");
const cors = require("@koa/cors");
const app = new Koa();
const server = require("http").createServer(app.callback());

require("dotenv").config();
app.use(cors());
app.use(
  BodyParser({
    multipart: true
  })
);
app.use(logger());
// app.use(ctx => {
//   ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
// });
app.use(koaStatic(__dirname + "/dist", {}));

require("./api/routes")(app);
console.log(`App listenng @ http://127.0.0.1:${process.env.PORT || 8080}`);
server.listen(process.env.PORT || 8080);
