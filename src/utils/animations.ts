import type { AnimationProps } from 'framer-motion';

export const getFramerFadeUp = (delay = 0, fadeUpRange = 20, duration = 0.5): AnimationProps => ({
	initial: { opacity: 0, y: fadeUpRange },
	animate: { opacity: 1, y: 0, transition: { delay, duration } },
	exit: { opacity: 0, y: fadeUpRange },
});

export const getFramerCollapse = (duration = 0.5): AnimationProps => ({
	initial: 'collapsed',
	animate: 'open',
	exit: 'collapsed',
	variants: {
		open: { opacity: 1, height: 'auto' },
		collapsed: { opacity: 0, height: 0 },
	},
	transition: { duration, ease: [0.04, 0.62, 0.23, 0.98] },
});
