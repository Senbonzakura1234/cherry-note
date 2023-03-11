import Logo from '@root/components/Logo';
import { providerMap } from '@root/components/SubComponent';
import { APP_DESCRIPTION, APP_NAME } from '@root/constants';
import { authOptions } from '@root/server/auth';
import { clientSafeProviderSchema } from '@root/types/zod/common';
import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import { getServerSession } from 'next-auth/next';
import { getProviders } from 'next-auth/react';

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const session = await getServerSession(context.req, context.res, authOptions);

	if (session) return { redirect: { destination: '/' } };

	const providers = Object.values((await getProviders()) || []);

	const result = clientSafeProviderSchema.safeParse(providers);

	return { props: { providers: result.success ? result.data : [] } };
}

export default function SignIn({ providers }: InferGetServerSidePropsType<typeof getServerSideProps>) {
	return (
		<section className='card bg-base-100 absolute inset-1/2 h-[70%] w-[400px] !max-w-full -translate-x-1/2 -translate-y-1/2 shadow-xl'>
			<Logo />

			<div className='card-body items-center text-center'>
				<h2 className='card-title font-serif text-4xl font-extrabold'>{APP_NAME}</h2>
				<p className='text-sm italic'>{APP_DESCRIPTION}</p>
				<span className='font-bold'>Please login to continue</span>
				<p className='card-actions max-sm:gap-6 sm:grow-0'>
					{providers.map(provider => providerMap.get(provider.id))}
				</p>
			</div>
		</section>
	);
}
