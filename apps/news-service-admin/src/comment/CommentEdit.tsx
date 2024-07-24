import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { NewsTitle } from "../news/NewsTitle";
import { VisitorTitle } from "../visitor/VisitorTitle";

export const CommentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="newsItems"
          reference="News"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NewsTitle} />
        </ReferenceArrayInput>
        <TextInput label="text" multiline source="text" />
        <ReferenceInput source="visitor.id" reference="Visitor" label="Visitor">
          <SelectInput optionText={VisitorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
