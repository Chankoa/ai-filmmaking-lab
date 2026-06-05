export const navItems = [
  { label: "Hub", href: "/" },
  { label: "Formation", href: "/formation/" },
  { label: "Plans caméra", href: "/camera-shots/" },
  { label: "Prompts", href: "/prompts/" },
  { label: "Projets", href: "/projets/" }
];

export const modules = [
  {
    id: "foundations",
    number: "01",
    title: "Fondations de l'AI Filmmaking",
    level: "Débutant",
    duration: "5 sujets",
    intent:
      "Installer le vocabulaire, les limites des outils et le pipeline idée -> référence -> image -> vidéo -> montage.",
    pages: [
      "Introduction",
      "Penser en cinéaste",
      "Pipeline AI filmmaking",
      "Outils et workflows",
      "Limites et bonnes pratiques"
    ],
    outcomes: [
      "Différencier image generation, image-to-video, text-to-video et reference-based generation",
      "Préparer un brief visuel avant d'ouvrir un outil",
      "Évaluer les risques de continuité, d'anatomie et de mouvement"
    ]
  },
  {
    id: "image-generation",
    number: "02",
    title: "Génération d'images exploitables",
    level: "Débutant",
    duration: "5 sujets",
    intent:
      "Construire des images de départ utiles pour une séquence, pas seulement de belles images isolées.",
    pages: [
      "Génération image",
      "Anatomie du prompt",
      "Style et direction artistique",
      "Lumière, couleur, atmosphère",
      "Erreurs fréquentes"
    ],
    outcomes: [
      "Écrire un prompt maître structuré",
      "Créer des variantes contrôlées",
      "Documenter les erreurs et corrections"
    ]
  },
  {
    id: "cinematography",
    number: "03",
    title: "Composition, cadrage et langage des plans",
    level: "Intermédiaire",
    duration: "6 sujets",
    intent:
      "Transformer les boards Camera Shots en guide visuel et apprendre à choisir un plan pour son effet narratif.",
    pages: [
      "Cadrage",
      "Échelle des plans",
      "Angles caméra",
      "Mouvements caméra",
      "Composition couleur",
      "Shot sheet"
    ],
    outcomes: [
      "Choisir une distance caméra selon l'émotion",
      "Écrire un prompt de plan lisible",
      "Construire une shot-list cohérente"
    ]
  },
  {
    id: "character-consistency",
    number: "04",
    title: "Character consistency et reference boards",
    level: "Intermédiaire",
    duration: "6 sujets",
    intent:
      "Créer un personnage stable avec fiche, silhouette, traits constants, prompts négatifs et références.",
    pages: [
      "Character design",
      "Character consistency",
      "Reference sheet",
      "Portrait variations",
      "Outfit consistency",
      "Étude Lyra Voss"
    ],
    outcomes: [
      "Séparer character prompt, style reference et scene prompt",
      "Créer une bible personnage exploitable",
      "Réduire les dérives de visage, cheveux et tenue"
    ]
  },
  {
    id: "image-to-video",
    number: "05",
    title: "Image-to-video et mouvements crédibles",
    level: "Intermédiaire",
    duration: "5 sujets",
    intent:
      "Animer une image avec un mouvement contrôlé du sujet, de la caméra et de l'environnement.",
    pages: [
      "Image-to-video",
      "Mouvement caméra",
      "Mouvement personnage",
      "Transitions cinématiques",
      "Workflows Kling et Hailuo"
    ],
    outcomes: [
      "Écrire un prompt vidéo avec contraintes physiques",
      "Prévenir la déformation du visage",
      "Créer des transitions réutilisables"
    ]
  },
  {
    id: "storytelling",
    number: "06",
    title: "Séquences, storyboards et continuité",
    level: "Avancé",
    duration: "4 sujets",
    intent:
      "Passer d'un plan isolé à une séquence lisible avec intention, découpage et continuité visuelle.",
    pages: [
      "Storyboard",
      "Shot-list",
      "Continuité visuelle",
      "Séquences de production"
    ],
    outcomes: [
      "Découper une intention dramatique en plans",
      "Maintenir décor, palette et personnage",
      "Comparer résultat attendu et résultat obtenu"
    ]
  },
  {
    id: "production",
    number: "07",
    title: "Projets complets et production bible",
    level: "Avancé",
    duration: "6 cas",
    intent:
      "Documenter des productions complètes : brief, références, prompts, frames, animation, montage, critique.",
    pages: [
      "Lyra Voss",
      "Neon Samurai",
      "Outfit Change",
      "Product Scene Layers",
      "Cinematic Transition",
      "Influencer AI"
    ],
    outcomes: [
      "Transformer un exercice en étude de cas",
      "Créer des templates de production",
      "Formaliser une méthode réutilisable"
    ]
  }
];

