export interface ResourceTemplateSection {
  id: string;
  number: string;
  title: string;
  purpose: string;
  fields: string[];
  example?: string;
}

export const productionBibleSections: ResourceTemplateSection[] = [
  {
    id: "project-sheet",
    number: "01",
    title: "Fiche projet",
    purpose: "Donner un cadre commun avant toute génération.",
    fields: ["Titre et version", "Format et durée", "Public", "Pitch en une phrase", "Livrable final", "Responsable"],
    example: "Vertical Silence v1.2, séquence de 45 secondes, étude de tension calme dans une structure abandonnée.",
  },
  {
    id: "artistic-intent",
    number: "02",
    title: "Intention artistique",
    purpose: "Traduire le récit en décisions visuelles vérifiables.",
    fields: ["Émotion dominante", "Contraste", "Rythme", "Densité visuelle", "Réalisme attendu", "Éléments à exclure"],
    example: "Cyberpunk sobre, réalisme physique, pluie froide, néons rares, tension sans agitation.",
  },
  {
    id: "references",
    number: "03",
    title: "Références",
    purpose: "Nommer ce qui est repris dans chaque référence, sans copier une image entière.",
    fields: ["Référence", "Élément observé", "Décision retenue", "Décision rejetée", "Source et droits", "Date"],
  },
  {
    id: "character",
    number: "04",
    title: "Personnage",
    purpose: "Stabiliser l’identité avant les variations de plans.",
    fields: ["Identité", "Visage", "Cheveux", "Silhouette", "Posture", "Tenue", "Expressions", "Interdits"],
    example: "Lyra Voss : visage fin, yeux verts calmes, cheveux brun miel humides, combinaison noire mate sans LED.",
  },
  {
    id: "locations",
    number: "05",
    title: "Lieux",
    purpose: "Conserver la géographie, les matières et les sources de lumière.",
    fields: ["Nom du lieu", "Fonction narrative", "Plan au sol", "Matières", "Échelle", "Accès", "Lumières fixes", "Éléments stables"],
  },
  {
    id: "objects",
    number: "06",
    title: "Objets",
    purpose: "Identifier les accessoires qui portent une action ou un raccord.",
    fields: ["Nom", "Fonction", "Dimensions", "Matière", "État", "Main associée", "Plan d’apparition", "Continuité"],
  },
  {
    id: "palette",
    number: "07",
    title: "Palette",
    purpose: "Limiter les dérives de couleur entre images et clips.",
    fields: ["Dominante", "Accent", "Tons de peau", "Noirs", "Hautes lumières", "Saturation maximale", "Couleurs interdites"],
    example: "Bleu-gris et béton humide, cyan discret, peau naturelle, aucun bain magenta.",
  },
  {
    id: "master-prompts",
    number: "08",
    title: "Prompts maîtres",
    purpose: "Séparer les blocs stables des variables de plan.",
    fields: ["Identité", "Monde", "Style", "Lumière", "Optique", "Variables autorisées", "Version", "Frame validée"],
  },
  {
    id: "negative-prompts",
    number: "09",
    title: "Negative prompts",
    purpose: "Protéger les constantes et documenter les dérives récurrentes.",
    fields: ["Identité", "Anatomie", "Tenue", "Décor", "Couleur", "Caméra", "Mouvement", "Artefacts"],
  },
  {
    id: "shot-list",
    number: "10",
    title: "Shot list",
    purpose: "Relier chaque plan à sa fonction dans le récit.",
    fields: ["ID plan", "Beat", "Valeur", "Angle", "Focale", "Mouvement", "Durée", "Frame source", "Statut"],
  },
  {
    id: "image-to-video",
    number: "11",
    title: "Animation image vers vidéo",
    purpose: "Décrire un mouvement limité qui respecte la frame approuvée.",
    fields: ["Outil", "Image source", "État initial", "État final", "Caméra", "Mouvement sujet", "Intensité", "Erreurs à éviter"],
  },
  {
    id: "sound-design",
    number: "12",
    title: "Design sonore",
    purpose: "Faire exister le lieu et le hors-champ avant la musique.",
    fields: ["Ambiance", "Proximité", "Événement", "Texture", "Perspective", "Silence", "Transition", "Niveau"],
  },
  {
    id: "critical-analysis",
    number: "13",
    title: "Analyse critique",
    purpose: "Transformer chaque échec en décision exploitable.",
    fields: ["Résultat", "Écart observé", "Cause probable", "Correction", "Version comparée", "Décision", "Plan impacté", "À réutiliser"],
  },
];

