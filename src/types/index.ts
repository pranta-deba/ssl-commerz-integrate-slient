// User Type
export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  image?: string;
}
export interface IAuthContextType {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}
