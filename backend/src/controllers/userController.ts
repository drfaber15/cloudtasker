import { Request, Response } from "express";
import { createUser } from "../services/userService";
import { loginUser } from "../services/userService";

/**
 * Register a new user account
 * Expects email and password in the request body
 */
export async function registerUser(
  req: Request,
  res: Response
) {
  try {
    // Extract registration data from the request body
    const { email, password } = req.body;

    // Create the new user through the service layer
    const user = await createUser(
      email,
      password
    );

    // Return the newly created user with 201 Created status
    res.status(201).json(user);
  } catch (error) {
    // Handle registration errors and send an appropriate message
    res.status(400).json({
      message:
        error instanceof Error
          ? error.message
          : "Registration failed",
    });
  }
}

/**
 * Authenticate a user and return an access token
 * Expects email and password in the request body
 */
export async function login(
  req: Request,
  res: Response
) {
  try {
    // Extract login credentials from the request body
    const { email, password } =
      req.body;

    // Verify credentials and generate authentication token
    const token = await loginUser(
      email,
      password
    );

    // Return the generated token to the client
    res.json(token);
  } catch (error) {
    // Return unauthorized status if authentication fails
    res.status(401).json({
      message: "Invalid credentials",
    });
  }
}