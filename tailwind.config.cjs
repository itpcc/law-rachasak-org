import { join } from 'path'
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'
import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs'
import fontAwesome from 'tailwind-fontawesome'

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			fontFamily: {
				'head': ['"Mitr"', 'Impact'],
				'content': ['"Pridi"', 'serif'],
				sans: ['"Blobmoji"', 'sans-serif']
			},
		},
	},
	plugins: [
		forms,
		typography,
		...skeleton(),
		require("daisyui"),
		fontAwesome({
			version: 6
		})
	],
}
