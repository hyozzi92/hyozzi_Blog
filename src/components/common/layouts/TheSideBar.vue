<template xmlns = "http://www.w3.org/1999/html">
<div class="leftSideBar">
	<div>
		<label  class="imgWrapper" for="file">
      <div class="btn-upload" v-if="!meta.imgPreview">파일 업로드하기</div>
			<img v-else :src="meta.imgPreview" />
			</label>
			<input @change="upload"  type="file" name="file" id="file" style="display: none"/>
	
	</div>
	
	<div class="">
		<div class="accordion-elements" v-for="(item,index) in Category" :key="index">
			<div class="accordion-title">
			<h5>{{item.letter}}</h5>
			<button @click="toggleHandler(index)"><i :class="`fa-solid fa-angle-${meta.toggleStatus[index] === true ? 'down' : 'up'}`"></i></button>
			</div>
			<div class="accordion-body">
				<span v-if="meta.toggleStatus[index] === true" v-for="(value,index) in Category_Detail[item.value]">
					<ul>
						<li @click="">
							<a>{{value.letter}}</a>
						</li>
					</ul>
				</span>
			</div>
		</div>
		
	</div>
</div>
</template>

<script>
import ConstCode from "@/common/constants/ConstCode";

import {getCurrentInstance, ref} from "vue";
export default {
	components:{ConstCode},
	name: "TheSideBar",
	setup(props){
		const { Category,Category_Detail } = ConstCode
		const {proxy} = getCurrentInstance()
		const meta = ref({
			toggleStatus : [false,false,false,false],
			imgData : '',
			imgPreview:'',
		})
		
		
		const toggleHandler = (e,item) =>{
			if(meta.value.toggleStatus[e] === false) {
				meta.value.toggleStatus[e] = true;
			} else {
				meta.value.toggleStatus[e] = false
			}
		}
		
		const upload = (e) =>{
			if(!e.target.files[0]) return
			const rawFile = e.target.files[0]
			meta.value.imgData = rawFile
			const fileReader = new FileReader()
			fileReader.onload = (e) => {
				meta.value.imgPreview = e.target.result
			}
			fileReader.readAsDataURL(rawFile)
		}
		return{
			meta,
			Category,
			Category_Detail,
			toggleHandler,
			upload
	}
	
	
	}
}
</script>


<style scoped>
.leftSideBar{
	display: flex;
	flex-direction: column;
	width: 250px;
	height: 100%;
}
.imgWrapper{
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 80px auto;
	border: 1px solid black;
	border-radius: 50%;
	height: 250px;
}


.accordion-elements{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin: 10px auto;
	width: 200px;
}
.accordion-title{
	display: flex;
	justify-content: space-between;
	width: 100%;
}
.accordion-body{
	width: 100%;
	padding: 0;
}
ul {
	list-style-type: none;
	background-color: white;
	width: 100%;
	padding: 0;
	margin: 0;
}
li a {
	text-decoration: none;
	display: block;
	color: #000;
	padding: 8px 15px 8px 15px;
	font-weight: bold;
	border-bottom: 1px solid #fff;
}
li a:hover {
	background-color: tomato;
	color: #fff;
}


</style>