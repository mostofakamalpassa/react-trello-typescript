import { useState } from "react";
import { NewItemFormContainer, NewItemButton, NewItemInput } from "../styles";

type NewItemFormProps = {
  onAdd(text: string): void;
};
