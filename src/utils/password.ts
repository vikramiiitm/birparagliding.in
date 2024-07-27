import bcrypt from "bcryptjs";

// Function to generate a salt and hash a password
export const saltAndHashPassword = async (
  password: string
): Promise<string> => {
  const saltRounds = 10; // Number of salt rounds
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

// Function to compare a password with a hashed password
export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};
