import type { ClassNameProps } from '@root/types/common/props';
import { convertFormKeyToLabelName } from '@root/utils/common';
import clsx from 'clsx';
import type { FieldValues, Path, PathValue, UseControllerProps } from 'react-hook-form';
import { useController } from 'react-hook-form';

type RadioInputProps<T extends FieldValues> = UseControllerProps<T> &
	ClassNameProps & {
		list: PathValue<T, Path<T>>[];
	};

const RadioInput = <T extends FieldValues>({ list, className, ...props }: RadioInputProps<T>) => {
	const { field } = useController(props);

	return (
		<div className={clsx('btn-group', className)}>
			{list.map(value => (
				<input
					type='radio'
					{...field}
					value={value}
					checked={value === field.value}
					key={value}
					className={clsx('btn btn-sm flex-1 capitalize', { '!text-slate-50': value === field.value })}
					data-title={convertFormKeyToLabelName(value)}
				/>
			))}
		</div>
	);
};

export default RadioInput;
