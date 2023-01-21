import { forwardRef } from 'react';
import cn from 'classnames';
import styles from './Field.module.scss';
import { Field as IField } from './field.interface';

const Field = forwardRef<HTMLInputElement, IField>(
	({ error, type = 'text', style, Icon, ...rest }, ref) => {
		return (
			<>
				<div className={styles.input}>
					{Icon && (
						<div className={styles.icon}>
							<Icon />
						</div>
					)}
					<input ref={ref} type={type} {...rest} />
				</div>
				{error && <div className={styles.error}>{error.message}</div>}
			</>
		);
	},
);

Field.displayName = 'Field';

export default Field;
