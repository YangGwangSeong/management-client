import { forwardRef } from 'react';
import cn from 'classnames';
import styles from './Field.module.scss';
import { Field as IField } from './field.interface';

const Field = forwardRef<HTMLInputElement, IField>(
	({ error, type = 'text', style, ...rest }, ref) => {
		return (
			<>
				<div className={styles.input}>
					<input ref={ref} type={type} {...rest} />
				</div>
				{error && <div className={styles.error}>{error.message}</div>}
			</>
		);
	},
);

Field.displayName = 'Field';

export default Field;
