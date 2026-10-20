<template>
    <section class="robots section" id="robots">
        <h2 class="section__title">Robots</h2>
        <span class="section__subtitle">
            <v-icon class="robots_icon" aria-hidden="true">mdi-robot-outline</v-icon>
        </span>

        <div class="robots__container container">
            <p class="robots__intro">
                Meet the platforms behind our research, from our newest mobile manipulator
                to the robots that helped shape SocRob@Home.
            </p>

            <div v-for="group in robotGroups" :key="group.id" :aria-labelledby="group.id">
                <div class="robots__heading">
                    <h3 :id="group.id">{{ group.title }}</h3>
                    <p>{{ group.description }}</p>
                </div>
                <div class="robots__grid">
                    <article v-for="robot in group.robots" :key="robot.name" class="robot-card"
                        :class="{ 'robot-card--featured': robot.featured }">
                        <div class="robot-card__visual">
                            <img v-if="robot.image" :src="robot.image" :alt="robot.name"
                                class="robot-card__image" loading="lazy" />
                            <div v-else class="robot-card__placeholder" role="img" :aria-label="`${robot.name} photo coming soon`">
                                <v-icon aria-hidden="true">mdi-robot-outline</v-icon>
                                <span>Photo coming soon</span>
                            </div>
                        </div>
                        <div class="robot-card__body">
                            <div class="robot-card__meta">
                                <span class="robot-card__badge">{{ robot.featured ? 'New platform' : robot.platform }}</span>
                                <span class="robot-card__date">{{ robot.date }}</span>
                            </div>
                            <h4 class="robot-card__name">{{ robot.name }}</h4>
                            <p class="robot-card__summary">{{ robot.summary }}</p>

                            <details class="robot-card__details">
                                <summary>
                                    Specifications & details
                                    <v-icon class="robot-card__chevron" aria-hidden="true">mdi-chevron-down</v-icon>
                                </summary>
                                <div class="robot-card__expanded">
                                    <p>{{ robot.description }}</p>
                                    <h5>{{ robot.featured ? 'Standard configuration' : 'Hardware' }}</h5>
                                    <ul>
                                        <li v-for="item in robot.hardware" :key="item">{{ item }}</li>
                                    </ul>
                                    <a v-if="robot.source" :href="robot.source" target="_blank" rel="noreferrer">
                                        PAL Robotics specifications
                                        <v-icon aria-hidden="true">mdi-open-in-new</v-icon>
                                    </a>
                                </div>
                            </details>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
type Robot = {
    name: string
    platform: string
    image: string | null
    date: string
    current: boolean
    featured: boolean
    summary: string
    description: string
    hardware: string[]
    source: string | null
}

// Add the TIAGo Pro photo path to its image field when available.
const robots: Robot[] = [
    {
        name: "TIAGo Pro",
        platform: "PAL Robotics",
        // image: null,
        image: "/robots/tiagoPro.png",
        date: "2026–present",
        current: true,
        featured: true,
        summary: "Acquired in 2026, our newest mobile manipulator is in its default configuration.",
        description: "TIAGo Pro is a mobile manipulation platform from PAL Robotics for research in manipulation, navigation, perception, and human–robot interaction. Its standard configuration combines two 7-DoF arms with parallel grippers, an omnidirectional base, and a lifting torso. The ROS 2 software stack supports navigation and manipulation development.",
        hardware: [
            "Two 7-DoF arms with joint torque sensing",
            "3 kg payload per arm, excluding the end-effector",
            "Two PAL parallel grippers",
            "Omnidirectional base with four Mecanum wheels",
            "35 cm torso lift",
            "Pan-tilt head with RGB-D camera and 10-inch touchscreen",
            "Four-microphone array and stereo speakers",
            "Two navigation laser range finders",
            "Intel i5 computer, 16 GB RAM, 512 GB SSD",
            "ROS 2 with MoveIt 2, Nav2, and ros2_control"
        ],
        source: "https://pal-robotics.com/robot/tiago-pro/"
    },
    {
        name: "Bob",
        platform: "PAL Robotics TIAGo",
        image: "/robots/bob.png",
        date: "2021–present",
        current: true,
        featured: false,
        summary: "A customized mobile manipulator for robotics competitions.",
        description: "The SocRob@Home TIAGo robot is a customized version of the TIAGo robot by PAL Robotics, designed for robotics competitions. It features a differential-drive base with a max speed of 1m/s, a torso with a 350mm stroke, a 7DoF arm with a 2.8kg payload, a parallel gripper, a 2DoF pan-tilt head, and a laptop tray with a 5kg payload.",
        hardware: [
            "Azure Kinect Camera",
            "Realsense Camera",
            "Rode Mic",
            "Unitree LiDAR",
            "2xHokuyo Laser",
            "Jetson Xavier NX",
            "ASUS RT-BE88U Router"
        ],
        source: null
    },
    {
        name: "Lola",
        platform: "Booster T1",
        image: "/robots/lola.png",
        date: "2025–present",
        current: true,
        featured: false,
        summary: "A platform for service robotics and human–robot interaction.",
        description: "LOLA, also known as Booster T1, joined the SocRob@Home team in 2025. Designed with flexibility and compactness in mind, LOLA is a lightweight, mobile service robot ideal for indoor domestic environments. She features enhanced onboard computing for AI workloads, a depth camera for perception, and built-in audio for interaction. LOLA supports rapid experimentation and development of high-level robotic behaviors for service-oriented tasks.",
        hardware: [
            "NVIDIA Jetson AGX Orin (64GB)",
            "Intel RealSense Camera",
            "Directional Microphone & Stereo Speaker"
        ],
        source: null
    },
    {
        name: "MBot",
        platform: "MBot",
        image: "/robots/mbot.png",
        date: "2016–2022",
        current: false,
        featured: false,
        summary: "An expressive service robot with an omnidirectional base.",
        description: "The MBot is composed of two main parts: body and head. The head can pan and has LED backlight to express emotions through a drawn mouth, eyes, and cheeks. The body has all of the CPU devices (two motherboards with i7 processors), a touchscreen, and all of the navigation mechanics, based on a Four-Wheel Omnidirectional Mecanum drive.",
        hardware: [
            "Cyton 1500 Robai Arm with 7 DoF",
            "Rode Mic",
            "Touchscreen"
        ],
        source: null
    },
    {
        name: "ISR-CoBot",
        platform: "ISR-CoBot",
        image: "/robots/cobot.png",
        date: "2014",
        current: false,
        featured: false,
        summary: "An experimental platform for human–robot interaction in office environments.",
        description: "ISR-CoBot was an experimental platform for research in Human-Robot Interaction (HRI). A service robot for office environments, it was designed to perform tasks for users. The research targeted a robust platform capable of navigating crowded environments and creating robots aware of their limitations and capable of autonomously asking humans for help.",
        hardware: [
            "Touchscreen on a laptop for HRI",
            "Hokuyo UTM-30LX",
            "Kinect RGB-D",
            "IP PTZ camera",
            "Rode Mic"
        ],
        source: null
    }
]

const robotGroups = [
    {
        id: 'current-robots-title',
        title: 'Current platforms',
        description: 'The robots we work with today.',
        robots: robots.filter(robot => robot.current),
    },
    {
        id: 'previous-robots-title',
        title: 'Previous platforms',
        description: 'Part of our research history.',
        robots: robots.filter(robot => !robot.current),
    },
]
</script>

<style scoped lang="scss" src="@/assets/robots.scss"></style>
