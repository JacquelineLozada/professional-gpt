import { NextPage } from 'next';
import { Grid } from '@mui/material';

import Layout from '@/components/Layout';

import Home from '@/components/LadingSections/Home';
import AboutUs from '@/components/LadingSections/AboutUs';

import useDevice from '@/hooks/utils/useDevice';

import DesktopBlob from '@/assets/blobs/DesktopBlob';
import MobileBlob from '@/assets/blobs/MobileBlob';

const Landing: NextPage = () => {
	const { isMobile } = useDevice();

	return (
		<Layout>
			{isMobile ? (
				<>
					<MobileBlob top='22%' left='0' width='70vw' />
					<MobileBlob bottom='18%' right='0' width='70vw' />
				</>
			) : (
				<>
					<DesktopBlob bottom='0' left='1vw' width='60vw' />
					<DesktopBlob top='0' right='2vw' width='60vw' />
				</>
			)}

			<Home />
			
			<Grid>
				<AboutUs />
			</Grid>
		</Layout>
	);
};

export default Landing;
