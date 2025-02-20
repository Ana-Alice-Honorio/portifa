<template>
  <section id="about">
    <v-card class="mx-auto" max-width="400">
      <v-img
        color="surface-variant"
        height="200"
        src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExczlxbTBzOHJsZDByODRyYmVua3F6bmR6MXoyYm9jZjF1ZjI3dWRmdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kBa3lyXcK5pcOJDUkW/giphy.gif"
        cover
      >
        <v-toolbar color="transparent">
          <v-toolbar-title class="text-h6"></v-toolbar-title>
        </v-toolbar>
      </v-img>

      <v-card-text>
        <div class="font-weight-bold ms-1 mb-2">Today</div>

        <v-timeline align="start" density="compact">
          <v-timeline-item
            v-for="message in messages"
            :key="message.time"
            :dot-color="message.color"
            size="x-small"
          >
            <div class="mb-4">
              <div class="font-weight-normal">
                <strong>{{ message.from }}</strong> @{{ message.time }}
              </div>

              <div>{{ message.message }}</div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </section>
</template>

<script lang="ts">
export default {
  data: () => ({
    messages: [
      {
        from: 'You',
        message: `Sure, I'll see you later.`,
        time: '10:42am',
        color: 'deep-purple-lighten-1',
      },
      {
        from: 'John Doe',
        message: 'Yeah, sure. Does 1:00pm work?',
        time: '10:37am',
        color: 'green',
      },
      {
        from: 'You',
        message: 'Did you still want to grab lunch today?',
        time: '9:47am',
        color: 'deep-purple-lighten-1',
      },
    ],
  }),
}
</script>

<style scoped>
#about {
  background-color: #f8ecd4;
}
</style>
