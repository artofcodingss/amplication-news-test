import { Comment } from "../comment/Comment";

export type Visitor = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  comments?: Array<Comment>;
};
