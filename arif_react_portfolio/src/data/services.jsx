import React from 'react';
import { MdWeb } from 'react-icons/md';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { VscCode } from 'react-icons/vsc';

export default [
	{
		title: 'Web Design',
		icon: <MdWeb className="w-full h-full" />,
		description:
			'Crafting visually engaging and user centric websites with a focus on responsive layouts and functionality. The aim is to deliver seamless, intuitive designs that enhance user engagement across all devices.',
	},
	{
		title: 'Ui Design',
		icon: <FaHandHoldingHeart className="w-full h-full" />,
		description:
			'Focused on creating clean, intuitive interfaces that enhance user interaction and overall experience. The design approach prioritizes usability, visual harmony, and responsive adaptability across all devices.',
	},
	{
		title: 'Web Development',
		icon: <VscCode className="w-full h-full" />,
		description:
			'Developing high-performance, scalable websites using the latest technologies to ensure seamless functionality and fast load times. Emphasizing clean code, responsiveness, and optimized user experiences across all platforms.',
	},
];