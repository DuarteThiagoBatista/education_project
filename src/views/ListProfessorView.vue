<template>
    <div class="scheduling">
		<!-- <Schedule/>		 -->
		<ProfessorComponent/>		
    </div>
</template>

<script>
import Schedule from '../components/Schedule/StudentScheduleComponent.vue'
import ProfessorComponent from '../components/ProfessorComponent.vue'


export default {
    components: {
        Schedule,
		ProfessorComponent,
    }
}
</script>

<style scoped>
 .scheduling {
	padding: 75px;
 }
</style>