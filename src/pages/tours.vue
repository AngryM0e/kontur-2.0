<template>
	<div>
		<h1>Tours</h1>
		<ul>
			<li v-for="tour in tours" :key="tour.id">
				{{ tour.name }} - ${{ tour.price }}
			</li>
		</ul>
	</div>
</template>

<script>
	import { useTourStore } from '@/stores/tours';

	export default {
		setup() {
			const tourStore = useTourStore()
			tourStore.fetchTours()

			return {
				tours: tourStore.tours
			}
		}
	}
</script>