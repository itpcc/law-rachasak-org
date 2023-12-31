export interface ReturnInfo {
	[key: string]: {
		icon?: string,
		icon_color?: string,
		contact_type: string,
		conatc_text: string,
		link: string,
		qr: boolean,
		vCard? : {
			type: string,
			social?: string,
			value: string,
		}
	},
};

export interface ReturnValue {
	code: string,
	has_data: boolean,
	info?: Promise<ReturnInfo>
};

/** @type {import('./$types').PageLoad} */
export function load({ fetch, url }): ReturnValue {
	const code = url.searchParams.get('code');

	if (code) {
		return {
			code,
			has_data: true,
			info: new Promise<ReturnInfo>((resolve) => {
				fetch(`https://lawapi.ericconsultant.in.th/namecards/${encodeURI(code)}.json`)
					.then(res => res.json())
					.then(res => resolve(res))
					.catch((e) => {
						console.log('Fetch namecard error', e);
						resolve({});
					});
			})
		}
	}

	return { code: 'general', has_data: false };
};
