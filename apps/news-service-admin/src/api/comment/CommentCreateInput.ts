import { NewsCreateNestedManyWithoutCommentsInput } from "./NewsCreateNestedManyWithoutCommentsInput";
import { VisitorWhereUniqueInput } from "../visitor/VisitorWhereUniqueInput";

export type CommentCreateInput = {
  newsItems?: NewsCreateNestedManyWithoutCommentsInput;
  text?: string | null;
  visitor?: VisitorWhereUniqueInput | null;
};
