import { Router } from "express"
const routes = new Router()

import controller from "./app/controllers/controllers"

routes.get("/controller", controller.index)
routes.get("/controller/:id", controller.show)
routes.post("/controller", controller.create)
routes.put("/controller/:id", controller.update)
routes.delete("/controller/:id", controller.destroy)

export default routes
