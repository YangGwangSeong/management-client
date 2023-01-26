import Field from '@/components/ui/Field/Field';
import { ReViewService } from '@/services/review.service';
import { ReviewDto } from '@/shared/interfaces/review.interface';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { MdSend } from 'react-icons/md';
import styles from './AddReviewForm.module.scss';

const AddReviewForm: FC<{ movieId: number }> = ({ movieId }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<ReviewDto>({
		mode: 'onChange',
	});

	const queryClient = useQueryClient();

	const { mutateAsync } = useMutation(
		['add review'],
		(data: ReviewDto) => ReViewService.createReview({ ...data, movieId }),
		{
			onSuccess() {
				reset();
				queryClient.invalidateQueries(['get movie', String(movieId)]);
			},
		},
	);

	const onSubmit: SubmitHandler<ReviewDto> = async data => {
		await mutateAsync(data);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<div className={styles.description}>
				<Field
					{...register('description', {
						required: 'Description is required',
					})}
					placeholder="Add a public review"
					error={errors.description}
				></Field>
				<button className={styles.button}>
					<MdSend />
				</button>
			</div>
		</form>
	);
};

export default AddReviewForm;
