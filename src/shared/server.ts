import "reflect-metadata";
import express, { json } from "express";
import swaggerUi from "swagger-ui-express";

import swaggerFile from "../../docs/swagger.json";
import { router } from "./routes";

import "./database";
import "./container";

const app = express();

app.use(json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333, () => console.log("Server running on port 3333"));
