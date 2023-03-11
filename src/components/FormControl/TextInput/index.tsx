import type { ClassNameProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { HTMLProps } from 'react';
import type { FieldPath, FieldValues, UseFormRegister } from 'react-hook-form';

type TextInputProps<T extends FieldValues> = ClassNameProps & {
	placeholder?: string;
	name: FieldPath<T>;
	register: UseFormRegister<T>;
} & (
		| { type: 'text' | 'password' | 'email' | 'url'; props?: HTMLProps<HTMLInputElement> }
		| { type: 'textarea'; props?: HTMLProps<HTMLTextAreaElement> }
	);

const TextInput = <T extends FieldValues>({ className, type, register, name, props }: TextInputProps<T>) => {
	if (type === 'textarea')
		return (
			<textarea
				{...props}
				className={clsx('textarea textarea-bordered legacy-scroll-area w-full', className)}
				{...register(name)}
			/>
		);

	return (
		<input {...props} type={type} className={clsx('input input-bordered w-full', className)} {...register(name)} />
	);
};

export default TextInput;
