<script lang='ts'>
	import { BlueNight, modeCurrent } from '@skeletonlabs/skeleton';
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings } from '@skeletonlabs/skeleton';

	import type { ReturnValue } from './+page';


    /** @type {import('./$types').PageData} */
    export let data: ReturnValue;

	// Image optimization
	import imgMeDoc from '$lib/images/77.jpg';

	let avatarFilter = '';

	modeCurrent.subscribe((mode) => {
		avatarFilter = mode ? '' : '#BlueNight';
	});

	function openQR(url: string) {
		const drawerSettings: DrawerSettings = {
			id: 'qr-img',
			regionDrawer: 'flex',
			// Metadata
			meta: url
		};
		drawerStore.open(drawerSettings);
	}

	// Use this instead of directly link to prevent "is not commonly downloaded and it may dangerous"
	async function downloadVcf () {
		const dataInfo = await data.info;
		const code = (Object.keys(dataInfo ?? {}).length === 0) ? 'general' : data.code;
		const vcard = await fetch(`https://lawapi.ericconsultant.in.th/namecards/${encodeURI(code)}.vcf`)
			.then(resp => resp.blob())
		const vcardUrl = window.URL.createObjectURL(vcard);
		// Export to file
		var element = document.createElement('a');
		element.setAttribute('href', vcardUrl);
		element.setAttribute('download', 'eric-legal-consultant.vcf');
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
		window.URL.revokeObjectURL(vcardUrl);
	}
</script>

<BlueNight />

<div class="page-namecard container h-full mx-auto flex justify-center items-center">
	<div class="mx-auto max-w-7xl lg:min-h-[70vh]">
		<div class="
			grid
			mx-auto max-w-2xl grid-cols-1 gap-x-6 gap-y-5 mt-0 mb-5
			lg:mx-0 lg:max-w-none lg:grid-cols-5 lg:gap-x-1 lg:gap-y-16 lg:mt-10
			place-self-center
			rounded-xl shadow-xl
			card card-side
			bg-surface-50 dark:bg-surface-900
		">
			<div class="card-body pl-6 lg:pl-8 lg:col-span-3">
				<div class="max-w">
					<h1 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl">ราชศักดิ์ รักษ์กำเนิด</h1>
					<h2 class="text-base font-semibold leading-7 text-blue-600 dark:text-blue-300">วศ.บ., นบ. </h2>
					<p class="mt-6 text-lg leading-8 text-justify">
						ด้วยประสบการณ์การทำงานในวงการการพัฒนาโปรแกรมคอมพิวเตอร์กว่า 6 ปี
						และความรู้ความสามารถด้านกฎหมายโดยเฉพาะกฎหมายพาณิชย์อิเล็กทรอนิกส์
						ผมขอให้ท่านมั่นใจได้ว่าจะได้รับคำปรึกษาที่ท่านปราถนาตอบโจทย์ความต้องการ
					</p>
					<br />
					<hr class="!border-t-2" />
					<dl class="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none" id="contact-list">
						<div class="contact-entity">
							<dt class="contact-dt">
								<span>🌏</span> Website: &nbsp;
							</dt>
							<dd class="contact-dd"><a href="https://law.rachasak.org" target="_blank">www.ericconsultant.co.th</a></dd>
						</div>
						<div class="contact-entity">
							<dt class="contact-dt">
								<span>📞</span> Phone: &nbsp;
							</dt>
							<dd class="contact-dd"><a href="tel:+6621620958" target="_blank">(+66) 02-1620958</a></dd>
						</div>
						<div class="contact-entity">
							<dt class="contact-dt">
								<span>📧</span> E-Mail: &nbsp;
							</dt>
							<dd class="contact-dd"><a href="mailto:law@rachasak.org" target="_blank">consult@ericconsultant.co.th</a></dd>
						</div>
						{#if data.has_data}
							{#await data.info}
								<div class="contact-entity">
									<dt class="contact-dt">
										<div class="placeholder-circle w-16" />
									</dt>
									<dd class="contact-dd"><div class="placeholder" /></dd>
								</div>
							{:then ctList}
								{#if ctList}
									{#each Object.entries(ctList) as [_code, info]}
										<div class="contact-entity">
											<dt class="contact-dt icon-before icon-">
												{#if info.icon}
													<i class="fa-brands fa-{info.icon}" style="color: #{info.icon_color};"></i> &nbsp;
												{/if}
												{info.contact_type}
												{#if info.qr}
													<button
														type="button"
														class="btn-icon variant-filled"
														on:click={() => openQR(info.link)}
													>
														<i class="fas fa-qrcode"></i>
													</button>
												{/if}
											</dt>
											<dd class="contact-dd">
												<a href="{info.link}" target="_blank">{info.conatc_text}</a>
											</dd>
										</div>
									{/each}
								{/if}
							{:catch error}
								Error {error.message}
							{/await}
						{/if}
					</dl>
					<div class="flex mt-6 justify-end">
						<button
							class="
								btn btn-lg variant-filled
								hover:text-surface-900
								dark:hover:bg-surface-900
								dark:hover:text-surface-50
							"
							on:click={downloadVcf}
						>
							<i class="fas fa-address-card"></i> Download Contact
						</button>
					</div>
				</div>
			</div>
			<figure class="lg:col-span-2 block max-md:hidden">
				<img
					src={imgMeDoc}
					alt="Eric in barrister suit"
					class="shadow-xl block max-md:hidden"
					style="filter: url({avatarFilter})"
				/>
			</figure>
		</div>
	</div>

</div>
