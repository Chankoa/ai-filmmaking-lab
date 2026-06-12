export interface LyraProfileGroup {
  title: string;
  items: Array<{ label: string; value: string }>;
}

export interface LyraBoard {
  title: string;
  description: string;
  image: string;
  checks: string[];
}

export interface LyraShotVariation {
  id: string;
  title: string;
  intention: string;
  imagePrompt: string;
  klingPrompt: string;
  cameraMovement: string;
  intensity: string;
  avoid: string[];
  videoNegativePrompt: string;
}

const identity =
  "Lyra Voss, original cyberpunk female character, slender athletic feminine build, elongated fine face, high cheekbones, defined jawline, straight fine nose, calm intense green eyes, dark honey-brown shoulder-length slightly wet hair, subtle freckles, visible natural skin texture, matte black tactical bodysuit with subtle panel details, no LED, no glowing armor, no high heels";

const world =
  "inside Vertical Silence, massive abandoned vertical concrete megastructure, rain, wet blue-grey concrete, faint cyan maintenance light, restrained cyberpunk mood, grounded physical realism";

export const lyraProfile: LyraProfileGroup[] = [
  {
    title: "Identité",
    items: [
      { label: "Nom", value: "Lyra Voss" },
      { label: "Âge apparent", value: "28 à 32 ans" },
      { label: "Rôle", value: "Technicienne d’accès et exploratrice méthodique" },
      { label: "Présence", value: "Calme, précise, jamais démonstrative" },
    ],
  },
  {
    title: "Morphologie",
    items: [
      { label: "Visage", value: "Allongé et fin, pommettes hautes, mâchoire définie, nez droit" },
      { label: "Cheveux", value: "Brun miel sombre, longueur épaules, légèrement humides" },
      { label: "Silhouette", value: "Féminine, athlétique et élancée, proportions naturelles" },
      { label: "Peau", value: "Texture visible, légères taches de rousseur, aucune retouche beauté" },
    ],
  },
  {
    title: "Jeu et posture",
    items: [
      { label: "Posture", value: "Poids stable, épaules basses, gestes économes" },
      { label: "Regard", value: "Vert, direct vers l’objectif narratif, rarement caméra" },
      { label: "Expression", value: "Tension contenue, attention active, détermination calme" },
      { label: "Marche", value: "Prudente, centre de gravité stable, pas mesurés" },
    ],
  },
  {
    title: "Tenue et interdits",
    items: [
      { label: "Tenue", value: "Combinaison tactique noire mate, panneaux discrets, bottes plates" },
      { label: "Accessoire", value: "Marqueur d’accès compact, tenu main droite selon la scène" },
      { label: "Contraintes", value: "Même visage, mêmes proportions, même coupe, même tenue" },
      { label: "Interdits", value: "Cheveux rouges, LED, armure, talons, peau plastique, maquillage fort" },
    ],
  },
];

export const lyraBoards: LyraBoard[] = [
  {
    title: "Fiche visage",
    description: "Visage héro, rotations et contrôle des proportions.",
    image: "/images/projects/lyra-voss/face-reference-sheet.svg",
    checks: ["Pommettes", "Mâchoire", "Nez", "Yeux verts", "Implantation des cheveux"],
  },
  {
    title: "Rotation corps",
    description: "Face, trois-quarts, profil et dos sur fond neutre.",
    image: "/images/projects/lyra-voss/body-turnaround.svg",
    checks: ["Taille", "Épaules", "Bassin", "Longueur des jambes", "Volume de la tenue"],
  },
  {
    title: "Board tenue",
    description: "Matières, panneaux, bottes et accessoire fonctionnel.",
    image: "/images/projects/lyra-voss/outfit-board.svg",
    checks: ["Noir mat", "Coutures discrètes", "Aucune LED", "Bottes plates", "Marker"],
  },
  {
    title: "Board expressions",
    description: "Micro-expressions compatibles avec la tension calme.",
    image: "/images/projects/lyra-voss/expression-board.svg",
    checks: ["Neutre", "Attention", "Décision", "Doute contenu", "Fatigue"],
  },
  {
    title: "Board poses",
    description: "Poses de production avec centre de gravité stable.",
    image: "/images/projects/lyra-voss/pose-board.svg",
    checks: ["Repos", "Observation", "Marche", "Manipulation", "Dos caméra"],
  },
  {
    title: "Board cadrages",
    description: "Huit valeurs et angles pour préparer la séquence.",
    image: "/images/projects/lyra-voss/cinematic-shot-board.svg",
    checks: ["Close-up", "Medium", "Wide", "OTS", "Low angle", "Back", "Walk", "Extreme close-up"],
  },
];

