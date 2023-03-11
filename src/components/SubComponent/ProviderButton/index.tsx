import type { ClassNameProps, OnClickProps, SrcProps } from '@root/types/common/props';
import type { ProviderId } from '@root/types/zod/common';
import clsx from 'clsx';
import Image from 'next/image';

type ProviderButtonProps = OnClickProps<HTMLButtonElement> & ClassNameProps & SrcProps & { providerId: ProviderId };

const ProviderButton = ({ className, onClick, providerId, src }: ProviderButtonProps) => (
	<button
		className={clsx(
			'btn max-sm:btn-circle mx-auto flex max-w-[75%] flex-auto gap-5 rounded-full border-2 capitalize sm:place-content-stretch',
			className,
		)}
		onClick={onClick}
	>
		<Image priority={false} className='h-1/2 w-auto' alt={providerId} src={src} />{' '}
		<span className='hidden sm:inline'>Sign In With {providerId.toLocaleLowerCase()}</span>
	</button>
);

export default ProviderButton;
