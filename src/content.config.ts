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
    template: z.enum(["composition", "composition-cinematique"]).optional(),
    draft: z.boolean().default(false),
  }),
});

const prompts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/prompts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(["image", "video", "character", "camera", "composition", "transition", "workflow"]),
    level: levelSchema,
    tool: toolSchema.default("Generic workflow"),
    prompt: z.string(),
    negativePrompt: z.string().optional(),
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
    tools: z.array(toolSchema).default(["Generic workflow"]),
    tags: z.array(z.string()).default([]),
    status: z.enum(["draft", "ready", "planned"]).default("draft"),
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
