import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { CommentWhereUniqueInput } from "../comment/CommentWhereUniqueInput";

export type NewsCreateInput = {
  content?: string | null;
  title?: string | null;
  admin?: AdminWhereUniqueInput | null;
  comment?: CommentWhereUniqueInput | null;
};
