<template>
  <div id="root">
    <b-container>
      <b-row>
        <b-col>
          <div class="box">
            <div class="textBox neon">
              <h1>INDOQUIZ</h1>
              <hr class="border-white" width="15%">
              <p>Selamat datang di Indoquiz!
                <br>Indoquiz terdiri dari sepuluh pertanyaan umum nan random untuk menguji kerandomanmu.
                <br>Dapatkan hadiah menarik jika berhasil mendapatkan nilai sempurna.
                <br>Selamat bermain!
              </p>
              <router-link class="btn btn-info" to="/quiz">&raquo; Mulai Kuis &laquo;</router-link>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: 'Welcome'
}
</script>
<style scoped>
.box {
  background-image: url('..\\assets\\image.jpg');
  background-position: center;
  background-size: cover;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(20, 20, 20, 0.5);
}
.textBox {
  border: 16px double darkturquoise;
  border-radius: 10px;
  background: rgba(20, 20, 20, 0.5);
  padding: 50px 20px;
  color: #eee;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transition: 0.5s ease;
}
.textBox:hover {
  background: rgba(20, 20, 20, 0.7);
}
.neon {
  animation: neon 2s linear 0s infinite;
}
@keyframes neon {
  0% {
    border-color: cyan;
  }
  50% {
    border-color: teal;
  }
  100% {
    border-color: cyan;
  }

}
</style>
