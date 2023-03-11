import type { ChildrenProps } from '@root/types/common/props';

type UnAuthenticatedProps = ChildrenProps;

const UnAuthenticated = ({ children }: UnAuthenticatedProps) => (
	<main className='bg-base-300 h-screen w-screen p-4 !antialiased'>
		<div className='relative h-full w-full'>{children}</div>
	</main>
);

export default UnAuthenticated;
