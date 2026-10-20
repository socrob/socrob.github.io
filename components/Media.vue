<template>
    <section class="media section" id="media">
        <h2 class="section__title">Media</h2>
        <span class="section__subtitle">
            <v-icon class="media_icon" aria-hidden="true">mdi-youtube</v-icon>
        </span>

        <div class="media__container container">
            <p class="media__intro">
                See SocRob@Home in action through our qualification video
                and collaborative robotics demonstration.
            </p>

            <div class="media__grid">
                <article v-for="video in videos" :key="video.embedUrl" class="media-card">
                    <div class="media-card__player">
                        <iframe
                            :src="video.embedUrl"
                            :title="video.title"
                            loading="lazy"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div class="media-card__body">
                        <span class="media-card__label">{{ video.label }}</span>
                        <h3>{{ video.title }}</h3>
                        <p>{{ video.description }}</p>
                        <a :href="video.watchUrl" target="_blank" rel="noopener noreferrer"
                            :aria-label="`Watch ${video.title} on YouTube`">
                            Watch on YouTube
                            <v-icon aria-hidden="true">mdi-open-in-new</v-icon>
                        </a>
                    </div>
                </article>
            </div>

            <div class="media__channel">
                <p>More performances, research, and team videos on our YouTube channel.</p>
                <a href="https://www.youtube.com/@socrob_home" target="_blank" rel="noopener noreferrer">
                    <v-icon aria-hidden="true">mdi-youtube</v-icon>
                    Visit our channel
                    <v-icon aria-hidden="true">mdi-arrow-right</v-icon>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const videos = [
    {
        title: 'RoboCup 2027 qualification video',
        label: 'RoboCup · 2027',
        description: 'Our qualification video for RoboCup 2027, presenting SocRob@Home and our robot in action.',
        embedUrl: 'https://www.youtube.com/embed/yzsoa-J12Ks?si=DrmfMPxD0FqV7bos',
        watchUrl: 'https://www.youtube.com/watch?v=yzsoa-J12Ks',
    },
    {
        title: 'euROBIN Parliament Joint Demo',
        label: 'euROBIN · Joint demonstration',
        description: 'Watch our participation in the euROBIN Parliament joint robotics demonstration.',
        embedUrl: 'https://www.youtube.com/embed/LpT9lbQYOMc?si=i9NGIMqDompeWUUJ',
        watchUrl: 'https://www.youtube.com/watch?v=LpT9lbQYOMc',
    },
]
</script>

<style scoped lang="scss" src="@/assets/media.scss"></style>
