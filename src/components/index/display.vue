<template>
	<div>

	
		计数器 {{ $store.state.countModule.count }} {{evenOrOdd}}

	</div>
</template>
<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		name:"display",

		
		computed: mapGetters([

	      'evenOrOdd'
	    ]),
	}
</script>