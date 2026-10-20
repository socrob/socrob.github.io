<template>
    <section class="roster section" id="roster">
      <h2 class="section__title">Roster</h2>
      <span class="section__subtitle">
        <v-icon class="roster_icon">mdi-account-group-outline</v-icon>
      </span>
      <v-container class="roster__container" fluid>
        <v-row justify="center">
          <!-- <v-col v-for="member in teamMembers" :key="member.name" cols="12" sm="6" md="4">
            <div class="roster__info">
              <v-avatar size="100" class="roster__avatar">
                <v-img :src="member.image" contain></v-img>
              </v-avatar>
              <div class="roster__name">{{ member.name }}</div>
              <div class="roster__position">{{ member.position }}</div>
            </div>
          </v-col> -->
          <v-col cols="12" sm="6" md="4">
            <div class="roster__info">
              <v-avatar size="100" class="roster__avatar">
                <img src="/team/current_members/pedroLima.jpeg" alt="Pedro Lima" />
              </v-avatar>
              <div class="roster__name">Pedro Lima</div>
              <div class="roster__position">Project Coordinator</div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="roster__info">
              <v-avatar size="100" class="roster__avatar">
                <img src="/team/current_members/rodrigoSerra.jpeg" alt="Rodrigo Serra" />
              </v-avatar>
              <div class="roster__name">Rodrigo Serra</div>
              <div class="roster__position">Team Leader</div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="roster__info">
              <v-avatar size="100" class="roster__avatar">
                <img src="/team/current_members/ruiBettencourt.jpeg" alt="Rui Bettencourt" />
              </v-avatar>
              <div class="roster__name">Rui Bettencourt</div>
              <div class="roster__position">PhD Student</div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="roster__info">
              <v-avatar size="100" class="roster__avatar">
                <img src="/team/current_members/afonsoCerto.jpeg" alt="Afonso Certo" />
              </v-avatar>
              <div class="roster__name">Afonso Certo</div>
              <div class="roster__position">PhD Student</div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="roster__info">
              <v-avatar size="100" class="roster__avatar">
                <img src="/team/current_members/rodrigoCoimbra.jpeg" alt="Rodrigo Coimbra" />
              </v-avatar>
              <div class="roster__name">Rodrigo Coimbra</div>
              <div class="roster__position">Research Engineer</div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="roster__info">
              <v-avatar size="100" class="roster__avatar">
                <img src="/team/current_members/duarteSantos.jpeg" alt="Duarte Santos" />
              </v-avatar>
              <div class="roster__name">Duarte Santos</div>
              <div class="roster__position">MSc Student</div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="roster__info">
              <v-avatar size="100" class="roster__avatar">
                <img src="/team/current_members/abdullahAlamer.jpeg" alt="Abdullah Alamer" />
              </v-avatar>
              <div class="roster__name">Abdullah Alamer</div>
              <div class="roster__position">PhD Student</div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="roster__info">
              <v-avatar size="100" class="roster__avatar">
                <img src="/team/current_members/antonioMorais.jpeg" alt="António Morais" />
              </v-avatar>
              <div class="roster__name">António Morais</div>
              <div class="roster__position">MSc Student</div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="roster__info">
              <v-avatar size="100" class="roster__avatar">
                <img src="/team/current_members/catarinaCaramalho.jpeg" alt="Catarina Caramalho" />
              </v-avatar>
              <div class="roster__name">Catarina Caramalho</div>
              <div class="roster__position">MSc Student</div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="roster__info">
              <v-avatar size="100" class="roster__avatar">
                <img src="/team/current_members/gonzaloMarques.jpeg" alt="Gonzalo Marques" />
              </v-avatar>
              <div class="roster__name">Gonzalo Marques</div>
              <div class="roster__position">MSc Student</div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="roster__info">
              <v-avatar size="100" class="roster__avatar">
                <img src="/team/current_members/joaoBotas.jpeg" alt="João Botas" />
              </v-avatar>
              <div class="roster__name">João Botas</div>
              <div class="roster__position">MSc Student</div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="roster__info">
              <v-avatar size="100" class="roster__avatar">
                <img src="/team/current_members/beatrizPimenta.jpeg" alt="Beatriz Pimenta" />
              </v-avatar>
              <div class="roster__name">Beatriz Pimenta</div>
              <div class="roster__position">MSc Student</div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="roster__info">
              <v-avatar size="100" class="roster__avatar">
                <img src="/team/current_members/gabrieleGuidotti.jpeg" alt="Gabriele Guidotti" />
              </v-avatar>
              <div class="roster__name">Gabriele Guidotti</div>
              <div class="roster__position">MSc Student</div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <div class="roster__info">
              <v-avatar size="100" class="roster__avatar">
                <img src="/team/current_members/igorPonomarov.jpeg" alt="Igor Ponomarov" />
              </v-avatar>
              <div class="roster__name">Igor Ponomarov</div>
              <div class="roster__position">MSc Student</div>
            </div>
          </v-col>
          <!-- Recruitment Text -->
          <v-col cols="12">
            <div class="roster__data">
              <p class="roster__description">
                Are you looking for an amazing experience with real robots in a team environment, while contributing actively to state-of-the-art research and gaining personal experience that will prove fruitful for your academic and professional future?
              </p>
              <p class="roster__description">
                If you are interested in joining SocRob@Home, please send an email to <a href="mailto:socrob.home@gmail.com" class="roster__email__color">socrob.home@gmail.com</a>, or directly contact the responsible, stating who you are, your motivations, your academic background, and how you would contribute to this project.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </template>
  
  <script setup lang="ts">
  const teamMembers = [
    {
      name: 'Pedro Lima',
      position: 'Project Coordinator',
      image: '/team/cropped/pedroLima.png',
    },
    {
      name: 'Rodrigo Serra',
      position: 'Team Leader',
      image: '/team/cropped/rodrigo.png',
    },
    {
      name: 'Rui Bettencourt',
      position: 'PhD Student',
      image: '/team/cropped/rui.png',
    },
    {
      name: 'Gabriel Nunes',
      position: 'Hardware Tech',
      image: '/team/cropped/gabrielNunes.png',
    },
    {
      name: 'Afonso Certo',
      position: 'MSc Student',
      image: '/team/cropped/afonsoCerto.png',
    },
    {
      name: 'Miguel Nabais',
      position: 'MSc Student',
      image: '/team/cropped/miguelNabais.png',
    },
    {
      name: 'Catarina Caramalho',
      position: 'MSc Student',
      image: '/team/cropped/catarinaCaramalho.png',
    },
    {
      name: 'Patrícia Torres',
      position: 'MSc Student',
      image: '/team/cropped/patriciaTorres.png',
    },
    {
      name: 'António Morais',
      position: 'MSc Student',
      image: '/team/cropped/antonioMorais.png',
    },
    {
      name: 'Robin Steiger',
      position: 'MSc Student',
      image: '/team/cropped/robinSteiger.png',
    },
    {
      name: 'Kevin Alcedo',
      position: 'PhD Student',
      image: '/team/kevinAlcedo.png',
    },
    {
      name: 'Rodrigo Coimbra',
      position: 'MSc Student',
      image: '/team/cropped/rodrigoCoimbra.png',
    },
    {
      name: 'Teresa Nogueira',
      position: 'MSc Student',
      image: '/team/robotFemale.jpg',
    },
    {
      name: 'André Silva',
      position: 'Research Engineer',
      image: '/team/robotMale.jpg',
    },
    {
      name: 'Matilde Vital',
      position: 'MSc Student',
      image: '/team/robotFemale.jpg',
    },
  ];
  </script>
  
  <style scoped lang="scss" src="@/assets/roster.scss"></style>
  