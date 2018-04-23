<template>
	 <div>

    <button v-on:click="increment">+</button>

  </div>
</template>
<script>
	 import { mapGetters, mapActions } from 'vuex'
	  export default {
	    name: 'count',
		
	    computed: mapGetters([
	      'evenOrOdd'
	    ]),
			
	    methods: {
				countPlus(){
					this.countResult++;
				},
				increment(obj){
					this.$store.dispatch('increment',obj);
				}
			// 	...mapActions([
	    //   'increment',
	    //   'decrement',
	    //   'incrementIfOdd',
	    //   'incrementAsync'
	    // ])
			
			}
	  };
</script>