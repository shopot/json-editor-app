import { type JSX, useEffect, useState, useRef, useCallback, useMemo } from 'react';

import { Box } from '../box';
import { DataGridItem } from './data-grid-item';
import { StyledContainer, StyledTable, StyledTableWrapper, StyledTBody } from './styles';

const ROW_HEIGHT = 30;

type TableProps = {
  data: JSONValue[];
  selectedRowIndex?: number | null;
  rowHeight?: number;
  onRowClick: (itemIndex: number) => void;
};

export const DataGrid = ({
  data,
  selectedRowIndex = null,
  rowHeight = ROW_HEIGHT,
  onRowClick,
}: TableProps): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [visibleItems, setVisibleItems] = useState<JSONValue[]>([]);
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);

  const calculateVisibleItems = useCallback(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const scrollTop = container.scrollTop;
    const startIndex = Math.floor(scrollTop / rowHeight);
    const endIndex = Math.min(data.length - 1, Math.ceil((scrollTop + container.clientHeight) / rowHeight));

    setVisibleStartIndex(startIndex);
    setVisibleItems(data.slice(startIndex, endIndex + 1));
  }, [data, rowHeight]);

  useEffect(() => {
    calculateVisibleItems();
  }, [scrollTop, data, calculateVisibleItems]);

  const handleScroll = (): void => {
    const container = containerRef.current;

    if (container) {
      setScrollTop(container.scrollTop);

      requestAnimationFrame(calculateVisibleItems);
    }
  };

  const headers = useMemo(
    (): string[] => (data.length ? Object.keys(data[0]).filter((header) => header !== '_id' && header !== 'guid') : []),
    [data],
  );

  const totalHeight = data.length * rowHeight;
  const columnsCount = headers.length || 1;
  const rowsCount = visibleItems.length || 1;
  const hasData = data.length > 0;

  return (
    <StyledContainer ref={containerRef} onScroll={handleScroll}>
      {!hasData && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          Please, upload data from the JSON file.
        </Box>
      )}
      {hasData && (
        <StyledTableWrapper $totalHeight={totalHeight}>
          <StyledTable
            $columnsCount={columnsCount}
            $rowsCount={rowsCount}
            $rowHeight={rowHeight}
            $visibleStartIndex={visibleStartIndex}
          >
            <StyledTBody>
              {visibleItems.map((item, index): JSX.Element => {
                const itemIndex = index + visibleStartIndex;

                return (
                  <DataGridItem
                    key={itemIndex}
                    item={item}
                    itemIndex={itemIndex}
                    onRowClick={onRowClick}
                    rowHeight={rowHeight}
                    selected={selectedRowIndex === itemIndex}
                  />
                );
              })}
            </StyledTBody>
          </StyledTable>
        </StyledTableWrapper>
      )}
    </StyledContainer>
  );
};
