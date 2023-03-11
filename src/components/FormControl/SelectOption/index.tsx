import type { ClassNameProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { FieldValues, Path, PathValue, UseControllerProps } from 'react-hook-form';
import { useController } from 'react-hook-form';

type SelectOptionProps<T extends FieldValues> = UseControllerProps<T> &
	ClassNameProps & {
		list: PathValue<T, Path<T>>[];
	};

const SelectOption = <T extends FieldValues>({ list, className, ...props }: SelectOptionProps<T>) => {
	const { field } = useController(props);

	return (
		<select className={clsx('select select-bordered select-sm capitalize', className)} {...field}>
			{list.map(value => (
				<option value={value} key={value} className={clsx({ 'font-bold': value === field.value })}>
					{value.toLocaleLowerCase()}
				</option>
			))}
		</select>
	);
};

export default SelectOption;
