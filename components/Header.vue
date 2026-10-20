<template>
    <header ref="headerElement" class="header" :class="{ 'header--scrolled': hasScrolled }" id="header">
        <nav class="nav" aria-label="Main navigation" @focusout="onFocusOut">
            <a href="#home" class="nav__logo" @click="navigateTo('#home')">SocRob@Home</a>

            <div ref="menuElement" id="nav-menu" class="nav__menu" :hidden="!activeMenu && !isDesktop">
                <ul class="nav__list">
                    <li v-for="item in navItems" :key="item.link">
                        <a :href="item.link" class="nav__link"
                            :class="{ 'nav__link--active': activeSection === item.link }"
                            :aria-current="activeSection === item.link ? 'location' : undefined"
                            @click="navigateTo(item.link)">
                            <v-icon class="nav__icon" aria-hidden="true">{{ item.icon }}</v-icon>
                            {{ item.label }}
                        </a>
                    </li>
                </ul>
            </div>

            <button ref="menuButton" class="nav__toggle" type="button" aria-controls="nav-menu"
                :aria-expanded="activeMenu" :aria-label="activeMenu ? 'Close navigation' : 'Open navigation'"
                @click="toggleMenu">
                <v-icon aria-hidden="true">{{ activeMenu ? 'mdi-close' : 'mdi-menu' }}</v-icon>
            </button>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue'

const headerElement = ref<HTMLElement | null>(null)
const menuElement = ref<HTMLElement | null>(null)
const menuButton = ref<HTMLButtonElement | null>(null)
const activeMenu = ref(false)
const isDesktop = ref(false)
const hasScrolled = ref(false)
const activeSection = ref('#home')
const navItems = [
    { label: 'Home', link: '#home', icon: 'mdi-home-outline' },
    { label: 'About', link: '#about', icon: 'mdi-account-outline' },
    { label: 'Competitions', link: '#competitions', icon: 'mdi-trophy-outline' },
    { label: 'Roster', link: '#roster', icon: 'mdi-account-group-outline' },
    { label: 'Robots', link: '#robots', icon: 'mdi-robot-outline' },
    { label: 'Publications', link: '#publications', icon: 'mdi-book-open-variant-outline' },
    { label: 'News', link: '#news', icon: 'mdi-newspaper-variant-outline' },
    { label: 'Media', link: '#media', icon: 'mdi-youtube' },
]

const closeMenu = (restoreFocus = false) => {
    activeMenu.value = false
    if (restoreFocus) menuButton.value?.focus()
}

const toggleMenu = async () => {
    if (activeMenu.value) {
        closeMenu()
        return
    }
    activeMenu.value = true
    await nextTick()
    menuElement.value?.querySelector<HTMLAnchorElement>('a')?.focus()
}

const navigateTo = (link: string) => {
    activeSection.value = link
    closeMenu(activeMenu.value)
}

const onKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && activeMenu.value) {
        event.preventDefault()
        closeMenu(true)
    }
}

const onPointerDown = (event: PointerEvent) => {
    if (activeMenu.value && !headerElement.value?.contains(event.target as Node)) closeMenu()
}

const onFocusOut = (event: FocusEvent) => {
    if (event.relatedTarget && !headerElement.value?.contains(event.relatedTarget as Node)) closeMenu()
}

let frame: number | null = null
const updateNavigation = () => {
    frame = null
    hasScrolled.value = window.scrollY >= 24
    isDesktop.value = window.innerWidth >= 1024
    if (isDesktop.value) closeMenu()
    const offset = window.innerWidth >= 768 ? (headerElement.value?.offsetHeight ?? 72) + 20 : 20
    let current = '#home'
    for (const item of navItems) {
        const section = document.getElementById(item.link.slice(1))
        if (section && section.getBoundingClientRect().top <= offset) current = item.link
    }
    activeSection.value = current
}

const scheduleUpdate = () => {
    if (frame === null) frame = window.requestAnimationFrame(updateNavigation)
}

onMounted(() => {
    try {
        const selectedTheme = localStorage.getItem('selected-theme')
        if (selectedTheme) document.body.classList.toggle('dark-theme', selectedTheme === 'dark')
    } catch {
        // Navigation remains available when browser storage is disabled.
    }
    updateNavigation()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    window.addEventListener('hashchange', scheduleUpdate)
    document.addEventListener('keydown', onKeydown)
    document.addEventListener('pointerdown', onPointerDown)
})

onUnmounted(() => {
    if (frame !== null) window.cancelAnimationFrame(frame)
    window.removeEventListener('scroll', scheduleUpdate)
    window.removeEventListener('resize', scheduleUpdate)
    window.removeEventListener('hashchange', scheduleUpdate)
    document.removeEventListener('keydown', onKeydown)
    document.removeEventListener('pointerdown', onPointerDown)
})
</script>

<style scoped lang="scss" src="@/assets/header.scss"></style>
