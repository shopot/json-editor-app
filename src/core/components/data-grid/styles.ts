import styled from 'styled-components';

import { toPx } from './../utils';
import { Borders, BordersRadius, Colors } from '../themes';

export const StyledContainer = styled.div`
  width: 100%;
  height: 700px;
  overflow-y: auto;
  border: ${Borders.Base};
  border-radius: ${BordersRadius.Base};
  background-color: ${Colors.White};

  &::-webkit-scrollbar {
    height: 8px;
    width: 8px;
    background: ${Colors.Gray50};
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #bdbdbd;
    border-radius: 4px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  &::-webkit-scrollbar-thumb:horizontal {
    background: #bdbdbd;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:horizontal:hover {
    background: #555;
  }
`;

export const StyledTableWrapper = styled.div<{ $totalHeight: number }>`
  width: 100%;
  height: ${({ $totalHeight }) => `${toPx($totalHeight)}`};
  position: relative;
`;

export const StyledTable = styled.table<{
  $columnsCount: number;
  $rowsCount: number;
  $rowHeight: number;
  $visibleStartIndex: number;
}>`
  width: 100%;
  position: absolute;
  top: ${({ $visibleStartIndex, $rowHeight }) => `${$visibleStartIndex * $rowHeight}px`};
  display: grid;
  grid-template-columns: repeat(${({ $columnsCount }) => `${$columnsCount}`}, minmax(100px, 1fr));
  grid-template-rows: ${({ $rowsCount, $rowHeight }) => `repeat(${$rowsCount}, ${$rowHeight}px)`};
  table-layout: fixed;
  border-collapse: separate;
  border-spacing: 0;
`;

export const StyledTBody = styled.tbody`
  display: contents;
`;

export const StyledTr = styled.tr<{ $selected?: boolean }>`
  display: contents;
  & td {
    ${({ $selected }) => $selected && `background-color: ${Colors.Blue50}`}
  }

  &:hover td {
    background-color: ${({ $selected }) => ($selected ? Colors.Blue50 : Colors.Gray50)};
  }
`;

export const StyledTd = styled.td<{ $height: number }>`
  box-sizing: border-box;
  padding: 4px 8px;
  border-bottom: 1px solid ${Colors.Gray100};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  height: ${({ $height }) => toPx($height)};
`;
