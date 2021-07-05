declare namespace Express {
  export interface Request {
    token?: string;
    query?: {
      name?: string;
    };
  }

  export interface Response {
    locals?: any;
    body?: any;
  }
}
