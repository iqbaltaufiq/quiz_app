<template>
  <div id="root">
    <p class="d-inline">Question: {{ this.index + 1 }}/{{ this.numOfQuestions }}</p>
  </div>
</template>
<script>
export default {
  name: 'headerBox',
  props: ['numCorrect', 'numTotal']
}
</script>
