<template>
  <div id="ocrjs">
    <PictureHandler />
  </div>
</template>

<script>
import PictureHandler from './components/PictureHandler';

export default {
    name: 'OCRjs',
    components: {
        PictureHandler,
    }
};
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
