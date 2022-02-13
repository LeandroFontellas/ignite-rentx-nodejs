/* eslint-disable @typescript-eslint/naming-convention */
declare namespace Express {
  export interface Request {
    user: {
      id?: string;
      name: string;
      email: string;
      password: string;
      isAdmin: boolean;
    };
  }
}
