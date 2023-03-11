import { colorHexRegex } from '@root/constants';
import { z } from 'zod';

export const genericNumberSchema = z.number();
export const genericStringSchema = z.string();
export const genericBooleanSchema = z.boolean();

export const genericNonNegativeSchema = genericNumberSchema.nonnegative();
export const genericPositiveSchema = genericNumberSchema.positive();
export const genericCoercePositiveSchema = z.coerce.number().positive();
export const genericCoerceNonNegativeSchema = z.coerce.number().nonnegative();

export const genericColorHexStringSchema = genericStringSchema.min(4).max(9).regex(colorHexRegex);

export const genericPublicPathSchema = z.enum(['/auth/signin', '/auth/error'] as const);
