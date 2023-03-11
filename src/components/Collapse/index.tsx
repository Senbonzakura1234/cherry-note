import type { ChildrenProps, ClassNameProps } from '@root/types/common/props';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import { useState } from 'react';

type CollapseProps = ClassNameProps &
	ChildrenProps & { label?: ReactNode; forcedOpen?: boolean; openByDefault?: boolean };

const Collapse = ({ className, children, label, forcedOpen, openByDefault }: CollapseProps) => {
	const [open, setOpen] = useState(Boolean(forcedOpen) || Boolean(openByDefault));

	return (
		<div className={clsx('collapse w-full', { 'collapse-open': open, 'collapse-plus': !forcedOpen }, className)}>
			<div
				className={clsx('collapse-title select-none text-lg font-bold capitalize', {
					'cursor-pointer': !forcedOpen,
				})}
				onClick={() => {
					if (forcedOpen) return;
					setOpen(o => !o);
				}}
			>
				{label}
			</div>

			<div className='collapse-content flex flex-col gap-2'>{children}</div>
		</div>
	);
};

export default Collapse;
