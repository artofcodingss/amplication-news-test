import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AdminTitle } from "../admin/AdminTitle";
import { CommentTitle } from "../comment/CommentTitle";

export const NewsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <TextInput label="title" source="title" />
        <ReferenceInput source="admin.id" reference="Admin" label="Admin">
          <SelectInput optionText={AdminTitle} />
        </ReferenceInput>
        <ReferenceInput source="comment.id" reference="Comment" label="Comment">
          <SelectInput optionText={CommentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
