<template>
    <div class="home">
        <Welcome class="welcome"/>
        <FindTeacher class="find-teacher"/>
				<BecomeTeacher class="become-teacher"/>
    </div>
</template>

<script>
import Welcome from '../components/WelcomeComponent.vue'
import FindTeacher from '../components/FindTeacher.vue'
import BecomeTeacher from '../components/BecomeTeacher.vue'

export default {
    components: {
        Welcome,
				FindTeacher,
				BecomeTeacher,
    }
}
</script>

<style scoped>
  .home{
		padding: 10px;
  }
	.welcome {
		height: 350px;
	}
	.find-teacher {
		height: 400px;
		margin-bottom: 50px;
	}
	.become-teacher {
		margin-bottom: 50px;
		min-height: 350px;
	}
</style>