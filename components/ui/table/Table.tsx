import React, { FC } from 'react';
import Loader from '../Loader';
import { TableItemType } from './table.interface';
import TableItem from './TableItem';

const Table: FC<{ items: TableItemType[]; isLoading?: boolean }> = ({
	items,
	isLoading,
}) => {
	return (
		<div className={'mt-6'}>
			{isLoading ? (
				<Loader count={3} />
			) : items?.length ? (
				items.map(item => <TableItem item={item} key={item.id} />)
			) : (
				<div>Item not found</div>
			)}
		</div>
	);
};

export default Table;
