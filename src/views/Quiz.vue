<template>
  <div id="root">
    <b-container>
     <b-row>
       <b-col sm="8" offset-sm="2">
         <div id="quiz" v-if="!finished">
          <QuestionBox
          :index="index"
          :question="questions[index]"
          :numOfQuestions="questions.length"
          :hasAnswered="answered"
          :getScore="getScore"
          />

          <button
          class="btn btn-success btn-block mt-1"
          v-if="isAnswered && index < questions.length - 1"
          @click.prevent="next()"
          >Berikutnya &rightarrow;</button>
         </div>
         <button
         class="btn btn-success btn-block mt-1"
         v-if="index == questions.length - 1 && !finished"
         @click.prevent="finishedBtn"
         >Selesai &rightarrow;</button>

         <div id="result" class="result" v-if="finished">
            <h1>Selesai</h1>
            <hr>
            <h3>Skor Anda</h3>
            <p class="score">{{ score }}</p>
            <router-link
            class="btn btn-outline-primary"
            to="/"
            >&laquo; Kembali ke Beranda</router-link>
            <button
            type="button"
            class="btn btn-success ml-1"
            @click.prevent="resetData"
            >Coba lagi &#8634;</button>
         </div>
       </b-col>
     </b-row>
    </b-container>
  </div>
</template>
<script>
import QuestionBox from '@/components/QuestionBox.vue'
import questions from '@/data/question'
export default {
  name: 'quiz',
  components: {
    QuestionBox
  },
  data () {
    return {
      questions,
      index: 0,
      numOfCorrect: 0,
      isAnswered: false,
      finished: false,
      score: null
    }
  },
  methods: {
    next () {
      // increment the question index to go forward to the next question
      this.index++

      // if index has reached the last index, then set the index to the last
      if (this.index >= this.questions.length) {
        this.index = this.questions.length - 1
      }
    },
    answered (ans) {
      /**
       * set the answered status for each questions
       * if the user has chosen an answer,
       * then set the answered status to true
       */
      this.isAnswered = ans ? 1 : 0
    },
    getScore (score) {
      // get the total score
      this.score = score
      return this.score
    },
    finishedBtn () {
      /**
       * when user has reached the last question, a finish button will appear.
       * when user click the finish button, then set the finish status to true
       */
      this.finished = true
    },
    resetData () {
      /**
       * if user has completed the quiz and they choose to 'PLAY AGAIN',
       * then reset all the state
       */
      this.index = 0
      this.numOfCorrect = 0
      this.isAnswered = false
      this.finished = false
      this.score = null
    }
  }
}
</script>
<style scoped>
.result {
  padding: 25px;
  border: 1px solid #eee;
  border-radius: 10px;
}
.score {
  font-weight: bold;
  font-size: 6em;
}
</style>
