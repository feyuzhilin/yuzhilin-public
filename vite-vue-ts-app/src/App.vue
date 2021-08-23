<template>
	<button @click="addCount">count is: {{ count }}</button>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { useStore } from 'vuex'
export default defineComponent({
	name: 'App',
	components: {
		HelloWorld
	},
	setup() {
		const store = useStore()
		return{
			count: computed(() => store.state.count)
		}
	}
})
</script>

<style></style>
