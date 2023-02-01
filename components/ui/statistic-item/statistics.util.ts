import { IconType } from 'react-icons';
import {
	AiOutlineEye,
	AiOutlineStar,
	AiOutlineTeam,
	AiOutlineVideoCamera,
} from 'react-icons/ai';

export const getIcon = (id: number): IconType => {
	switch (id) {
		case 1:
			return AiOutlineEye;
		case 2:
			return AiOutlineTeam;
		case 3:
			return AiOutlineStar;
		case 4:
			return AiOutlineVideoCamera;
		default:
			return AiOutlineEye;
	}
};