export const shotListFields: ResourceTemplateSection[] = [
  { id: "shot-number", number: "01", title: "Numéro de plan", purpose: "Identifiant stable scène-plan-version.", fields: ["SC03_SH07_V02"] },
  { id: "intention", number: "02", title: "Intention", purpose: "Information ou émotion nouvelle apportée par le plan.", fields: ["Révéler l’échelle de la structure"] },
  { id: "shot-scale", number: "03", title: "Valeur de plan", purpose: "Distance narrative entre caméra et sujet.", fields: ["Close-up", "Medium shot", "Wide shot"] },
  { id: "angle", number: "04", title: "Angle", purpose: "Rapport de pouvoir et lecture de l’espace.", fields: ["Eye level", "Low angle", "Overhead"] },
  { id: "movement", number: "05", title: "Mouvement", purpose: "Déplacement motivé par une révélation ou une action.", fields: ["Locked", "Push-in", "Lateral dolly"] },
  { id: "subject", number: "06", title: "Sujet", purpose: "Pose, regard, action unique et état final.", fields: ["Lyra immobile, regard vers le puits"] },
  { id: "set", number: "07", title: "Décor", purpose: "Géographie, matières et éléments fixes.", fields: ["Béton humide, puits vertical, passerelle"] },
  { id: "lighting", number: "08", title: "Lumière", purpose: "Source motivée, direction, contraste et couleur.", fields: ["Maintenance cyan latérale, faible contraste"] },
  { id: "character-continuity", number: "09", title: "Continuité personnage", purpose: "État du visage, des cheveux, de la tenue et des accessoires.", fields: ["Même combinaison, cheveux humides, marker main droite"] },
  { id: "set-continuity", number: "10", title: "Continuité décor", purpose: "Conserver orientation, météo et sources fixes.", fields: ["Puits à gauche, pluie arrière-plan, même lampe"] },
  { id: "image-prompt", number: "11", title: "Prompt image", purpose: "Décrire la frame de référence complète.", fields: ["Sujet + cadre + décor + lumière + optique + style"] },
  { id: "video-prompt", number: "12", title: "Prompt vidéo", purpose: "Décrire seulement les changements dans le temps.", fields: ["Caméra + mouvement sujet + environnement + durée"] },
  { id: "negative-prompt", number: "13", title: "Negative prompt", purpose: "Protéger identité, décor, anatomie et caméra.", fields: ["No face change, no camera shake, no new objects"] },
  { id: "sound", number: "14", title: "Son", purpose: "Ambiance, événement proche et élément hors-champ.", fields: ["Pluie filtrée, câble métallique, souffle de Lyra"] },
  { id: "quality-control", number: "15", title: "Erreurs à vérifier", purpose: "Critères de rejet observables avant montage.", fields: ["Visage", "Mains", "Tenue", "Architecture", "Physique", "Utilité narrative"] },
];

export const shotListExample = {
  id: "SC02_SH04_V03",
  intention: "Lyra identifie le marqueur d’accès avant de décider d’entrer.",
  imagePrompt:
    "cinematic over-the-shoulder medium shot from behind Lyra Voss, damaged access marker sharp in the midground, Vertical Silence shaft rising behind it, wet blue-grey concrete, restrained cyan maintenance light, 50mm lens, grounded physical realism",
  videoPrompt:
    "Starting from the approved frame, locked camera with a very slow five-percent push-in, Lyra remains still, only her breathing, wet hair tips and distant rain move, the cyan marker flickers once, preserve face, outfit and architecture.",
  negativePrompt:
    "face change, new outfit, reverse eyeline, camera shake, fast zoom, architecture mutation, extra character, glowing armor, text",
  sound: "Pluie lointaine, vibration grave de la structure, petit relais électrique du marqueur.",
};
