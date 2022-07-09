import React, { FC } from "react";
import { ColumnContainer, ColumnTitle } from "../styles";
import { AddNewItem } from "./AddNewItem";
import {useAppState} from '../components/AppStateContext';
import {Card} from '../components/Card';

// type ColumnProps = React.PropsWithChildren<{ text?: string }>;
// type ColumnProps ={ text?: string , children: React.ReactNode};
type ColumnProps = React.PropsWithChildren<{ text?: string, id: string, children?: React.ReactNode}>;

// export const Column = ({text}:ColumnProps) => {
export const Column: FC<ColumnProps> = ({ text, id,children}) => {
  const { getTasksByListId } = useAppState();
  const tasks = getTasksByListId(id);


  return (
   
      <ColumnContainer>
        <ColumnTitle>
          <h5>{text} </h5>
        </ColumnTitle>
        {children}

        <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={console.log}
        dark
      />
      <>
      {
        tasks.map(task => {
          <Card text={task.text} key={task.id} id={task.id} /> 
        })
      }
      </>
      </ColumnContainer>
     
    
  );
};
