const levelLabels: Record<string, string> = {
  debutant: "Débutant",
  intermediaire: "Intermédiaire",
  avance: "Avancé",
};

const stageLabels: Record<string, string> = {
  voir: "Voir",
  composer: "Composer",
  generer: "Générer",
  stabiliser: "Stabiliser",
  "mettre-en-scene": "Mettre en scène",
  animer: "Animer",
  monter: "Monter",
  documenter: "Documenter",
};

const promptCategoryLabels: Record<string, string> = {
  composition: "Composition",
  lighting: "Lumière",
  color: "Couleur",
  "depth-of-field": "Profondeur de champ",
  "character-consistency": "Cohérence personnage",
  "reference-sheet": "Fiches de référence",
  storyboard: "Storyboard",
  "shot-list": "Shot-list",
  "camera-movement": "Mouvement caméra",
  "image-to-video": "Animation image vers vidéo",
  transition: "Transitions",
  "sound-design": "Design sonore",
  "critical-analysis": "Analyse critique",
};

const glossaryCategoryLabels: Record<string, string> = {
  cinema: "Cinéma",
  image: "Image",
  video: "Vidéo",
  prompt: "Prompt",
  workflow: "Workflow",
  tool: "Outil",
};

const resourceTypeLabels: Record<string, string> = {
  guide: "Guide",
  template: "Template",
  checklist: "Checklist",
  reference: "Référence",
  external: "Externe",
};

const cameraShotFamilyLabels: Record<string, string> = {
  scale: "Échelle",
  angle: "Angle",
  movement: "Mouvement",
  detail: "Détail",
};

const statusLabels: Record<string, string> = {
  draft: "Brouillon",
  active: "Actif",
  reference: "Référence",
  ready: "Prêt",
  planned: "Planifié",
};

function formatLabel(value: string, labels: Record<string, string>) {
  return labels[value] ?? value;
}

export function formatLevelLabel(value: string) {
  return formatLabel(value, levelLabels);
}

export function formatStageLabel(value: string) {
  return formatLabel(value, stageLabels);
}

export function formatPromptCategoryLabel(value: string) {
  return formatLabel(value, promptCategoryLabels);
}

export function formatGlossaryCategoryLabel(value: string) {
  return formatLabel(value, glossaryCategoryLabels);
}

export function formatResourceTypeLabel(value: string) {
  return formatLabel(value, resourceTypeLabels);
}

export function formatCameraShotFamilyLabel(value: string) {
  return formatLabel(value, cameraShotFamilyLabels);
}

export function formatStatusLabel(value: string) {
  return formatLabel(value, statusLabels);
}
