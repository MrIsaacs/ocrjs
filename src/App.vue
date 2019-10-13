<template>
  <div id="vue-app">
    <TestPictureInput />
  </div>
</template>

<script>
import TestPictureInput from "./components/PictureInput.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
    components: {
        TestPictureInput
    }
})
class VueApp extends Vue {};

export default VueApp;
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
