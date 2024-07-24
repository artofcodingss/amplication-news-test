import { StringFilter } from "../../util/StringFilter";
import { NewsListRelationFilter } from "../news/NewsListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VisitorWhereUniqueInput } from "../visitor/VisitorWhereUniqueInput";

export type CommentWhereInput = {
  id?: StringFilter;
  newsItems?: NewsListRelationFilter;
  text?: StringNullableFilter;
  visitor?: VisitorWhereUniqueInput;
};
