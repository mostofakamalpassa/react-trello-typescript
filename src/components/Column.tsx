import React,{FC} from "react";
import { ColumnContainer, ColumnTitle } from "../styles";

// type ColumnProps = React.PropsWithChildren<{ text?: string }>;
// type ColumnProps ={ text?: string , children: React.ReactNode};
type ColumnProps = React.PropsWithChildren<{ text?: string }>;

// export const Column = ({text}:ColumnProps) => {
export const Column: FC<ColumnProps> = ({text, children}) => {
  return (
    <>
      <ColumnContainer>
        <ColumnTitle><h5>{text}</h5></ColumnTitle>
        {children}
      </ColumnContainer>
    </>
  );
};
