import express from 'express';

export function allowCors(req: express.Request, res: express.Response, next: express.NextFunction): void {
  res.append('Access-Control-Allow-Origin', '*');
  res.append('Access-Control-Allow-Methods', '*');
  res.append('Access-Control-Allow-Headers', '*');

  next();
}

// exports.allowCors = allowCors;
