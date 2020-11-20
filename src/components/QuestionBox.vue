<template>
  <div id="root">
    <div class="stats">
      <p class="d-inline">Question: {{ this.index + 1 }}/{{ this.numOfQuestions }}</p> |
      <p class="d-inline">Score: {{ score }}</p>
    </div>
    <div class="kotak">
      <h3> {{ this.question.question }} </h3>
      <hr>
      <div class="answer-box">
        <h6
        v-for="(el,id) in choices"
        :key="id"
        @click="answer(el, id)"
        :class="answerClass(id)"
        >
          {{ el }}
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'questionBox',
  props: {
    question: Object,
    index: Number,
    numOfQuestions: Number,
    hasAnswered: Function,
    getScore: Function
  },
  data () {
    return {
      score: 0,
      choices: [],
      isAnswered: false,
      chosenIndex: null,
      correctIndex: null
    }
  },
  methods: {
    shuffleAnswers () {
      // shuffle the choice answers from each questions (lodash required)
      const choices = [...this.question.incorrect, this.question.correct]
      this.choices = _.shuffle(choices)

      // get the index of the correct answer to be checked later
      this.correctIndex = this.choices.indexOf(this.question.correct)
      return choices
    },
    answer (answer, index) {
      /**
       * method to check the answer chosen by user
       * if the user's answer matched the correct answer
       * then increment the score and set the answered status
       */
      if (answer === this.question.correct && !this.isAnswered) {
        this.score += 10
        this.getScore(this.score)
      }
      this.isAnswered = true
      this.hasAnswered(this.isAnswered)
      this.chosenIndex = index
    },
    answerClass (index) {
      /**
       * set the class for the answer-box.
       * green background for correct answer,
       * red background for wrong answer
       */
      let answerClass = ''
      if (this.isAnswered && this.correctIndex === index) answerClass = 'correct'
      else if (this.isAnswered && this.chosenIndex === index && this.correctIndex !== index) answerClass = 'incorrect'
      return answerClass
    }
  },
  watch: {
    question: {
      immediate: true,
      handler () {
        // reset the state whenever the question changes
        this.chosenIndex = null
        this.isAnswered = false
        this.hasAnswered(this.isAnswered)
        this.shuffleAnswers()
      }
    }
  }
}
</script>

<style scoped>
.kotak {
  padding: 20px;
  border: 1px solid #dedede;
  border-radius: 10px;
}
.answer-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}
.answer-box h6 {
  padding: 15px 10px;
  border: 1px solid slateblue;
  border-radius: 5px;
  cursor: pointer;
}
.answer-box h6:hover {
  background: slateblue;
  color: white;
}

.correct { background-color: green; color: white; }
.incorrect { background-color: brown; color: white; }
</style>
