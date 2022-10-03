<script lang="ts">
	import { num1, num2, num3 } from '../../store/store.ts';
	import { onDestroy } from 'svelte';
	// let countValue:number;
	// const unsubscribe =  num1.subscribe((val)=>{
	//     countValue = val;
	// });

	// num1.update( n => n + 100 );

	// onDestroy(unsubscribe);
	// $num2 = 100;
</script>

<h1>num1: {$num1}</h1>
<!-- <h1>num2: {$num2}</h1>
<h1>num3: {$num3}</h1> -->
