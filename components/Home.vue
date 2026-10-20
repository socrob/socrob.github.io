<template>
    <section class="home section" id="home">
        <div class="home__container container">
            <div class="home__content">
                <div class="home__data">
                    <span class="home__eyebrow">Service robotics · Lisbon, Portugal</span>
                    <h1 class="home__title">We are <span>SocRob@Home</span></h1>
                    <p class="home__subtitle">Advancing autonomous service robotics through research and competitions.</p>
                    <p class="home__description">
                        Based at the Institute for Systems and Robotics, we explore how
                        autonomous robots can work alongside people in everyday environments.
                    </p>
                    <div class="home__actions">
                        <a href="#about" class="home__button home__button--primary">
                            Meet the team
                            <v-icon aria-hidden="true">mdi-arrow-right</v-icon>
                        </a>
                        <a
                            href="https://irs-group.github.io/socrobwebsite/tdp/TeamDescriptionPaper2026_v2.pdf"
                            download="TeamDescriptionPaper2026_v2.pdf"
                            target="_blank"
                            rel="noreferrer"
                            class="home__button home__button--secondary"
                        >
                            Team Description Paper
                            <v-icon aria-hidden="true">mdi-book-arrow-down-outline</v-icon>
                        </a>
                    </div>
                </div>

                <div class="home__identity">
                    <img
                        src="/logos/socrob_home_logo.png"
                        alt="SocRob@Home logo"
                        class="home__logo"
                        width="200"
                        height="238"
                    />
                    <span class="home__identity-caption">Research. Collaboration. Competition.</span>
                </div>
            </div>

            <div class="home__footer">
                <span class="home__social-label">Follow our work</span>
                <nav class="home__social" aria-label="SocRob@Home social profiles">
                    <a
                        v-for="link in socialLinks"
                        :key="link.name"
                        :href="link.url"
                        target="_blank"
                        rel="noreferrer"
                        class="home__social-link"
                        :aria-label="`SocRob@Home on ${link.name}`"
                        :title="link.name"
                    >
                        <v-icon aria-hidden="true">{{ link.icon }}</v-icon>
                    </a>
                </nav>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/socrobhome/', icon: 'mdi-instagram' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/socrob-home/', icon: 'mdi-linkedin' },
    { name: 'YouTube', url: 'https://www.youtube.com/@socrob_home', icon: 'mdi-youtube' },
    { name: 'GitHub', url: 'https://github.com/socrob', icon: 'mdi-github' },
]
</script>

<style scoped lang="scss" src="@/assets/home.scss"></style>
