import { XCircleIcon } from '@heroicons/react/24/solid';
import type { ClassNameProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { HTMLProps } from 'react';
import type { FieldPath, FieldValues, UseFormRegister } from 'react-hook-form';

type FileInputProps<T extends FieldValues> = {
	name: FieldPath<T>;
	register: UseFormRegister<T>;
	resetField: () => void;
	isDirty?: boolean;
} & ClassNameProps &
	HTMLProps<HTMLInputElement>;

const FileInput = <T extends FieldValues>({
	className,
	register,
	name,
	resetField,
	isDirty,
	...props
}: FileInputProps<T>) => (
	<div className='input-group'>
		<input
			{...props}
			type='file'
			className={clsx('file-input w-full cursor-pointer !outline-none', className)}
			{...register(name)}
		/>

		<button
			className={clsx('btn btn-square btn-ghost no-animation', { invisible: !isDirty })}
			type='button'
			disabled={!isDirty}
			onClick={() => isDirty && resetField()}
		>
			<XCircleIcon className='h-6 w-6' />
		</button>
	</div>
);

export default FileInput;
