export type CompositionDiagramType =
  | "thirds"
  | "centered"
  | "leading-lines"
  | "symmetry"
  | "framing"
  | "negative-space"
  | "fill-frame"
  | "diagonal"
  | "patterns"
  | "layers"
  | "golden-ratio"
  | "triangle"
  | "odds"
  | "balance"
  | "s-curve"
  | "asymmetry"
  | "minimalism"
  | "visual-weight";

export interface CompositionPrinciple {
  id: string;
  number: string;
  title: string;
  englishName: string;
  definition: string;
  narrativeEffect: string;
  filmmakingUse: string;
  diagram: CompositionDiagramType;
  promptPattern: string;
  prompt: string;
  negativePrompt: string;
  tags: string[];
}

const verticalSilenceBase =
  "Lyra Voss, Vertical Silence, restrained cyberpunk, rain, wet concrete, abandoned vertical megastructure, blue-grey night, faint cyan practical light, calm tension, grounded physical realism";

export const compositionPrinciples: CompositionPrinciple[] = [
  {
    id: "rule-of-thirds",
    number: "01",
    title: "Règle des tiers",
    englishName: "Rule of thirds",
    definition: "Place le sujet et les informations fortes sur une ligne ou une intersection de tiers.",
    narrativeEffect: "Crée une tension lisible entre le personnage, son regard et ce qui l'attend hors centre.",
    filmmakingUse:
      "Utile pour préparer un raccord regard, réserver une zone au décor ou laisser entrer un mouvement dans le cadre.",
    diagram: "thirds",
    promptPattern:
      "[shot scale] of [subject] on the [left/right] third, looking toward [story element], [negative space direction], [environment], [lighting], [lens], [mood]",
    prompt:
      "cinematic wide shot of Lyra Voss standing on the right third of the frame, looking toward a massive abandoned vertical structure in the distance, rain-soaked concrete foreground, vast negative space on the left, blue-grey night atmosphere, faint cyan rim light, 35mm film still, realistic cinematic lighting, subtle haze, grounded cyberpunk mood",
    negativePrompt:
      "centered subject, flat composition, oversaturated neon, plastic skin, text, watermark",
    tags: ["eyeline", "negative space", "establishing shot"],
  },
  {
    id: "centered-composition",
    number: "02",
    title: "Composition centrée",
    englishName: "Centered composition",
    definition: "Aligne le sujet principal sur l'axe central pour rendre sa présence frontale et incontestable.",
    narrativeEffect: "Produit autorité, confrontation, rituel ou immobilité sous pression.",
    filmmakingUse:
      "À employer pour un face-à-face caméra, une révélation architecturale ou un plan dont la stabilité doit résister à l'animation.",
    diagram: "centered",
    promptPattern:
      "perfectly centered [subject], frontal [shot scale], central vanishing point, [symmetrical environment], locked camera, [restrained light]",
    prompt:
      `cinematic frontal medium-wide shot, ${verticalSilenceBase}, Lyra Voss perfectly centered beneath the vertical concrete shaft, central vanishing point above her, locked camera, rain falling in straight lines, restrained cyan backlight, monumental scale, quiet confrontation, 40mm film still`,
    negativePrompt:
      "off-center subject, tilted horizon, random props, exaggerated heroic pose, saturated magenta neon, camera shake, text, watermark",
    tags: ["confrontation", "locked camera", "monumentality"],
  },
  {
    id: "leading-lines",
    number: "03",
    title: "Lignes directrices",
    englishName: "Leading lines",
    definition: "Utilise les lignes du décor pour conduire le regard vers le sujet ou une information narrative.",
    narrativeEffect: "Crée une trajectoire mentale, une menace convergente ou un appel vers le hors-champ.",
    filmmakingUse:
      "Les joints du béton, rails, câbles et bandes de lumière peuvent guider le regard et préparer un travelling.",
    diagram: "leading-lines",
    promptPattern:
      "[environment lines] converging toward [subject], [camera position], [destination], controlled perspective, [atmosphere]",
    prompt:
      `low cinematic wide shot, ${verticalSilenceBase}, drainage channels and concrete seams converging toward Lyra Voss at the base of the abandoned tower, camera close to the wet ground, subtle cyan utility lights repeating into the distance, 28mm lens, controlled perspective, calm forward tension`,
    negativePrompt:
      "lines leading away from subject, warped architecture, fisheye distortion, cluttered foreground, bright neon signs, floating objects, text",
    tags: ["movement", "perspective", "environment"],
  },
  {
    id: "symmetry",
    number: "04",
    title: "Symétrie",
    englishName: "Symmetry",
    definition: "Répartit des formes comparables de part et d'autre d'un axe clair.",
    narrativeEffect: "Évoque contrôle, institution, rituel, enfermement ou une perfection prête à se rompre.",
    filmmakingUse:
      "Idéale pour établir la géométrie d'un lieu avant de briser l'équilibre dans le plan suivant.",
    diagram: "symmetry",
    promptPattern:
      "symmetrical [location], [subject] on central axis, mirrored [architectural elements], precise horizon, [single controlled anomaly]",
    prompt:
      `symmetrical cinematic long shot inside the Vertical Silence transit hall, ${verticalSilenceBase}, Lyra Voss on the central axis, mirrored concrete pillars and dark doorways, precise level horizon, one failing cyan lamp on the left breaking the order, 35mm lens, controlled institutional tension`,
    negativePrompt:
      "uneven pillars, asymmetrical crop, dutch angle, decorative cyberpunk clutter, crowds, glossy surfaces, oversaturated lighting",
    tags: ["order", "architecture", "disruption"],
  },
  {
    id: "framing",
    number: "05",
    title: "Cadre dans le cadre",
    englishName: "Framing",
    definition: "Utilise une ouverture ou une masse de premier plan pour encadrer le sujet.",
    narrativeEffect: "Suggère observation, isolement, surveillance ou passage entre deux espaces.",
    filmmakingUse:
      "Une porte, une dalle cassée ou un câble proche caméra crée une profondeur utile au reveal et au parallaxe.",
    diagram: "framing",
    promptPattern:
      "viewed through [foreground frame], [subject] in [midground], [background information], layered depth, observational viewpoint",
    prompt:
      `cinematic shot framed through a broken concrete service doorway, ${verticalSilenceBase}, Lyra Voss standing in the rain at midground, abandoned vertical shaft rising behind her, dark doorway edges close to lens, subtle foreground blur, 50mm lens, observational distance, restrained suspense`,
    negativePrompt:
      "frame blocking the face, flat depth, clean modern doorway, excessive bokeh, glowing armor, extra characters, text, watermark",
    tags: ["surveillance", "reveal", "foreground"],
  },
  {
    id: "negative-space",
    number: "06",
    title: "Espace négatif",
    englishName: "Negative space",
    definition: "Réserve une grande zone peu détaillée autour ou devant le sujet.",
    narrativeEffect: "Amplifie solitude, attente, vulnérabilité ou menace invisible.",
    filmmakingUse:
      "L'espace vide doit correspondre au regard, au déplacement prévu ou à l'arrivée d'un élément dans la séquence.",
    diagram: "negative-space",
    promptPattern:
      "[subject] small on [frame edge], vast empty [surface/sky] toward [direction], minimal detail, [subtle light], [emotion]",
    prompt:
      `cinematic extreme wide shot, ${verticalSilenceBase}, Lyra Voss small at the far right edge beneath a concrete overhang, vast empty rain-filled space extending left toward the abandoned vertical structure, minimal practical lights, 32mm lens, physical rain and mist, quiet isolation before movement`,
    negativePrompt:
      "centered subject, filled background, random vehicles, crowded skyline, colorful neon, decorative holograms, text, watermark",
    tags: ["isolation", "arrival space", "scale"],
  },
  {
    id: "fill-the-frame",
    number: "07",
    title: "Remplir le cadre",
    englishName: "Fill the frame",
    definition: "Réduit presque tout l'espace autour d'un visage, d'un geste ou d'un objet décisif.",
    narrativeEffect: "Intensifie la sensation, supprime les échappatoires et transforme un détail en événement.",
    filmmakingUse:
      "À réserver aux inserts et gros plans dont la texture restera stable pendant une animation courte.",
    diagram: "fill-frame",
    promptPattern:
      "frame filled by [detail], minimal background, readable texture, [micro action], controlled shallow depth, [emotional function]",
    prompt:
      `extreme cinematic close-up filling the frame with Lyra Voss's rain-soaked face, wet skin texture and one calm focused eye reflecting the Vertical Silence shaft, faint cyan rim light, restrained breathing, 85mm lens, physically realistic rain droplets, intimate controlled tension`,
    negativePrompt:
      "wide framing, cropped eye, plastic skin, beauty retouching, exaggerated makeup, face deformation, neon color spill, text",
    tags: ["insert", "emotion", "texture"],
  },
  {
    id: "diagonal-composition",
    number: "08",
    title: "Composition diagonale",
    englishName: "Diagonal composition",
    definition: "Organise les masses et les directions selon un axe oblique dominant.",
    narrativeEffect: "Installe énergie, instabilité, progression ou danger latent.",
    filmmakingUse:
      "La diagonale peut venir d'un escalier, d'une ombre ou d'une trajectoire, sans incliner artificiellement la caméra.",
    diagram: "diagonal",
    promptPattern:
      "[dominant diagonal element] crossing frame, [subject] positioned against its direction, level camera, [action tension]",
    prompt:
      `cinematic wide shot of Lyra Voss crossing a sloped maintenance ramp beneath the abandoned vertical structure, a strong concrete diagonal rising from lower left to upper right, camera kept level, rainwater flowing against her movement, sparse cyan safety lights, 35mm lens, grounded cyberpunk tension`,
    negativePrompt:
      "dutch angle, impossible slope, floating water, dynamic action pose, excessive motion blur, saturated neon, warped architecture",
    tags: ["energy", "direction", "architecture"],
  },
  {
    id: "patterns-repetition",
    number: "09",
    title: "Motifs et répétition",
    englishName: "Patterns and repetition",
    definition: "Répète formes, intervalles ou lumières pour construire un rythme visuel.",
    narrativeEffect: "Évoque système, routine, oppression, puis attire l'attention sur l'élément qui rompt la série.",
    filmmakingUse:
      "Les répétitions simples sont efficaces pour un travelling, à condition de verrouiller leur géométrie.",
    diagram: "patterns",
    promptPattern:
      "repeating [architectural units] across frame, consistent spacing, [subject/anomaly] breaking the pattern, controlled rhythm",
    prompt:
      `cinematic lateral wide shot, repeating concrete support bays and dim cyan maintenance lamps across the Vertical Silence structure, consistent spacing and perspective, Lyra Voss standing motionless in the only unlit bay, wet floor reflections, 50mm lens, restrained visual rhythm, calm unease`,
    negativePrompt:
      "irregular spacing, duplicated character, random lamp colors, ornate details, busy signage, warped columns, text",
    tags: ["rhythm", "anomaly", "tracking shot"],
  },
  {
    id: "depth-layering",
    number: "10",
    title: "Profondeur et couches",
    englishName: "Depth / layering",
    definition: "Sépare clairement premier plan, sujet, second plan et fond atmosphérique.",
    narrativeEffect: "Donne une sensation de monde habité et transforme un cadre fixe en espace traversable.",
    filmmakingUse:
      "Essentielle pour préparer parallaxe, rack focus, reveal ou déplacement latéral en image-to-video.",
    diagram: "layers",
    promptPattern:
      "[foreground occlusion], [subject in midground], [story element in background], atmospheric separation, parallax-ready composition",
    prompt:
      `layered cinematic wide shot, blurred rain chain and dark concrete edge in the foreground, Lyra Voss in the midground under a restrained cyan work light, the abandoned Vertical Silence tower fading into mist in the deep background, wet concrete reflections, 40mm lens, clear depth separation, designed for a slow lateral dolly`,
    negativePrompt:
      "flat staging, all elements on one plane, excessive blur, subject hidden by foreground, fast camera move, floating rain, neon clutter",
    tags: ["parallax", "image-to-video", "rack focus"],
  },
  {
    id: "golden-ratio",
    number: "11",
    title: "Nombre d'or",
    englishName: "Golden ratio",
    definition: "Organise le regard selon une courbe qui se resserre vers un point focal.",
    narrativeEffect: "Produit une lecture fluide et progressive, moins évidente qu'une grille de tiers.",
    filmmakingUse:
      "Utile pour relier plusieurs niveaux d'information dans un plan d'exploration ou de découverte.",
    diagram: "golden-ratio",
    promptPattern:
      "visual flow following a golden spiral from [foreground] through [midground] toward [focal subject], organic progression",
    prompt:
      `cinematic establishing shot composed along a golden spiral, rainwater curve beginning in the lower-left foreground, passing a broken service light and leading toward Lyra Voss near the upper-right focal point, Vertical Silence concrete walls enclosing the path, blue-grey night, 35mm lens, subtle cyan accents, quiet discovery`,
    negativePrompt:
      "obvious graphic spiral, random curved objects, centered subject, decorative neon, fantasy architecture, cluttered focal points, text",
    tags: ["visual flow", "discovery", "establishing shot"],
  },
  {
    id: "triangular-composition",
    number: "12",
    title: "Composition triangulaire",
    englishName: "Triangular composition",
    definition: "Relie trois points forts pour former une structure visuelle stable ou conflictuelle.",
    narrativeEffect: "Crée hiérarchie, alliance, opposition ou tension entre trois informations.",
    filmmakingUse:
      "Fonctionne pour un personnage confronté à deux sources de danger ou pour stabiliser un groupe impair.",
    diagram: "triangle",
    promptPattern:
      "three focal points forming a clear triangle: [subject], [light/object], [threat/architecture], readable separation",
    prompt:
      `cinematic medium-wide shot with a triangular composition: Lyra Voss at the lower center, a faint cyan warning lamp above left, and the dark opening of the Vertical Silence shaft above right, rain connecting the three focal points, wet concrete, 45mm lens, restrained cyberpunk realism, controlled suspense`,
    negativePrompt:
      "four competing focal points, flat horizontal lineup, bright colorful lights, abstract geometry overlay, extra characters, text",
    tags: ["three points", "tension", "hierarchy"],
  },
  {
    id: "rule-of-odds",
    number: "13",
    title: "Règle des impairs",
    englishName: "Rule of odds",
    definition: "Groupe trois ou cinq éléments pour éviter une division trop mécanique du cadre.",
    narrativeEffect: "Crée un rythme naturel et désigne plus facilement un élément central ou divergent.",
    filmmakingUse:
      "À utiliser avec trois lumières, trois silhouettes architecturales ou trois objets narratifs clairement distincts.",
    diagram: "odds",
    promptPattern:
      "three [repeated elements] arranged around [subject/focal element], one dominant, clear spacing, restrained scene",
    prompt:
      `cinematic wide shot of Lyra Voss facing three vertical service pylons in the rain, the central pylon dark and taller while two dim cyan pylons flank it, abandoned concrete platform, blue-grey night, 35mm lens, clear odd-number rhythm, restrained mystery, grounded physical materials`,
    negativePrompt:
      "four pylons, duplicated structures, equal visual importance, decorative lights, busy background, oversaturated cyan, text",
    tags: ["rhythm", "grouping", "production design"],
  },
  {
    id: "balance",
    number: "14",
    title: "Équilibre",
    englishName: "Balance",
    definition: "Compense une masse forte par une autre masse, une lumière ou plusieurs éléments secondaires.",
    narrativeEffect: "Maintient la stabilité du cadre tout en laissant subsister une relation de pouvoir.",
    filmmakingUse:
      "Permet d'opposer la silhouette de Lyra à l'échelle de la structure sans recentrer automatiquement le sujet.",
    diagram: "balance",
    promptPattern:
      "large [visual mass] balanced by [subject/smaller lights] across frame, unequal scale, stable horizon, controlled contrast",
    prompt:
      `cinematic long shot, the massive dark concrete wall of Vertical Silence occupying the left two-thirds, balanced by Lyra Voss and two restrained cyan utility lights on the lower right, wet platform, level horizon, 35mm lens, blue-grey rain atmosphere, stable but unequal visual power`,
    negativePrompt:
      "perfect symmetry, centered wall, random props used as balance, bright signage, floating lights, tilted horizon, text",
    tags: ["visual mass", "scale", "stability"],
  },
  {
    id: "s-curve",
    number: "15",
    title: "Courbe en S",
    englishName: "S-curve",
    definition: "Fait circuler le regard le long d'une trajectoire souple en deux inflexions.",
    narrativeEffect: "Suggère exploration, lente révélation ou mouvement contenu dans un espace rigide.",
    filmmakingUse:
      "Une route mouillée, un câble ou un filet d'eau peut porter la courbe sans transformer le décor en illustration abstraite.",
    diagram: "s-curve",
    promptPattern:
      "S-shaped [path/reflection] moving from foreground to [subject] and continuing toward [background destination], deep composition",
    prompt:
      `cinematic elevated wide shot, an S-shaped trail of rainwater and faint reflected cyan light winding from the foreground toward Lyra Voss, then curving behind her into the abandoned Vertical Silence passage, wet concrete, sparse industrial detail, 35mm lens, slow exploratory tension, realistic water flow`,
    negativePrompt:
      "graphic painted S shape, impossible water path, centered subject, fantasy glow, crowded set, excessive reflections, text",
    tags: ["path", "exploration", "deep focus"],
  },
  {
    id: "asymmetry",
    number: "16",
    title: "Asymétrie",
    englishName: "Asymmetry",
    definition: "Assume une répartition inégale des formes tout en conservant une lecture stable.",
    narrativeEffect: "Crée malaise, attente ou déséquilibre psychologique sans perdre la lisibilité.",
    filmmakingUse:
      "Associez une masse architecturale dominante à un personnage plus petit et à un contrepoids lumineux discret.",
    diagram: "asymmetry",
    promptPattern:
      "deliberately asymmetrical frame, dominant [mass] on one side, small [subject] off-axis, subtle counterweight, stable camera",
    prompt:
      `deliberately asymmetrical cinematic frame, a towering broken concrete column dominating the right side, Lyra Voss small and low on the left, one faint cyan reflection acting as a visual counterweight, Vertical Silence in rain, 40mm lens, stable camera, controlled psychological unease`,
    negativePrompt:
      "accidental crop, centered subject, symmetrical pillars, excessive empty space without direction, bright neon, dutch angle, text",
    tags: ["unease", "off-axis", "counterweight"],
  },
  {
    id: "minimalism",
    number: "17",
    title: "Minimalisme",
    englishName: "Minimalism",
    definition: "Réduit le cadre à quelques formes, couleurs et informations nécessaires.",
    narrativeEffect: "Renforce silence, décision, solitude et précision du geste.",
    filmmakingUse:
      "Réduit les dérives de génération et fournit une frame stable pour les plans contemplatifs ou les transitions.",
    diagram: "minimalism",
    promptPattern:
      "minimal cinematic frame with only [subject], [single architectural mass], [single light cue], limited palette, no decorative detail",
    prompt:
      `minimal cinematic wide shot, Lyra Voss alone beside one monolithic concrete wall, one faint cyan line reflected on wet ground, empty blue-grey rain atmosphere, Vertical Silence, limited palette, 50mm lens, no decorative technology, calm tension, grounded physical realism`,
    negativePrompt:
      "busy cyberpunk city, multiple signs, props, crowds, colorful neon, holograms, complex costume details, text, watermark",
    tags: ["stability", "silence", "limited palette"],
  },
  {
    id: "visual-weight",
    number: "18",
    title: "Poids visuel",
    englishName: "Visual weight",
    definition: "Évalue l'attraction créée par la taille, le contraste, la couleur, la netteté et la position.",
    narrativeEffect: "Détermine silencieusement ce qui domine le personnage ou ce qu'il parvient à dominer.",
    filmmakingUse:
      "Contrôlez explicitement la zone la plus lumineuse et la plus nette pour empêcher l'IA de déplacer le point focal.",
    diagram: "visual-weight",
    promptPattern:
      "[primary subject] carries highest contrast and sharpness, [secondary mass] larger but lower contrast, controlled focal hierarchy",
    prompt:
      `cinematic medium-wide shot, Lyra Voss carrying the highest contrast and sharpest detail under a narrow cyan rim light, the enormous Vertical Silence structure behind her larger but submerged in low-contrast blue-grey mist, rain-soaked concrete, 45mm lens, deliberate focal hierarchy, restrained cyberpunk realism`,
    negativePrompt:
      "bright background stealing focus, equal sharpness everywhere, glowing architecture, flat contrast, plastic skin, random highlights, text",
    tags: ["focal hierarchy", "contrast", "sharpness"],
  },
];

