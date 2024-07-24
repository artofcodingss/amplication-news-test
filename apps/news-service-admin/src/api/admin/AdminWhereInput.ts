import { StringFilter } from "../../util/StringFilter";
import { NewsListRelationFilter } from "../news/NewsListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AdminWhereInput = {
  id?: StringFilter;
  newsItems?: NewsListRelationFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
};
