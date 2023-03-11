import AvatarProfile from '@root/components/AvatarProfile';
import type { User } from 'next-auth';

type UserInfoProps = { user: User };

const UserInfo = ({ user }: UserInfoProps) => {
	return (
		<div className='flex w-full max-w-full gap-4 py-4 px-8'>
			<figure className='my-auto'>
				<AvatarProfile user={user} className='h-12 w-12' />
			</figure>

			<div className='my-auto overflow-hidden'>
				<span className='badge badge-primary truncate font-bold text-slate-50'>@{user.name}</span>
				<p className='truncate'>{user.email}</p>
			</div>
		</div>
	);
};

export default UserInfo;
