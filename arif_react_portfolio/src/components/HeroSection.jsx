import React from 'react';

function HeroSection() {
	return (
		<div id="hero" className="flex items-center justify-center flex-col py-20">
			<div className="text-center">
				<h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold">
					Hi, This is Arif
				</h1>
				<p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
				I’m a front-end developer creating sleek, responsive websites that deliver smooth user experiences.{' '}
				</p>
				<a
					href="#works"
					className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md "
				>
					See Projects
				</a>
			</div>
		</div>
	);
}

export default HeroSection;