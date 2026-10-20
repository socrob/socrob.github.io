<template>
    <section class="news section" id="news">
        <h2 class="section__title">News</h2>
        <span class="section__subtitle">
            <v-icon class="news_icon" aria-hidden="true">mdi-newspaper-variant-outline</v-icon>
        </span>

        <div class="news__container container">
            <p class="news__intro">
                SocRob@Home in the news: interviews, documentaries, and stories
                about our research and competitions.
            </p>

            <ul class="news__grid" aria-label="News and media coverage">
                <li v-for="(item, index) in news" :key="item.link" class="news-card"
                    :class="{ 'news-card--featured': index === 0 }">
                    <article class="news-card__content">
                        <div class="news-card__meta">
                            <span class="news-card__type">
                                <v-icon aria-hidden="true">{{ typeIcons[item.type] || 'mdi-newspaper-variant-outline' }}</v-icon>
                                {{ item.type }}
                            </span>
                            <span class="news-card__source">{{ item.source }}</span>
                        </div>
                        <h3 class="news-card__title">{{ item.title }}</h3>
                        <a :href="item.link" target="_blank" rel="noopener noreferrer"
                            class="news-card__link" :aria-label="`View coverage: ${item.title}`">
                            View coverage
                            <v-icon aria-hidden="true">mdi-open-in-new</v-icon>
                        </a>
                    </article>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">
const typeIcons: Record<string, string> = {
    Interview: 'mdi-microphone-outline',
    Documentary: 'mdi-movie-open-outline',
    'Blog Post': 'mdi-text-box-outline',
    Media: 'mdi-television-play',
    Article: 'mdi-newspaper-variant-outline',
}

const news = [
      {
        title: 'Domestic Bob',
        type: 'Interview',
        source: 'Digital EU',
        link: 'https://www.youtube.com/watch?v=BaQrtOsDL7M',
      },
      {
        title: 'Existe, IA Pensa - Part II',
        type: 'Documentary',
        source: 'SIC',
        link: 'https://sicnoticias.pt/video/2024-04-04-Grande-Reportagem-SIC-Existe-IA-Pensa--Parte-II--365e8f51',
      },
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
    ]
</script>

<style scoped lang="scss" src="@/assets/news.scss"></style>
