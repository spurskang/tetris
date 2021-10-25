import React from 'react';
import { StyledCell } from 'components/styles/StyledCell';
import { TETROMINOS } from 'tetrominos';

// 方塊
const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
)

export default React.memo(Cell);
