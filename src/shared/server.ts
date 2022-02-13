import "reflect-metadata";
import express, { json, NextFunction, Request, Response } from "express";
import "express-async-errors";
import swaggerUi from "swagger-ui-express";

import swaggerFile from "../../docs/swagger.json";
import { AppError } from "./errors/AppError";
import { router } from "./routes";

import "./database";
import "./container";

const app = express();

app.use(json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.use(
  (error: Error, request: Request, response: Response, _next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({ message: error.message });
    }

    return response.status(500).json({ message: "Internal server error" });
  }
);

app.listen(3333, () => console.log("Server running on port 3333"));
