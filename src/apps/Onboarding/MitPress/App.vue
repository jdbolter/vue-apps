<template>
  <div> 
  <div id="room" class="darkwall">
  <div class="spacer">
  <Title msg="Reality Media" />
  <br />
  <div style="float:left; margin-right:20px">
   <img xr-layer src="../../../assets/images/Onboarding/realityMediaBook.jpg" height="383">
   </div>

   <div class="squareoff"><div style="margin-left:30px">Published by <span xr-layer @click="linkClick" class="alink"><a href="https://mitpress.mit.edu/books/reality-media" target="_blank">MIT Press .</a></span></div>
  <br />

  <div class="oblique">By Jay David Bolter, Maria Engberg and Blair MacIntyre</div> 
  <br>
  <br>
  How augmented reality and virtual reality are taking their places in contemporary media culture alongside film and television.
</div>
  </div>
  </div>
  </div> 
</template>

<script setup>
import Title from '../../../components/CenterTitle.vue'

import "../../../assets/top.css"
import "../../../assets/room.css"
</script>

<style scoped>

</style>
