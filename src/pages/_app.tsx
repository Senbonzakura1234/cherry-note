import '../styles/globals.css';

import HeadLayout from '@root/components/HeadLayout';
import Layout from '@root/components/Layout';
import Providers from '@root/components/Providers';
import type { MainAppProps } from '@root/types/common/props';
import { api } from '@root/utils/api';
import type { AppType } from 'next/app';

const MainApp: AppType<MainAppProps> = ({ Component, pageProps: { session, ...pageProps } }) => (
	<Providers session={session}>
		<Layout>
			<HeadLayout />
			<Component {...pageProps} />
		</Layout>
	</Providers>
);

export default api.withTRPC(MainApp);
