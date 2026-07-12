export type LyraReferenceRole = "visage" | "silhouette" | "planche de continuité";

export interface LyraReference {
  id: string;
  file: string;
  role: LyraReferenceRole;
  status: "canonique" | "support";
  approvedAt: string | null;
  width: number;
  height: number;
  alt: string;
  caption: string;
  characteristicsToPreserve: string[];
  allowedVariations: string[];
  prohibitedChanges: string[];
  provenance: string;
}

export const lyraReferences: LyraReference[] = [
  {
    id: "lyra-reference-face",
    file: "/images/lyra-voss/references/lyra-reference-face.webp",
    role: "visage",
    status: "canonique",
    approvedAt: null,
    width: 896,
    height: 1200,
    alt: "Portrait frontal rapproché de Lyra Voss, cheveux brun miel et combinaison noire mate",
    caption: "Référence canonique — visage et couleur de cheveux",
    characteristicsToPreserve: [
      "forme allongée du visage",
      "yeux verts",
      "cheveux brun miel",
      "taches de rousseur légères",
      "texture naturelle de la peau",
    ],
    allowedVariations: ["expression contenue", "direction du regard", "humidité des cheveux", "lumière motivée"],
    prohibitedChanges: ["couleur des yeux", "couleur des cheveux", "structure de la mâchoire", "retouche beauté marquée"],
    provenance: "Fichier fourni par le propriétaire du projet pour ce sprint. Date d’approbation non renseignée.",
  },
  {
    id: "lyra-reference-body",
    file: "/images/lyra-voss/references/lyra-reference-body.webp",
    role: "silhouette",
    status: "canonique",
    approvedAt: null,
    width: 768,
    height: 1376,
    alt: "Vue en pied de Lyra Voss dans un corridor humide, vêtue d’une combinaison noire mate",
    caption: "Référence canonique — silhouette, proportions et tenue",
    characteristicsToPreserve: [
      "silhouette élancée et athlétique",
      "proportions naturelles",
      "combinaison noire mate à panneaux discrets",
      "bottes plates",
      "posture stable",
    ],
    allowedVariations: ["posture", "cadrage", "orientation du corps", "contexte lumineux"],
    prohibitedChanges: ["armure brillante", "éléments lumineux", "talons", "modification importante des proportions"],
    provenance: "Fichier fourni par le propriétaire du projet pour ce sprint. Date d’approbation non renseignée.",
  },
  {
    id: "lyra-reference-body-sheet",
    file: "/images/lyra-voss/boards/lyra-reference-body-sheet.webp",
    role: "planche de continuité",
    status: "support",
    approvedAt: null,
    width: 1682,
    height: 2528,
    alt: "Planche de recherche de Lyra Voss présentant plusieurs vues du corps, une palette et des annotations",
    caption: "Support de continuité — planche corps et tenue à relire avant réutilisation",
    characteristicsToPreserve: ["vues face, profil et dos", "silhouette", "répartition générale des panneaux de tenue"],
    allowedVariations: ["mise en page documentaire"],
    prohibitedChanges: ["utilisation comme unique référence de visage", "reprise automatique des annotations sans vérification"],
    provenance: "Fichier de travail fourni par le propriétaire du projet. Conservé comme support, distinct des deux références canoniques.",
  },
];

export const canonicalLyraReferences = lyraReferences.filter((reference) => reference.status === "canonique");
export const supportingLyraReferences = lyraReferences.filter((reference) => reference.status === "support");
