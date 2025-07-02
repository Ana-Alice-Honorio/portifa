<template>
  <v-container class="hero-container">
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <div class="hero-text">
          <h1>{{ $t('hero.title') }}</h1>
          <p v-html="$t('hero.text')"></p>
          <p v-html="$t('hero.texttwo')"></p>
        </div>
      </v-col>

      <v-col cols="12" md="6" class="d-flex justify-center">
        <div class="gif-frame">
          <img src="/images/study.gif" alt="GIF animado" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.hero-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-text {
  text-align: left;
  max-width: 500px;
  font-family:
    'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana,
    sans-serif;
  justify-content: space-between;
  flex-direction: column;
  display: flex;
  gap: 5px;
}

.gif-frame {
  border: 8px solid #3f51b5;
  border-radius: 16px;
  padding: 8px;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.gif-frame img {
  max-width: 100%;
  border-radius: 8px;
}
</style>
