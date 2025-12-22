<template>
  <section class="news section" id="news">
    <h2 class="section__title">News</h2>
    <span class="section__subtitle">
      <v-icon class="news_icon">mdi-newspaper-variant-outline</v-icon>
    </span>

    <div class="news__container container">
      <v-carousel
        height="auto"
        hide-delimiters
        show-arrows
        class="news-carousel"
      >
        <!-- Custom Prev Button -->
        <template v-slot:prev="{ props }">
          <v-btn
            icon
            @click="props.onClick"
            class="carousel-button carousel-button--prev"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </template>

        <!-- Custom Next Button -->
        <template v-slot:next="{ props }">
          <v-btn
            icon
            @click="props.onClick"
            class="carousel-button carousel-button--next"
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </template>

        <!-- Loop through news items -->
        <v-carousel-item
          v-for="(item, index) in news"
          :key="index"
          class="news__content"
        >
          <div class="news__data">
            <h3 class="news__name">{{ item.title }}</h3>
            <p class="news__type">{{ item.type }}</p>

            <div class="news__info-author">
              <p class="news__author">Source</p>
              <p class="news__author-text">{{ item.source }}</p>
            </div>

            <v-btn
              :href="item.link"
              target="_blank"
              class="button2 button--flex2"
              variant="outlined"
              color="primary"
            >
              Read More
              <v-icon end>mdi-open-in-new</v-icon>
            </v-btn>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const news = ref([
      {
        title: 'AI-Driven Task & Motion Planning for Service Robots with Oracle Cloud Infrastructure',
        type: 'Blog Post',
        source: 'Oracle AI & Data Science Blog',
        link: 'https://blogs.oracle.com/ai-and-datascience/ai-driven-task-motion-planning-service-robots-with-oci',
      },
      {
        title: 'CNN Inovação: episódio dedicado ao Departamento de Engenharia Eletrotécnica e de Computadores (DEEC)',
        type: 'Media',
        source: 'CNN Portugal via DEEC Técnico',
        link: 'https://deec.tecnico.ulisboa.pt/noticias/deec-nos-media/cnn-inovacao-episodio-dedicado-ao-departamento-de-engenharia-eletrotecnica-e-de-computadores-deec',
      },
      {
        title: 'Técnico researchers participate in international competition showcasing the latest robotics innovations',
        type: 'Article',
        source: 'Técnico Lisboa/ISR',
        link: 'https://tecnico.ulisboa.pt/en/news/tecnico-researchers-participate-in-international-competition-showcasing-the-latest-robotics-innovations/',
      },
      {
        title: 'Técnico team reaches the podium once again at international robotics competition',
        type: 'Article',
        source: 'Técnico Lisboa/ISR',
        link: 'https://tecnico.ulisboa.pt/en/news/tecnico-team-reaches-the-podium-once-again-at-international-robotics-competition/',
      },
      {
        title: 'Técnico team wins 2nd place in international robotics competition',
        type: 'Article',
        source: 'Técnico Lisboa/ISR',
        link: 'https://tecnico.ulisboa.pt/en/news/tecnico-team-wins-2nd-place-in-international-robotics-competition/',
      },
    ]);

    return { news };
  },
});
</script>

<style scoped lang="scss" src="@/assets/news.scss"></style>
