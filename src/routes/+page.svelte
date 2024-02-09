<script lang="ts">

	import {
		Toast, toastStore, type ToastSettings,
		localStorageStore,
		Apollo, XPro, BlueNight
	} from '@skeletonlabs/skeleton';
	import type { Writable } from 'svelte/store';

	// Image optimization
	import ladyJustice from '$lib/images/lady-justice.jpg?h=1080';
	import imgSvcDoc from '$lib/images/document.jpg';
	import imgSvcConsult from '$lib/images/consult.jpg';
	import imgSvcLibrary from '$lib/images/library.jpg';

	// * Page handling
	const t: ToastSettings = {
		message: `
			<a href="https://unsplash.com/photos/DZpc4UY8ZtY" target="_blank">
				Lady Justice background.
			</a><br/>
			© Tingey Injury Law Firm, West Charleston Boulevard, Las Vegas, NV, USA.<br/>
			Free to use under the Unsplash License.
		`,
		background: 'variant-filled-warning',
	};
	function onLickLadyJustice () {
		toastStore.trigger(t);
	};

	const modeCurrent: Writable<boolean> = localStorageStore('modeCurrent', false);

	let heroImgFilter = '';
	let svcImgFilter = '';

	modeCurrent.subscribe((mode) => {
		heroImgFilter = mode ? '#Apollo' : '#XPro';
		svcImgFilter = mode ? '#BlueNight' : '#XPro';
	});

	const services = [
		{
			topic: "จัดทำเอกสารทางกฎหมาย",
			image: imgSvcDoc,
			alt: "Document",
			desc: `
				เราให้บริการจัดทำเอกสารทางกฎหมายต่างๆ ตามความต้องการของท่าน
				ไม่ว่าจะเป็นสัญญา หนังสือจดทะเบียน คำขอ คำรับรอง จดหมายแจ้งเตือน
				ตั้งแต่การยกร่างจนกระทั่งการจดทะเบียนสมบูรณ์
			`,
			copyright: {
				img_name: 'white printer paper close-up photography',
				creator: 'Arisa Chattasa',
				url: 'https://unsplash.com/photos/0LaBRkmH4fM'
			}
		}, {
			topic: "ให้คำปรึกษาทั่วไป",
			image:imgSvcConsult,
			alt: "Consulting",
			desc: `
				เรายินดีให้คำปรึกษาในการประกอบกิจการต่างๆ เพื่อให้ท่านมั่นใจได้ว่าท่านจะทำงานได้โดยสำเร็จ
				เราพร้อมนำเรื่องที่ท่านสนใจไปศึกษาหาข้อมูลและทำเอกสารนำเสนอข้อสรุปให้ท่านตามความต้องการ
			`,
			copyright: {
				img_name: 'Two middle age business workers smiling happy and confident. Working together with smile on face hand giving high five at the office',
				creator: 'krakenimages',
				url: 'https://unsplash.com/photos/376KN_ISplE'
			}
		}, {
			topic: "ให้คำปรึกษาทางกฎหมาย",
			image: imgSvcLibrary,
			alt: "Library",
			desc: `
				ด้วยคุณวุฒิและความเชี่ยวชาญของทีมงานของเรา เราพร้อมยินดีให้คำปรึกษาทางกฎหมายแก่ท่าน
				เพื่อให้ท่านดำเนินการได้อย่างมั่นใจได้ว่าจะเป็นไปโดยถูกต้องตามระเบียบ กฎหมาย และข้อบังคับที่เกี่ยวข้อง
			`,
			copyright: {
				img_name: 'Dublino, Irlanda',
				creator: 'Giammarco Boscaro',
				url: 'https://unsplash.com/photos/zeH-ljawHtg'
			}
		}
	];
</script>

<!-- Skelton components -->
<Toast />
<XPro />
<Apollo />
<BlueNight />
<!-- /Skelton components -->

<div class="
	container h-full w-full
	mx-auto max-w-none
	flex flex-col flex-nowrap justify-center items-start
	relative
