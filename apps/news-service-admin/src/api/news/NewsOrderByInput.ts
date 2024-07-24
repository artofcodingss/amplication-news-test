import { SortOrder } from "../../util/SortOrder";

export type NewsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  title?: SortOrder;
  adminId?: SortOrder;
  commentId?: SortOrder;
};
