import express, { Request, Response, NextFunction } from "express";

const app = express();

app.get("/test", async (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "GET API is working.",
  });
});

export default app;
