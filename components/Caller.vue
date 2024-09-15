<template>
  <div class="position-absolute px-0">
    <div>
      <NuxtLink
        :to="{}"
        title="Scan Image"
        class="float d-block"
        @click="$emit('trigger')"
      >
        <BIcon
          icon="fa-solid:plus"
          class="btn-add"
        />
      </NuxtLink>
    </div>
  </div>
</template>
  
<style scoped>
.position-absolute {
  bottom: 2rem;
  right: 2.5rem;
}

.float {
  /* position: relative; */
  width: 60px;
  height: 60px;
  bottom: 40px;
  right: 40px;
  background-color: #0c9;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
  z-index: 1000;
  animation: bot-to-top 2s ease-out;
}

.btn-add {
  font-size: 2rem;
  margin-top: 0.9rem;
}
</style>
  