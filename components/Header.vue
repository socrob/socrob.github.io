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

            <div class="nav__actions">
                <button class="nav__theme" type="button" :aria-pressed="isDark"
                    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
                    :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'" @click="toggleTheme">
                    <v-icon aria-hidden="true">{{ isDark ? 'mdi-white-balance-sunny' : 'mdi-moon-waning-crescent' }}</v-icon>
                </button>
                <button ref="menuButton" class="nav__toggle" type="button" aria-controls="nav-menu"
                    :aria-expanded="activeMenu" :aria-label="activeMenu ? 'Close navigation' : 'Open navigation'"
                    @click="toggleMenu">
                    <v-icon aria-hidden="true">{{ activeMenu ? 'mdi-close' : 'mdi-menu' }}</v-icon>
                </button>
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const isDark = ref(false)
let hasThemePreference = false
let systemTheme: MediaQueryList | null = null

const applyTheme = (dark: boolean) => {
    isDark.value = dark
    document.body.classList.toggle('dark-theme', dark)
    theme.global.name.value = dark ? 'dark' : 'light'
}

const toggleTheme = () => {
    applyTheme(!isDark.value)
    hasThemePreference = true
    try {
        localStorage.setItem('selected-theme', isDark.value ? 'dark' : 'light')
    } catch {
        // The toggle still works for this visit when storage is unavailable.
    }
}

const onSystemThemeChange = (event: MediaQueryListEvent) => {
    if (!hasThemePreference) applyTheme(event.matches)
}

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
    systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
    let selectedTheme: string | null = null
    try {
        selectedTheme = localStorage.getItem('selected-theme')
    } catch {
        // Fall back to the device preference when storage is unavailable.
    }
    hasThemePreference = selectedTheme === 'dark' || selectedTheme === 'light'
    applyTheme(hasThemePreference ? selectedTheme === 'dark' : systemTheme.matches)
    systemTheme.addEventListener('change', onSystemThemeChange)
    updateNavigation()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    window.addEventListener('hashchange', scheduleUpdate)
    document.addEventListener('keydown', onKeydown)
    document.addEventListener('pointerdown', onPointerDown)
})

onUnmounted(() => {
    systemTheme?.removeEventListener('change', onSystemThemeChange)
    if (frame !== null) window.cancelAnimationFrame(frame)
    window.removeEventListener('scroll', scheduleUpdate)
    window.removeEventListener('resize', scheduleUpdate)
    window.removeEventListener('hashchange', scheduleUpdate)
    document.removeEventListener('keydown', onKeydown)
    document.removeEventListener('pointerdown', onPointerDown)
})
</script>

<style scoped lang="scss" src="@/assets/header.scss"></style>
