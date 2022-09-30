import { writable, readable, derived } from "svelte/store";

export const num1 = writable(0, set =>{ set(10); console.log("num1 subscribed reset to 10")});

// export const num2 = readable(0,set=>{
//                                         let temp = 0;
//                                         set(temp);
//                                         const interval = setInterval(()=>{ set(temp++); },1000);
//                                         return function stop(){clearInterval(interval)};
//                                     });
export const num2 = readable(0, set=>{ 
                                            let temp = 0;
                                            set(temp);
                                            const interval = setInterval(()=>{set(temp++)},1000);
                                            return ()=>{ clearInterval(interval) };
                                        });

export const num3 = derived([num1,num2],([$num1,$num2])=>{return ($num1 * $num2);},0);



export const customStore = ()=>{
    const { subscribe, set, update } = writable(0);
    return{
        subscribe,
        increment: ()=>{update(n=>n+1)},
        reset: ()=>set(0)
    };
}