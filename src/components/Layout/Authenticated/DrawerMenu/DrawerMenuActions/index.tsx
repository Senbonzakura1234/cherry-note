import { ArrowLeftOnRectangleIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';
import type { User } from 'next-auth';
import { signOut } from 'next-auth/react';

type DrawerMenuActionsProps = { user: User };

const DrawerMenuActions = ({}: DrawerMenuActionsProps) => {
	return (
		<div className='btn-group btn-group-vertical !rounded-none'>
			<button className='btn btn-ghost no-animation place-content-stretch gap-10 !rounded-none pl-10 font-normal normal-case'>
				<Cog6ToothIcon className='h-5 w-5 text-slate-400' />
				<span>User Profile</span>
			</button>

			<button
				className='btn btn-ghost no-animation place-content-stretch gap-10 !rounded-none pl-10 font-normal normal-case'
				onClick={() => signOut()}
			>
				<ArrowLeftOnRectangleIcon className='h-5 w-5 text-slate-400' />
				<span>Sign Out</span>
			</button>
		</div>
	);
};

export default DrawerMenuActions;
