export interface ResourceGuideItem {
  title: string;
  detail: string;
  example?: string;
  risk?: string;
}

export interface ResourceGuideSection {
  id: string;
  title: string;
  intro: string;
  items: ResourceGuideItem[];
}

export interface ResourceGuide {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  lessonHref: string;
  lessonLabel: string;
  stats: { label: string; value: string }[];
  lead: string;
  method: string[];
  sections: ResourceGuideSection[];
  prompt?: { label: string; code: string };
  checklist: string[];
  sourceNote: string;
}

export const resourceGuides: ResourceGuide[] = [
  {
    slug: "anatomie-prompt-cinematographique",
    eyebrow: "Guide de formulation",
    title: "Anatomie d'un prompt cinématographique",
    description:
      "Transformer une intention de plan en description visuelle structurée, modifiable et contrôlable.",
    lessonHref: "/formation/voir-composer-generer/",
    lessonLabel: "Revoir les fondations du regard",
    stats: [
      { label: "Blocs", value: "5" },
      { label: "Principe", value: "Stable → variable" },
      { label: "Sortie", value: "Frame testable" },
    ],
    lead:
      "Un bon prompt n'est pas une accumulation d'adjectifs. Il décrit une scène dans l'ordre où une équipe image prendrait ses décisions : sujet, espace, caméra, lumière puis climat émotionnel.",
    method: [
      "Écrire d'abord l'intention en une phrase sans vocabulaire esthétique.",
      "Remplir les cinq blocs avec une seule décision forte par bloc.",
      "Séparer les constantes du projet des variables propres au plan.",
      "Ajouter seulement des contraintes correspondant à des erreurs déjà observées.",
      "Comparer les variantes une variable à la fois et consigner le résultat.",
    ],
    sections: [
      {
        id: "subject-action",
        title: "01 · Sujet et action",
        intro: "Qui ou quoi porte l'information nouvelle du plan ?",
        items: [
          { title: "Identité", detail: "Nommer le sujet et ses constantes utiles au cadrage, pas sa biographie complète." },
          { title: "Verbe visible", detail: "Décrire une action observable et son état final.", example: "Lyra s'arrête devant le marqueur et retient sa main." },
          { title: "Intention", detail: "Traduire l'émotion en comportement.", risk: "Éviter les mots seuls comme « intense » ou « cinématique »." },
        ],
      },
      {
        id: "location-framing",
        title: "02 · Lieu et cadrage",
        intro: "Où se déroule l'action et quelle relation d'échelle doit être comprise ?",
        items: [
          { title: "Géographie", detail: "Nommer les éléments stables, leur orientation et la profondeur utile." },
          { title: "Valeur et angle", detail: "Choisir une distance et un point de vue motivés par l'information à révéler." },
          { title: "Couches", detail: "Distinguer premier plan, sujet et arrière-plan lorsqu'ils participent à la lecture." },
        ],
      },
      {
        id: "camera-lens",
        title: "03 · Caméra et optique",
        intro: "Définir le comportement du cadre sans empiler plusieurs mouvements concurrents.",
        items: [
          { title: "Mouvement dominant", detail: "Préciser direction, vitesse, amplitude et point d'arrivée." },
          { title: "Focale", detail: "Utiliser la focale pour décrire perspective et distance, pas comme simple label premium." },
          { title: "Mise au point", detail: "Nommer le plan net initial, la cible finale et le moment du basculement." },
        ],
      },
      {
        id: "light-texture-mood",
        title: "04 · Lumière, matière et mood",
        intro: "Faire découler l'atmosphère d'une situation physique cohérente.",
        items: [
          { title: "Source motivée", detail: "Indiquer origine, direction, taille apparente et couleur de la lumière." },
          { title: "État des surfaces", detail: "Décrire matière, usure, humidité et réponse aux reflets." },
          { title: "Mood", detail: "Choisir une température émotionnelle qui résulte des décisions précédentes." },
        ],
      },
      {
        id: "constraints",
        title: "05 · Contraintes et validation",
        intro: "Protéger l'intention, la continuité et les limites physiques du plan.",
        items: [
          { title: "Negative prompt", detail: "Cibler identité, anatomie, décor, caméra et artefacts observés." },
          { title: "Critère de réussite", detail: "Écrire ce qui doit être visible pour accepter la frame." },
          { title: "Variable de test", detail: "Ne modifier qu'un bloc entre deux variantes comparées." },
        ],
      },
    ],
    prompt: {
      label: "Exemple · Vertical Silence",
      code: "Lyra Voss pauses before a damaged access marker, her right hand stopping a few centimeters from the surface; over-the-shoulder medium shot, marker sharp in the midground, vertical concrete shaft receding behind it; locked 50mm camera with a restrained five-percent push-in; weak cyan maintenance light from frame right, wet scratched concrete and matte black fabric; quiet apprehension, grounded physical realism. Preserve face, outfit, eyeline and architecture; no extra character, no camera orbit, no glowing costume, no text.",
    },
    checklist: [
      "L'action est-elle visible sans lire le mood ?",
      "Le cadrage apporte-t-il une information précise ?",
      "Une seule trajectoire caméra domine-t-elle ?",
      "La lumière possède-t-elle une source plausible ?",
      "Les contraintes correspondent-elles à des dérives observables ?",
    ],
    sourceNote:
      "Synthèse du corpus local « prompt image », recoupée avec les leçons de composition, lumière, profondeur et production du projet.",
  },
  {
    slug: "guide-mouvements-camera-ia",
    eyebrow: "Référence image-to-video",
    title: "Guide des mouvements caméra pour l'IA",
    description:
      "Choisir un mouvement pour sa fonction narrative, puis le formuler avec une trajectoire, une durée et un point d'arrivée.",
    lessonHref: "/formation/image-to-video-transitions/",
    lessonLabel: "Voir le cours animation et transitions",
    stats: [
      { label: "Familles", value: "4" },
      { label: "Mouvements", value: "16" },
      { label: "Règle", value: "1 par plan" },
    ],
    lead:
      "Le mouvement ne sert pas à rendre une image plus spectaculaire. Il change la relation du spectateur au sujet. Pour les modèles vidéo, une trajectoire simple et bornée produit généralement plus de continuité qu'une chorégraphie complexe.",
    method: [
      "Nommer l'information ou l'émotion qui doit changer pendant le plan.",
      "Choisir une famille : approche, révélation, accompagnement ou instabilité.",
      "Décrire un seul mouvement principal avec une durée et une intensité.",
      "Séparer mouvement caméra, mouvement sujet et mouvement environnemental.",
      "Vérifier l'identité, la géographie, la perspective et l'état final.",
    ],
    sections: [
      {
        id: "approach",
        title: "01 · Approcher et intensifier",
        intro: "Réduire la distance pour concentrer l'attention.",
        items: [
          { title: "Push-in / dolly in", detail: "Approche lente du sujet ; utile pour une prise de conscience.", example: "slow 0–5s dolly push-in, subject remains centered" },
          { title: "Zoom optique", detail: "Change la taille apparente sans déplacement de caméra.", risk: "Un zoom rapide peut sembler numérique ou provoquer des déformations." },
          { title: "Crash zoom", detail: "Accent brutal et bref, à réserver à une rupture de ton." },
          { title: "Macro slider", detail: "Petit déplacement latéral sur une matière ou un indice." },
        ],
      },
      {
        id: "reveal",
        title: "02 · Révéler l'espace",
        intro: "Faire apparaître une information hors du cadre initial.",
        items: [
          { title: "Pull-back", detail: "Élargit le contexte et peut rendre le sujet vulnérable." },
          { title: "Tilt up / down", detail: "Révèle verticalité, hauteur ou relation entre deux niveaux." },
          { title: "Crane / pedestal", detail: "Déplace le corps de caméra verticalement, contrairement au tilt." },
          { title: "Orbit partiel", detail: "Change le rapport sujet/décor sur un arc court.", risk: "Éviter le tour complet : arrière du sujet et décor dérivent facilement." },
        ],
      },
      {
        id: "follow",
        title: "03 · Accompagner",
        intro: "Conserver une relation stable avec un sujet en mouvement.",
        items: [
          { title: "Tracking latéral", detail: "Suit une trajectoire parallèle et rend lisible le déplacement." },
          { title: "Follow shot", detail: "Accompagne par l'arrière et ouvre le hors-champ devant le personnage." },
          { title: "Gimbal / steadicam", detail: "Glisse stabilisée ; à utiliser lorsque la fluidité fait partie du sens." },
          { title: "Rack focus", detail: "Déplace l'attention entre deux plans sans déplacer la caméra." },
        ],
      },
      {
        id: "instability",
        title: "04 · Introduire une présence opérateur",
        intro: "Donner du poids au cadre sans ajouter un tremblement aléatoire.",
        items: [
          { title: "Handheld respiré", detail: "Oscillation faible, corrections rares, intensité contenue." },
          { title: "Shoulder rig", detail: "Léger rebond de pas et inertie latérale lors d'un suivi." },
          { title: "Documentary reactive", detail: "Recadrage motivé par l'action, parfois avec recherche de point." },
          { title: "Locked-off", detail: "Immobilité assumée pour attente, puissance ou contraste.", risk: "La stabilité n'est pas un défaut lorsqu'elle sert la scène." },
        ],
      },
    ],
    prompt: {
      label: "Formule image-to-video",
      code: "Starting from the approved frame: [one camera move + direction + duration], [one subject action], [one environmental motion]. End on [final framing/state]. Preserve [identity, outfit, architecture, eyeline]. Avoid [secondary camera move, warping, new objects, speed ramp].",
    },
    checklist: [
      "Le mouvement révèle-t-il ou transforme-t-il quelque chose ?",
      "La trajectoire peut-elle être dessinée avec une seule flèche ?",
      "La vitesse et la durée sont-elles précisées ?",
      "L'état final est-il compatible avec le plan suivant ?",
      "Le test rejette-t-il les doubles mouvements et les déformations ?",
    ],
    sourceNote:
      "Synthèse du guide Kling 3.0 du corpus local et de 22 captures de références caméra, reformulée autour des contraintes de continuité du projet.",
  },
  {
    slug: "direction-acteur-continuite-pose",
    eyebrow: "Checklist mise en scène",
    title: "Direction d'acteur et continuité de pose",
    description:
      "Décrire une attitude jouable : appuis, mains, regard, accessoire, tension et transition vers l'action suivante.",
    lessonHref: "/formation/mettre-en-scene/",
    lessonLabel: "Voir le cours de mise en scène",
    stats: [
      { label: "Axes", value: "6" },
      { label: "Usage", value: "Frame → clip" },
      { label: "Contrôle", value: "Raccord" },
    ],
    lead:
      "Une pose n'est ni un mannequin neutre ni une liste de membres. Elle montre où se trouve le poids, ce que le personnage veut cacher ou atteindre et quelle action peut commencer depuis cette position.",
    method: [
      "Partir du beat dramatique et formuler un verbe d'action.",
      "Placer les appuis et l'orientation du bassin avant les mains.",
      "Diriger tête, regard et distance caméra en fonction du rapport de pouvoir.",
      "Donner une fonction à chaque accessoire touché ou regardé.",
      "Conserver une pose de départ et une pose d'arrivée pour le raccord.",
    ],
    sections: [
      {
        id: "body",
        title: "01 · Corps et appuis",
        intro: "Construire une silhouette lisible et physiquement stable.",
        items: [
          { title: "Poids", detail: "Nommer la jambe porteuse, l'axe du bassin et le déséquilibre éventuel." },
          { title: "Ligne d'action", detail: "Choisir une direction dominante du corps qui porte l'intention." },
          { title: "Ouverture", detail: "Préciser si le torse protège, affronte ou évite l'autre personnage." },
        ],
      },
      {
        id: "hands-face",
        title: "02 · Mains, visage et regard",
        intro: "Éviter les gestes décoratifs et les expressions génériques.",
        items: [
          { title: "Mains", detail: "Indiquer position, contact, pression et asymétrie.", risk: "Éviter deux mains occupées sans fonction narrative." },
          { title: "Regard", detail: "Donner une cible précise et conserver la direction d'écran." },
          { title: "Expression", detail: "Décrire tension de mâchoire, sourcils, souffle ou clignement plutôt qu'une étiquette émotionnelle." },
        ],
      },
      {
        id: "space",
        title: "03 · Cadre, distance et accessoire",
        intro: "Adapter la performance à ce que le cadre peut réellement montrer.",
        items: [
          { title: "Valeur de plan", detail: "Un plan large lit la posture ; un gros plan lit les micro-réactions." },
          { title: "Hauteur caméra", detail: "La hauteur modifie le rapport de pouvoir et la visibilité des gestes." },
          { title: "Accessoire", detail: "L'objet doit contraindre, révéler ou déclencher l'action." },
        ],
      },
      {
        id: "continuity",
        title: "04 · Continuité vers l'animation",
        intro: "Préparer un mouvement court sans mutation d'identité ou de costume.",
        items: [
          { title: "État initial", detail: "Consigner appuis, orientation, main active, regard et état de l'objet." },
          { title: "Transition", detail: "Décrire un changement principal et les micro-mouvements secondaires." },
          { title: "État final", detail: "Vérifier qu'il crée un raccord exploitable avec le plan suivant." },
        ],
      },
    ],
    checklist: [
      "La silhouette exprime-t-elle le beat sans le visage ?",
      "Chaque main a-t-elle une position et une fonction claires ?",
      "Le regard possède-t-il une cible et une direction d'écran stables ?",
      "L'accessoire modifie-t-il réellement l'action ?",
      "Les états initial et final sont-ils documentés dans la shot-list ?",
    ],
    sourceNote:
      "Synthèse de 17 références locales sur les poses, angles du visage, mains, accessoires et planches de continuité, reliée aux contenus Lyra Voss.",
  },
  {
    slug: "grille-analyse-dramatique-scene",
    eyebrow: "Outil de découpage",
    title: "Grille d'analyse dramatique d'une scène",
    description:
      "Neuf questions pour identifier ce qui change dans une scène avant de choisir les plans et les effets.",
    lessonHref: "/formation/ecriture-scenaristique/",
    lessonLabel: "Voir le cours d'écriture scénaristique",
    stats: [
      { label: "Questions", value: "9" },
      { label: "Sortie", value: "Beats" },
      { label: "Avant", value: "Storyboard" },
    ],
    lead:
      "Une scène ne devient pas cinématographique parce qu'elle contient une belle lumière. Elle le devient lorsqu'une relation, une connaissance ou une décision change et que la mise en scène rend ce changement perceptible.",
    method: [
      "Répondre en une phrase concrète à chaque question.",
      "Identifier le moment exact où la réponse change.",
      "Transformer ces changements en trois à cinq beats maximum.",
      "Associer chaque beat à une information visuelle ou sonore nouvelle.",
      "Supprimer tout plan qui ne modifie ni compréhension, ni tension, ni rythme.",
    ],
    sections: [
      {
        id: "desire-power",
        title: "01 · Désir et pouvoir",
        intro: "Définir les forces actives avant le découpage.",
        items: [
          { title: "Que ressent le personnage ?", detail: "Chercher le comportement qui trahit ce sentiment." },
          { title: "Que veut-il maintenant ?", detail: "Formuler un objectif réalisable ou empêché dans la durée de la scène." },
          { title: "Où se trouve le pouvoir ?", detail: "Repérer qui contrôle l'espace, l'information, le temps ou la sortie." },
        ],
      },
      {
        id: "knowledge-stakes",
        title: "02 · Information et enjeu",
        intro: "Construire la tension à partir d'un écart de connaissance.",
        items: [
          { title: "Que ne sait-il pas ?", detail: "Nommer le secret, le danger ou la fausse croyance active." },
          { title: "Qu'est-ce qui rend la scène impossible à couper ?", detail: "Identifier la promesse ou la question qui retient le spectateur." },
          { title: "De quoi parle vraiment la scène ?", detail: "Distinguer l'action littérale de la relation ou de la peur sous-jacente." },
        ],
      },
      {
        id: "point-of-view",
        title: "03 · Point de vue et transformation",
        intro: "Choisir ce que le spectateur découvre, et quand.",
        items: [
          { title: "Par quel personnage commencer ?", detail: "Le bon point de vue n'est pas toujours celui qui parle ou agit en premier." },
          { title: "Quelle réaction montrer avant la cause ?", detail: "Une réaction peut créer une question avant de révéler son objet." },
          { title: "Quel son peut précéder l'image ?", detail: "Une amorce sonore peut ouvrir le hors-champ et préparer la coupe." },
        ],
      },
      {
        id: "rhythm",
        title: "04 · Silence et durée",
        intro: "Faire du temps une décision dramatique.",
        items: [
          { title: "Où tenir l'immobilité ?", detail: "Prolonger un cadre seulement si l'attente augmente la tension ou révèle un choix." },
          { title: "Quel est le point de non-retour ?", detail: "Nommer le geste, le regard ou le son après lequel la scène ne peut revenir à son état initial." },
          { title: "Quel nouvel état clôt la scène ?", detail: "Décrire ce qui a changé pour le personnage, le lieu ou le spectateur." },
        ],
      },
    ],
    checklist: [
      "Le personnage veut-il quelque chose de précis pendant la scène ?",
      "Le rapport de pouvoir change-t-il au moins une fois ?",
      "Chaque beat apporte-t-il une information nouvelle ?",
      "Le point de vue contrôle-t-il la révélation ?",
      "La dernière image ou le dernier son crée-t-il un nouvel état ?",
    ],
    sourceNote:
      "Synthèse de 11 références locales sur la lecture dramatique, le découpage et le « show, don't tell », appliquée à la structure du projet Vertical Silence.",
  },
];
