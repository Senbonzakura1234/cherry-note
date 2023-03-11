import ScrollWrapper from '@root/components/ScrollWrapper';
import type { ChildrenProps } from '@root/types/common/props';
import type { Session } from 'next-auth';
import { useId } from 'react';

import DrawerMenu from './DrawerMenu';
import Navbar from './Navbar';

type AuthenticatedProps = ChildrenProps & { session: Session };

const Authenticated = ({ children, session: { user } }: AuthenticatedProps) => {
	const drawerId = useId();

	return (
		<div className='drawer drawer-end'>
			<input id={drawerId} type='checkbox' className='drawer-toggle' />

			<main className='drawer-content bg-base-300 grid-rows-layout grid h-screen w-screen grid-cols-1 !antialiased'>
				<Navbar user={user} inputLabelId={drawerId} />

				<div className='z-0 flex w-full py-2 px-3'>
					<div className='main-container w-full'>
						<ScrollWrapper className='h-full w-full pr-2' enableScrollTop>
							{children}
						</ScrollWrapper>
					</div>
				</div>
			</main>

			<DrawerMenu user={user} inputLabelId={drawerId} />
		</div>
	);
};

export default Authenticated;
