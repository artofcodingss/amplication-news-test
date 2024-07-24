import { CommentUpdateManyWithoutVisitorsInput } from "./CommentUpdateManyWithoutVisitorsInput";

export type VisitorUpdateInput = {
  name?: string | null;
  comments?: CommentUpdateManyWithoutVisitorsInput;
};
