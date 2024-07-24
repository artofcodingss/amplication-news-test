import { NewsUpdateManyWithoutCommentsInput } from "./NewsUpdateManyWithoutCommentsInput";
import { VisitorWhereUniqueInput } from "../visitor/VisitorWhereUniqueInput";

export type CommentUpdateInput = {
  newsItems?: NewsUpdateManyWithoutCommentsInput;
  text?: string | null;
  visitor?: VisitorWhereUniqueInput | null;
};
