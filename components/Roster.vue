<template>
    <section class="roster section" id="roster">
        <h2 class="section__title">Roster</h2>
        <span class="section__subtitle">
            <v-icon class="roster_icon" aria-hidden="true">mdi-account-group-outline</v-icon>
        </span>

        <div class="roster__container container">
            <p class="roster__intro">
                Meet the researchers, engineers, and students behind SocRob@Home.
            </p>

            <ul class="roster__grid" aria-label="Team members">
                <li v-for="member in teamMembers" :key="member.name" class="roster-card">
                    <img :src="member.image" :alt="member.name" class="roster-card__portrait"
                        width="112" height="112" loading="lazy" />
                    <h3 class="roster-card__name">{{ member.name }}</h3>
                    <p class="roster-card__role">{{ member.position }}</p>
                </li>
            </ul>

            <div class="roster__join" aria-labelledby="roster-join-title">
                <div class="roster__join-copy">
                    <h3 id="roster-join-title">Join the team</h3>
                    <p>
                        Interested in working with real robots? Email us with a short
                        introduction, your academic background, and what motivates you to join.
                    </p>
                </div>
                <a href="mailto:socrob.home@gmail.com" class="roster__email">
                    <v-icon aria-hidden="true">mdi-email-outline</v-icon>
                    <span>socrob.home@gmail.com</span>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const teamMembers = [
    { name: "Pedro Lima", position: "Project Coordinator", image: "/team/current_members/pedroLima.jpeg" },
    { name: "Rodrigo Serra", position: "Team Leader", image: "/team/current_members/rodrigoSerra.jpeg" },
    { name: "Rui Bettencourt", position: "PhD Student", image: "/team/current_members/ruiBettencourt.jpeg" },
    { name: "Afonso Certo", position: "PhD Student", image: "/team/current_members/afonsoCerto.jpeg" },
    { name: "Rodrigo Coimbra", position: "Research Engineer", image: "/team/current_members/rodrigoCoimbra.jpeg" },
    { name: "Duarte Santos", position: "MSc Student", image: "/team/current_members/duarteSantos.jpeg" },
    { name: "Abdullah Alamer", position: "PhD Student", image: "/team/current_members/abdullahAlamer.jpeg" },
    { name: "António Morais", position: "MSc Student", image: "/team/current_members/antonioMorais.jpeg" },
    { name: "Catarina Caramalho", position: "MSc Student", image: "/team/current_members/catarinaCaramalho.jpeg" },
    { name: "Gonzalo Marques", position: "MSc Student", image: "/team/current_members/gonzaloMarques.jpeg" },
    { name: "João Botas", position: "MSc Student", image: "/team/current_members/joaoBotas.jpeg" },
    { name: "Beatriz Pimenta", position: "MSc Student", image: "/team/current_members/beatrizPimenta.jpeg" },
    { name: "Gabriele Guidotti", position: "MSc Student", image: "/team/current_members/gabrieleGuidotti.jpeg" },
    { name: "Igor Ponomarov", position: "MSc Student", image: "/team/current_members/igorPonomarov.jpeg" },
]
</script>

<style scoped lang="scss" src="@/assets/roster.scss"></style>
