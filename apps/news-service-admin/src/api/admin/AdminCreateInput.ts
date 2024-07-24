import { NewsCreateNestedManyWithoutAdminsInput } from "./NewsCreateNestedManyWithoutAdminsInput";

export type AdminCreateInput = {
  newsItems?: NewsCreateNestedManyWithoutAdminsInput;
  name?: string | null;
  email?: string | null;
};