export const cameraShots = [
  {
    id: "extreme-close-up",
    name: "Extreme Close Up",
    distance: "proche",
    emotion: "tension",
    use: "Isoler un détail narratif : regard, larme, texture, reflet.",
    prompt:
      "Extreme close-up of Lyra Voss' eye, rain droplets on skin, neon reflections inside the iris, cinematic cyberpunk lighting, shallow depth of field, realistic skin texture.",
    movement: "Micro push-in avec focus shift sur le reflet.",
    avoid: "Ne pas générer un portrait recadré ; le détail doit porter une information."
  },
  {
    id: "close-up",
    name: "Close Up",
    distance: "proche",
    emotion: "intimité",
    use: "Lire une émotion et garder la présence du personnage.",
    prompt:
      "Close-up portrait of Lyra Voss under soft rain, calm intense eyes, wet dark honey-brown hair, cyan and magenta city light, grounded photorealism.",
    movement: "Léger push-in, respiration subtile, arrière-plan mouvant.",
    avoid: "Éviter les changements de visage entre deux plans."
  },
  {
    id: "medium-close-shot",
    name: "Medium Close Shot",
    distance: "moyen",
    emotion: "présence",
    use: "Relier visage, posture et début de costume.",
    prompt:
      "Medium close shot of a cyberpunk heroine in a matte black tactical bodysuit, rain-soaked alley, controlled expression, cinematic lens, shallow depth of field.",
    movement: "Slow dolly in depuis le buste vers le visage.",
    avoid: "Ne pas surcharger la tenue avec des LED ou armures brillantes."
  },
  {
    id: "medium-shot",
    name: "Medium Shot",
    distance: "moyen",
    emotion: "action",
    use: "Montrer une action claire sans perdre le personnage.",
    prompt:
      "Medium shot of Lyra Voss turning toward the camera in a neon alley, reflective pavement, tactical outfit, readable silhouette, cinematic realism.",
    movement: "Tracking latéral lent, cheveux et pluie en mouvement.",
    avoid: "Éviter les bras ou mains flous qui cassent la lisibilité."
  },
  {
    id: "full-shot",
    name: "Full Shot",
    distance: "large",
    emotion: "silhouette",
    use: "Présenter silhouette, tenue complète et posture.",
    prompt:
      "Full body shot of Lyra Voss standing in a rain-soaked cyberpunk street, matte black outfit, no high heels, balanced stance, neon signs, realistic proportions.",
    movement: "Dolly back très léger pour révéler l'environnement.",
    avoid: "Ne pas perdre les constantes physiques du personnage."
  },
  {
    id: "long-shot",
    name: "Long Shot",
    distance: "large",
    emotion: "isolement",
    use: "Situer le personnage dans un décor et exprimer l'échelle.",
    prompt:
      "Long shot of a lone cyberpunk heroine crossing a vast neon city intersection at night, rain, reflections, towering architecture, cinematic atmosphere.",
    movement: "Dolly back ou crane up pour élargir la scène.",
    avoid: "Éviter que le personnage devienne illisible ou générique."
  },
  {
    id: "low-angle",
    name: "Low-Angle Shot",
    distance: "moyen",
    emotion: "puissance",
    use: "Donner autorité, menace ou héroïsation.",
    prompt:
      "Low-angle medium shot of Lyra Voss under neon rain, city towers above her, calm powerful stance, realistic camera perspective, cinematic contrast.",
    movement: "Tilt up contrôlé, verticalité du décor.",
    avoid: "Ne pas exagérer les proportions du corps."
  },
  {
    id: "high-angle",
    name: "High-Angle Shot",
    distance: "large",
    emotion: "vulnérabilité",
    use: "Montrer fragilité, surveillance ou domination du décor.",
    prompt:
      "High-angle shot of Lyra Voss alone in a luminous wet alley, small figure inside a geometric urban composition, cyan amber signage, cinematic rain.",
    movement: "Descente lente ou zoom très léger.",
    avoid: "Éviter une vue trop décorative sans intention dramatique."
  },
  {
    id: "over-the-shoulder",
    name: "Over The Shoulder",
    distance: "moyen",
    emotion: "relation",
    use: "Créer tension ou dialogue entre sujet et cible.",
    prompt:
      "Over-the-shoulder shot from behind Lyra Voss looking toward a neon samurai silhouette in the rain, strong foreground shoulder, cinematic depth.",
    movement: "Rack focus entre l'épaule et la cible.",
    avoid: "Ne pas cacher l'information principale avec le premier plan."
  },
  {
    id: "insert-shot",
    name: "Insert Shot",
    distance: "proche",
    emotion: "indice",
    use: "Documenter un objet, un geste ou une preuve utile au montage.",
    prompt:
      "Insert shot of a gloved hand holding a translucent data card, rain droplets, neon reflections, macro lens, cinematic product detail.",
    movement: "Focus pull, micro rotation de l'objet.",
    avoid: "Ne pas ajouter trop d'éléments qui brouillent l'indice."
  }
];

