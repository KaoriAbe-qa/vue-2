//AppコンポーネントからClockコンポーネントの大きさを指定するためclassを付けてある
<template>
  <div>
    <Clock class="clock"/>
  </div>
</template>

//AppコンポーネントにimportでClockコンポーネントを読み込み、componentsに登録して使用出来るように
<script>
import Clock from "@/components/Clock"

export default {
  components: {
    Clock,
  },
}
</script>

//styleにscopedを付けないと全体に適用される
<style scoped>
.clock {
  width: 80%;
  max-width: 500px;
  margin: 30px auto;
}
</style>
 
<style>
html {
  font-size: 62.5%;
} 
 
body {
  margin: 0;
}
 
p {
  margin: 0;
}
</style>