export const lyraMasterBlocks = [
  { label: "[identity]", value: "Lyra Voss, original cyberpunk female character, apparent age 28 to 32, calm methodical presence" },
  { label: "[face]", value: "elongated fine face, high cheekbones, defined jawline, straight fine nose, calm intense green eyes, subtle freckles, visible pores and natural skin texture" },
  { label: "[hair]", value: "dark honey-brown shoulder-length hair, slightly wet, natural weight, a few strands framing the face" },
  { label: "[body]", value: "slender athletic feminine build, natural proportions, stable posture, economical gestures" },
  { label: "[outfit]", value: "matte black tactical bodysuit with restrained panel details, flat functional boots, compact access marker, no decorative technology" },
  { label: "[attitude]", value: "quiet tension, focused on the narrative objective, shoulders low, never posing for the camera" },
  { label: "[lighting]", value: "realistic motivated lighting, blue-grey environment, weak cyan practical light, natural skin exposure, restrained contrast" },
  { label: "[style]", value: "photorealistic cinematic film still, grounded cyberpunk, realistic anatomy and materials, subtle rain atmosphere, physical camera" },
  { label: "[negative constraints]", value: "red hair, orange hair, different face, altered body proportions, glowing suit, armor plates, LED, high heels, plastic skin, beauty retouch, exaggerated makeup, anime, cartoon, text, watermark" },
];

export const lyraMasterPrompt = lyraMasterBlocks.map((block) => `${block.label}\n${block.value}`).join("\n\n");

