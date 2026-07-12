export interface LearningLink {
  label: string;
  href: string;
  note?: string;
}

export interface LearningConcept {
  title: string;
  description: string;
}

export interface LearningPath {
  family: "Création visuelle" | "Cinématographie" | "Production IA";
  eyebrow: string;
  intention: string;
  why: string;
  imageApplication: string;
  videoApplication: string;
  concepts: LearningConcept[];
  errors: string[];
  promptTitle: string;
  prompt: string;
  negativePrompt: string;
  practice: string[];
  resources: LearningLink[];
  prompts: LearningLink[];
  project: LearningLink;
}

export const learningPaths: Record<string, LearningPath> = {
  "creation-visuelle": {
    family: "Création visuelle",
    eyebrow: "Images et direction artistique",
    intention:
      "Construire un langage visuel cohérent avant de produire des images isolées : références, composition, lumière, matières, palette et contraintes.",
    why:
      "Sans direction artistique explicite, les outils génèrent des images séduisantes mais incompatibles entre elles. Une création visuelle solide transforme une intuition en système reproductible.",
    imageApplication:
      "Définissez une bible courte : sujet, monde, palette, matières, contraste, composition et éléments interdits. Produisez ensuite des variations contrôlées plutôt que de réécrire le concept à chaque image.",
    videoApplication:
      "Une frame destinée à l'animation doit posséder des couches séparées, une silhouette lisible, des matières crédibles et une lumière suffisamment stable pour supporter le mouvement.",
    concepts: [
      { title: "Références actives", description: "Analyser ce que chaque référence apporte : palette, matière, cadrage ou lumière." },
      { title: "Système visuel", description: "Définir des constantes observables plutôt qu'une accumulation d'adjectifs de style." },
      { title: "Variation contrôlée", description: "Modifier une variable à la fois pour comparer les résultats et documenter les dérives." },
      { title: "Frame exploitable", description: "Évaluer l'image comme point de départ d'un plan, pas seulement comme illustration finale." },
    ],
    errors: [
      "Confondre direction artistique et liste de styles.",
      "Changer simultanément palette, lieu, focale et costume.",
      "Choisir une image spectaculaire mais impossible à raccorder.",
      "Ne pas documenter les constantes et les interdits.",
    ],
    promptTitle: "Plan maître de direction artistique",
    prompt:
      "cinematic wide establishing frame for Vertical Silence, Lyra Voss entering an abandoned vertical concrete complex under restrained rain, blue-grey night palette, wet mineral surfaces, one faint cyan practical light, readable silhouette, layered depth, grounded physical realism, 35mm film still, calm tension, designed as a repeatable visual reference",
    negativePrompt:
      "oversaturated neon, decorative cyberpunk clutter, fantasy architecture, glossy plastic surfaces, random costume changes, text, watermark",
    practice: [
      "Sélectionner trois références et attribuer une fonction précise à chacune.",
      "Écrire cinq constantes visuelles et cinq interdits.",
      "Générer trois frames en ne changeant que l'échelle de plan.",
      "Choisir la frame qui pourra le mieux ouvrir une séquence.",
    ],
    resources: [
      { label: "Cheat sheet de composition", href: "/resources/composition-cheat-sheet/" },
      { label: "Bibliothèque de références", href: "/references/" },
    ],
    prompts: [
      { label: "Prompts Composition", href: "/prompts/?category=composition" },
      { label: "Prompt maître Lyra Voss", href: "/prompts/?category=character-consistency" },
    ],
    project: {
      label: "Étude de cas Lyra Voss",
      href: "/projects/lyra-voss/",
      note: "Créer la bible visuelle et sélectionner les frames fondatrices.",
    },
  },
  cinematographie: {
    family: "Cinématographie",
    eyebrow: "Plans, angles et mouvement",
    intention:
      "Choisir une position de caméra pour son effet narratif, puis maintenir une logique de plans à l'échelle d'une séquence.",
    why:
      "Une focale, une hauteur ou une distance ne sont pas des ornements techniques. Elles règlent la relation entre le spectateur, le personnage et le monde.",
    imageApplication:
      "Décrivez l'échelle, l'angle, la focale, la hauteur et la perspective avant la texture ou le style. Comparez plusieurs options avec un sujet et un décor constants.",
    videoApplication:
      "Séparez mouvement caméra, mouvement sujet et mouvement environnement. Le mouvement doit prolonger la composition de la frame de départ au lieu de la combattre.",
    concepts: [
      { title: "Échelle de plan", description: "Doser contexte, posture et émotion selon la distance apparente." },
      { title: "Angle", description: "Construire autorité, vulnérabilité ou relation par la hauteur caméra." },
      { title: "Focale", description: "Contrôler compression, profondeur et proximité sans se limiter au recadrage." },
      { title: "Mouvement motivé", description: "Déplacer la caméra parce qu'une information ou une émotion évolue." },
    ],
    errors: [
      "Demander plusieurs mouvements de caméra incompatibles.",
      "Utiliser une contre-plongée sans intention de pouvoir.",
      "Changer de focale et de décor entre deux contrechamps.",
      "Confondre zoom numérique et déplacement physique.",
    ],
    promptTitle: "Révélation par mouvement de caméra",
    prompt:
      "cinematic medium-wide shot of Lyra Voss at eye level inside Vertical Silence, 40mm lens, camera begins behind a wet concrete pillar and performs a slow lateral dolly to reveal the abandoned shaft, Lyra remains still, rain and distant cables move subtly, stable perspective, physically plausible parallax, restrained cyan practical light",
    negativePrompt:
      "fast orbit, random zoom, dutch angle, face deformation, changing architecture, floating rain, oversaturated neon, camera shake",
    practice: [
      "Définir l'émotion du plan avant de choisir l'angle.",
      "Créer trois variantes : 28 mm, 50 mm et 85 mm.",
      "Comparer ce que chaque focale révèle ou supprime.",
      "Ajouter un seul mouvement motivé à la meilleure frame.",
    ],
    resources: [
      { label: "Référentiel des plans caméra", href: "/references/camera-shots/" },
      { label: "Checklist shot-list", href: "/resources/shot-list-checklist/" },
    ],
    prompts: [
      { label: "Prompts caméra", href: "/prompts/?category=camera-movement" },
      { label: "Prompts Composition", href: "/prompts/?category=composition" },
    ],
    project: {
      label: "Neon Samurai",
      href: "/projects/neon-samurai/",
      note: "Découper une entrée dramatique en trois distances et un mouvement.",
    },
  },
  "production-ia": {
    family: "Production IA",
    eyebrow: "Du brief à la critique",
    intention:
      "Organiser personnages, frames, animations, montage et documentation dans un pipeline de production vérifiable.",
    why:
      "La qualité d'un projet IA dépend moins d'un résultat chanceux que de la capacité à conserver les décisions, comparer les versions et reprendre une étape sans recommencer tout le projet.",
    imageApplication:
      "Numérotez les frames, conservez prompts, références et paramètres, puis qualifiez chaque image selon sa fonction dans la séquence.",
    videoApplication:
      "Associez chaque clip à une frame source, un mouvement attendu, des contraintes et un statut de validation avant le montage.",
    concepts: [
      { title: "Pipeline", description: "Découper le travail en décisions validables et réversibles." },
      { title: "Nommage", description: "Identifier clairement scènes, plans, versions et outils." },
      { title: "Validation", description: "Définir des critères de continuité, mouvement et lisibilité." },
      { title: "Analyse critique", description: "Comparer intention, résultat et correction au lieu de noter seulement la préférence." },
    ],
    errors: [
      "Mélanger explorations et fichiers validés.",
      "Ne pas conserver le prompt ou la frame source d'un clip.",
      "Monter avant d'avoir contrôlé la continuité.",
      "Documenter uniquement les réussites et perdre les corrections utiles.",
    ],
    promptTitle: "Prompt de plan versionné",
    prompt:
      "SC03_SH07_V02, image-to-video from approved Lyra Voss reference frame, slow controlled push-in toward her face while she remains still, only rain, hair tips and distant hanging cables move, Vertical Silence architecture and cyan practical light remain unchanged, five-second cinematic shot, realistic physics, preserve identity and costume",
    negativePrompt:
      "new character, outfit change, architecture mutation, fast motion, camera shake, warped face, extra limbs, random light changes",
    practice: [
      "Créer une convention de nommage scène-plan-version.",
      "Associer chaque clip à sa frame et son prompt source.",
      "Définir trois critères de validation avant génération.",
      "Documenter une erreur, sa cause probable et la correction testée.",
    ],
    resources: [
      { label: "Template de bible de production", href: "/resources/production-bible-template/" },
      { label: "Projets documentés", href: "/projects/" },
    ],
    prompts: [
      { label: "Prompts personnage", href: "/prompts/?category=character-consistency" },
      { label: "Prompts vidéo", href: "/prompts/?category=image-to-video" },
    ],
    project: {
      label: "Étude de cas Lyra Voss",
      href: "/projects/lyra-voss/",
      note: "Assembler références, prompts, frames, clips et analyse critique.",
    },
  },
  "lumiere-couleur": {
    family: "Création visuelle",
    eyebrow: "Lumière motivée et palette",
    intention:
      "Utiliser lumière et couleur pour hiérarchiser le cadre, indiquer une source crédible et maintenir une continuité émotionnelle.",
    why:
      "Les générateurs ajoutent facilement des lumières décoratives. Une lumière motivée donne du volume, dirige le regard et relie les plans d'un même espace.",
    imageApplication:
      "Nommez la source, sa direction, sa qualité, sa couleur et la zone qu'elle doit dominer. Limitez la palette à quelques fonctions.",
    videoApplication:
      "Conservez la direction et l'intensité de la source pendant le mouvement. Les variations doivent provenir d'un événement visible : enseigne, passage, reflet ou extinction.",
    concepts: [
      { title: "Source motivée", description: "La lumière provient d'un élément plausible du décor." },
      { title: "Contraste", description: "Le rapport clair-obscur définit le point focal et le niveau de menace." },
      { title: "Palette fonctionnelle", description: "Chaque couleur sert un espace, un personnage ou une information." },
      { title: "Continuité", description: "Direction, température et exposition restent cohérentes entre les plans." },
    ],
    errors: [
      "Multiplier les néons sans source visible.",
      "Éclairer le visage différemment à chaque plan.",
      "Utiliser une palette saturée qui concurrence l'action.",
      "Confondre ambiance sombre et image sous-exposée illisible.",
    ],
    promptTitle: "Lumière motivée dans Vertical Silence",
    prompt:
      "cinematic medium shot of Lyra Voss under a single failing cyan maintenance lamp inside Vertical Silence, cool light from upper left shaping one side of her face, weak warm spill from a distant service corridor, wet concrete absorbing most reflections, blue-grey shadows, realistic exposure, restrained palette, calm tension, 50mm film still",
    negativePrompt:
      "multiple colored rim lights, magenta neon wash, flat frontal lighting, crushed black face, glowing skin, random lens flares, text",
    practice: [
      "Identifier la source principale dans le décor.",
      "Définir une couleur dominante et une couleur d'accent.",
      "Tester trois niveaux de contraste avec le même cadre.",
      "Vérifier la direction de lumière sur le plan suivant.",
    ],
    resources: [
      { label: "Références visuelles", href: "/references/" },
      { label: "Cheat sheet de composition", href: "/resources/composition-cheat-sheet/" },
    ],
    prompts: [
      { label: "Prompts Composition", href: "/prompts/?category=composition" },
      { label: "Prompts personnage", href: "/prompts/?category=character-consistency" },
    ],
    project: {
      label: "Neon Samurai",
      href: "/projects/neon-samurai/",
      note: "Créer une palette nocturne cohérente sur trois plans.",
    },
  },
  "profondeur-de-champ": {
    family: "Création visuelle",
    eyebrow: "Netteté, focale et profondeur",
    intention:
      "Contrôler ce qui est net, ce qui reste lisible et comment le regard traverse les différents plans de l'image.",
    why:
      "Une profondeur de champ arbitraire peut effacer le décor, masquer un indice ou rendre impossible un rack focus. Elle doit servir l'information du plan.",
    imageApplication:
      "Décrivez le plan de mise au point, la distance sujet-caméra, la focale et le niveau de séparation souhaité.",
    videoApplication:
      "Un changement de focus doit avoir une cible et un moment précis. Préservez des contours suffisants pour éviter la reconstruction instable.",
    concepts: [
      { title: "Plan de netteté", description: "Choisir l'information qui doit être immédiatement lisible." },
      { title: "Séparation", description: "Détacher le sujet sans dissoudre le monde autour de lui." },
      { title: "Profondeur lisible", description: "Conserver des repères au premier plan, au milieu et au fond." },
      { title: "Rack focus", description: "Transférer l'attention entre deux sujets déjà présents dans le cadre." },
    ],
    errors: [
      "Demander un bokeh extrême sur un plan narratif large.",
      "Rendre flou l'élément nécessaire au raccord.",
      "Ajouter un rack focus sans deuxième cible lisible.",
      "Employer une focale sans cohérence avec la perspective souhaitée.",
    ],
    promptTitle: "Rack focus préparé dès la frame",
    prompt:
      "cinematic over-the-shoulder frame inside Vertical Silence, wet cable connector sharp in the near foreground, Lyra Voss readable but softly out of focus in the midground, abandoned shaft visible as low-contrast background geometry, 65mm lens, shallow but controlled depth of field, composition designed for a slow rack focus from connector to Lyra",
    negativePrompt:
      "everything blurred, extreme bokeh circles, missing background, warped foreground object, instant focus jump, face deformation, glossy neon",
    practice: [
      "Nommer le plan de netteté avant de générer.",
      "Créer une version profonde et une version sélective.",
      "Vérifier que l'élément flou reste identifiable.",
      "Décrire le rack focus uniquement si deux cibles existent.",
    ],
    resources: [
      { label: "Référentiel des plans", href: "/references/camera-shots/" },
      { label: "Bibliothèque de prompts", href: "/prompts/" },
    ],
    prompts: [
      { label: "Prompts caméra", href: "/prompts/?category=camera-movement" },
      { label: "Prompts Composition", href: "/prompts/?category=composition" },
    ],
    project: {
      label: "Étude de cas Lyra Voss",
      href: "/projects/lyra-voss/",
      note: "Créer un insert, un portrait et un rack focus cohérents.",
    },
  },
  "ecriture-scenaristique": {
    family: "Cinématographie",
    eyebrow: "Intention, action et transformation",
    intention:
      "Formuler une scène courte en termes d'objectif, obstacle, information et changement observable.",
    why:
      "L'IA peut produire des plans, mais elle ne décide pas pourquoi ils existent. L'écriture donne une fonction à chaque image et empêche la séquence de devenir une suite d'ambiances.",
    imageApplication:
      "Chaque frame clé doit représenter un état dramatique distinct : avant l'action, décision, conséquence ou révélation.",
    videoApplication:
      "Décrivez une seule action principale par plan et reliez les mouvements à un changement de situation ou d'information.",
    concepts: [
      { title: "Objectif", description: "Ce que le personnage cherche à obtenir dans la scène." },
      { title: "Obstacle", description: "Ce qui retarde, menace ou oblige à changer de stratégie." },
      { title: "Beat", description: "Un changement perceptible d'information, d'action ou de pouvoir." },
      { title: "Image dramatique", description: "Une frame qui matérialise un état narratif plutôt qu'une ambiance générique." },
    ],
    errors: [
      "Écrire une scène uniquement comme description de décor.",
      "Multiplier les actions dans un clip de cinq secondes.",
      "Confondre mystère et absence d'information.",
      "Créer des plans sans changement entre leur début et leur fin.",
    ],
    promptTitle: "Beat narratif : la décision",
    prompt:
      "cinematic medium-wide shot, Lyra Voss stops at the threshold of the Vertical Silence shaft after discovering a damaged access marker, she looks from the marker to the darkness above and makes the decision to enter, restrained body movement, rain behind her, one cyan service light, clear beginning and ending pose, grounded tension",
    negativePrompt:
      "multiple simultaneous actions, running, fighting, dialogue text, random new characters, exaggerated emotion, location change, camera orbit",
    practice: [
      "Écrire l'objectif de Lyra en une phrase.",
      "Définir un obstacle visible et filmable.",
      "Découper la scène en trois beats.",
      "Associer une frame clé à chaque changement.",
    ],
    resources: [
      { label: "Projets documentés", href: "/projects/" },
      { label: "Template de bible de production", href: "/resources/production-bible-template/" },
    ],
    prompts: [
      { label: "Prompts personnage", href: "/prompts/?category=character-consistency" },
      { label: "Prompts vidéo", href: "/prompts/?category=image-to-video" },
    ],
    project: {
      label: "Neon Samurai",
      href: "/projects/neon-samurai/",
      note: "Écrire une micro-scène en trois beats avant le storyboard.",
    },
  },
  "storyboard-shotlist": {
    family: "Cinématographie",
    eyebrow: "Découpage et continuité",
    intention:
      "Transformer une scène en suite de plans nécessaires, puis documenter chaque plan pour la génération et le montage.",
    why:
      "Le storyboard protège l'intention globale ; la shot-list protège les contraintes de production. Ensemble, ils empêchent de générer des plans redondants ou impossibles à raccorder.",
    imageApplication:
      "Créez une frame de référence par plan avec numéro, échelle, axe, action, information et éléments constants.",
    videoApplication:
      "Ajoutez durée, mouvement caméra, mouvement sujet, état de départ, état de fin et risques de continuité.",
    concepts: [
      { title: "Fonction du plan", description: "Situer, orienter, révéler, rapprocher ou conclure." },
      { title: "Raccord", description: "Préserver regard, mouvement, lumière, décor et position." },
      { title: "Couverture", description: "Prévoir les plans nécessaires sans multiplier les variantes inutiles." },
      { title: "Critère de validation", description: "Définir ce qui doit rester stable avant de lancer la génération." },
    ],
    errors: [
      "Storyboarder uniquement des belles images sans fonction.",
      "Oublier le plan de situation ou les inserts nécessaires.",
      "Changer d'axe sans plan de transition.",
      "Ne pas préciser l'état final attendu d'un clip.",
    ],
    promptTitle: "Shot-list structurée pour un plan",
    prompt:
      "SC02_SH04, cinematic over-the-shoulder medium shot from behind Lyra Voss, she studies the access marker at the base of Vertical Silence, marker in sharp midground, shaft rising in background, consistent right-to-left eyeline, 50mm lens, static camera, five-second hold with subtle rain and breathing only",
    negativePrompt:
      "reverse eyeline, different marker, new costume, camera movement, extra character, unreadable hands, architecture change, text overlay",
    practice: [
      "Attribuer une fonction à chaque plan de la scène.",
      "Dessiner six vignettes simples en masses.",
      "Écrire la shot-list avec états de départ et de fin.",
      "Supprimer tout plan qui ne change pas l'information.",
    ],
    resources: [
      { label: "Checklist shot-list", href: "/resources/shot-list-checklist/" },
      { label: "Référentiel des plans", href: "/references/camera-shots/" },
    ],
    prompts: [
      { label: "Prompts Composition", href: "/prompts/?category=composition" },
      { label: "Prompts caméra", href: "/prompts/?category=camera-movement" },
    ],
    project: {
      label: "Neon Samurai",
      href: "/projects/neon-samurai/",
      note: "Produire un storyboard de six plans et sa shot-list.",
    },
  },
  stabiliser: {
    family: "Production IA",
    eyebrow: "Identité, décor et continuité",
    intention:
      "Identifier ce qui doit rester constant, ce qui peut varier et comment contrôler les dérives entre images et clips.",
    why:
      "Une séquence devient crédible lorsque le spectateur reconnaît immédiatement le personnage, le lieu, la lumière et la logique physique d'un plan à l'autre.",
    imageApplication:
      "Séparez prompt personnage, prompt monde et prompt de plan. Utilisez des références dédiées et un vocabulaire stable.",
    videoApplication:
      "Limitez les changements simultanés et formulez explicitement les éléments à préserver : visage, tenue, proportions, architecture et source lumineuse.",
    concepts: [
      { title: "Constantes", description: "Traits, matières, palette et géométrie qui ne doivent pas dériver." },
      { title: "Variables autorisées", description: "Pose, angle ou expression que la génération peut modifier." },
      { title: "Références séparées", description: "Distinguer identité, style, décor et frame de départ." },
      { title: "Journal de dérives", description: "Nommer les erreurs récurrentes pour améliorer les contraintes." },
    ],
    errors: [
      "Tout verrouiller dans un prompt maître trop long.",
      "Changer tenue, pose et caméra dans la même variation.",
      "Utiliser une référence de style comme référence d'identité.",
      "Corriger une dérive sans documenter sa cause probable.",
    ],
    promptTitle: "Plan stable de Lyra Voss",
    prompt:
      "Lyra Voss, same facial structure, calm green eyes, shoulder-length wet dark honey-brown hair, same matte black tactical suit with restrained paneling, standing inside the established Vertical Silence concrete corridor, medium shot, blue-grey palette, single cyan maintenance light, preserve identity, proportions, costume and architecture",
    negativePrompt:
      "different face, red hair, new outfit, glowing armor, altered body proportions, new corridor, random neon signs, plastic skin, extra characters",
    practice: [
      "Lister dix constantes du personnage et du monde.",
      "Définir trois variables autorisées pour le test.",
      "Créer une planche face, profil et plein pied.",
      "Comparer les dérives avant de passer à la vidéo.",
    ],
    resources: [
      { label: "Références de production", href: "/references/" },
      { label: "Template de bible de production", href: "/resources/production-bible-template/" },
    ],
    prompts: [
      { label: "Prompts personnage", href: "/prompts/?category=character-consistency" },
      { label: "Prompts Composition", href: "/prompts/?category=composition" },
    ],
    project: {
      label: "Étude de cas Lyra Voss",
      href: "/projects/lyra-voss/",
      note: "Construire la bible personnage et le journal de dérives.",
    },
  },
  "mettre-en-scene": {
    family: "Cinématographie",
    eyebrow: "Bloquer l'action dans l'espace",
    intention:
      "Organiser personnage, décor, accessoires, regard et déplacements pour que l'action reste lisible avant tout mouvement de caméra.",
    why:
      "La mise en scène donne une cause à la composition. Elle décide où se trouve Lyra, ce qu'elle regarde, ce qui l'empêche d'avancer et comment l'espace raconte la situation.",
    imageApplication:
      "Définissez position, orientation du corps, regard, distance aux éléments du décor et trajectoire probable.",
    videoApplication:
      "Décomposez l'action en poses clés et gardez une trajectoire simple. La caméra observe ou révèle cette action ; elle ne doit pas la remplacer.",
    concepts: [
      { title: "Blocking", description: "Positionner le personnage et ses déplacements dans un espace stable." },
      { title: "Ligne de regard", description: "Relier clairement le sujet à l'information regardée." },
      { title: "Entrées et sorties", description: "Préserver de l'espace pour l'arrivée, le départ ou la révélation." },
      { title: "Action lisible", description: "Limiter chaque plan à une action principale identifiable." },
    ],
    errors: [
      "Faire bouger simultanément personnage, caméra et décor.",
      "Placer le regard hors du cadre sans espace associé.",
      "Cacher les mains ou l'objet au moment de l'action.",
      "Ajouter des figurants qui concurrencent le beat principal.",
    ],
    promptTitle: "Mise en scène d'une découverte",
    prompt:
      "cinematic medium-wide shot inside Vertical Silence, Lyra Voss stands on the right side of the corridor, body angled toward a damaged access panel on the left, her right hand remains visible near the panel without touching it, clear eyeline, open space behind her for retreat, static 45mm camera, rain drifting through the doorway, calm investigative tension",
    negativePrompt:
      "centered pose, hidden hands, looking at camera, multiple actions, walking and touching simultaneously, extra characters, camera orbit, cluttered set",
    practice: [
      "Dessiner le décor vu du dessus.",
      "Placer Lyra, l'objectif et l'obstacle.",
      "Définir une pose de début et une pose de fin.",
      "Choisir ensuite seulement la position caméra.",
    ],
    resources: [
      { label: "Cheat sheet de composition", href: "/resources/composition-cheat-sheet/" },
      { label: "Référentiel caméra", href: "/references/camera-shots/" },
    ],
    prompts: [
      { label: "Prompts Composition", href: "/prompts/?category=composition" },
      { label: "Prompts caméra", href: "/prompts/?category=camera-movement" },
    ],
    project: {
      label: "Neon Samurai",
      href: "/projects/neon-samurai/",
      note: "Bloquer une confrontation sans dialogue dans un décor stable.",
    },
  },
  animer: {
    family: "Production IA",
    eyebrow: "Mouvement crédible et contrôlé",
    intention:
      "Transformer une frame validée en plan court en séparant mouvement caméra, sujet, environnement et rythme.",
    why:
      "L'animation amplifie toutes les faiblesses de la frame : identité instable, profondeur plate, mains cachées ou lumière incohérente.",
    imageApplication:
      "Préparez une frame avec silhouette lisible, couches de profondeur et espace disponible dans la direction du mouvement.",
    videoApplication:
      "Décrivez un mouvement principal, des mouvements secondaires subtils, une durée et des contraintes physiques explicites.",
    concepts: [
      { title: "Mouvement principal", description: "L'action ou le déplacement que le spectateur doit lire." },
      { title: "Mouvement secondaire", description: "Pluie, cheveux, tissu ou lumière qui donnent vie sans détourner l'attention." },
      { title: "Rythme", description: "Vitesse, accélération et durée adaptées à l'intention." },
      { title: "Physique", description: "Poids, inertie, contact et continuité des matières." },
    ],
    errors: [
      "Décrire trop de mouvements dans un clip court.",
      "Demander une grande rotation à partir d'une seule vue.",
      "Animer une frame dont la profondeur est ambiguë.",
      "Oublier d'interdire les changements de visage et de tenue.",
    ],
    promptTitle: "Plan image-to-video contrôlé",
    prompt:
      "starting from the approved Vertical Silence frame, Lyra Voss remains still while the camera performs a very slow lateral dolly from left to right, foreground rain chain creates subtle parallax, her wet hair tips and coat edge move lightly in the wind, distant cables sway almost imperceptibly, five seconds, realistic inertia, preserve face, costume, lighting and architecture",
    negativePrompt:
      "fast movement, orbit, zoom, face deformation, body morphing, outfit change, new objects, architecture mutation, violent wind, camera shake",
    practice: [
      "Valider la frame source à taille de vignette.",
      "Décrire séparément caméra, sujet et environnement.",
      "Supprimer tout mouvement non essentiel.",
      "Comparer le clip à l'état final attendu.",
    ],
    resources: [
      { label: "Checklist shot-list", href: "/resources/shot-list-checklist/" },
      { label: "Référentiel mouvements caméra", href: "/references/camera-shots/" },
    ],
    prompts: [
      { label: "Prompts vidéo", href: "/prompts/?category=image-to-video" },
      { label: "Prompts transition", href: "/prompts/?category=transition" },
    ],
    project: {
      label: "Étude de cas Lyra Voss",
      href: "/projects/lyra-voss/",
      note: "Produire trois clips courts à partir de frames validées.",
    },
  },
  "monter-documenter": {
    family: "Production IA",
    eyebrow: "Montage, critique et mémoire de production",
    intention:
      "Construire le rythme final, contrôler les raccords et transformer les choix de production en méthode réutilisable.",
    why:
      "Le montage révèle les incohérences que les plans isolés masquent. La documentation permet ensuite de reproduire les réussites et d'éviter les mêmes erreurs.",
    imageApplication:
      "Classez les frames par scène et fonction, puis conservez les versions réellement utilisées dans le montage.",
    videoApplication:
      "Montez d'abord pour l'intention et la continuité, puis ajustez durée, son, transitions et corrections locales.",
    concepts: [
      { title: "Rythme", description: "La durée des plans dépend de l'information à lire et de la tension." },
      { title: "Raccord", description: "Contrôler regard, mouvement, lumière, axe et géographie." },
      { title: "Sélection", description: "Choisir le plan qui sert la séquence, pas le clip le plus spectaculaire." },
      { title: "Production bible", description: "Relier brief, références, prompts, versions, résultats et corrections." },
    ],
    errors: [
      "Masquer un mauvais raccord avec une transition spectaculaire.",
      "Conserver un plan joli mais redondant.",
      "Évaluer les clips sans les regarder dans la séquence.",
      "Documenter après coup sans conserver les versions intermédiaires.",
    ],
    promptTitle: "Transition motivée pour le montage",
    prompt:
      "cinematic match cut between two Vertical Silence shots: the cyan reflection on Lyra Voss's wet access marker expands to fill the frame, then resolves as the same cyan line on the elevator shaft in the next angle, consistent movement direction, restrained speed, realistic rain reflections, preserve blue-grey palette and architectural continuity",
    negativePrompt:
      "random glitch, abstract swirl, white flash, color palette change, reversed movement, unreadable blur, new location, subject mutation",
    practice: [
      "Assembler une version sans transition décorative.",
      "Contrôler chaque raccord image et mouvement.",
      "Noter les plans manquants ou redondants.",
      "Compléter la bible avec résultat, problème et correction.",
    ],
    resources: [
      { label: "Template de bible de production", href: "/resources/production-bible-template/" },
      { label: "Projets documentés", href: "/projects/" },
    ],
    prompts: [
      { label: "Prompts transition", href: "/prompts/?category=transition" },
      { label: "Prompts vidéo", href: "/prompts/?category=image-to-video" },
    ],
    project: {
      label: "Étude de cas Lyra Voss",
      href: "/projects/lyra-voss/",
      note: "Monter une séquence courte et documenter les décisions finales.",
    },
  },
};

export function getLearningPath(id: string) {
  return learningPaths[id];
}
