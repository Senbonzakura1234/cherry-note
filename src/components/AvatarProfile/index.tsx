import * as Avatar from '@radix-ui/react-avatar';
import type { ClassNameProps } from '@root/types/common/props';
import { getUserColorFromUsername } from '@root/utils/common';
import clsx from 'clsx';
import type { User } from 'next-auth';
import { useMemo } from 'react';

type AvatarProfileProps = ClassNameProps & { user: User };

const AvatarProfile = ({ user, className }: AvatarProfileProps) => {
	const { fallBackName, userColor } = useMemo(() => {
		return {
			fallBackName: user.name ? user.name[0] : '',
			userColor: getUserColorFromUsername(user.name ?? ''),
		};
	}, [user.name]);

	return (
		<Avatar.Root
			className={clsx(
				'inline-flex select-none items-center justify-center overflow-hidden rounded-full bg-slate-900 align-middle',
				className,
			)}
		>
			<Avatar.Image
				className='h-full w-full rounded-full object-cover'
				src={user.image || undefined}
				alt={user.name || 'user'}
			/>

			<Avatar.Fallback
				className='flex h-full w-full items-center justify-center font-medium uppercase leading-none text-slate-50'
				style={{ backgroundColor: userColor }}
				delayMs={600}
			>
				{fallBackName}
			</Avatar.Fallback>
		</Avatar.Root>
	);
};

export default AvatarProfile;
