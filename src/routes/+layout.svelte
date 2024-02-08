<script lang='ts'>
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-modern.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import {
		AppShell, AppBar, LightSwitch,
		Drawer, drawerStore, type DrawerSettings,
		setModeCurrent, modeCurrent
	} from '@skeletonlabs/skeleton';
	import complaintProc from '$lib/docs/complaint-procedure-ericconsultant.in.th.pdf';

	function triggerMenu(): void {
		const drawerSettings: DrawerSettings = {
			id: 'mobile-menu',
			// Property Overrides
			position: 'left',
			bgDrawer: 'bg-gray-50/80 dark:bg-slate-700/90 text-black',
			bgBackdrop: 'bg-gradient-to-tr from-blue-500/50 via-sky-500/50 to-indigo-500/50',
			width: 'w-[75vw]',
			padding: 'p-4',
			rounded: 'rounded-xl',
			// Metadata
			meta: 'Styled Drawer'
		};

		drawerStore.open(drawerSettings);
	}

	function toggleDarkmode () {
		setModeCurrent(! $modeCurrent);
	}

</script>

<!-- component instance -->
<Drawer>
	{#if $drawerStore.id === 'mobile-menu'}
		<nav class="list-nav w-full py-10 px-5">
			<!-- (optionally you can provide a label here) -->
			<ul class="text-2xl">
				<li>
					<!-- Use style due to conflict with `.list-nav a` -->
					<a href="/namecard" style="padding-left: 0;">
						<span class="
							badge w-12 text-xl py-5 px-8
							bg-secondary-500 text-grey-50
							dark:bg-secondary-50
						">☎</span>
						<span class="flex-auto">Contact</span>
					</a>
				</li>
				<li>
					<a href="https://fastwork.co/user/itpcckub/legal-33946713" style="padding-left: 0;">
						<span class="
							badge w-12 text-xl py-5 px-8
							bg-secondary-500 text-grey-50
							dark:bg-secondary-50
						">👨‍⚖️</span>
						<span class="flex-auto">Consult</span>
					</a>
				</li>
				<li class="flex py-3 pl-3 place-content-center content-center items-center">
					<LightSwitch />
					<button class="flex-auto ml-3 font-bold" on:click={toggleDarkmode}>Dark mode</button>
				</li>
			</ul>
		</nav>
		{:else if $drawerStore.id === 'qr-img'}
			<div class="w-full grid justify-center justify-items-center">
				<img
					src={`https://quickchart.io/qr?text=${encodeURI($drawerStore.meta)}&size=500&margin=3`}
					class="w-full max-w-screen h-full max-h-screen"
					alt="QR code"
				/>
			</div>
		{:else}
		<!-- (fallback contents) -->
		{/if}
</Drawer>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<!-- App Bar -->
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/"><strong class="text-xl uppercase">Eric L & C</strong></a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<button class="inline-flex lg:hidden chip variant-filled" on:click={triggerMenu}>
					<i class="fa-solid fa-bars" aria-label="Menu"></i>
				</button>
				<div class="hidden lg:inline-flex grow gap-5 items-center">
					<a
						class="btn btn-sm variant-ghost-surface dark:text-white"
						href="/namecard"
					>
						Namecard
					</a>
					<a
						class="btn btn-sm variant-ghost-surface dark:text-white"
						href="/consult"
					>
						Consult
					</a>
					<LightSwitch />
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
	<svelte:fragment slot="pageFooter">
		<div class="
			container h-full w-full
			mx-auto max-w-none
			flex flex-col flex-nowrap justify-center items-start
		">
			<div class="
				space-y-10 h-max min-h-[30vh] mt-20 px-10 py-10 w-full grid gap-4
				grid-cols-1
				md:grid-cols-4
				lg:grid-cols-8
				items-center text-center justify-center justify-items-center
				bg-white/40 dark:bg-black/60 backdrop-blur-lg
			">
				<div class="
					flex flex-col place-self-center place-content-center place-items-start items-center gap-6
					h-full w-full pr-10 mr-10
					col-span-1 border-none
					md:col-span-2
					lg:col-span-3 lg:border-solid
					border-spacing-2 border-r-2 border-secondary-900 dark:border-secondary-50
				">
					<h2 class="
						w-full
						text-1xl
						md:text-2xl
						lg:text-3xl
						leading-loose font-medium title-font text-left
						text-secondary-900 dark:text-secondary-50
					">ติดต่อเรา</h2>
					<dl class="
						mt-1 space-y-4 w-full
						text-base leading-1
						text-left
					">
						<div class="contact-entity">
							<dt class="contact-dt">
								<span>🌏</span> Website: &nbsp;
							</dt>
							<dd class="contact-dd"><a href="/" target="_blank">www.ericconsultant.co.th</a></dd>
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
					</dl>
				</div>
				<div class="
					flex flex-col h-full w-full text-left
					col-span-1
					md:col-span-2
					lg:col-span-5
				">
					<div class="
						grid gap-4 mb-5 grow h-full
						grid-cols-1
						md:grid-cols-2
						lg:grid-cols-3
						footer-links
					">
						<div>
							<h2>Legal</h2>
							<ol>
								<li><a href="/legal/privacy-policy">Privacy Policy</a></li>
								<li><a href="/legal/PDPA-msg">PDPA Message</a></li>
								<li><a href="/legal/Do-not-sell">Do Not Sell</a></li>
							</ol>
						</div>
						<div>
							<h2>Info</h2>
							<ol>
								<li><a href="/namecard">Contact</a></li>
								<li><a href="/consult">Consult</a></li>
							</ol>
						</div>
					</div>
					<hr class="flex-none">
					<p class="
						flex-none leading-5 mt-5 text-left lg:text-right
						text-base-content/60 dark:text-base-300
					">
						Copyright © {(new Date()).getFullYear()} Eric Lawyer & Consultant office.
						Developed by <a href="https://itpcc.net" target="_blank">@ITPCC</a> based on <a href="https://www.skeleton.dev" target="_blank" rel="noreferrer">Skelton.dev</a> boilerplate.
						Stock images from <a href="https://unsplash.com" target="_blank" rel="noreferrer">Unsplash</a>.<br/>
						<a href={complaintProc} target="_blank">การจัดการเรื่องร้องเรียนและระงับข้อพิพาท</a>
					</p>
				</div>
			</div>
		</div>
	</svelte:fragment>

</AppShell>

<style lang="postcss">
	.contact-entity {
		@apply grid auto-cols-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-flow-col lg:grid-cols-5
	}
	.contact-dt {
		@apply inline col-span-1 lg:col-span-2 font-semibold text-xl dark:text-blue-200;
	}
	.contact-dd {
		@apply inline col-span-1 lg:col-span-3 text-lg text-left dark:text-blue-300;
	}
	.contact-dd a {
		@apply font-normal
	}

	.footer-links h2 {
		@apply mb-5 text-lg md:text-xl lg:text-2xl;
	}

	.footer-links li {
		@apply font-normal my-2 ml-10 list-[disclosure-closed];
	}

	.footer-links a {
		@apply font-normal;
	}
</style>
