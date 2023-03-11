import type { ClassNameProps } from '@root/types/common/props';
import clsx from 'clsx';
import { useMemo } from 'react';
import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { useController } from 'react-hook-form';

type SliderRangeProps<T extends FieldValues> = UseControllerProps<T> &
	ClassNameProps & {
		min?: number;
		max: number;
		step?: number;
		isShowStep?: boolean;
	};

const SliderRange = <T extends FieldValues>({
	className,
	min,
	max,
	step,
	isShowStep,
	...props
}: SliderRangeProps<T>) => {
	const {
		field: { onChange, ...field },
	} = useController(props);

	const numberOfStep = useMemo(() => Math.ceil((max - (min ?? 0)) / (step ?? 1)) + 1, [max, min, step]);

	return (
		<div className={className}>
			<input
				type='range'
				{...field}
				onChange={e => onChange(e.currentTarget.valueAsNumber)}
				min={min}
				max={max}
				step={step}
				className='range w-full'
				inputMode='numeric'
			/>

			<div className={clsx('flex w-full select-none justify-between px-2 text-xs', { hidden: !isShowStep })}>
				{Array(numberOfStep)
					.fill(0)
					.map((_, key) => (
						<span key={key}>|</span>
					))}
			</div>
		</div>
	);
};

export default SliderRange;
