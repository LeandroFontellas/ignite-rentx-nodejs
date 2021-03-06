import { UserRepository } from "@modules/users/infra/typeorm/repositories/UserRepository";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "@shared/errors/AppError";

interface IPayload {
  sub: string;
}
export async function ensureAuthenticated(
  request: Request,
  _response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, process.env.JWT_SECRET) as IPayload;

    const usersRepository = new UserRepository();
    const user = await usersRepository.findByPk(user_id);

    if (!user) {
      throw new AppError("User does not exist", 401);
    }

    request.user = user;

    return next();
  } catch (error) {
    throw new AppError("Invalid token", 401);
  }
}
