import type { ChildrenProps, ClassNameProps } from '@root/types/common/props';
import { getFramerCollapse } from '@root/utils/animations';
import { AnimatePresence, motion } from 'framer-motion';

type CollapseWrapperProps = { open?: boolean; initial?: boolean; duration?: number } & ChildrenProps & ClassNameProps;

const CollapseWrapper = ({ open, initial, duration, children, className }: CollapseWrapperProps) => (
	<AnimatePresence initial={initial}>
		{open ? (
			<motion.div className={className} {...getFramerCollapse(duration)}>
				{children}
			</motion.div>
		) : null}
	</AnimatePresence>
);

export default CollapseWrapper;
