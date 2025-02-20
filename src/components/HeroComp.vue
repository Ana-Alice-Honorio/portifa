<template>
  <v-container class="hero-container">
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <div class="hero-text">
          <h1>{{ $t('hero.title') }}</h1>
          <p>{{ $t('hero.subtitle') }}</p>
          <v-btn
            color="rgb(134, 101, 186)"
            variant="flat"
            :href="'/docs/Ana.Alice.Honorio-Frontend.pdf'"
            target="_blank"
            download
            class="btn"
          >
            <v-icon left>mdi-download</v-icon>
            {{ $t('hero.curriculum') }}
          </v-btn>
        </div>
      </v-col>

      <v-col cols="12" md="6" class="d-flex justify-center">
        <div class="gif-frame">
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHBxa3VqNmNqYmpsMzhoYnBpZG1iNm85d3dobnYzNmU4emw2ZDgydyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6XX4V0O8a0xdS/giphy.gif"
            alt="GIF animado"
          />
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

.btn {
  text-transform: capitalize;
  font-family: 'Capriola', sans-serif;
  max-width: 200px;
  background-color: bg-indigo-lighten-1;
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
