export enum FunctionMethod {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
  Patch = "PATCH",
  Delete = "DELETE",
}

export type User = {
  username: string;
  password: string;
};

export type scheduler = {
  name: string;
  frequency: string;
  method: FunctionMethod;
  url: string;
};