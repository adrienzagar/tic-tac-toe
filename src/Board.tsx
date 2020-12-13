import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { Cell, CellValue } from './Cell';

const BoardWrapper = styled.div`
background-color: #999999;
width: 100%;
height: 100%;
display: grid;
grid-template-columns: auto auto auto;
grid-template-rows: auto auto auto;
column-gap: 6px;
row-gap: 6px;
`;

type Winner = CellValue | "tie";

type BoardProps = {
    onGameEnd(winner: Winner): void;
};

export const Board: FC<BoardProps> = ({ onGameEnd }) => {

    const [cells, setCells] = useState<CellValue[]>(Array(9).fill(undefined))

    const currentShape: CellValue = cells.filter(n => n).length % 2 ? 'o' : "x";

    const toggleCell = (index: number) => {
        setCells(cells => cells.map((c, i) => i === index ? currentShape : c ))
    }

    return <BoardWrapper>
        {
            cells.map((cell, i) => (
                <Cell
                    key={i}
                    value={cell}
                    index={i}
                    toggle={toggleCell}
                />
            ))
        }
    </BoardWrapper>
};