export const lyraShotVariations: LyraShotVariation[] = [
  {
    id: "LV-CU-01",
    title: "Close-up",
    intention: "Lire la décision sans dialogue.",
    imagePrompt:
      "Ultra-realistic cinematic close-up portrait of Lyra Voss under weak cyan neon light, wet dark honey-brown hair framing her face, calm determined green eyes, subtle freckles, visible pores, micro-imperfections, rain droplets on skin, shallow depth of field, blue-grey industrial background, restrained cyberpunk mood, photorealistic film still.",
    klingPrompt:
      "Starting from the approved close-up, locked physical camera with a two-percent push-in, Lyra keeps the same calm expression, one controlled blink, subtle breathing, rain droplets move naturally, weak cyan light remains fixed, five seconds.",
    cameraMovement: "Push-in presque imperceptible",
    intensity: "Très faible, 2/5",
    avoid: ["Morphing du visage", "Regard caméra", "Mouvements de tête", "Peau lissée"],
    videoNegativePrompt: "face deformation, expression change, head turn, beauty retouch, camera shake, fast zoom, new light, text",
  },
  {
    id: "LV-MS-02",
    title: "Medium shot",
    intention: "Montrer Lyra et le marker dans une même action lisible.",
    imagePrompt:
      `cinematic medium shot, ${identity}, ${world}, Lyra holds the damaged access marker in her right hand at chest level, eyes fixed on the marker, shoulders low, 50mm lens, realistic skin and wet fabric`,
    klingPrompt:
      "Locked medium shot, Lyra slowly lowers the access marker by ten centimeters after reading it, her gaze moves once from the marker to the shaft, breathing and rain remain subtle, preserve face, hand anatomy, outfit and background.",
    cameraMovement: "Caméra verrouillée",
    intensity: "Faible, 2/5",
    avoid: ["Main mutante", "Action multiple", "Changement de tenue", "Regard erratique"],
    videoNegativePrompt: "warped hand, extra fingers, new prop, outfit change, face change, camera orbit, exaggerated acting, fast motion",
  },
  {
    id: "LV-WS-03",
    title: "Wide shot",
    intention: "Comparer l’échelle humaine à Vertical Silence.",
    imagePrompt:
      "cinematic wide shot of Lyra Voss standing on the right third of the frame, looking toward a massive abandoned vertical structure in the distance, rain-soaked concrete foreground, vast negative space on the left, blue-grey night atmosphere, faint cyan rim light, 35mm film still, realistic cinematic lighting, subtle haze, grounded cyberpunk mood",
    klingPrompt:
      "Very slow lateral dolly to the left across the wet foreground, Lyra remains small and still on the right third, foreground reflections create restrained parallax, the vertical structure stays architecturally stable, rain and haze move naturally.",
    cameraMovement: "Dolly latéral lent",
    intensity: "Faible, 2/5",
    avoid: ["Structure qui se déforme", "Lyra qui glisse", "Néons ajoutés", "Parallaxe excessive"],
    videoNegativePrompt: "warped architecture, moving building, sliding subject, fast dolly, drone camera, saturated neon, new vehicles, text",
  },
  {
    id: "LV-OTS-04",
    title: "Over-the-shoulder",
    intention: "Révéler ce que Lyra découvre sans perdre sa présence.",
    imagePrompt:
      "Third-person over-the-shoulder cinematic shot of Lyra Voss seen from behind, wet hair and shoulders in the foreground, massive abandoned vertical megastructure interior ahead, foreground silhouette soft, background slowly revealed, blue-grey concrete, faint cyan rim light, shallow depth of field, quiet tension, realistic film still.",
    klingPrompt:
      "Starting from the approved over-the-shoulder frame, perform a very slow controlled push forward while Lyra remains stable in the soft foreground, reveal more of the shaft geometry, only hair tips, rain and distant cables move, preserve outfit and architecture.",
    cameraMovement: "Push-in de révélation",
    intensity: "Faible, 2/5",
    avoid: ["Caméra flottante", "Portrait centré", "Visage révélé", "Architecture tordue"],
    videoNegativePrompt: "floating camera, centered portrait, warped architecture, saturated neon, face reveal, outfit change, fast zoom, text",
  },
  {
    id: "LV-LA-05",
    title: "Low angle",
    intention: "Faire sentir la pression verticale du lieu.",
    imagePrompt:
      `low-angle cinematic medium-wide shot, ${identity}, ${world}, camera near wet ground, Lyra at the base of the shaft looking upward, vertical concrete lines converging above her, 28mm lens without fisheye distortion, restrained scale and tension`,
    klingPrompt:
      "Locked low-angle camera with a slow five-degree upward tilt, Lyra stays anchored at the base of frame, her chin lifts slightly, rain follows gravity, vertical lines remain straight and stable.",
    cameraMovement: "Tilt up limité",
    intensity: "Modérée, 3/5",
    avoid: ["Fisheye", "Pose héroïque", "Lignes courbes", "Contre-plongée extrême"],
    videoNegativePrompt: "fisheye distortion, bent architecture, superhero pose, fast tilt, camera roll, body stretch, new lights",
  },
  {
    id: "LV-BS-06",
    title: "Back shot",
    intention: "Passer de l’observation à l’entrée dans le lieu.",
    imagePrompt:
      `cinematic back shot, ${identity}, ${world}, Lyra centered low in frame facing the dark vertical corridor, shoulders and wet hair clearly identifiable, access marker in right hand, long path ahead, 40mm lens, calm threshold moment`,
    klingPrompt:
      "Camera remains locked behind Lyra, she shifts her weight forward and takes one measured first step into the corridor, right hand keeps the marker stable, coatless matte suit and silhouette remain unchanged, distant light flickers once.",
    cameraMovement: "Caméra fixe",
    intensity: "Faible, 2/5",
    avoid: ["Demi-tour", "Nouvelle coiffure", "Course", "Bras qui changent de côté"],
    videoNegativePrompt: "turning toward camera, running, hair length change, marker hand switch, extra limb, outfit mutation, camera shake",
  },
  {
    id: "LV-WK-07",
    title: "Walking shot",
    intention: "Créer un déplacement mesuré compatible avec la continuité.",
    imagePrompt:
      `cinematic full-body walking shot, ${identity}, ${world}, Lyra moving left to right across a wet service platform, one foot grounded and one beginning the next step, arms controlled, access marker in right hand, 50mm lens, readable silhouette, realistic balance`,
    klingPrompt:
      "Side-on tracking shot matching Lyra's measured walking speed for two complete steps, stable torso, natural foot contact, restrained arm movement, access marker remains in the right hand, background passes with realistic parallax.",
    cameraMovement: "Tracking latéral",
    intensity: "Modérée, 3/5",
    avoid: ["Patinage des pieds", "Bras élastiques", "Vitesse variable", "Décor flottant"],
    videoNegativePrompt: "foot sliding, floating walk, rubber limbs, speed ramp, hand mutation, changing outfit, unstable background, camera bob",
  },
  {
    id: "LV-ECU-08",
    title: "Extreme close-up",
    intention: "Isoler un indice sans perdre l’identité de Lyra.",
    imagePrompt:
      `extreme cinematic close-up of Lyra Voss's calm intense green eye and upper cheek, subtle freckles, wet dark honey-brown hair crossing the edge of frame, one cyan reflection from the access marker, visible pores and rain micro-droplets, 85mm macro feeling, grounded film texture`,
    klingPrompt:
      "Locked extreme close-up, the cyan marker reflection crosses the eye slowly, one natural blink near the end, skin texture and eye shape remain stable, no head movement, three-second insert.",
    cameraMovement: "Caméra verrouillée",
    intensity: "Très faible, 1/5",
    avoid: ["Œil qui change", "Macro abstraite", "Blink répété", "Reflet aléatoire"],
    videoNegativePrompt: "eye color change, iris mutation, repeated blinking, skin smoothing, abstract macro, camera shake, face morph, text",
  },
];

export const lyraAnalysisChecklist = [
  { label: "Visage cohérent ?", check: "Forme, proportions, yeux, nez et implantation comparables aux références." },
  { label: "Silhouette cohérente ?", check: "Taille relative, épaules, bassin et longueur des membres restent stables." },
  { label: "Tenue cohérente ?", check: "Même combinaison noire mate, mêmes panneaux, aucun ajout lumineux." },
  { label: "Peau réaliste ?", check: "Pores et micro-imperfections visibles, sans lissage beauté ni matière plastique." },
  { label: "Mouvement crédible ?", check: "Poids, inertie, contacts au sol, cheveux et pluie suivent une physique lisible." },
  { label: "Caméra physique ?", check: "Trajectoire, vitesse, focale et parallaxe restent compatibles." },
  { label: "Continuité décor ?", check: "Géographie, lumières fixes, météo et architecture ne mutent pas." },
  { label: "Plan utile dans le récit ?", check: "Le plan ajoute une information, une décision ou un changement d’état." },
];
