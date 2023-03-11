import AvatarProfile from '@root/components/AvatarProfile';
import { APP_NAME } from '@root/constants';
import type { IdProps } from '@root/types/common/props';
import type { User } from 'next-auth';

type NavbarProps = { user: User } & IdProps;

const Navbar = ({ user, inputLabelId }: NavbarProps) => {
	return (
		<div className='w-full py-2 px-3'>
			<nav className='bg-base-100 flex h-[3.5rem] rounded-xl py-0 px-4'>
				<div className='my-auto mr-auto'>
					<a className='btn btn-ghost text-xl normal-case'>{APP_NAME}</a>
				</div>

				<label
					htmlFor={inputLabelId}
					className='btn btn-circle drawer-button my-auto border-0 bg-slate-100 hover:bg-slate-200'
				>
					<AvatarProfile user={user} className='h-9 w-9' />
				</label>
			</nav>
		</div>
	);
};

export default Navbar;
