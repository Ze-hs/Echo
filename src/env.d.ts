// src/env.d.ts
/// <reference types="astro/client" />
import type { CollectionEntry } from "astro:content";

type BlogPost = CollectionEntry<"blog">;

type ProjectEntry = {
    title: string,
    description: string,
    demo?: string,
    github?: string,
    technologies: string[]
}