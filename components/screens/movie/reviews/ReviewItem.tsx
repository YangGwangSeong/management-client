import { Review } from '@/shared/interfaces/review.interface';
import Image from 'next/image';
import React, { FC } from 'react';
import styles from './Reviews.module.scss';

const ReviewItem: FC<{ review: Review }> = ({ review }) => {
	return (
		<div className={styles.reviewItem}>
			{review.user && (
				<div className={styles.author}>
					<Image
						src={review.user.avatarPath}
						alt={review.user.name}
						width={45}
						height={45}
					/>
					<div>{review.user.name}</div>
				</div>
			)}
			<article>{review.description}</article>
		</div>
	);
};

export default ReviewItem;
