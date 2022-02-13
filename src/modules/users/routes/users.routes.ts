import { Router } from "express";

import { CreateUserController } from "../useCases/createUser/CreateUserController";

const usersRoutes = Router();
const createUserController = new CreateUserController();

usersRoutes.post("/", createUserController.handle);

export { usersRoutes };
