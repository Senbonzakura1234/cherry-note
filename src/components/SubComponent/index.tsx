import discordIcon from '@root/assets/images/discord-dark.svg';
import googleIcon from '@root/assets/images/google.svg';
import type { ProviderId } from '@root/types/zod/common';
import { ProviderIdMap } from '@root/types/zod/common';
import { signIn } from 'next-auth/react';
import type { ReactNode } from 'react';

import ProviderButton from './ProviderButton';

export const providerMap = new Map<ProviderId, ReactNode>([
	[
		ProviderIdMap.DISCORD,
		<ProviderButton
			className='border-[#7289DA] bg-[#7289DA] text-slate-50 shadow-2xl shadow-black hover:border-[#6A5ACD] hover:bg-[#6A5ACD]'
			providerId={ProviderIdMap.DISCORD}
			key={ProviderIdMap.DISCORD}
			src={discordIcon}
			onClick={() => signIn(ProviderIdMap.DISCORD)}
		/>,
	],
	[
		ProviderIdMap.GOOGLE,
		<ProviderButton
			className='hover:text-base-content border-0 bg-slate-100 text-slate-900 shadow-2xl shadow-black hover:bg-slate-100'
			providerId={ProviderIdMap.GOOGLE}
			key={ProviderIdMap.GOOGLE}
			src={googleIcon}
			onClick={() => signIn(ProviderIdMap.GOOGLE)}
		/>,
	],
]);
