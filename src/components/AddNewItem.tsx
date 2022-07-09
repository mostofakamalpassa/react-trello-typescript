import { useState } from "react";
import { AddItemButton } from "../styles";
import { NewItemForm } from "./NewItemForm"
type AddNewItemProps = {
  onAdd(text: string): void;
  toggleButtonText: string;
  dark?: boolean;
};

export const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState<boolean>(true);
  const { onAdd, toggleButtonText, dark } = props;

  if(showForm){
    // we show item creation form here
    <NewItemForm onAdd={text => {
      onAdd(text);
      setShowForm(false);
    }} ></NewItemForm>

  }

  return (
    <AddItemButton dark={dark} onClick={() =>{ return( setShowForm(true))}}>
      {toggleButtonText}
    </AddItemButton>
  );
};
