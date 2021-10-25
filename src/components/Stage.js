import React from "react";
import { StyledStage } from "components/styles/StyledStage";
import Cell from "components/Cell";

// 遊戲區域
const Stage = ({ stage }) => (
    <StyledStage width={stage[0].length} height={stage.length}>
        {stage.map(row => row.map((cell,x) => <Cell key={x} type={cell[0]} />))}
    </StyledStage>
);

export default Stage;