import React from "react";
import { StyledStartButton } from "components/styles/StyledStartButton";

// 開始按鈕
const StartButton = ({ callback }) => (
    <StyledStartButton onClick={callback}>開始遊戲</StyledStartButton>
);

export default StartButton;