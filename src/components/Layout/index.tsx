import { usePublicPath } from '@root/hooks/usePublicPath';
import type { ChildrenProps } from '@root/types/common/props';
import { signIn, useSession } from 'next-auth/react';

import Authenticated from './Authenticated';
import UnAuthenticated from './UnAuthenticated';

type LayoutProps = ChildrenProps;

const Layout = ({ children }: LayoutProps) => {
	const { isPublicPage } = usePublicPath();

	const { data: session } = useSession({ required: true, onUnauthenticated: () => !isPublicPage && signIn() });

	if (!session) return <UnAuthenticated>{isPublicPage ? children : null}</UnAuthenticated>;

	return <Authenticated session={session}>{children}</Authenticated>;
};

export default Layout;
