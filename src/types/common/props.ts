import type { Session } from 'next-auth';
import type { MouseEvent, ReactNode, RefObject } from 'react';

export type ClassNameProps = { className?: string };
export type IdProps = { inputLabelId?: string };
export type OnClickProps<T extends Element> = { onClick?: (event: MouseEvent<T>) => void };
export type ChildrenProps = { children?: ReactNode };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SrcProps = { src: any };
export type RefProps<T> = { refObject?: RefObject<T> };
export type IsSuccessProps = { isSuccess: boolean };
export type IsErrorProps = { isError: boolean };
export type FetchStateProps = IsErrorProps & IsSuccessProps;
export type IsPaginateOnlyProps = { isPaginateOnly?: boolean };

export type MainAppProps = { session: Session | null };
