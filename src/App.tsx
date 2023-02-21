/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';
import styles from './style';

import {Nav} from './components';

function App() {
	return (
		<div className='flex flex-col items-center w-full bg-blue'>
			{/* Navigation */}
			<div className={`${styles.paddingX}`}>
				<div className={`${styles.boxWidth}`}>
					<Nav />
				</div>
			</div>

			{/* Other sections */}
			<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
				<div className={`${styles.boxWidth}`} />
			</div>

		</div>
	);
}

export default App;
