import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { TableItemType } from './table.interface';
import styles from './Table.module.scss';
import {
	HiOutlineExternalLink,
	HiOutlinePencil,
	HiOutlineTrash,
} from 'react-icons/hi';

const TableItem: FC<{ item: TableItemType }> = ({ item }) => {
	return (
		<div className={styles['table-item']}>
			<div className={styles.info}>
				<div>{item.id}</div>
				{item.image && (
					<Image src={item.image} alt={item.name} width={33} height={50} />
				)}
				<div>{item.name}</div>
			</div>

			<div className={styles.actions}>
				<Link
					href={item.viewLink}
					className={'text-primary'}
					target="_blank"
					rel="noreferrer"
				>
					<HiOutlineExternalLink />
				</Link>

				<Link href={item.editLink} className={'text-blue-500'}>
					<HiOutlinePencil />
				</Link>

				<button onClick={item.removeHandler}>
					<HiOutlineTrash />
				</button>
			</div>
		</div>
	);
};

export default TableItem;
