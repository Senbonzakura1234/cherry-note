import { z } from 'zod';

const providerIdSchema = z.enum(['google', 'discord']);

export type ProviderId = z.infer<typeof providerIdSchema>;

export const ProviderIdMap = {
	GOOGLE: 'google',
	DISCORD: 'discord',
} as const satisfies Record<string, ProviderId>;

export const clientSafeProviderSchema = z
	.object({
		id: providerIdSchema,
		name: z.string(),
		type: z.enum(['oauth', 'email', 'credentials']),
		signinUrl: z.string().url(),
		callbackUrl: z.string().url(),
	})
	.array();

export type ClientSafeProvider = z.infer<typeof clientSafeProviderSchema>;
