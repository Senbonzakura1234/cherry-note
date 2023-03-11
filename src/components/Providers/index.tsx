import type { SessionProviderProps } from 'next-auth/react';
import { SessionProvider } from 'next-auth/react';

type ProvidersProps = SessionProviderProps;

const Providers = (props: ProvidersProps) => {
	return <SessionProvider {...props} />;
};

export default Providers;
