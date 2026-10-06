import { Request, Response } from "express";
import { createUser } from "../services/userService";
import { loginUser } from "../services/userService";

export async function registerUser(
  req: Request,
  res: Response
) {
  try {
    const { email, password } = req.body;

    const user = await createUser(
      email,
      password
    );

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({
      message:
        error instanceof Error
          ? error.message
          : "Registration failed",
    });
  }
}

export async function login(
  req: Request,
  res: Response
) {
  try {
    const { email, password } =
      req.body;

    const token = await loginUser(
      email,
      password
    );

    res.json(token);
  } catch (error) {
    res.status(401).json({
      message: "Invalid credentials",
    });
  }
}