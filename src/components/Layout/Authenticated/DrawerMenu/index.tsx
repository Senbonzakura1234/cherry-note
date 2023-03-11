import type { IdProps } from '@root/types/common/props';
import type { User } from 'next-auth';

import DrawerMenuActions from './DrawerMenuActions';
import UserInfo from './UserInfo';

type DrawerMenuProps = { user: User } & IdProps;

const DrawerMenu = ({ user, inputLabelId }: DrawerMenuProps) => {
	return (
		<menu className='drawer-side'>
			<label htmlFor={inputLabelId} className='drawer-overlay'></label>

			<ul className='menu bg-base-100 text-base-content w-80 overflow-hidden px-0 pt-4'>
				<UserInfo user={user} />

				<div className='divider m-0'></div>

				<DrawerMenuActions user={user} />

				<div className='bg-primary mt-auto h-1/5 max-h-52 w-full shadow-2xl shadow-black'></div>
			</ul>
		</menu>
	);
};

export default DrawerMenu;
