import React from "react";
import { StyledDisplay, StyledDisplayTetrominos } from 'components/styles/StyledDisplay';    
import Cell from './Cell';

// 顯示目前得分 / 消除的列數 / 關卡  
export const Display = ({ gameOver, text}) => (
    <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>   
);

// 顯示 出現的方塊
export const DisplayTetrominos = ({ player }) => (
    <StyledDisplayTetrominos>
      {player.map(row => row.map((value, x) => <Cell key={x} type={value} />))}
    </StyledDisplayTetrominos>
);