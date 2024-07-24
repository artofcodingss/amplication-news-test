import { News } from "../news/News";
import { Visitor } from "../visitor/Visitor";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  newsItems?: Array<News>;
  text: string | null;
  visitor?: Visitor | null;
};
