import { CommentCreateNestedManyWithoutVisitorsInput } from "./CommentCreateNestedManyWithoutVisitorsInput";

export type VisitorCreateInput = {
  name?: string | null;
  comments?: CommentCreateNestedManyWithoutVisitorsInput;
};
