<template>
 <div class="card_wrapper" v-text="test">
	
 </div>
</template>

<script>
export default {
	props:['test'],
	setup({test}) {
		
		console.log('gg')
		return {
			test
		}
	}
}
</script>

<style lang = "scss" scoped>

</style>