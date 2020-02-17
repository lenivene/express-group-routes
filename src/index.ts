import express, { Router } from "express";

type PathParams = string | RegExp | Array<string | RegExp>;

function Group(routerPrefix: PathParams, fn: Function): Router {
  var router = Router();
  fn(router);

  express.application.use(routerPrefix, router);

  return router;
}

//@ts-ignore
express.application.group = express.Router.group = Group;

export default express;
