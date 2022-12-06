import {defineStore} from 'pinia'

export const scheduleStore = defineStore('schedule', {
	state: () => {
		return {
			scheduleData: {
				date: '',
				time: '',
				urgency: true,
				text: ''
			}
		}
	}

})