import { InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';
import { IconType } from 'react-icons';

export interface FieldProps {
	error?: FieldError | undefined;
	Icon?: IconType;
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & FieldProps;

export interface Field extends TypeInputPropsField {}
