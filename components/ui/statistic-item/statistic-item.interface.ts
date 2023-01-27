import { IconType } from 'react-icons';

export interface StatisticItemType {
	name: string;
	value: number;
	Icon: IconType;
	color: 'blue' | 'light-blue' | 'purple' | 'green';
}
