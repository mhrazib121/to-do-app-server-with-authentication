import { IUser } from "./user.interface";
import { User } from "./user.model";

const userSignUp = async (user: IUser) => {
  const createdUser = await User.create(user);
  return createdUser;
};

export const UserServices = {
  userSignUp,
};
