import { News } from "../news/News";

export type Admin = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  newsItems?: Array<News>;
  name: string | null;
  email: string | null;
};
