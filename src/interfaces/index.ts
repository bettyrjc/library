export interface IComment {
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface IForm {
  handleInput: () => void;
  setValues: () => void;
  reset: () => void;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
}
