import React, { FC } from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components'


const CellContainer = styled.button`
    background-color: #ffffff;
    margin-bottom: -1px;
    border: none;
    cursor: pointer;
    outline: none;
    position: relative;
`
const variants = {
    hidden: { opacity: 0.5, transform: "translate3d(-50%, -50%, 0) scale(0.5)"},
    visible: { opacity: 1, transform: "translate3d(-50%, -50%, 0) scale(1)"},
    
}

const Shape = styled(motion.p).attrs(() => ({
    initial: "hidden",
    variants,
}))`
    height: 200px;
    width: 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 4rem;
`;

export type CellValue = "x" | "o" | undefined;

type CellProps = {
    value: CellValue;
    toggle(index: number): void;
    index: number;
}

export const Cell: FC<CellProps> = ({value, toggle, index}) => {
    return <CellContainer onClick={() => toggle(index)}>
        {
            value === "o" ? <Shape animate="visible">O</Shape> : value ? <Shape animate="visible">X</Shape> : null
        }
    </CellContainer>

}