export const promptCards = [
  {
    id: "lyra-master",
    category: "character",
    title: "Prompt maître Lyra Voss",
    level: "Intermédiaire",
    focus: "Character consistency",
    prompt:
      "Lyra Voss, original cyberpunk female character, slender athletic build, sharp elegant facial features, calm intense green eyes, shoulder-length wet dark honey-brown hair, wearing a matte black tactical bodysuit with subtle panel detailing, no LED, no glowing armor, standing in a rain-soaked neon alley at night, reflective pavement, cyan and magenta light, cinematic medium shot, shallow depth of field, grounded photorealism, realistic anatomy, restrained melancholy, high detail, 3:4 vertical frame.",
    negative:
      "no red hair, no copper hair, no glowing armor, no exaggerated sci-fi armor, no high heels, no plastic skin",
    notes: "À utiliser comme base stable avant de décliner les plans."
  },
  {
    id: "video-dolly",
    category: "video",
    title: "Dolly push-in contrôlé",
    level: "Intermédiaire",
    focus: "Image-to-video",
    prompt:
      "Starting from the reference image, Lyra Voss stands in a rain-soaked neon street at night. The camera performs a slow dolly push-in from a medium shot to a close shot. Lyra remains calm and still, only her wet hair and jacket move subtly with the rain and wind. Neon reflections ripple across the pavement, background signs flicker softly. Cinematic cyberpunk mood, restrained movement, realistic physics.",
    negative:
      "no face deformation, no sudden camera shake, no outfit change, no extra characters, no warped hands",
    notes: "Limiter le mouvement pour préserver l'identité du personnage."
  },
  {
    id: "transition-match-cut",
    category: "transition",
    title: "Transition cinématique par reflet",
    level: "Avancé",
    focus: "Cinematic transition",
    prompt:
      "A neon reflection in a puddle expands until it fills the frame, becoming the next scene. The camera glides downward into the reflective surface, cyan and amber light streaks stretch naturally, then resolve into a new cyberpunk street angle. Smooth match cut, realistic rain physics, cinematic continuity.",
    negative:
      "no abstract swirl, no hard glitch, no unreadable blur, no sudden subject mutation",
    notes: "Pensé pour relier deux plans d'un même univers visuel."
  },
  {
    id: "product-layers",
    category: "image",
    title: "Product scene with layers",
    level: "Débutant",
    focus: "Composition et profondeur",
    prompt:
      "Premium product scene built in clear visual layers: foreground glass reflection, main product centered on matte surface, midground props arranged with negative space, background soft architectural shadows, controlled studio lighting, realistic materials, editorial composition.",
    negative:
      "no clutter, no unreadable label, no distorted product shape, no random props",
    notes: "Utile pour enseigner premier plan, sujet, arrière-plan et direction de lumière."
  },
  {
    id: "outfit-change",
    category: "video",
    title: "HailuoAI outfit change",
    level: "Avancé",
    focus: "Transformation contrôlée",
    prompt:
      "The subject remains centered and keeps the same face, body proportions and pose while the outfit transitions from a matte black tactical suit into a refined cinematic evening jacket. The change happens through a subtle light sweep from left to right, fabric texture morphing naturally, no body distortion, stable camera.",
    negative:
      "no face change, no body shape change, no duplicated limbs, no aggressive flash, no new background",
    notes: "Le changement doit concerner la tenue, pas l'identité."
  },
  {
    id: "find-angle",
    category: "camera",
    title: "Find the best angle",
    level: "Débutant",
    focus: "Exploration caméra",
    prompt:
      "Generate four cinematic angle variations of the same subject and same location: eye-level medium shot, low-angle heroic shot, high-angle vulnerable shot, over-the-shoulder tension shot. Keep character identity, outfit, lighting palette and environment consistent.",
    negative:
      "no different character, no different outfit, no unrelated location, no random camera lens",
    notes: "À utiliser pour comparer l'effet narratif de chaque angle."
  }
];

