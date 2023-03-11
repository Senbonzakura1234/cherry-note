import { ArrowUpOnSquareIcon } from '@heroicons/react/24/solid';
import FadeWrapper from '@root/components/Animations/FadeWrapper';
import type { RefProps } from '@root/types/common/props';
import { useCallback, useState } from 'react';

type ScrollToTopProps = { isShow: boolean; scrollPosition: number } & RefProps<HTMLDivElement>;

const ScrollToTop = ({ isShow, refObject: ref, scrollPosition }: ScrollToTopProps) => {
	const [isScrolling, setIsScrolling] = useState(false);

	const scrollToTop = useCallback(() => {
		if (!isScrolling && isShow) {
			let position = scrollPosition;
			setIsScrolling(() => true);
			const interval = setInterval(() => {
				if (!ref?.current) return;

				position = position * 0.8;

				if (position > 1) {
					ref.current.scrollTo({
						top: position,
						behavior: 'smooth',
					});

					return;
				}

				clearInterval(interval);
				setIsScrolling(() => false);

				if (position > 0)
					ref.current.scrollTo({
						top: 0,
						behavior: 'smooth',
					});
			}, 1);
		}
	}, [isScrolling, scrollPosition, isShow, ref]);

	return (
		<FadeWrapper show={isShow} isTransForm>
			<div className='fixed inset-x-1/2 bottom-6 z-30 flex -translate-x-1/2 place-content-center lg:left-auto lg:right-4 lg:bottom-6'>
				<button
					className='btn btn-primary btn-circle text-white'
					aria-label='Back To Top'
					disabled={isScrolling || !isShow}
					onClick={scrollToTop}
				>
					<ArrowUpOnSquareIcon className='h4 h-4' />
				</button>
			</div>
		</FadeWrapper>
	);
};

export default ScrollToTop;
