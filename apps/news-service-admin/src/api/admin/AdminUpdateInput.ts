import { NewsUpdateManyWithoutAdminsInput } from "./NewsUpdateManyWithoutAdminsInput";

export type AdminUpdateInput = {
  newsItems?: NewsUpdateManyWithoutAdminsInput;
  name?: string | null;
  email?: string | null;
};