">
	<div class="
		space-y-10 h-max w-screen m-0 px-0 max-w-none flex-none
		min-h-screen
		lg:min-h-[90vh]
		items-center text-center place-content-center
		grid grid-cols-1 lg:grid-cols-2 gap-1 lg:grid-rows-1
		accent-section-bg
	">
		<div class="
			hero-image
			w-full h-full
			bg-cover bg-scroll
			place-self-stretch self-stretch
			absolute -z-1 opacity-30 bg-center
			lg:relative lg:z-0 lg:opacity-100 lg:bg-left-top
		" style="filter: url({heroImgFilter}); background-image: url({ladyJustice});">
			<button class="
				chip variant-filled
				static bottom-1 left-1 hidden
				lg:absolute lg:left-2 lg:block
			" on:click={onLickLadyJustice}>
				<span>📃</span>
				<span>Credit</span>
			</button>
		</div>
		<div class="hero-text grid grid-cols-1 place-self-center">
			<h1 class="
				h1 font-head font-bold z-10
				gradient-heading drop-shadow-xl mix-blend-multiply
				text-5xl text-center
				lg:text-8xl lg:text-left
			">Eric<br />Legal &<br>Consultant</h1>
			<div class="flex justify-left space-y-2 my-5 z-10">
				<h2 class="text-xl lg:text-2xl text-indigo-800 dark:text-sky-200">The consultant you can trust</h2>
			</div>
		</div>
	</div>
	<div class="
		space-y-10 min-h-[50vh] mt-20 w-full
		flex flex-col
		items-center text-center justify-center justify-items-center
	">
		<div class="
			flex flex-col text-center m-10 mb-20
			w-[90%]
			lg:w-2/3
		">
			<h2 class="
				text-primary-500 tracking-widest font-medium title-font mb-1
				text-lg
				lg:text-base
			">พร้อมทำเต็มที่เต็มความสามารถ</h2>
			<h1 class="
				leading-loose font-medium title-font my-4
				text-secondary-900 dark:text-secondary-50
				text-3xl
				md:text-4xl
				lg:text-5xl
			">ที่ปรึกษาที่คุณวางใจได้</h1>
			<p class="
				mx-auto leading-relaxed
				text-base
				md:text-2xl
				lg:text-xl
			">
				ด้วยประสบการณ์การทำงานในวงการการพัฒนาโปรแกรมคอมพิวเตอร์กว่า 6 ปี
				และความรู้ความสามารถด้านกฎหมายโดยเฉพาะกฎหมายพาณิชย์อิเล็กทรอนิกส์
				ผมขอให้ท่านมั่นใจได้ว่าจะได้รับคำปรึกษาที่ท่านปราถนาตอบโจทย์ความต้องการ
			</p>
		</div>
	</div>
	<div class="
		h-auto my-10 px-10 grid
		grid-cols-1 gap-0
		lg:grid-cols-4 lg:gap-8
		items-center text-center justify-center justify-items-center
		accent-section-bg
	">
		<div class="
			flex w-full col-span-1 place-self-center place-content-center items-center gap-6
			border-solid border-spacing-2 border-secondary-900 dark:border-secondary-50
			h-auto my-0 pr-0 border-r-0 border-b-2
			lg:h-5/6 lg:my-10 lg:pr-10 lg:border-r-2 lg:border-b-0
		">
			<h1 class="
				w-full
				text-3xl text-center
				lg:text-5xl lg:text-right
				leading-loose font-medium title-font my-4
				text-secondary-900 dark:text-secondary-50
			">บริการ</h1>
		</div>
		<div class="
			grid gap-6 text-justify my-10 mb-15
			col-span-1 grid-cols-1
			md:col-span-1 md:grid-cols-2
			lg:col-span-3 lg:grid-cols-3
		">
			{#each services as svc}
			<a class="card card-hover overflow-hidden col-4 h-max pb-10 bg-secondary-50 dark:bg-blue-800" href="/consult">
				<header>
					<img
						src="{svc.image}"
						class="bg-black/50 w-full"
						alt="{svc.alt}"
						style="filter: url({svcImgFilter})"
					/>
				</header>
				<div class="p-4 space-y-4 px-5">
					<h3 class="h3 font-head">{svc.topic}</h3>
					<article class="font-content font-normal">
						<p>{svc.desc}</p>
					</article>
				</div>
				<!-- <hr class="opacity-50" />
				<footer class="p-4 flex justify-start items-center space-x-4">
					<div class="flex-auto flex justify-between items-center">
						<h6 class="font-bold">By Alex</h6>
					</div>
				</footer> -->
			</a>
			{/each}
		</div>
	</div>
	<div class="
		space-y-10 min-h-[50vh] mt-20 w-full grid
		grid-cols-1 gap-0
		lg:grid-cols-6 lg:gap-4
		items-center text-center justify-center justify-items-center
	">
		<div class="
			text-center m-10 mb-20
			col-start-1 col-span-1
			lg:col-start-2 lg:col-span-4
		">
			<blockquote class="
				blockquote
				text-3xl lg:text-5xl/relaxed
				font-medium title-font font-head not-italic
				text-secondary-900 dark:text-secondary-50
			">
				เพราะคุณคือคนสำคัญของเรา <br/>
				ให้เราเป็นที่ปรึกษาที่คุณวางใจ
			</blockquote>
		</div>
	</div>
</div>

<style lang="postcss">
	.accent-section-bg {
		@apply bg-white/60 dark:bg-white/10 backdrop-blur-lg bg-origin-border
	}
	@screen lg {
		.hero-image {
			clip-path: polygon(0 0, 75% 0, 100% 100%, 0% 100%);
		}
	}
	.gradient-heading {
		@apply bg-clip-text text-transparent box-decoration-clone;
		/* Direction */
		@apply bg-gradient-to-br;
		/* Color Stops */
		@apply from-indigo-800 via-sky-600 to-blue-500;
		@apply dark:from-indigo-50 dark:via-sky-500 dark:to-blue-500;
		@apply shadow-green-700;
	}
</style>
