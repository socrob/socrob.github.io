<template>
    <section class="competitions section" id="competitions">
        <h2 class="section__title">Competitions & Events</h2>
        <span class="section__subtitle">
            <v-icon class="competition_icon" aria-hidden="true">mdi-trophy-outline</v-icon>
        </span>

        <div class="competitions__container container">
            <p class="competitions__intro">
                From international competitions to collaborative demonstrations, SocRob@Home
                puts service robotics to the test. Explore our latest participations and the
                milestones that brought us here.
            </p>

            <div class="competitions__latest" aria-labelledby="latest-events-title">
                <div class="competitions__heading">
                    <h3 id="latest-events-title">Latest participations</h3>
                    <span class="competitions__year">2026</span>
                </div>
                <div class="competitions__cards">
                    <article v-for="event in latestEvents" :key="event.name" class="competition-card">
                        <div class="competition-card__top">
                            <v-icon class="competition-card__icon" aria-hidden="true">{{ event.icon }}</v-icon>
                            <time :datetime="event.date">{{ event.month }} 2026</time>
                        </div>
                        <h4 class="competition-card__title">{{ event.name }}</h4>
                        <p class="competition-card__description">{{ event.description }}</p>
                        <span class="competition__badge" :class="{ 'competition__badge--podium': event.podium }">
                            {{ event.result }}
                        </span>
                    </article>
                </div>
            </div>

            <div class="competitions__history" aria-labelledby="past-events-title">
                <div class="competitions__heading">
                    <h3 id="past-events-title">Participation history</h3>
                    <span class="competitions__period">2019–2024</span>
                </div>
                <div v-for="group in pastEvents" :key="group.year" class="competition-year">
                    <h4 class="competition-year__label">{{ group.year }}</h4>
                    <ul class="competition-year__events">
                        <li v-for="event in group.events" :key="event.name" class="competition-row">
                            <div class="competition-row__details">
                                <span class="competition-row__name">{{ event.name }}</span>
                                <time :datetime="event.date">{{ event.month }}</time>
                            </div>
                            <span class="competition__badge" :class="{ 'competition__badge--podium': event.podium }">
                                {{ event.result }}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="competitions__story" aria-labelledby="earlier-events-title">
                <h3 id="earlier-events-title">Earlier milestones</h3>
                <p>
                    Our competition history reaches back to 2015. At RoCKIn in Lisbon,
                    SocRob@Home won two Task Benchmarks and tied for first in the
                    RoCKIn@Home Challenge. That year, the team also made its RoboCup
                    German Open debut, receiving the “Most Appealing Robot” award.
                </p>
                <p>
                    We went on to compete at RoboCup in Leipzig in 2016 and placed fifth
                    at the RoboCup German Open in 2017. At the European Robotics League
                    in Lisbon that year, the team ranked highly in semantic mapping,
                    navigation, and perception.
                </p>
                <p>
                    In 2018, SocRob@Home earned fourth place in the RoboCup@Home Open
                    Platform SubLeague, joined the ERL Consumer Major Tournament in
                    Madrid, and competed at the Portuguese Robotics Open in Torres Vedras.
                    These events laid the groundwork for the results and collaborations
                    highlighted above.
                </p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const latestEvents = [
    {
        name: 'euROBIN Parliament Demo',
        date: '2026-08',
        month: 'Aug',
        result: 'Joint Demonstration',
        description: 'A collaborative robotics demonstration with euROBIN.',
        icon: 'mdi-account-group-outline',
        podium: false,
    },
    {
        name: 'RoboCup 2026',
        date: '2026-06',
        month: 'Jun',
        result: '10th Place',
        description: 'Our latest participation on the international RoboCup stage.',
        icon: 'mdi-robot-outline',
        podium: false,
    },
    {
        name: 'Portugal Open 2026',
        date: '2026-04',
        month: 'Apr',
        result: '3rd Place',
        description: 'A podium finish at the Portuguese Robotics Open.',
        icon: 'mdi-trophy-outline',
        podium: true,
    },
]

const pastEvents = [
    {
        year: '2024',
        events: [
            { name: 'euROBIN Coopetition', date: '2024-11', month: 'Nov', result: '3rd Place', podium: true },
            { name: 'RoboCup', date: '2024-07', month: 'Jul', result: '3rd Place', podium: true },
            { name: 'Portugal Open', date: '2024-05', month: 'May', result: '2nd Place', podium: true },
        ],
    },
    {
        year: '2023',
        events: [
            { name: 'RoboCup', date: '2023-07', month: 'Jul', result: '2nd Place', podium: true },
            { name: 'Portugal Open', date: '2023-05', month: 'May', result: '2nd Place', podium: true },
        ],
    },
    {
        year: '2021',
        events: [
            { name: 'SciRoc', date: '2021-09', month: 'Sep', result: 'Hybrid Event', podium: false },
            { name: 'RoboCup', date: '2021-06', month: 'Jun', result: '4th Place', podium: false },
        ],
    },
    {
        year: '2019',
        events: [
            { name: 'ERL Smart Cities', date: '2019-09', month: 'Sep', result: '1st Tournament', podium: false },
            { name: 'ERL Consumer', date: '2019-02', month: 'Feb', result: 'Local Tournament', podium: false },
        ],
    },
]
</script>

<style scoped lang="scss" src="@/assets/competitions.scss"></style>
