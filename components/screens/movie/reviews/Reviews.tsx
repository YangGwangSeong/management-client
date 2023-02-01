import { useAuth } from '@/hooks/useAuth';
import { Review } from '@/shared/interfaces/review.interface';
import React, { FC } from 'react';
import { useQuery } from 'react-query';
import styles from './Reviews.module.scss';
import AddReviewForm from './add-review-form/AddReviewForm';
import ReviewItem from './ReviewItem';
import { Reviews } from './reviews.interface';

const Reviews: FC<Reviews> = ({ movieId, reviews, isLoading }) => {
	const { user } = useAuth();

	return (
		<div className="mt-10">
			<div>{user && <AddReviewForm movieId={movieId} />}</div>
			{isLoading ? (
				<div>loading</div>
			) : reviews?.length ? (
				<>
					<div className={styles.grid}>
						{reviews.map(review => (
							<ReviewItem review={review} key={review.id} />
						))}
					</div>
				</>
			) : (
				<p>Reviews not found!</p>
			)}
		</div>
	);
};

export default Reviews;
