<template>
  <div>
    页面二
  </div>
</template>

<script>
import { levelList } from "@/api/level";
export default {
 
  methods: {
   created() {
    levelList().then((res) => {
        console.log(res);
  })
   }
}
}
</script>