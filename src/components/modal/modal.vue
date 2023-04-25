<template>
 <div class="modal-in-wrapper">
	<div class="modal-in-header">
		<h5>제목입니다.</h5>
		<p @click="$emit('close')" style="font-size: 20px">x</p>
	</div>
	<div class="modal-in-content">
		<input type="image"/>
		<input class="input-text" type="text"/>
<!--		<input type="image"/>-->
<!--		<v-text>-->
<!--			컨텐트입니다.-->
<!--		</v-text>-->
	</div>
 </div>
</template>

<script>
import {onMounted} from "vue";

export default {
	emits:['close'],
	props:['meta'],
	setup(props) {
		onMounted(() => {
			console.log(props)
		})

		
		return {
			props
		
		}
	}
}
</script>

<style lang = "scss" scoped>
.modal-in-wrapper{
	display: flex;
	flex-direction: column;
	padding: 30px;
}
.modal-in-header{
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
}
.modal-in-content{
	display: flex;
	flex-direction: column;
	margin-top: 30px;
}

.input-text{
	height: 500px;
}
</style>