import type { ChildrenProps, ClassNameProps } from '@root/types/common/props';
import { convertFormKeyToLabelName } from '@root/utils/common';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import { useMemo } from 'react';
import type { FieldPath, FieldValues } from 'react-hook-form';

type ControlWrapperProps<T extends FieldValues> = ChildrenProps &
	ClassNameProps & { name: FieldPath<T> } & {
		label?: {
			topLeft?: ReactNode;
			topRight?: ReactNode;
			bottomLeft?: ReactNode;
			bottomRight?: ReactNode;
		};
	};

const ControlWrapper = <T extends FieldValues>({ children, className, name, label }: ControlWrapperProps<T>) => {
	const isShowBottomLabel = useMemo(
		() => Boolean(label?.bottomLeft) || Boolean(label?.bottomRight),
		[label?.bottomLeft, label?.bottomRight],
	);

	return (
		<div className={clsx('form-control w-full', className)}>
			<label className='label font-bold capitalize'>
				<span className='label-text'>{label?.topLeft ? label.topLeft : convertFormKeyToLabelName(name)}</span>

				<span className='label-text-alt'>{label?.topRight}</span>
			</label>

			{children}

			{isShowBottomLabel ? (
				<label className='label font-bold'>
					<span className='label-text-alt'>{label?.bottomLeft}</span>

					<span className='label-text-alt'>{label?.bottomRight}</span>
				</label>
			) : null}
		</div>
	);
};

export default ControlWrapper;
