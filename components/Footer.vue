<template>
    <footer class="footer">
        <div class="footer__bg">
            <div class="footer__container container grid">
                <div>
                    <h2 class="footer__title">SocRob@Home</h2>
                    <span class="footer__subtitle">
                        <v-icon class="footer-icon-bulb mr-1" aria-hidden="true">mdi-robot-outline</v-icon>
                        Institute for Systems & Robotics
                    </span>
                    <p class="footer__mail">
                        <v-icon class="footer-icon-bulb mr-1" aria-hidden="true">mdi-email-outline</v-icon>
                        <a href="mailto:socrob.home@gmail.com">socrob.home@gmail.com</a>
                    </p>
                    <address class="footer__subtitle footer__address">
                        <v-icon class="footer-icon-bulb mr-1" aria-hidden="true">mdi-map-marker</v-icon>
                        <span>Av. Rovisco Pais, 1, 1049-001 Lisboa <br> (ISR, Torre Norte, 8º Piso)</span>
                    </address>
                </div>

                <div class="footer__socials">
                    <a href="https://www.instagram.com/socrobhome/" target="_blank" rel="noreferrer" class="footer__social" aria-label="SocRob@Home on Instagram">
                        <v-icon aria-hidden="true">mdi-instagram</v-icon>
                    </a>
                    <a href="https://www.linkedin.com/company/socrob-home/" target="_blank" rel="noreferrer" class="footer__social" aria-label="SocRob@Home on LinkedIn">
                        <v-icon aria-hidden="true">mdi-linkedin</v-icon>
                    </a>
                    <a href="https://www.youtube.com/@socrob_home" target="_blank" rel="noreferrer" class="footer__social" aria-label="SocRob@Home on YouTube">
                        <v-icon aria-hidden="true">mdi-youtube</v-icon>
                    </a>
                    <a href="https://github.com/socrob" target="_blank" rel="noreferrer" class="footer__social" aria-label="SocRob@Home on GitHub">
                        <v-icon aria-hidden="true">mdi-github</v-icon>
                    </a>
                </div>
                <div class="footer__robot">
                    <svg aria-hidden="true" class="footer__icon" viewBox="0 0 171 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M56.6487 16.9928C56.6487 18.6778 55.2958 20.0362 53.6361 20.0362C51.9763 20.0362 50.6234 18.6778 50.6234 16.9928C50.6234 15.3078 51.9763 13.9493 53.6361 13.9493C55.2958 13.9493 56.6487 15.3078 56.6487 16.9928Z" stroke="#FFF"/>
                        <path d="M119.877 16.9928C119.877 18.6778 118.524 20.0362 116.864 20.0362C115.204 20.0362 113.851 18.6778 113.851 16.9928C113.851 15.3078 115.204 13.9493 116.864 13.9493C118.524 13.9493 119.877 15.3078 119.877 16.9928Z" stroke="#FFF"/>
                        <path d="M63.0032 12.8587C62.0665 12.8587 56.3681 12.0713 53.6361 11.6775H51.2943L50.1234 12.2681L48.9525 12.8587L47.7816 14.0399C47.5865 14.4336 47.1962 15.4572 47.1962 16.4022C47.1962 17.3471 47.5865 19.1582 47.7816 19.9456L50.7089 22.308L53.0506 23.4891L56.5633 25.2609L59.4905 27.0326L61.8323 28.8043L64.174 31.1667L68.2721 35.3007L71.7848 38.2536L74.712 40.0254L77.0538 41.2065H86.4209H94.0316C94.5 41.2065 98.9103 38.0568 101.057 36.4819C102.618 35.1039 105.741 32.2297 105.741 31.7572L108.668 29.3949L110.424 28.2138L112.766 27.0326L115.693 25.2609L118.62 23.4891L122.133 21.7174L123.304 20.5362L123.889 19.3551V17.5833C123.889 17.1109 123.499 15.8116 123.304 15.221C122.913 14.6304 121.899 13.3312 120.962 12.8587C120.025 12.3862 118.23 11.8744 117.449 11.6775H115.693H115.108L112.18 12.2681C111.4 12.465 109.722 12.8587 109.253 12.8587H104.57C103.984 12.8587 102.228 12.2681 101.057 11.6775C100.12 11.2051 96.7637 10.2995 95.2025 9.90579H92.8608H87.5918H79.3956H75.8829C74.9462 9.90579 71.98 10.6932 70.6139 11.087C68.4673 11.6775 63.9399 12.8587 63.0032 12.8587Z" stroke="#FFF" stroke-width="2"/>
                        <path d="M131.5 155.188L128.573 158.141C127.207 158.929 124.123 160.622 122.718 161.094C120.962 161.685 113.937 164.047 108.082 165.228C102.228 166.409 93.4462 167 90.519 167C88.1772 167 80.1762 167 76.4684 167C73.7363 166.803 67.4525 166.291 64.174 165.819C60.0759 165.228 53.6361 164.047 51.2943 162.866C48.9525 161.685 44.269 159.913 41.9272 157.551C39.5854 155.188 39 154.007 39 153.417C39 152.944 39 149.283 39 147.511V146.33L40.1709 145.149L41.9272 143.967L43.6835 143.377H44.8544H46.0253H46.6108L47.1962 142.196L48.3671 138.062L50.1234 132.156L54.2215 119.163C55.1973 116.604 57.2658 110.659 57.7342 107.351C58.2025 104.044 58.7099 98.8865 58.9051 96.721L60.0759 84.3188L60.6614 74.279V60.6957L60.5257 57.1522M60.0759 59.5145C60.2943 59.5145 60.4363 58.4877 60.5257 57.1522M60.5257 57.1522C60.628 55.6228 60.6614 53.6886 60.6614 52.4275C60.8565 51.2464 61.0127 48.5297 60.0759 47.1123C58.9051 45.3406 55.3924 43.5688 52.4652 41.2065C49.538 38.8442 45.4399 35.3007 44.269 32.9384C43.0981 30.5761 41.3418 27.0326 41.3418 24.6703C41.3418 22.308 41.3418 18.1739 41.3418 16.4022C41.3418 14.6304 41.3418 14.0399 41.9272 13.4493C42.3956 12.9768 43.6835 12.465 44.269 12.2681L48.3671 10.4964L56.5633 7.54348L63.5886 5.18116L66.5158 4.59058L68.8576 4H77.0538H94.0316M72.9557 61.8768H97.5443V104.989H72.9557V61.8768Z" stroke="#FFF" stroke-width="2"/>
                        <path d="M93.4462 4H101.642L103.984 4.59058L106.911 5.18116L113.937 7.54348L122.133 10.4964L126.231 12.2681C126.816 12.465 128.104 12.9768 128.573 13.4493C129.158 14.0399 129.158 14.6304 129.158 16.4022C129.158 18.1739 129.158 22.308 129.158 24.6703C129.158 27.0326 127.402 30.5761 126.231 32.9384C125.06 35.3007 120.962 38.8442 118.035 41.2065C115.108 43.5688 111.595 45.3406 110.424 47.1123C109.487 48.5297 109.643 51.2464 109.839 52.4275C109.839 53.6886 109.872 55.6228 109.974 57.1522M131.5 155.779C131.5 155.307 131.5 149.283 131.5 147.511V146.33L130.329 145.149L128.573 143.967L126.816 143.377H125.646H124.475H123.889L123.304 142.196L122.133 138.062L120.377 132.156L116.278 119.163C115.303 116.604 113.234 110.659 112.766 107.351C112.297 104.044 111.79 98.8865 111.595 96.721L110.424 84.3188L109.839 74.279V60.6957L109.974 57.1522M110.424 59.5145C110.206 59.5145 110.064 58.4877 109.974 57.1522" stroke="#FFF" stroke-width="2"/>
                        <ellipse cx="57.1487" cy="33.529" rx="4.68354" ry="4.72464" fill="#FFF"/>
                        <ellipse cx="114.522" cy="33.529" rx="4.68354" ry="4.72464" fill="#FFF"/>
                        <path d="M92.8608 32.3478C93.7975 32.3478 94.4219 31.9541 94.6171 31.7572L95.788 30.5761C95.9831 30.3792 96.4905 29.9855 96.9589 29.9855C97.4272 29.9855 98.3249 29.9855 98.7152 29.9855H99.8861C100.276 29.9855 101.057 30.1036 101.057 30.5761C101.057 31.0485 101.057 31.5604 101.057 31.7572L100.472 32.3478L99.8861 32.9384L97.5443 34.7101L95.2025 36.4819L93.4462 37.663H92.2753" stroke="#FFF"/>
                        <path d="M92.8608 32.3478H77.0538C76.1171 32.3478 75.4926 31.9541 75.2975 31.7572L74.1266 30.5761C73.9314 30.3792 73.4241 29.9855 72.9557 29.9855C72.4873 29.9855 71.5897 29.9855 71.1994 29.9855H70.0285C69.6382 29.9855 68.8576 30.1036 68.8576 30.5761C68.8576 31.0485 68.8576 31.5604 68.8576 31.7572L69.443 32.3478L70.0285 32.9384L72.3703 34.7101L74.712 36.4819L76.4684 37.663H77.6392H92.8608" stroke="#FFF"/>
                    </svg>
                </div>
            </div>
            <div class="footer__sponsors">
                <a href="https://welcome.isr.tecnico.ulisboa.pt/" target="_blank" rel="noopener noreferrer">
                    <img src="/logos/isr_logo_white.png" alt="ISR" class="footer__sponsor-logo" />
                </a>
                <a href="https://tecnico.ulisboa.pt/pt/" target="_blank" rel="noopener noreferrer">
                    <img src="/logos/ist_logo_white.png" alt="IST" class="footer__sponsor-logo" />
                </a>
                <a href="https://welcome.isr.tecnico.ulisboa.pt/larsys/" target="_blank" rel="noopener noreferrer">
                    <img src="/logos/larsys_logo_white.png" alt="Larsys" class="footer__sponsor-logo" />
                </a>
                <a href="https://www.fct.pt/" target="_blank" rel="noopener noreferrer">
                    <img src="/logos/fct_logo_white.png" alt="FCT" class="footer__sponsor-logo" />
                </a>
                <a href="https://www.facebook.com/Tdreams7/?locale=pt_PT" target="_blank" rel="noopener noreferrer">
                    <img src="/logos/white_logo.png" alt="TDreams" class="footer__sponsor-logo footer__sponsor-logo-tdreams" />
                </a>
            </div>
            <p class="footer__copy">Website designed by Rodrigo Serra</p>
        </div>
    </footer>
  </template>

<style scoped lang="scss" src="@/assets/footer.scss"></style>
