export interface PromptCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  lessonHref: string;
}

export const promptCategories: PromptCategory[] = [
  { id: "composition", number: "01", title: "Composition", description: "Organiser le regard, le vide et les masses.", lessonHref: "/formation/composition-cinematique/" },
  { id: "lighting", number: "02", title: "Lumière", description: "Motiver les sources et modeler le récit.", lessonHref: "/formation/lumiere-couleur/" },
  { id: "color", number: "03", title: "Couleur", description: "Construire une palette stable entre les plans.", lessonHref: "/formation/lumiere-couleur/" },
  { id: "depth-of-field", number: "04", title: "Profondeur de champ", description: "Séparer les plans et préparer le focus.", lessonHref: "/formation/profondeur-de-champ/" },
  { id: "character-consistency", number: "05", title: "Cohérence personnage", description: "Protéger identité, proportions et tenue.", lessonHref: "/formation/character-consistency/" },
  { id: "reference-sheet", number: "06", title: "Fiches de référence", description: "Créer des vues de référence comparables.", lessonHref: "/formation/stabiliser/" },
  { id: "storyboard", number: "07", title: "Storyboard", description: "Transformer les beats en images fonctionnelles.", lessonHref: "/formation/storyboard-shotlist/" },
  { id: "shot-list", number: "08", title: "Shot-list", description: "Décrire chaque plan comme une unité de production.", lessonHref: "/formation/storyboard-shotlist/" },
  { id: "camera-movement", number: "09", title: "Mouvement caméra", description: "Limiter et motiver le déplacement de caméra.", lessonHref: "/formation/cinematographie/" },
  { id: "image-to-video", number: "10", title: "Animation image vers vidéo", description: "Animer une frame sans perdre ses constantes.", lessonHref: "/formation/image-to-video-transitions/" },
  { id: "transition", number: "11", title: "Transitions", description: "Raccorder par forme, lumière ou mouvement.", lessonHref: "/formation/image-to-video-transitions/" },
  { id: "sound-design", number: "12", title: "Design sonore", description: "Décrire l’espace, la matière et le hors-champ.", lessonHref: "/formation/monter-documenter/" },
  { id: "critical-analysis", number: "13", title: "Analyse critique", description: "Évaluer un résultat avec des critères observables.", lessonHref: "/formation/production-ia/" },
];
