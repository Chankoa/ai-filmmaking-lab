import { defineCollection, z } from "astro:content";
import { file, glob } from "astro/loaders";

const levelSchema = z.enum(["debutant", "intermediaire", "avance"]);

const toolSchema = z.enum([
  "Adobe Firefly",
  "Kling",
  "Hailuo",
  "Runway",
  "Midjourney",
  "Photoshop",
  "Premiere",
  "Notion",
  "Generic workflow",
]);

const lessons = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/lessons" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    module: z.string(),
    order: z.number(),
    stage: z.enum([
      "voir",
      "composer",
      "ambiance",
      "generer",
      "stabiliser",
      "mettre-en-scene",
      "animer",
      "monter",
      "documenter",
    ]),
    level: levelSchema,
    tools: z.array(toolSchema).default(["Generic workflow"]),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    estimatedTime: z.string().optional(),
    template: z.enum(["composition", "composition-cinematique", "learning-path", "ambiance-realism"]).optional(),
    draft: z.boolean().default(false),
  }),
});

const prompts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/prompts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      "composition",
      "lighting",
      "color",
      "depth-of-field",
      "character-consistency",
      "reference-sheet",
      "storyboard",
      "shot-list",
      "camera-movement",
      "image-to-video",
      "transition",
      "sound-design",
      "critical-analysis",
      "cinematic-realism",
    ]),
    level: levelSchema,
    tool: toolSchema.default("Generic workflow"),
    prompt: z.string(),
    negativePrompt: z.string(),
    whyItWorks: z.string(),
    variants: z.array(z.string()).min(1),
    lessonHref: z.string(),
    visual: z.string().optional(),
    variables: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["draft", "active", "reference"]).default("draft"),
    level: levelSchema,
    tools: z.array(toolSchema).default(["Generic workflow"]),
    heroImage: z.string().optional(),
    pipeline: z.array(z.string()).default([]),
    outputs: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

const cameraShots = defineCollection({
  loader: file("./src/content/camera-shots.json"),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    family: z.enum(["scale", "angle", "movement", "detail"]),
    distance: z.enum(["proche", "moyen", "large", "variable"]),
    emotion: z.string(),
    use: z.string(),
    movement: z.string(),
    prompt: z.string(),
    avoid: z.string(),
    toolNotes: z.string().optional(),
  }),
});

const glossary = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/glossary" }),
  schema: z.object({
    term: z.string(),
    definition: z.string(),
    category: z.enum(["cinema", "image", "video", "prompt", "workflow", "tool"]),
    related: z.array(z.string()).default([]),
  }),
});

const resources = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/resources" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(["guide", "template", "checklist", "reference", "external"]),
    url: z.string().url().optional(),
    href: z.string().optional(),
    tools: z.array(toolSchema).default(["Generic workflow"]),
    tags: z.array(z.string()).default([]),
    status: z.enum(["draft", "ready", "planned"]).default("draft"),
    stage: z.enum([
      "voir",
      "composer",
      "ambiance",
      "generer",
      "stabiliser",
      "mettre-en-scene",
      "animer",
      "monter",
      "documenter",
    ]),
    sourceStatus: z.enum(["brute", "a-verifier", "synthetisee", "integree", "archivee"]),
    lastReviewed: z.string(),
    relatedLessons: z.array(z.string()).default([]),
  }),
});

export const collections = {
  lessons,
  prompts,
  projects,
  "camera-shots": cameraShots,
  glossary,
  resources,
};