export const projects = [
  {
    slug: "lyra-voss",
    title: "Lyra Voss Stories",
    type: "Character bible",
    level: "Intermédiaire",
    source: "https://app.notion.com/p/Lyra-Voss-Stories-325ca5272ff880178554d5354987e233?source=copy_link",
    status: "Lien Notion non accessible dans ce workspace",
    visual: "/assets/visuals/lyra-board.svg",
    summary:
      "Étude de cas centrale pour travailler la consistance de personnage, les contraintes négatives, les portraits, la tenue et la continuité de séquence.",
    sections: [
      "Concept narratif",
      "Traits physiques constants",
      "Palette et tenue",
      "Prompts de référence",
      "Séquence image-to-video"
    ]
  },
  {
    slug: "neon-samurai",
    title: "Neon Samurai",
    type: "Projet complet",
    level: "Avancé",
    source: "https://app.notion.com/p/Neon-Samurai-520ca5272ff883e9ad73812a14164017?source=copy_link",
    status: "Lien Notion non accessible dans ce workspace",
    visual: "/assets/visuals/neon-samurai.svg",
    summary:
      "Projet d'ambiance et de silhouette pour articuler direction artistique, cadrage dramatique, décor nocturne et mouvements caméra.",
    sections: [
      "Brief créatif",
      "Références visuelles",
      "Plans clés",
      "Prompts image",
      "Transitions"
    ]
  },
  {
    slug: "outfit-change",
    title: "HailuoAI Outfit Change",
    type: "Workflow vidéo",
    level: "Avancé",
    source: "https://app.notion.com/p/HailuoAI-Outfit-Change-772ca5272ff883febfc381c6e8a77599?source=copy_link",
    status: "Lien Notion non accessible dans ce workspace",
    visual: "/assets/visuals/outfit-change.svg",
    summary:
      "Workflow centré sur la transformation contrôlée d'une tenue sans changer le visage, la morphologie ou le décor.",
    sections: [
      "Image de départ",
      "Zone de variation",
      "Prompt vidéo",
      "Contraintes",
      "Corrections"
    ]
  },
  {
    slug: "product-scene-layers",
    title: "Product Scene with Layers",
    type: "Composition",
    level: "Débutant",
    source: "https://app.notion.com/p/Product-Scene-with-Layers-13eca5272ff8832ba04501ab83ad9b68?source=copy_link",
    status: "Lien Notion non accessible dans ce workspace",
    visual: "/assets/visuals/product-layers.svg",
    summary:
      "Cas pratique pour enseigner les couches visuelles : premier plan, sujet, accessoires, fond, lumière et lisibilité.",
    sections: [
      "Layering",
      "Prompt produit",
      "Lumière",
      "Matériaux",
      "Analyse critique"
    ]
  },
  {
    slug: "cinematic-transition",
    title: "Cinematic Transition Prompt",
    type: "Transition",
    level: "Intermédiaire",
    source: "https://app.notion.com/p/Cinematic-Transition-Prompt-f66ca5272ff8824193d181d85c2c2600?source=copy_link",
    status: "Lien Notion non accessible dans ce workspace",
    visual: "/assets/visuals/transition-board.svg",
    summary:
      "Bibliothèque de transitions pour passer d'un plan à l'autre sans rupture de palette, mouvement ou intention.",
    sections: [
      "Match cut",
      "Reflet",
      "Glide",
      "Focus pull",
      "Risques"
    ]
  },
  {
    slug: "influencer-ai",
    title: "Influencer AI",
    type: "Production sociale",
    level: "Intermédiaire",
    source: "https://app.notion.com/p/Influencer-31cca5272ff8808b9d5fcc59a243ffaf?source=copy_link",
    status: "Lien Notion non accessible dans ce workspace",
    visual: "/assets/visuals/influencer-ai.svg",
    summary:
      "Projet orienté personnage, cohérence éditoriale, formats courts et déclinaisons multi-plateformes.",
    sections: [
      "Persona",
      "Formats",
      "Shot-list sociale",
      "Prompts récurrents",
      "Éthique"
    ]
  }
];

export const sourceLinks = [
  {
    title: "Conversation ChatGPT partagée",
    href: "https://chatgpt.com/share/6a211a14-7a08-83eb-9897-6b38d37e579e",
    status: "Analysée",
    note: "Brief principal et architecture pédagogique."
  },
  {
    title: "MASTER AI FILMMAKING",
    href: "https://app.notion.com/p/MASTER-AI-FILMMAKING-35bca5272ff88069931bf38e8fa5a32b?source=copy_link",
    status: "À connecter",
    note: "Non accessible via le connecteur Notion actuel."
  },
  {
    title: "Pages Notion de cas pratiques",
    href: "/projets/",
    status: "Référencées",
    note: "Lyra Voss, Neon Samurai, Outfit Change, Product Scene, Transitions, Influencer."
  },
  {
    title: "Pages Notion accessibles",
    href: "https://app.notion.com/p/13ff11a474ad8014827aefd8b5cd80d8",
    status: "Consultées",
    note: "Contenus génériques de style/portfolio et assets de marque ; non spécifiques au cours."
  }
];

export const promptFormula = [
  "subject",
  "physical description",
  "outfit",
  "action / pose",
  "environment",
  "lighting",
  "camera / lens",
  "mood",
  "style",
  "technical constraints",
  "negative constraints"
];
