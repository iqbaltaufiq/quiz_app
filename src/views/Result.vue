<template>
  <div id="root">
    <b-container>
      <b-row>
        <b-col sm="8" offset-sm="2">
          <div class="result">
            <h1>Hasil</h1>
            <hr>
            <h3>Skor Anda</h3>
            <p class="score">100</p>
            <router-link class="btn btn-success" to="/quiz">Coba lagi</router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.result {
  padding: 25px;
  /* box-shadow: 0px 0px 3px rgba(100, 100, 100, 0.2); */
  border: 1px solid #eee;
  border-radius: 10px;
}
.score {
  font-weight: bold;
  font-size: 6em;
}
</style>
