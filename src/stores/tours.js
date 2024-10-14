import { defineStore } from 'pinia';

export const useTourStore = defineStore('tour', {
	state: () => ({
		tours: []
	}),
	actions: {
		async fetchTours() {
			this.tours = [
				{id:1, name: 'Tour to Paris', price: 1200},
				{id:2, name: 'Tour to Rome', price: 900}
			]
		}
	}
})