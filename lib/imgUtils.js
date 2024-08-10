import { uploads } from "img-go";

export const uploadImage = async (event) => {
  return await uploads(event);
};