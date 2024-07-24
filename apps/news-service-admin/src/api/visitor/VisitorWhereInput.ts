import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";

export type VisitorWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  comments?: CommentListRelationFilter;
};
