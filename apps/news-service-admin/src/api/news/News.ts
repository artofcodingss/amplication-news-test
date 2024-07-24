import { Admin } from "../admin/Admin";
import { Comment } from "../comment/Comment";

export type News = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  title: string | null;
  admin?: Admin | null;
  comment?: Comment | null;
};
