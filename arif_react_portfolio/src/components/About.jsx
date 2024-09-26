import React from 'react';

import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">
				I’m a front-end web developer with a strong focus on creating responsive, dynamic websites using modern technologies like HTML, CSS, JavaScript, and React. I’m passionate about crafting intuitive user experiences and clean, efficient code.
				</p>
				<a
					href="mailto:arifeuphoria1584@gmail.com"
					className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
				>
					arifeuphoria1584@gmail.com
				</a>
			</div>

			<img
				src="https://avatars.githubusercontent.com/u/149588042?s=400&u=cd48c0fb9aae7fdac2f12a2cc2eed57b0416ec21&v=4"
				alt="Arif"
				className="w-full md:w-4/12 rounded-lg object-cover"
			/>
		</div>
	);
}

export default About;