import { writable } from 'svelte/store'

const defaultValue = 'light'
const initialValue = 'dark'

export const theme = writable(initialValue)