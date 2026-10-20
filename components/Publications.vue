<template>
    <section class="publications section" id="publications">
        <h2 class="section__title">Publications</h2>
        <span class="section__subtitle">
            <v-icon class="publications_icon" aria-hidden="true">mdi-book-open-variant-outline</v-icon>
        </span>

        <div class="publications__container container">
            <p class="publications__intro">
                Explore our work in service robotics, from perception and planning
                to human–robot interaction and scientific competitions.
            </p>

            <div class="publications__tools">
                <div class="publications__field publications__field--search">
                    <label for="publication-search">Search publications</label>
                    <input id="publication-search" v-model="searchQuery" type="search"
                        placeholder="Search by title or author" />
                </div>
                <div class="publications__field">
                    <label for="publication-type">Publication type</label>
                    <select id="publication-type" v-model="selectedType">
                        <option value="">All types</option>
                        <option v-for="type in publicationTypes" :key="type" :value="type">{{ type }}</option>
                    </select>
                </div>
            </div>

            <p class="publications__count" role="status">
                {{ filteredPublications.length }} of {{ publications.length }} publications
            </p>

            <ul v-if="filteredPublications.length" class="publications__list" aria-label="Publications">
                <li v-for="pub in filteredPublications" :key="pub.title" class="publication-card">
                    <span class="publication-card__type">{{ pub.type }}</span>
                    <h3 class="publication-card__title">
                        <a v-if="pub.link" :href="pub.link" target="_blank" rel="noopener noreferrer">
                            {{ pub.title }}
                            <v-icon aria-hidden="true">mdi-open-in-new</v-icon>
                        </a>
                        <span v-else>{{ pub.title }}</span>
                    </h3>
                    <p class="publication-card__authors">{{ pub.authors }}</p>
                </li>
            </ul>
            <div v-else class="publications__empty">
                <h3>No matching publications</h3>
                <p>Try another title, author, or publication type.</p>
                <button type="button" @click="resetFilters">Show all publications</button>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const publications = [
  {
    title: 'Transferability Through Cooperative Competitions',
    type: 'Journal article',
    authors: 'Rodrigo Serra, Carlos Azevedo, André Silva, Kevin Alcedo, Quentin Rouxel, Peter So, Alejandro Suarez, Alin Albu-Schaeffer, and Pedro U. Lima',
    link: 'https://ieeexplore.ieee.org/document/11690833',
  },
  {
    title: 'Full-body Local Planning of a Mobile Manipulator using Reinforcement Learning',
    type: 'Conference paper',
    authors: 'Rodrigo Coimbra, Rui Bettencourt, Alberto Vale,Pedro U. Lima',
    link: 'https://ieeexplore.ieee.org/abstract/document/11523319',
  },
  {
    title: 'Robot Contests as a Catalyst for Robotics Science',
    type: 'Journal article',
    authors: 'Pedro U. Lima, Carlos Azevedo, Rodrigo Serra',
    link: 'https://www.annualreviews.org/content/journals/10.1146/annurev-control-022624-012944',
  },
  {
    title: 'Large Language Model-Based Robot Task Planning from Voice Command Transcriptions',
    type: 'Conference paper',
    authors: 'Afonso Certo, Bruno Martins, Carlos Azevedo, Pedro U. Lima',
    link: 'https://ieeexplore.ieee.org/abstract/document/11246378',
  },
  {
    title: 'Perspective-Shifted Neuro-Symbolic World Models: A Framework for Socially-Aware Robot Navigation',
    type: 'Conference paper',
    authors: 'Kevin Alcedo, Pedro U. Lima, Rachid Alami',
    link: 'https://arxiv.org/abs/2503.20425',
  },
  {
    title: 'Indoor 2.5D Navigation for Ground Robots',
    type: 'Conference paper',
    authors: 'Rui Bettencourt, Catarina Caramalho, Gabriel Nunes, Rodrigo Serra, Alberto Vale, Pedro Lima',
    link: 'https://ieeexplore.ieee.org/abstract/document/10970157',
  },
  {
    title: 'Door-to-Door Parcel Delivery From Supply Point to User’s Home With Heterogeneous Robot Team: The euROBIN First-Year Robotics Hackathon',
    type: 'Conference paper',
    authors: 'Alejandro Suarez, et al.',
    link: 'https://ieeexplore.ieee.org/document/10818752/',
  },
  {
    title: 'People Re-Identification in Service Robots',
    type: 'Conference paper',
    authors: 'Vicente Pinto, Rui Bettencourt, Rodrigo Ventura',
    link: 'https://doi.org/10.3390/app12104819',
  },
  {
    title: 'Functionalities, Benchmarking System and Performance Evaluation for a Domestic Service Robot: People Perception, People Following, and Pick and Placing',
    authors: 'Meysam Basiri, Joao Pereira, Rui Bettencourt, Enrico Piazza, E. Fernandes, Carlos Azevedo, Pedro Lima',
    type: 'Journal Article',
    link: 'https://doi.org/10.3390/app12104819',
  },
  {
    title: 'Olisipo: A probabilistic approach to the adaptable execution of deterministic temporal plans',
    authors: 'Tomás Ribeiro, Oscar Lima, Michael Cashmore, Andrea Micheli, Rodrigo Ventura',
    type: 'Conference Paper',
    link: 'https://doi.org/10.4230/LIPIcs.TIME.2021.15',
  },
  {
    title: 'Petri Net Toolbox for Multi-Robot Planning under Uncertainty',
    authors: 'Carlos Azevedo, António Matos, Pedro Lima, Jose Avendaño',
    type: 'Journal Article',
    link: 'https://doi.org/10.3390/app112412087',
  },
  {
    title: 'Multimodal Navigation for Autonomous Service Robots',
    authors: 'Rui Bettencourt, Pedro Lima',
    type: 'Conference Paper',
    link: 'https://doi.org/10.1109/ICARSC52212.2021.9429771',
  },
  {
    title: 'SocRob@Home: Integrating AI Components in a Domestic Robot System',
    authors: 'Pedro Lima, Carlos Azevedo, Emilia Brzozowska, João Cartucho, Tiago Dias, Joao Goncalves, Mithun Kinarullathil, Guilherme Lawless, Oscar Lima, Rute Luz, Pedro Miraldo, Enrico Piazza, Miguel Silva, Tiago Veiga, Rodrigo Ventura',
    type: 'Journal Article',
    link: 'https://doi.org/10.1007/s13218-019-00618-w',
  },
  {
    title: 'Grasp Planning with Incomplete Knowledge About the Object to be Grasped',
    authors: 'João Gonçalves, Pedro Lima',
    type: 'Conference Paper',
    link: 'https://ieeexplore.ieee.org/abstract/document/8733615?casa_token=9w28UQXqpg8AAAAA:jXtVK7d6dLsmgnvklbpPBoi9pjHmlJBrKJtz2MCz9XSb9_S6WWRo4ofu8B-It-qpgqH4x4pew0E',
  },
  {
    title: 'A generic optimization based cartesian controller for robotic mobile manipulation',
    authors: 'Emilia Brzozowska, Oscar Lima, Rodrigo Ventura',
    type: 'Conference Paper',
    link: 'https://ieeexplore.ieee.org/abstract/document/8793635?casa_token=EwzNA6oVHQUAAAAA:ykDufXrPTLcb-Nvm1nytc75cL1B0wD2yNVvE-CjKpuYmP4LYWdcaG8RM3Lgu5UJUN7GGedrhXK0',
  },
  {
    title: 'An Hierarchical Approach to Active Semantic Mapping Using Probabilistic Logic and Information Reward POMDP',
    authors: 'Tiago Veiga, Miguel Silva, Rodrigo Ventura, Pedro Lima',
    type: 'Journal Article',
    link: 'https://ojs.aaai.org/index.php/ICAPS/article/view/3546',
  },
  {
    title: 'Benchmarking Functionalities of Domestic Service Robots Through Scientific Competitions',
    authors: 'Meysam Basiri, Enrico Piazza, M. Matteucci, Pedro Lima',
    type: 'Book Chapter',
    link: 'https://link.springer.com/article/10.1007/s13218-019-00619-9',
  },
  {
    title: 'Small Obstacle Detection and Avoidance using a depth camera: a Case Study in RoboCup@Home',
    authors: 'Rute Luz, Guilherme Lawless, Oscar Lima, Rodrigo Ventura',
    type: 'Workshop Paper',
    link: '',
  },
  {
    title: 'A GSPN Software Framework to Model and Analyze Robot Tasks',
    authors: 'Carlos Azevedo, Pedro Lima',
    type: 'Conference Paper',
    link: 'https://ieeexplore.ieee.org/abstract/document/8733634?casa_token=dKAMuDcf-IYAAAAA:HWgwN-a3QyHUUNf96ZRu_X0Qiwv1m6h7Qx11WOIYvD-kqSj9lPaRjUGKJ9wzhhMRo0QooxHjWB0',
  },
  {
    title: 'From User Spoken Commands to Robot Task Plans: a Case Study in RoboCup@Home',
    authors: 'Mithun Kinarullathil, Pedro H. Martins, Carlos Azevedo, Oscar Lima, Guilherme Lawless, Pedro U. Lima, Luís Custódio, Rodrigo Ventura',
    type: 'Workshop Paper',
    link: '',
  },
  {
    title: 'Integrating classical planning and real robots in industrial and service robotics domains',
    authors: 'Oscar Lima, Rodrigo Ventura, and Iman Awaad',
    type: 'Workshop Paper',
    link: 'http://users2.isr.tecnico.ulisboa.pt/~yoda/papers/Lima18.pdf',
  },
  {
    title: 'Robust object recognition through symbiotic deep learning in mobile robots',
    authors: 'João Cartucho, Rodrigo Ventura, and Manuela Veloso',
    type: 'Conference Paper',
    link: 'https://ieeexplore.ieee.org/abstract/document/8594067?casa_token=vJCpkOR6lnsAAAAA:9zNu1XUkLZeVaNQedq7fExs2n8jGsak9RNxs0eUbYPK3kXmKWHOQWbiuYjsqrhxzaAmT80owNUI',
  },
  {
    title: 'Analytical Modeling of Vanishing Points and Curves in Catadioptric Cameras',
    authors: 'Pedro Miraldo, Francisco Eiras, Srikumar Ramalingam',
    type: 'Conference Paper',
    link: 'https://arxiv.org/abs/1804.09460',
  },
  {
    title: 'A Minimal Closed-Form Solution for Multi-Perspective Pose Estimation using Points and Lines',
    authors: 'Pedro Miraldo, Tiago Dias, Srikumar Ramalingam',
    type: 'Conference Paper',
    link: 'https://arxiv.org/abs/1807.09970',
  },
  {
    title: 'A case study on automatic parameter optimization of a mobile robot localization algorithm',
    authors: 'Oscar Lima, Rodrigo Ventura',
    type: 'Conference Paper',
    link: 'http://users2.isr.tecnico.ulisboa.pt/~yoda/papers/Lima17.pdf',
  },
  {
    title: 'Towards an Omnidirectional Catadioptric RGB-D Camera',
    authors: 'José Iglésias, Pedro Miraldo, Rodrigo Ventura',
    type: 'Conference Paper',
    link: 'http://users2.isr.tecnico.ulisboa.pt/~yoda/papers/Iglesias16.pdf',
  },
  {
    title: 'A Domestic Assistive Robot Developed Through Robotic Competitions',
    authors: 'Rodrigo Ventura, Meysam Basiri, André Mateus, J. Garcia, Pedro Miraldo, P. Santos, Pedro Lima',
    type: 'Workshop Paper',
    link: '',
  },
];

const searchQuery = ref('')
const selectedType = ref('')
const normalizeType = (type: string) => type.toLowerCase()
const publicationTypes = [...new Set(publications.map(pub => normalizeType(pub.type)))]
    .sort()
    .map(type => type.charAt(0).toUpperCase() + type.slice(1))

const filteredPublications = computed(() => {
    const words = searchQuery.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean)
    return publications.filter(pub => {
        const matchesType = !selectedType.value || normalizeType(pub.type) === normalizeType(selectedType.value)
        const text = `${pub.title} ${pub.authors}`.toLocaleLowerCase()
        return matchesType && words.every(word => text.includes(word))
    })
})

const resetFilters = () => {
    searchQuery.value = ''
    selectedType.value = ''
}
</script>

<style scoped lang="scss" src="@/assets/publications.scss"></style>
