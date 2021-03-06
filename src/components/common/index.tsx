import React, { FC, Fragment } from 'react';
import styled from 'styled-components/macro';
import uuid from 'uuid/v4';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  width: 100%;
  height: 100%;
  min-height: 50px;
  color: #56437c;
  font-weight: 500;
  text-align: center;
  background: linear-gradient(90deg, rgba(126, 104, 168, 0.25) 0%, rgba(187, 170, 221, 0.25) 100%);
  border-radius: 3px;
`;
interface BoxesProps {
  rows: GridItem[];
  columns: GridItem[];
}

export const Boxes: React.FC<BoxesProps> = ({ rows, columns, ...rest }) => (
  <Fragment key={uuid()}>
    {rows.map(() => (
      <Fragment key={uuid()}>
        {columns.map(() => (
          <Box key={uuid()} {...rest} />
        ))}
      </Fragment>
    ))}
  </Fragment>
);
