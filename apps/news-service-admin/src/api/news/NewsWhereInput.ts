import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";

export type NewsWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  title?: StringNullableFilter;
  admin?: AdminWhereUniqueInput;
  comment?: CommentWhereUniqueInput;
};
