/* eslint-disable @typescript-eslint/naming-convention */
declare namespace Express {
  export interface Request {
    user: {
      id?: string;
      name: string;
      email: string;
      password: string;
      driver_license: string;
      avatar: string;
      isAdmin: boolean;
      created_at: Date;
    };
  }
}
