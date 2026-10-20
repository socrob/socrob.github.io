<template>
    <section class="about section" id="about">
        <h2 class="section__title">About the Team</h2>
        <span class="section__subtitle">
            <v-icon class="about_icon" aria-hidden="true">mdi-account-outline</v-icon>
        </span>

        <div class="about__container container">
            <div class="about__overview">
                <div class="about__gallery">
                    <v-carousel
                        height="auto"
                        show-arrows
                        hide-delimiter-background
                        color="white"
                        class="about__carousel"
                        aria-label="SocRob@Home photo gallery"
                    >
                        <v-carousel-item v-for="image in images" :key="image.src">
                            <img :src="image.src" :alt="image.alt" class="about__img" loading="lazy" />
                        </v-carousel-item>
                    </v-carousel>
                </div>

                <div class="about__introduction">
                    <span class="about__eyebrow">SocRob@Home · Lisbon</span>
                    <h3>Building robots for everyday life</h3>
                    <p>
                        We bring together research in autonomous robots and human–robot
                        interaction to explore how robots can understand, assist, and
                        interact with people in everyday environments.
                    </p>
                    <p>
                        Our team grew out of the Intelligent Robots and Systems research
                        group at the
                        <a href="https://welcome.isr.tecnico.ulisboa.pt/" target="_blank" rel="noreferrer">
                            Institute for Systems and Robotics
                        </a>.
                        We build on that research through service robotics and scientific competitions.
                    </p>
                    <a class="about__action" href="#competitions">
                        Explore our competitions
                        <v-icon aria-hidden="true">mdi-arrow-right</v-icon>
                    </a>
                </div>
            </div>

            <div class="about__research" aria-labelledby="about-research-title">
                <div class="about__heading">
                    <h3 id="about-research-title">What we work on</h3>
                    <p>Four connected areas of service robotics.</p>
                </div>
                <div class="about__cards">
                    <article v-for="area in researchAreas" :key="area.title" class="about-card">
                        <v-icon class="about-card__icon" aria-hidden="true">{{ area.icon }}</v-icon>
                        <h4>{{ area.title }}</h4>
                        <p>{{ area.description }}</p>
                    </article>
                </div>
            </div>

            <div class="about__story" aria-labelledby="about-story-title">
                <div class="about__heading">
                    <h3 id="about-story-title">Research roots, real-world challenges</h3>
                    <p>The projects that helped shape SocRob@Home.</p>
                </div>
                <div class="about__projects">
                    <div class="about__project">
                        <h4>MOnarCH</h4>
                        <p>
                            The group’s work on human–robot interaction and social behaviour
                            included MOnarCH, an EU-funded project developing autonomous robots
                            to engage and entertain children undergoing cancer treatment at
                            the Instituto Português de Oncologia Francisco Gentil in Lisbon (IPO).
                        </p>
                    </div>
                    <div class="about__project">
                        <h4>RoCKIn <span>2013–2015</span></h4>
                        <p>
                            RoCKIn used competitions to evaluate robotics through benchmarks
                            in domestic and work environments. Building on these projects,
                            we formed SocRob@Home to take on new research challenges through
                            scientific competitions.
                        </p>
                    </div>
                </div>
                <a
                    class="about__action"
                    href="https://irsgroup.isr.tecnico.ulisboa.pt/projects/socrob-home/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Visit our project archive
                    <v-icon aria-hidden="true">mdi-open-in-new</v-icon>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const images = Array.from({ length: 11 }, (_, index) => ({
    src: `/about/${11 - index}.jpeg`,
    alt: `SocRob@Home team activities — gallery photo ${index + 1} of 11`,
}))

const researchAreas = [
    {
        title: 'Perception & sensor fusion',
        description: 'Combining sensory information to help robots understand their surroundings.',
        icon: 'mdi-eye-outline',
    },
    {
        title: 'Decision-making under uncertainty',
        description: 'Choosing how to act when information about the world is incomplete.',
        icon: 'mdi-routes',
    },
    {
        title: 'Human–robot interaction',
        description: 'Exploring how robots can communicate and engage with people.',
        icon: 'mdi-account-group-outline',
    },
    {
        title: 'Manipulation & grasping',
        description: 'Enabling robots to handle objects and interact with their environment.',
        icon: 'mdi-robot-industrial-outline',
    },
]
</script>

<style scoped lang="scss" src="@/assets/about.scss"></style>