export const featuredCompositionPrinciples = compositionPrinciples.slice(0, 6);

export const promptLayers = [
  { label: "Sujet", value: "Lyra Voss, silhouette et état constants" },
  { label: "Action", value: "observer, attendre, traverser ou découvrir" },
  { label: "Placement", value: "position dans le cadre et direction du regard" },
  { label: "Profondeur", value: "premier plan, sujet, structure et atmosphère" },
  { label: "Lumière", value: "source motivée, contraste et zone dominante" },
  { label: "Caméra", value: "échelle de plan, hauteur, focale et stabilité" },
  { label: "Intention", value: "tension calme, isolement ou révélation" },
  { label: "Contraintes", value: "éléments interdits et continuité physique" },
];

export const compositionPrompt = compositionPrinciples[0].prompt;
export const compositionNegativePrompt = compositionPrinciples[0].negativePrompt;

export const compositionCases = [
  {
    label: "Dialogue",
    title: "Préserver l'axe et les regards",
    setup: "Deux personnages, une tension, un décor stable.",
    decision:
      "Placez chaque regard vers l'intérieur du cadre et conservez une zone de décor commune entre les contrechamps.",
    prompt:
      "over-the-shoulder dialogue shot, character looking into frame, consistent eyeline, shared concrete landmark, restrained cyan practical light",
  },
  {
    label: "Révélation",
    title: "Construire trois niveaux",
    setup: "Un indice doit apparaître sans être montré trop tôt.",
    decision:
      "Masquez partiellement le sujet au premier plan, gardez l'indice au second et ouvrez le fond pour le plan suivant.",
    prompt:
      "foreground concrete edge partially obscuring the frame, clue revealed in midground, deep background opening inside Vertical Silence",
  },
  {
    label: "Image-to-video",
    title: "Composer pour le mouvement",
    setup: "La frame doit supporter un travelling latéral.",
    decision:
      "Créez des plans séparés dans la profondeur et laissez une trajectoire claire autour du sujet.",
    prompt:
      "layered composition designed for a slow lateral dolly, stable Lyra Voss, parallax-ready foreground, physically realistic rain",
  },
];

export const compositionChecklist = [
  "Le sujet principal est identifiable en moins de deux secondes.",
  "Le cadre contient un point d'entrée et une direction de lecture.",
  "Le principe dominant sert l'intention narrative du plan.",
  "Les couches de profondeur ont chacune une fonction.",
  "L'espace libre correspond au regard ou au mouvement attendu.",
  "Le décor soutient l'histoire sans concurrencer Lyra Voss.",
  "La frame peut être reliée au plan précédent et au plan suivant.",
  "Le negative prompt interdit les ajouts qui cassent la composition.",
];
