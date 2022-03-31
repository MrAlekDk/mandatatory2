import { writable } from "svelte/store";

const navbarComponents = ["Beverages","Consumables","Moustaches", "Merch", "About"];

export const navbar = writable({
    navbarComponents
})