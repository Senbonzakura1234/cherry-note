import { Root, Scrollbar, Thumb, Viewport } from '@radix-ui/react-scroll-area';
import type { ChildrenProps, ClassNameProps } from '@root/types/common/props';
import clsx from 'clsx';
import useScrollableRef from 'use-scrollable-ref';

import ScrollToTop from './ScrollToTop';

type ScrollWrapperProps = ChildrenProps & ClassNameProps & { enableScrollTop?: boolean };

const ScrollWrapper = ({ children, className, enableScrollTop }: ScrollWrapperProps) => {
	const { scrollableRef, scrollPosition, scrollableBottomReached, scrollHeight } = useScrollableRef({
		bottomThreshold: 50,
	});

	return (
		<Root className={clsx('scroll-area-root', className)} type='scroll'>
			<Viewport
				className='scroll-area-viewport scroll-wrapper scroll-wrapper-horizontal relative h-full w-full'
				ref={scrollableRef}
			>
				{children}
			</Viewport>

			<Scrollbar className='scroll-area-scrollbar' orientation='vertical'>
				<Thumb className='scroll-area-thumb' />
			</Scrollbar>

			{enableScrollTop && (
				<ScrollToTop
					isShow={scrollableBottomReached && scrollHeight > 2500}
					refObject={scrollableRef}
					scrollPosition={scrollPosition}
				/>
			)}
		</Root>
	);
};

export default ScrollWrapper;
