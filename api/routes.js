const Router = require("koa-router");

const contactsController = require("./controllers/contactsController");
const publicRouter = new Router({});
module.exports = function(app) {
  publicRouter.get("/search", contactsController.listContact);
  publicRouter.post("/import", contactsController.uploadContact);

  publicRouter.all("*", async ctx => {
    ctx.status = 404;
    ctx.body = {
      message: "route not found"
    };
  });
  app.use(publicRouter.routes()).use(publicRouter.allowedMethods());
};
