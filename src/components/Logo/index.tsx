import cherryQR from '@root/assets/images/Cherry_QR.png';
import Image from 'next/image';
import type { FC } from 'react';

const Logo: FC = () => {
	return (
		<figure className='px-10 pt-10'>
			<Image src={cherryQR} alt='Logo' className='rounded-xl' priority={true} />
		</figure>
	);
};

export default Logo;
