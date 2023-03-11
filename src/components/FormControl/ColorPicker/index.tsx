import type { FieldValues, UseControllerProps } from 'react-hook-form';
import { useController } from 'react-hook-form';

type ColorPickerProps<T extends FieldValues> = UseControllerProps<T>;

const ColorPicker = <T extends FieldValues>(props: ColorPickerProps<T>) => {
	const { field } = useController(props);

	return (
		<div className='outline-primary-content/50 h-8 w-full overflow-hidden rounded-lg outline'>
			<input type='color' className='color-swatch-input h-full w-full border-none' {...field} />
		</div>
	);
};

export default ColorPicker;
