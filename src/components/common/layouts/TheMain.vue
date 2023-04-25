<template>
	<div class="main-wrapper" >
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
				<div v-if="meta.toggleStatus[index] === true" :key="index" v-for="(value,index) in Category_Detail[item.value]">
					<div class="detail-wrapper">
						<button class="detail-btn" @click="selectCategory" :value="value.letter" >{{value.letter}}</button>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</div>
	<div class="category-wrapper">
		<div class="header-wrapper">
			<h3 >{{meta.categoryHeader}}</h3>
			<div @click="showModal" type="button">등록하기</div>
		</div>
		<div class="card_wrapper" v-for="(item,index) in form[meta.categoryHeader]" >
			<div class="card-in-header">
				<h5>{{item.header}}</h5>
			</div>
			<div class="card-in-image" > {{item.content}}.</div>
			<div class="card-in-description"> {{item.regDate}} </div>
		</div>
 </div>
	<!--	<TheContentType/>-->
<!--		<TheCard v-for="(item,index) in array" :test="item.key" />-->
	<modal class="modal-wrapper" :meta="meta" v-show="meta.isModalOpen" @close="closeClick"></modal>
	</div>
</template>

<script>
import {getCurrentInstance, ref} from "vue";
import ConstCode from "@/common/constants/ConstCode";
import Modal from "@/components/modal/modal.vue";

export default {
	name: "TheMain",
	components: {Modal},
	setup(){
		const { proxy } = getCurrentInstance()
		const { Category,Category_Detail } = ConstCode
		const meta = ref({
			toggleStatus : [false,false,false,false],
			imgData : '',
			imgPreview:'',
			categoryHeader: '',
			categoryContent:'',
			isModalOpen:false
		})
		const form = ref({
			javascript : {
				id : '',
				header : '',
				content : '',
				regDate : '',
			}
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
		const data = async () =>{
			const res = await proxy.$JavascriptSvc.getJavascriptList()
			form.value = res.entity
			console.log("form",form.value)
		}
		
		const closeClick = () => {
			meta.value.isModalOpen = false
		}
		
		const selectCategory = (e) =>{
			meta.value.categoryHeader = e.target.value
			console.log("meta.header",meta.value.categoryHeader)
		}
		data()
		
		const showModal = () => {
			meta.value.isModalOpen = true
			console.log("meta.value.isModalOpen",meta.value.isModalOpen)
		}
		return{
			meta,
			form,
			Category,
			Category_Detail,
			toggleHandler,
			upload,
			selectCategory,
			showModal,
			closeClick
			// array,
			// minus,
			// plus,
			// change
		
		}
	}
	
}
</script>

<style scoped>
.main-wrapper {
	display: flex;
	justify-content: space-between;
	gap: 50px;
	width: 100%;
	flex-wrap: wrap ;
}
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
.detail-wrapper {
	list-style-type: none;
	background-color: white;
	width: 100%;
	padding: 0;
	margin: 0;
}
.detail-btn {
	text-decoration: none;
	display: block;
	color: #000;
	padding: 8px 15px 8px 15px;
	font-weight: bold;
	border-bottom: 1px solid #fff;
	
}
.detail-btn:hover {
	background-color: tomato;
	color: #fff;
}
.category-wrapper{
	display: flex;
	flex-wrap: wrap;
	gap: 50px;
	width: 1400px;
	height: 100%;
	margin-top: 60px;
}
.card_wrapper{
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 300px;
	height: 400px;
	border: 1px solid black;
	padding: 10px 0;
}
.card_wrapper:hover{
	
	transform: scale(1.05);
	transition: all 0.5s
}

.card-in-image {
	border: 1px solid black;
	width: 100%;
	height: 70%;
	margin-top: 20px;
}
.card-in-description {
	line-height: 60px;
}
.header-wrapper {
	display: flex;
	justify-content: space-between;
	width: 100%;
}
.modal-wrapper {
	position: fixed;
	top: 20%;
	left: 30%;
	background-color: white;
	z-index: 5;
	width: 60%;
	height: 75%;
}
</style>