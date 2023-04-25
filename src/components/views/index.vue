<template>
	<div>
	
	<teleport>

	</teleport>
	
		<div class="wrap" id="wrap">

      <div class="body">
          <TheHeader />
	      <div class="mainWrapper">
	        <TheMain/>
		    </div>
	     
      </div>
			<!-- 전체화면 modal component -->
    
    </div>
	</div>
</template>

<script>
import TheHeader from "@/components/common/layouts/TheHeader.vue";
import TheSideBar from "@/components/common/layouts/TheSideBar.vue"
import TheMain from "@/components/common/layouts/TheMain.vue";
export default {
	components:{TheHeader,TheSideBar,TheMain},
	name: "index"
}
</script>

<style scoped>

.mainWrapper{
	display: flex;
	gap: 30px;
	justify-content: space-between;
	margin: 0 30px;
}
</style>