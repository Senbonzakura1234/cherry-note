import { genericPublicPathSchema } from '@root/types/common/zod';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

export const usePublicPath = () => {
	const { pathname } = useRouter();

	const isPublicPage = useMemo(
		() => genericPublicPathSchema.safeParse(pathname.replaceAll('*', '/[[...index]]')).success,
		[pathname],
	);

	return { isPublicPage };
};
