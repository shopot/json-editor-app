import type { JSX } from 'react';

import { StyledTr, StyledTd } from './styles';

export type DataGridItemProps = {
  item: JSONValue;
  itemIndex: number;
  rowHeight: number;
  selected?: boolean;
  onRowClick: (itemIndex: number) => void;
};

export const DataGridItem = ({ item, itemIndex, rowHeight, selected, onRowClick }: DataGridItemProps): JSX.Element => {
  const dataKeys = Object.keys(item);

  const valuesList = dataKeys.map((dataKey) => {
    if (dataKey === '_id' || dataKey === 'guid') {
      return null;
    }

    const content = typeof item[dataKey] === 'boolean' ? (item[dataKey] ? 'Yes' : 'No') : item[dataKey];

    return (
      <StyledTd key={`:${itemIndex}-${dataKey}`} $height={rowHeight}>
        {content}
      </StyledTd>
    );
  });

  return (
    <StyledTr $selected={selected} onClick={() => onRowClick(itemIndex)}>
      {valuesList}
    </StyledTr>
  );
};
