import { compositionPrinciples } from "./composition-principles";

export type FilmmakingLanguageCategory =
  | "narrative-intention"
  | "shot-sizes"
  | "camera-angles"
  | "composition"
  | "lens-library"
  | "camera-movement"
  | "lighting"
  | "color-mood";

export type FilmmakingVisualVariant =
  | "urban"
  | "board"
  | "portrait"
  | "storyboard"
  | "depth"
  | "light"
  | "composition";

export interface FilmmakingLanguageItem {
  id: string;
  category: FilmmakingLanguageCategory;
  title: string;

  description: string;
  effect: string;

  bestFor: string[];

  imagePrompt: string;
  videoPrompt: string;

  imagePath?: string;

  tags: string[];

  relatedItems?: string[];
  relatedPages?: string[];

  visualVariant?: FilmmakingVisualVariant;
  visualCue?: string;
  source?: string;
}

export interface FilmmakingLanguageCategoryMeta {
  id: FilmmakingLanguageCategory;
  title: string;
  shortTitle: string;
  description: string;
  promptRule: string;
  comparisonSubject?: string;
  relatedPages: string[];
}

export interface PromptBuilderExample {
  id: string;
  theme: "solitude" | "tension" | "revelation";
  format: "image" | "video";
  title: string;
  decisions: string[];
  prompt: string;
}

const page = {
  promptBuilder: "/prompts/",
  storyboard: "/formation/storyboard-shotlist/",
  shotList: "/resources/shot-list-checklist/",
  cameraShots: "/references/camera-shots/",
  sceneConstruction: "/formation/mettre-en-scene/",
  cameraMotion: "/formation/cinematographie/",
  composition: "/formation/composition-cinematique/",
  lightingColor: "/formation/lumiere-couleur/",
  promptMethod: "/formation/voir-composer-generer/",
  animation: "/formation/animer/",
  productionBible: "/resources/production-bible-template/",
  directorsToolkit: "Future Director's Toolkit (planned)",
};

const lyraConstant =
  "Lyra Voss, same matte black tactical outfit, same rain-soaked Vertical Silence concrete corridor, weak cyan practical light, blue-grey night atmosphere, consistent face and proportions";

const shotComparisonScene =
  `${lyraConstant}, standing still beside the same damaged access marker, wet concrete floor, vertical shaft in the background`;

const angleComparisonScene =
  `${lyraConstant}, standing at the base of the same monumental concrete shaft, one red access marker at frame left, rain mist, identical pose and lighting`;

const lensComparisonScene =
  `${lyraConstant}, head-and-shoulders portrait kept the same size in frame, background concrete columns and cyan practical lights unchanged`;

const movementScene =
  `${lyraConstant}, medium-wide frame in an abandoned concrete transit hall, clear foreground cables, midground subject, deep background shaft`;

const portraitLightingScene =
  "same close portrait of Lyra Voss, neutral expression, wet dark honey-brown hair, natural skin texture, matte black collar, simple blue-grey concrete background";

const colorScene =
  `${lyraConstant}, medium-wide frame inside the same concrete corridor, one access marker, wet floor reflections, locked composition`;

const makeItem = (
  item: Omit<FilmmakingLanguageItem, "imagePath"> & { imagePath?: string }
): FilmmakingLanguageItem => item;

const imageStill = (base: string, instruction: string) =>
  `${base}, ${instruction}, cinematic film still, physically realistic materials, coherent exposure, no text, no watermark`;

const videoClip = (base: string, instruction: string, camera = "locked camera, subtle breathing only") =>
  `Starting from the approved frame: ${base}. ${instruction}. Camera: ${camera}. Preserve identity, costume, architecture, lighting direction and color palette. Five-second cinematic AI video, one move only, slow natural motion, no text, no watermark.`;

export const filmmakingLanguageCategories: FilmmakingLanguageCategoryMeta[] = [
  {
    id: "narrative-intention",
    title: "Narrative Intention",
    shortTitle: "Intention",
    description:
      "Choose what the shot must make the audience understand before choosing a lens, angle or movement.",
    promptRule:
      "Start every prompt with the dramatic function: emotion, power, knowledge, purpose, tension or subtext.",
    relatedPages: [page.sceneConstruction, page.promptMethod, page.storyboard],
  },
  {
    id: "shot-sizes",
    title: "Shot Sizes",
    shortTitle: "Shot Size",
    description:
      "Compare how distance changes intimacy, context and readable action while keeping the same subject constant.",
    promptRule:
      "Name the exact shot size. Do not rely on vague words like cinematic, dramatic or beautiful.",
    comparisonSubject: shotComparisonScene,
    relatedPages: [page.cameraShots, page.shotList, page.storyboard],
  },
  {
    id: "camera-angles",
    title: "Camera Angles",
    shortTitle: "Angle",
    description:
      "Keep the scene constant and change only the camera height, axis or viewpoint to alter psychology.",
    promptRule:
      "Specify camera position relative to the subject, not just the emotional adjective.",
    comparisonSubject: angleComparisonScene,
    relatedPages: [page.cameraShots, page.sceneConstruction, page.storyboard],
  },
  {
    id: "composition",
    title: "Composition",
    shortTitle: "Composition",
    description:
      "Organize the frame so the audience knows where to look, what dominates and what is withheld.",
    promptRule:
      "Use one dominant composition principle and one support principle at most.",
    relatedPages: [page.composition, "/resources/composition-cheat-sheet/", page.promptBuilder],
  },
  {
    id: "lens-library",
    title: "Lens Library",
    shortTitle: "Lens",
    description:
      "Focal length changes perspective, compression, intimacy and background weight even when shot size stays similar.",
    promptRule: "A close-up is not enough. Lens choice changes emotion.",
    comparisonSubject: lensComparisonScene,
    relatedPages: [page.cameraMotion, page.cameraShots, page.promptBuilder],
  },
  {
    id: "camera-movement",
    title: "Camera Movement Library",
    shortTitle: "Movement",
    description:
      "Treat movement as narrative punctuation. AI video is more stable when one clip contains one motivated move.",
    promptRule: "One move. One clip. Default to slow movements for AI video.",
    comparisonSubject: movementScene,
    relatedPages: [page.cameraMotion, page.animation, page.shotList],
  },
  {
    id: "lighting",
    title: "Lighting Library",
    shortTitle: "Lighting",
    description:
      "Compare emotional tone by changing only source size, direction, hardness and contrast on the same portrait.",
    promptRule:
      "Describe where the light comes from, how hard it is and what it reveals or hides.",
    comparisonSubject: portraitLightingScene,
    relatedPages: [page.lightingColor, "/formation/ambiance-realisme-texture/", page.promptBuilder],
  },
  {
    id: "color-mood",
    title: "Color & Mood Library",
    shortTitle: "Color",
    description:
      "Build palettes as narrative systems, not decorative filters. Keep the same scene and change only color logic.",
    promptRule:
      "Define dominant, support and accent colors, then explain the emotional reason.",
    comparisonSubject: colorScene,
    relatedPages: [page.lightingColor, page.productionBible, page.promptBuilder],
  },
];

const narrativeItems: FilmmakingLanguageItem[] = [
  makeItem({
    id: "character-emotion",
    category: "narrative-intention",
    title: "Character Emotion",
    description:
      "The inner state the audience must read through posture, gaze, spacing and rhythm.",
    effect:
      "Creates empathy and tells the viewer how close they are allowed to get to the character.",
    bestFor: ["close-ups", "decision beats", "reaction shots", "image-to-video holds"],
    imagePrompt: imageStill(
      lyraConstant,
      "character emotion: restrained grief, eyes fixed on an unseen choice, shoulders still, close-up with soft foreground rain"
    ),
    videoPrompt: videoClip(
      lyraConstant,
      "Lyra holds restrained grief without speaking; only breathing, rain and tiny eye movement change the frame",
      "very slow push-in, motion intensity 0.15"
    ),
    tags: ["emotion", "performance", "subtle acting"],
    relatedItems: ["close-up", "soft-light", "slow-push-in"],
    relatedPages: [page.promptBuilder, page.sceneConstruction],
    visualVariant: "portrait",
    visualCue: "Emotion is read in micro-actions, not exposition.",
  }),
  makeItem({
    id: "power-dynamics",
    category: "narrative-intention",
    title: "Power Dynamics",
    description:
      "The visible balance of control between a character, another figure, an object or a space.",
    effect:
      "Makes dominance, vulnerability, pressure or resistance visible before dialogue explains it.",
    bestFor: ["low angles", "blocking", "dialogue coverage", "hero shots"],
    imagePrompt: imageStill(
      angleComparisonScene,
      "power dynamics: Lyra appears small against the towering shaft but keeps a calm grounded stance, low-angle medium-wide framing"
    ),
    videoPrompt: videoClip(
      angleComparisonScene,
      "The vertical architecture seems to dominate Lyra while she does not move, making resistance visible",
      "slow tilt up from Lyra to the shaft, then settle"
    ),
    tags: ["power", "blocking", "hierarchy"],
    relatedItems: ["low-angle", "symmetry", "35mm", "push-in"],
    relatedPages: [page.sceneConstruction, page.cameraShots],
    visualVariant: "composition",
    visualCue: "Who controls the frame?",
  }),
  makeItem({
    id: "audience-knowledge",
    category: "narrative-intention",
    title: "Audience Knowledge",
    description:
      "The amount of information the viewer has compared with the character inside the scene.",
    effect:
      "Creates suspense, surprise, irony or curiosity by controlling what is shown, hidden or delayed.",
    bestFor: ["reveals", "over-the-shoulder shots", "foreground framing", "POV"],
    imagePrompt: imageStill(
      movementScene,
      "audience knowledge: a hidden warning symbol is visible behind Lyra while she looks in the opposite direction, layered foreground frame"
    ),
    videoPrompt: videoClip(
      movementScene,
      "The camera slowly reveals the warning symbol before Lyra notices it, giving the audience information first",
      "slow lateral reveal, one direction only"
    ),
    tags: ["suspense", "reveal", "information"],
    relatedItems: ["reveal-shot", "frame-within-frame", "over-the-shoulder"],
    relatedPages: [page.storyboard, page.shotList],
    visualVariant: "depth",
    visualCue: "What does the viewer know first?",
  }),
  makeItem({
    id: "scene-purpose",
    category: "narrative-intention",
    title: "Scene Purpose",
    description:
      "The job of the scene in the sequence: introduce, reveal, escalate, decide, transition or resolve.",
    effect:
      "Keeps shot choices functional and prevents decorative images from replacing story beats.",
    bestFor: ["storyboards", "shot lists", "sequence planning", "prompt chains"],
    imagePrompt: imageStill(
      shotComparisonScene,
      "scene purpose: discovery beat, Lyra notices the damaged access marker that will motivate the next scene"
    ),
    videoPrompt: videoClip(
      shotComparisonScene,
      "The clip exists only to show Lyra discovering the marker; no extra action, no new character, no style change",
      "locked camera, five-second hold, subtle rain motion"
    ),
    tags: ["scene function", "storyboard", "shot list"],
    relatedItems: ["insert-shot", "medium-shot", "shot-list"],
    relatedPages: [page.storyboard, page.shotList],
    visualVariant: "storyboard",
    visualCue: "What must change by the end of the shot?",
  }),
  makeItem({
    id: "narrative-tension",
    category: "narrative-intention",
    title: "Narrative Tension",
    description:
      "The unresolved pressure between what a character wants, what blocks them and what may happen next.",
    effect:
      "Turns stillness into anticipation and gives slow AI video a reason to feel alive.",
    bestFor: ["slow push-ins", "negative space", "low key lighting", "withheld reveals"],
    imagePrompt: imageStill(
      colorScene,
      "narrative tension: Lyra faces an unopened door, large empty space behind her, low-key cyan edge light, no action yet"
    ),
    videoPrompt: videoClip(
      colorScene,
      "The door stays closed and Lyra hesitates; tension comes from delay, not action",
      "slow push-in, no cut, no camera shake"
    ),
    tags: ["tension", "delay", "anticipation"],
    relatedItems: ["negative-space", "low-key", "push-in"],
    relatedPages: [page.cameraMotion, page.storyboard],
    visualVariant: "depth",
    visualCue: "Pressure without release.",
  }),
  makeItem({
    id: "subtext",
    category: "narrative-intention",
    title: "Subtext",
    description:
      "The meaning underneath the visible action: what the character feels or hides but does not state.",
    effect:
      "Adds emotional depth and makes quiet shots useful because the frame carries a second layer of meaning.",
    bestFor: ["profile shots", "close-ups", "symbolic inserts", "held reaction shots"],
    imagePrompt: imageStill(
      portraitLightingScene,
      "subtext: Lyra looks away from the access marker while her hand still reaches toward it, profile close-up, restrained backlight"
    ),
    videoPrompt: videoClip(
      portraitLightingScene,
      "Lyra does not touch the marker; her hesitation communicates refusal and desire at the same time",
      "locked camera, tiny hand movement only"
    ),
    tags: ["subtext", "performance", "symbol"],
    relatedItems: ["profile", "insert-shot", "rim-light"],
    relatedPages: [page.sceneConstruction, page.promptMethod],
    visualVariant: "portrait",
    visualCue: "The visible action says less than the frame means.",
  }),
];

const shotSizeData = [
  ["extreme-wide-shot", "Extreme Wide Shot", "Shows the subject as a small part of a much larger environment.", "Scale, isolation and world pressure become stronger than facial emotion.", ["establishing geography", "solitude", "arrival", "massive locations"], "extreme wide shot, Lyra reduced to a small silhouette at the base of the concrete shaft, vast wet floor and towering negative space"],
  ["wide-shot", "Wide Shot", "Shows the full environment while keeping the subject readable.", "Balances character and world so the viewer understands where action can happen.", ["scene geography", "blocking", "reveals", "walk-ins"], "wide shot, full environment visible, Lyra readable in the lower third, shaft and access marker in clear spatial relation"],
  ["full-shot", "Full Shot", "Frames the whole body from head to toe.", "Reveals posture, costume and readiness without losing the character in the space.", ["costume continuity", "body language", "entry beats", "stance"], "full-body shot, Lyra framed head to toe, same stance and access marker, wet floor reflection visible"],
  ["medium-wide", "Medium Wide", "Frames roughly from knees or thighs upward with enough set around the body.", "Keeps action readable while starting to privilege the character over the location.", ["dialogue setup", "movement starts", "power stances", "AI video stability"], "medium-wide shot from mid-thigh upward, Lyra and marker both readable, background shaft still present"],
  ["medium-shot", "Medium Shot", "Frames the body from waist or torso upward.", "Connects gesture, face and immediate context without becoming intimate.", ["dialogue", "object interaction", "reaction plus gesture", "scene beats"], "medium shot from waist upward, Lyra looking toward the access marker, hands visible, corridor context retained"],
  ["medium-close-up", "Medium Close Up", "Frames from chest or shoulders upward.", "Increases emotional access while keeping posture and eyeline readable.", ["controlled emotion", "decision beats", "subtext", "dialogue intensity"], "medium close-up, Lyra shoulders and face visible, access marker soft in background, same cyan light"],
  ["close-up", "Close Up", "Frames the face as the primary information.", "Makes emotion and micro-expression dominate the shot.", ["empathy", "reaction", "recognition", "identity control"], "close-up portrait of Lyra, same corridor reduced to soft context, rain droplets and natural skin texture readable"],
  ["extreme-close-up", "Extreme Close Up", "Frames a very small detail such as an eye, hand, mouth or texture.", "Transforms a detail into a narrative event.", ["clues", "fear", "texture", "micro-reveals"], "extreme close-up of Lyra's green eye reflecting the damaged access marker, rain on skin, same cyan light"],
  ["insert-shot", "Insert Shot", "Cuts to an object or body detail that carries story information.", "Gives a clue, action or decision visual priority.", ["props", "clues", "hands", "continuity details"], "insert shot of Lyra's gloved hand hovering above the damaged access marker, same wet concrete and cyan reflection"],
] as const;

const shotItems: FilmmakingLanguageItem[] = shotSizeData.map(
  ([id, title, description, effect, bestFor, framing]) =>
    makeItem({
      id,
      category: "shot-sizes",
      title,
      description,
      effect,
      bestFor: [...bestFor],
      imagePrompt: imageStill(shotComparisonScene, framing),
      videoPrompt: videoClip(
        shotComparisonScene,
        `${framing}. Keep shot size constant during the clip; only rain, breathing and tiny environmental motion change`,
        "locked camera or very slow stabilized push, no reframing"
      ),
      tags: ["shot size", "framing", "comparison"],
      relatedItems:
        id === "close-up"
          ? ["85mm", "character-emotion", "soft-light"]
          : id === "extreme-wide-shot"
            ? ["negative-space", "18mm", "solitude-image-prompt"]
            : id === "insert-shot"
              ? ["scene-purpose", "audience-knowledge", "rack-focus"]
              : ["35mm", "rule-of-thirds", "shot-list"],
      relatedPages: [page.cameraShots, page.shotList, page.promptBuilder],
      visualVariant: id.includes("close") || id === "insert-shot" ? "portrait" : "composition",
      visualCue: "Same subject and scene; only distance changes.",
      source: ["close-up", "extreme-close-up", "medium-shot", "full-shot"].includes(id)
        ? "Expanded from the existing camera-shots reference collection."
        : undefined,
    })
);

const angleData = [
  ["eye-level", "Eye Level", "Camera is placed at the subject's eye height.", "Feels neutral, direct and human; the viewer meets the character as an equal.", ["honest dialogue", "neutral observation", "character grounding"], "eye-level camera height, lens aligned with Lyra's eyes"],
  ["high-angle", "High Angle", "Camera looks down toward the subject.", "Can make the character feel vulnerable, observed or constrained by the space.", ["vulnerability", "surveillance", "smallness"], "high-angle view looking down at Lyra while the shaft surrounds her"],
  ["low-angle", "Low Angle", "Camera looks upward toward the subject.", "Adds authority, threat or heroic weight, depending on context.", ["power", "hero shots", "intimidation"], "low-angle medium-wide view looking up at Lyra and the vertical concrete shaft"],
  ["birds-eye-view", "Bird's Eye View", "Camera looks straight down from above.", "Turns the scene into a map and can make the character feel trapped or strategic.", ["geography", "ritual", "isolation"], "perfect overhead bird's-eye view, Lyra and access marker visible as graphic shapes"],
  ["worms-eye-view", "Worm's Eye View", "Camera is extremely low, looking sharply upward.", "Makes architecture or the character feel monumental and physically imposing.", ["monumentality", "threat", "scale"], "camera almost on the wet floor, looking up past Lyra toward the vertical shaft"],
  ["dutch-angle", "Dutch Angle", "Camera is intentionally tilted off level.", "Creates unease, instability or psychological fracture.", ["disorientation", "danger", "corrupted space"], "dutch angle, horizon tilted while the same pose and corridor remain unchanged"],
  ["over-the-shoulder", "Over The Shoulder", "Frames from behind one subject toward a target or second subject.", "Creates relation, withheld identity and spatial tension.", ["dialogue", "reveals", "point of attention"], "over-the-shoulder view from behind Lyra toward the damaged access marker and shaft"],
  ["pov", "POV", "Camera adopts the subject's visual position.", "Puts the audience inside the character's perception and limits knowledge to what they see.", ["immersion", "discovery", "fear"], "POV from Lyra looking at the damaged access marker in the same corridor"],
  ["profile", "Profile", "Camera sees the subject from the side.", "Suggests thought, distance, secrecy or a decision happening internally.", ["subtext", "silence", "thresholds"], "profile view of Lyra facing the access marker, same shaft in background"],
  ["rear-view", "Rear View", "Camera looks at the subject from behind.", "Makes the viewer follow, observe or enter the unknown with the character.", ["entry shots", "mystery", "follow moments"], "rear view of Lyra facing into the vertical darkness, back silhouette readable"],
  ["symmetrical-front-view", "Symmetrical Front View", "Camera faces the subject and space on a centered axis.", "Feels ritualistic, controlled, confrontational or iconic.", ["confrontation", "formal reveals", "institutional spaces"], "perfectly centered frontal view, Lyra on the central axis below the vertical shaft"],
] as const;

const angleItems: FilmmakingLanguageItem[] = angleData.map(
  ([id, title, description, effect, bestFor, angle]) =>
    makeItem({
      id,
      category: "camera-angles",
      title,
      description,
      effect,
      bestFor: [...bestFor],
      imagePrompt: imageStill(angleComparisonScene, `${angle}; keep scene, pose, lighting and lens language consistent`),
      videoPrompt: videoClip(
        angleComparisonScene,
        `${angle}. Keep the angle unchanged during the clip so psychology comes from viewpoint, not camera drift`,
        id === "over-the-shoulder" ? "locked OTS with a slow rack focus" : "locked camera, subtle rain and breathing only"
      ),
      tags: ["angle", "psychology", "viewpoint"],
      relatedItems:
        id === "low-angle"
          ? ["power-dynamics", "35mm", "push-in"]
          : id === "over-the-shoulder"
            ? ["audience-knowledge", "rack-focus", "medium-shot"]
            : id === "pov"
              ? ["audience-knowledge", "reveal-shot", "handheld"]
              : ["scene-purpose", "composition", "shot-list"],
      relatedPages: [page.cameraShots, page.sceneConstruction, page.storyboard],
      visualVariant: "composition",
      visualCue: "Same scene; only camera angle changes.",
      source: ["low-angle", "over-the-shoulder"].includes(id)
        ? "Expanded from the existing camera-shots reference collection."
        : undefined,
    })
);

const compositionById = Object.fromEntries(compositionPrinciples.map((item) => [item.id, item]));

const fromComposition = (
  sourceId: string,
  id: string,
  title: string,
  relatedItems: string[]
): FilmmakingLanguageItem => {
  const source = compositionById[sourceId];
  return makeItem({
    id,
    category: "composition",
    title,
    description: source.definition,
    effect: source.narrativeEffect,
    bestFor: [source.filmmakingUse],
    imagePrompt: source.prompt,
    videoPrompt: videoClip(
      source.prompt,
      "Animate only the composition's intended pressure; preserve the layout and focal hierarchy",
      "slow movement that supports the composition, no extra camera move"
    ),
    tags: ["composition", ...source.tags],
    relatedItems,
    relatedPages: [page.composition, "/resources/composition-cheat-sheet/", page.promptBuilder],
    visualVariant: "composition",
    visualCue: "Reused from the existing composition lesson and enriched as central reference.",
    source: "Reused from src/data/composition-principles.ts.",
  });
};

const compositionItems: FilmmakingLanguageItem[] = [
  fromComposition("rule-of-thirds", "rule-of-thirds", "Rule of Thirds", ["wide-shot", "character-emotion", "35mm"]),
  fromComposition("symmetry", "symmetry", "Symmetry", ["symmetrical-front-view", "low-key", "35mm"]),
  fromComposition("centered-composition", "center-framing", "Center Framing", ["symmetrical-front-view", "scene-purpose", "50mm"]),
  fromComposition("negative-space", "negative-space", "Negative Space", ["extreme-wide-shot", "narrative-tension", "18mm"]),
  fromComposition("leading-lines", "leading-lines", "Leading Lines", ["tracking-shot", "wide-shot", "28mm"]),
  fromComposition("framing", "frame-within-frame", "Frame Within Frame", ["audience-knowledge", "reveal-shot", "50mm"]),
  makeItem({
    id: "foreground-framing",
    category: "composition",
    title: "Foreground Framing",
    description:
      "Places a near object between camera and subject to create depth, concealment or observation.",
    effect:
      "Makes the viewer feel hidden inside the scene and gives AI video parallax to animate.",
    bestFor: ["reveals", "surveillance", "image-to-video parallax", "intimate observation"],
    imagePrompt: imageStill(
      movementScene,
      "dark out-of-focus cable and concrete edge framing Lyra in the midground, clear background shaft, foreground used as a visual mask"
    ),
    videoPrompt: videoClip(
      movementScene,
      "Foreground cable slides slowly across the frame while Lyra remains stable, creating a reveal through parallax",
      "slow lateral dolly, one direction only"
    ),
    tags: ["composition", "foreground", "parallax"],
    relatedItems: ["frame-within-frame", "reveal-shot", "depth-layering"],
    relatedPages: [page.composition, page.animation],
    visualVariant: "depth",
    visualCue: "Near layer, subject layer, background layer.",
  }),
  makeItem({
    id: "crowded-frame",
    category: "composition",
    title: "Crowded Frame",
    description:
      "Fills the frame with many bodies, objects or shapes so the subject must fight for attention.",
    effect:
      "Creates pressure, chaos, social density or sensory overload.",
    bestFor: ["panic", "markets", "crowd pressure", "loss of control"],
    imagePrompt: imageStill(
      lyraConstant,
      "crowded frame, Lyra partially surrounded by dense vertical cables, warning signs and silhouettes, her face still the sharpest focal point"
    ),
    videoPrompt: videoClip(
      lyraConstant,
      "Background silhouettes and cables shift subtly around Lyra while she remains the clearest anchor",
      "locked camera, environmental motion only"
    ),
    tags: ["composition", "density", "pressure"],
    relatedItems: ["visual-weight", "handheld", "low-key"],
    relatedPages: [page.composition, page.sceneConstruction],
    visualVariant: "urban",
    visualCue: "Pressure comes from competing information.",
  }),
  makeItem({
    id: "empty-space",
    category: "composition",
    title: "Empty Space",
    description:
      "Leaves a large inactive area in the frame without necessarily directing the eye toward an arrival or threat.",
    effect:
      "Creates silence, absence, waiting or emotional numbness.",
    bestFor: ["solitude", "contemplation", "aftermath", "quiet transitions"],
    imagePrompt: imageStill(
      shotComparisonScene,
      "Lyra placed low and small in a largely empty blue-grey concrete frame, no visible threat, minimal light, stillness emphasized"
    ),
    videoPrompt: videoClip(
      shotComparisonScene,
      "Nothing enters the empty space; only rain and mist move, preserving the feeling of absence",
      "locked camera, no reveal"
    ),
    tags: ["composition", "silence", "absence"],
    relatedItems: ["negative-space", "extreme-wide-shot", "muted-palette"],
    relatedPages: [page.composition, page.promptBuilder],
    visualVariant: "composition",
    visualCue: "Empty space is absence; negative space is directed absence.",
  }),
  fromComposition("depth-layering", "depth-layering", "Depth Layering", ["foreground-framing", "tracking-shot", "rack-focus"]),
  makeItem({
    id: "long-lens-isolation",
    category: "composition",
    title: "Long Lens Isolation",
    description:
      "Uses a longer focal length and shallow depth to separate the subject from compressed background layers.",
    effect:
      "Makes the character feel watched, trapped or emotionally sealed off from the world.",
    bestFor: ["loneliness in crowds", "surveillance", "compressed backgrounds", "emotional distance"],
    imagePrompt: imageStill(
      lensComparisonScene,
      "135mm long-lens isolation, compressed concrete columns behind Lyra, shallow depth, background large but soft"
    ),
    videoPrompt: videoClip(
      lensComparisonScene,
      "The background stays compressed and soft while Lyra remains sharp; no wide-angle drift",
      "locked camera, tiny breathing only"
    ),
    tags: ["composition", "lens", "compression"],
    relatedItems: ["135mm", "close-up", "low-key"],
    relatedPages: [page.cameraMotion, page.composition],
    visualVariant: "portrait",
    visualCue: "Isolation through compression.",
  }),
  makeItem({
    id: "wide-lens-isolation",
    category: "composition",
    title: "Wide Lens Isolation",
    description:
      "Uses a wide lens close to the subject so the world stretches around them while they remain alone.",
    effect:
      "Makes isolation feel spatial and physical, not just emotional.",
    bestFor: ["lonely spaces", "environmental pressure", "surreal proximity", "wide close-ups"],
    imagePrompt: imageStill(
      lensComparisonScene,
      "18mm wide-lens isolation, camera close to Lyra, background shaft stretches away with strong perspective, subject alone in space"
    ),
    videoPrompt: videoClip(
      lensComparisonScene,
      "Wide perspective remains stable as rain and distant mist move; avoid face warping",
      "very slow push-in, minimal distance change"
    ),
    tags: ["composition", "lens", "perspective"],
    relatedItems: ["18mm", "extreme-wide-shot", "negative-space"],
    relatedPages: [page.cameraMotion, page.composition],
    visualVariant: "composition",
    visualCue: "Isolation through perspective.",
  }),
];

const lensData = [
  ["18mm", "18mm", "Very wide field of view with strong perspective expansion.", "Low compression, deep spatial stretch, close objects enlarge quickly.", "Makes the world feel physical, unstable, immersive or overwhelming.", ["environmental close-ups", "large interiors", "subject inside space"], "18mm wide lens, camera close enough to keep Lyra head-and-shoulders size, background columns stretch away dramatically, avoid fisheye distortion"],
  ["24mm", "24mm", "Wide but more controlled than 18mm.", "Low-to-moderate compression, strong depth and readable environment.", "Feels present, energetic and spatial without becoming extreme.", ["walk-and-talk", "wide portraits", "movement with environment"], "24mm lens, same portrait size, corridor depth expanded but face still natural"],
  ["35mm", "35mm", "Balanced wide-normal focal length common for cinematic context.", "Moderate depth, natural perspective, enough environment around the subject.", "Feels grounded, observant and human.", ["story scenes", "medium shots", "AI video stability"], "35mm lens, same portrait size, natural face geometry, corridor still readable"],
  ["50mm", "50mm", "Normal focal length with less perspective emphasis.", "Moderate compression, balanced subject/background relation.", "Feels direct, intimate but not overly stylized.", ["dialogue", "neutral portraits", "reference frames"], "50mm lens, same portrait size, background slightly compressed, natural depth"],
  ["85mm", "85mm", "Short telephoto portrait lens.", "Noticeable compression, shallow depth, stronger subject separation.", "Feels intimate, focused, emotionally selective.", ["close-ups", "beauty without distortion", "emotional beats"], "85mm lens, same portrait size, compressed cyan lights, shallow but controlled background"],
  ["135mm", "135mm", "Long telephoto lens with strong compression.", "High compression, shallow depth, background appears closer and larger.", "Feels isolated, watched, tense or emotionally sealed.", ["surveillance feeling", "distant close-ups", "compressed architecture"], "135mm lens, same portrait size from farther away, background columns compressed behind Lyra, very shallow depth"],
] as const;

const lensItems: FilmmakingLanguageItem[] = lensData.map(
  ([id, title, characteristics, compression, psychology, bestFor, lensPrompt]) =>
    makeItem({
      id,
      category: "lens-library",
      title,
      description: `${characteristics} ${compression}`,
      effect: psychology,
      bestFor: [...bestFor],
      imagePrompt: imageStill(lensComparisonScene, lensPrompt),
      videoPrompt: videoClip(
        lensComparisonScene,
        `${lensPrompt}. Preserve the same framing so the perspective difference is clear`,
        id === "18mm" || id === "24mm" ? "very slow dolly, one axis only" : "locked camera or very slow push-in"
      ),
      tags: ["lens", "focal length", "perspective"],
      relatedItems:
        id === "18mm"
          ? ["wide-lens-isolation", "extreme-wide-shot", "worms-eye-view"]
          : id === "85mm" || id === "135mm"
            ? ["long-lens-isolation", "close-up", "character-emotion"]
            : ["medium-shot", "rule-of-thirds", "eye-level"],
      relatedPages: [page.cameraMotion, page.cameraShots, page.promptBuilder],
      visualVariant: id === "85mm" || id === "135mm" ? "portrait" : "depth",
      visualCue: "Same close-up size; only lens perspective changes.",
    })
);

const movementData = [
  ["push-in", "Push In", "Camera moves physically closer to the subject.", "Increases attention, emotional pressure or importance.", ["realization", "threat", "decision"], "very slow dolly push-in toward Lyra, no zoom, no orbit"],
  ["pull-back", "Pull Back", "Camera moves physically away from the subject.", "Reveals context, loneliness or the cost of a decision.", ["reveals", "aftermath", "scale"], "slow dolly pull back revealing the shaft around Lyra"],
  ["pan", "Pan", "Camera rotates horizontally from a fixed position.", "Shifts attention across space or reveals a relation.", ["searching", "following eyeline", "space reveal"], "slow pan from the access marker to Lyra, camera stays on tripod"],
  ["tilt", "Tilt", "Camera rotates vertically from a fixed position.", "Reveals height, hierarchy or a hidden vertical clue.", ["architecture", "power", "scale"], "slow tilt up from Lyra to the towering shaft"],
  ["tracking-shot", "Tracking Shot", "Camera moves with the subject or along a path.", "Creates continuity, momentum and spatial understanding.", ["walks", "exploration", "process"], "slow tracking shot parallel to Lyra as she walks through the corridor"],
  ["truck-shot", "Truck Shot", "Camera moves sideways while facing the subject or scene.", "Creates parallax and reveals layers laterally.", ["layered spaces", "reveals", "surveillance"], "slow truck left past foreground cables, Lyra stays midground"],
  ["orbit", "Orbit", "Camera circles around the subject.", "Shows a character from multiple sides and can feel dramatic or destabilizing.", ["hero moments", "inspection", "transformation"], "very slow partial orbit around Lyra, less than 45 degrees, stable subject"],
  ["arc-shot", "Arc Shot", "Camera moves in a curved path, usually not a full circle.", "Changes relation between subject and background while keeping a motivated path.", ["relationship shifts", "reveals", "thresholds"], "slow arc from Lyra's profile to three-quarter view, background shaft revealed"],
  ["crane", "Crane", "Camera rises or descends through space.", "Adds scale, release or discovery through vertical movement.", ["establishing", "arrival", "vertical spaces"], "slow crane up from Lyra to reveal the vertical concrete shaft"],
  ["jib", "Jib", "Short controlled crane-like move from a pivoting arm.", "Adds elegant height change without feeling weightless.", ["small reveals", "object-to-face moves", "production value"], "small jib up from the access marker to Lyra's face"],
  ["zoom", "Zoom", "Lens changes focal length while camera stays still.", "Feels observational, artificial or analytical compared with a dolly.", ["documents", "realization", "stylized emphasis"], "slow optical zoom from medium shot to medium close-up, tripod locked"],
  ["dolly-zoom", "Dolly Zoom", "Camera moves while zooming in the opposite direction.", "Creates psychological disorientation and sudden dread.", ["shock", "fear", "realization"], "subtle dolly zoom as Lyra realizes the shaft is active, background stretches unnaturally"],
  ["handheld", "Handheld", "Camera has human instability and small physical corrections.", "Adds immediacy, fear, documentary energy or vulnerability.", ["panic", "subjective tension", "imperfect observation"], "subtle handheld breathing, low intensity, no shake burst"],
  ["steadicam", "Steadicam", "Stabilized moving camera with smooth human mobility.", "Feels immersive, graceful and continuous.", ["following characters", "long takes", "controlled exploration"], "smooth steadicam follow behind Lyra entering the corridor"],
  ["reveal-shot", "Reveal Shot", "Movement uncovers information that was hidden by framing, foreground or angle.", "Turns space into story by delaying knowledge.", ["suspense", "discoveries", "environment storytelling"], "slow lateral reveal from behind concrete edge to expose the damaged marker"],
  ["follow-shot", "Follow Shot", "Camera follows a moving subject from behind, side or front.", "Ties the audience to the character's goal and pace.", ["journeys", "entry beats", "walking decisions"], "slow follow shot behind Lyra, steady distance, same corridor"],
  ["match-cut", "Match Cut", "A cut connects two shots through shared shape, motion, color or composition.", "Creates continuity, metaphor or elegant transition.", ["transitions", "montage", "visual rhyme"], "end frame matches the circular access marker to the next circular light source"],
  ["whip-pan", "Whip Pan", "A very fast pan creates motion blur between two directions.", "Adds urgency, surprise or energetic transition.", ["impact transitions", "sudden discoveries", "comic or action rhythm"], "controlled whip pan from marker to Lyra's reaction, one fast horizontal move"],
  ["crash-zoom", "Crash Zoom", "A fast zoom snaps attention to a subject or detail.", "Feels abrupt, stylized and urgent.", ["shock reveals", "clues", "heightened style"], "brief crash zoom into the damaged access marker, then hold"],
] as const;

const movementItems: FilmmakingLanguageItem[] = movementData.map(
  ([id, title, description, effect, bestFor, movePrompt]) =>
    makeItem({
      id,
      category: "camera-movement",
      title,
      description,
      effect,
      bestFor: [...bestFor],
      imagePrompt: imageStill(movementScene, `key frame for ${title.toLowerCase()}: clear start position, readable subject, parallax layers prepared`),
      videoPrompt: videoClip(
        movementScene,
        `${movePrompt}. One move. One clip. Default to slow movements for AI video`,
        movePrompt
      ),
      tags: ["camera movement", "ai video", "one move"],
      relatedItems:
        id === "push-in"
          ? ["narrative-tension", "close-up", "low-key"]
          : id === "reveal-shot"
            ? ["audience-knowledge", "foreground-framing", "truck-shot"]
            : id === "match-cut"
              ? ["color-mood", "scene-purpose", "storyboard"]
              : ["medium-wide", "depth-layering", "shot-list"],
      relatedPages: [page.cameraMotion, page.animation, page.shotList],
      visualVariant: id === "match-cut" ? "storyboard" : "depth",
      visualCue: "One move. One clip.",
      source: id === "push-in" ? "Related to the existing dolly-push-in prompt entry." : undefined,
    })
);

const lightingData = [
  ["soft-light", "Soft Light", "Large diffused light with gentle shadow edges.", "Feels intimate, forgiving, calm or melancholic.", ["portraits", "memory", "vulnerability"], "large soft cyan source from frame right, gentle shadow transition, skin texture still visible"],
  ["hard-light", "Hard Light", "Small direct source with sharp shadows.", "Feels harsh, exposed, dangerous or graphic.", ["interrogation", "noir", "threat"], "hard narrow practical light from above, sharp nose and jaw shadow, high texture"],
  ["high-key", "High Key", "Bright low-contrast lighting with few deep shadows.", "Feels open, clean, safe or artificial depending on context.", ["clarity", "commercial style", "false safety"], "bright high-key exposure, soft fill, minimal shadow, blue-grey background kept pale"],
  ["low-key", "Low Key", "Dark contrast-heavy lighting with controlled highlights.", "Feels secretive, tense, lonely or dangerous.", ["suspense", "mystery", "night scenes"], "low-key portrait, most of face in gentle shadow, thin cyan edge highlight"],
  ["backlight", "Backlight", "Main light comes from behind the subject toward camera.", "Separates silhouette and suggests mystery, danger or revelation.", ["silhouettes", "reveals", "rain and mist"], "strong backlight through rain behind Lyra, face mostly dark, wet hair rim visible"],
  ["rim-light", "Rim Light", "A thin edge light outlines the subject from side or back.", "Adds separation, precision and iconic contour without fully revealing the face.", ["separation", "night portraits", "hero shapes"], "thin cyan rim light tracing Lyra's hair and shoulder, face in soft shadow"],
  ["practical-lights", "Practical Lights", "Visible or implied light sources inside the scene motivate illumination.", "Makes lighting feel believable and connected to the world.", ["realism", "continuity", "set logic"], "visible weak cyan maintenance lamp in frame, light direction matches highlights on Lyra"],
  ["rembrandt-lighting", "Rembrandt Lighting", "Side key light creates a small triangle of light on the shadow cheek.", "Feels painterly, introspective and controlled.", ["serious portraits", "inner conflict", "classic drama"], "Rembrandt portrait lighting, warm-neutral key from frame left, small light triangle on shadow cheek"],
  ["silhouette", "Silhouette", "Subject is mostly dark against a brighter background.", "Withholds identity and turns posture into the main information.", ["mystery", "entrances", "scale"], "Lyra as near-black silhouette against cyan shaft backlight, readable outline only"],
  ["neon-lighting", "Neon Lighting", "Colored artificial sources create saturated accents and reflections.", "Feels urban, stylized, nocturnal or emotionally heightened.", ["cyberpunk", "wet streets", "color contrast"], "restrained cyan and muted magenta neon practicals reflected on wet hair and collar"],
  ["overcast-natural-light", "Overcast Natural Light", "Cloud cover creates broad soft daylight with low shadow contrast.", "Feels quiet, honest, grey or documentary.", ["day exteriors", "melancholy", "neutral continuity"], "overcast natural daylight portrait, cool grey sky diffusion, no direct sun, low contrast"],
] as const;

const lightingItems: FilmmakingLanguageItem[] = lightingData.map(
  ([id, title, description, effect, bestFor, lightPrompt]) =>
    makeItem({
      id,
      category: "lighting",
      title,
      description,
      effect,
      bestFor: [...bestFor],
      imagePrompt: imageStill(portraitLightingScene, `${lightPrompt}; same portrait crop, same pose, same background`),
      videoPrompt: videoClip(
        portraitLightingScene,
        `${lightPrompt}. Preserve the exact lighting logic during tiny head and rain movement`,
        "locked portrait camera, subtle breathing only"
      ),
      tags: ["lighting", "portrait", "comparison"],
      relatedItems:
        id === "low-key"
          ? ["narrative-tension", "close-up", "85mm"]
          : id === "rim-light"
            ? ["silhouette", "backlight", "rear-view"]
            : id === "practical-lights"
              ? ["color-mood", "soft-light", "realism"]
              : ["character-emotion", "medium-close-up", "50mm"],
      relatedPages: [page.lightingColor, "/formation/ambiance-realisme-texture/", page.promptBuilder],
      visualVariant: "light",
      visualCue: "Same portrait; only lighting changes.",
    })
);

const colorData = [
  ["60-30-10-rule", "60 / 30 / 10 Rule", "Uses one dominant color, one support color and one accent color.", "Creates hierarchy, readability and production continuity.", ["color scripts", "brand-like scenes", "sequence continuity"], "60 percent blue-grey concrete, 30 percent near-black costume, 10 percent restrained cyan access light"],
  ["orange-teal", "Orange & Teal", "Contrasts warm skin or practical light against cool cyan-blue shadows.", "Feels cinematic, energetic and readable when restrained.", ["skin separation", "urban night", "commercial contrast"], "cool teal shadows with small warm orange practical reflection near the access marker"],
  ["blue-yellow", "Blue & Yellow", "Combines cold blue atmosphere with yellow warning or practical accents.", "Feels investigative, alert or industrial.", ["warning cues", "night interiors", "mystery"], "deep blue-grey environment with muted yellow warning lamp as the only accent"],
  ["red-cyan", "Red & Cyan", "Pits red danger or emotion against cyan technology or cold space.", "Creates alarm, conflict and synthetic tension.", ["danger markers", "threshold moments", "sci-fi tension"], "cyan corridor light opposed by one small red access marker glow"],
  ["green-magenta", "Green & Magenta", "Uses complementary green and magenta for uncanny or contaminated mood.", "Feels strange, toxic, unstable or surreal.", ["unreliable spaces", "dream logic", "corruption"], "muted green practical spill mixed with restrained magenta reflections, avoid oversaturation"],
  ["monochrome", "Monochrome", "Restricts the image to one hue family or black-and-white values.", "Focuses attention on form, texture and value instead of hue.", ["memory", "formal studies", "minimal drama"], "near monochrome blue-grey palette, only value contrast and wet texture carry the scene"],
  ["muted-palette", "Muted Palette", "Keeps saturation low across the frame.", "Feels grounded, tired, restrained or realistic.", ["realism", "melancholy", "continuity"], "muted blue-grey concrete, desaturated skin tones, weak cyan accent, no saturated neon"],
  ["high-contrast-palette", "High Contrast Palette", "Separates bright and dark values or strong color oppositions.", "Feels decisive, graphic, dangerous or mythic.", ["poster frames", "hero moments", "sharp reveals"], "high contrast dark corridor and bright cyan shaft edge, Lyra silhouette sharply separated"],
  ["pastel-palette", "Pastel Palette", "Uses softened low-saturation colors with lighter values.", "Feels fragile, dreamlike, gentle or deceptively calm.", ["memory", "soft sci-fi", "quiet aftermath"], "pastel cyan, pale lavender-grey concrete, soft low-contrast wet reflections"],
] as const;

const colorItems: FilmmakingLanguageItem[] = colorData.map(
  ([id, title, description, effect, bestFor, colorPrompt]) =>
    makeItem({
      id,
      category: "color-mood",
      title,
      description,
      effect,
      bestFor: [...bestFor],
      imagePrompt: imageStill(colorScene, `${colorPrompt}; same framing, same lighting direction, same subject`),
      videoPrompt: videoClip(
        colorScene,
        `${colorPrompt}. Keep palette stable across the whole clip; do not introduce new neon colors`,
        "locked camera or slow push-in, no color shift"
      ),
      tags: ["color", "mood", "palette"],
      relatedItems:
        id === "red-cyan"
          ? ["narrative-tension", "practical-lights", "insert-shot"]
          : id === "muted-palette"
            ? ["empty-space", "overcast-natural-light", "solitude-image-prompt"]
            : ["lighting", "scene-purpose", "production-bible"],
      relatedPages: [page.lightingColor, page.productionBible, page.promptBuilder],
      visualVariant: "light",
      visualCue: "Same scene; only palette logic changes.",
    })
);

export const filmmakingLanguageItems: FilmmakingLanguageItem[] = [
  ...narrativeItems,
  ...shotItems,
  ...angleItems,
  ...compositionItems,
  ...lensItems,
  ...movementItems,
  ...lightingItems,
  ...colorItems,
];

export const promptBuilderPipeline = [
  "Emotion",
  "Shot Size",
  "Lens",
  "Composition",
  "Angle",
  "Movement",
  "Lighting",
  "Color",
  "Style Reference",
  "Technical Constraints",
];

export const promptBuilderExamples: PromptBuilderExample[] = [
  {
    id: "solitude-image-prompt",
    theme: "solitude",
    format: "image",
    title: "Solitude - image prompt",
    decisions: ["loneliness", "Extreme Wide Shot", "18mm", "Negative Space", "Eye Level", "Soft overcast light", "Muted Palette"],
    prompt:
      "Cinematic extreme wide shot of Lyra Voss as a small lone figure at the base of the abandoned Vertical Silence concrete shaft, vast empty wet floor extending around her, 18mm lens with controlled wide perspective, eye-level camera, strong negative space, soft overcast blue-grey light, muted palette, realistic rain mist, grounded physical materials, quiet solitude, no crowd, no extra neon, no text, no watermark.",
  },
  {
    id: "tension-image-prompt",
    theme: "tension",
    format: "image",
    title: "Tension - image prompt",
    decisions: ["withheld threat", "Medium Close Up", "85mm", "Frame Within Frame", "Low Angle", "Low Key", "Red & Cyan"],
    prompt:
      "Cinematic medium close-up of Lyra Voss seen through a dark broken concrete doorway, 85mm lens, subtle low angle, her face partially separated by a thin cyan rim light while a small red access marker glows behind her, low-key exposure, frame within frame, shallow controlled depth of field, restrained tension, wet skin texture, same matte black outfit, no camera tilt, no extra character, no text, no watermark.",
  },
  {
    id: "revelation-image-prompt",
    theme: "revelation",
    format: "image",
    title: "Revelation - image prompt",
    decisions: ["discovery", "Wide Shot", "35mm", "Leading Lines", "Symmetrical Front View", "Backlight", "Blue & Yellow"],
    prompt:
      "Cinematic wide shot inside Vertical Silence, Lyra Voss centered on a symmetrical concrete axis as drainage channels and yellow warning strips lead toward a newly opened vertical shaft, 35mm lens, frontal camera, cyan backlight through rain mist, blue-grey dominant palette with muted yellow warning accent, clear depth layers, revelation beat, no decorative holograms, no distorted architecture, no text, no watermark.",
  },
  {
    id: "solitude-video-prompt",
    theme: "solitude",
    format: "video",
    title: "Solitude - video prompt",
    decisions: ["solitude", "Extreme Wide Shot", "18mm", "Empty Space", "Pull Back", "Soft Light", "Muted Palette"],
    prompt:
      "Starting from an approved extreme wide frame of Lyra Voss alone at the base of the abandoned Vertical Silence shaft, keep the same 18mm wide perspective, empty blue-grey space and muted palette. Camera performs one very slow dolly pull back over five seconds, revealing more wet concrete around her while she remains still. Only rain, mist and a faint coat movement animate. Preserve identity, outfit, architecture and lighting. No extra action, no new colors, no text, no watermark.",
  },
  {
    id: "tension-video-prompt",
    theme: "tension",
    format: "video",
    title: "Tension - video prompt",
    decisions: ["anticipation", "Medium Shot", "50mm", "Foreground Framing", "Push In", "Low Key", "Red & Cyan"],
    prompt:
      "Starting from a medium shot of Lyra Voss partially framed by a dark foreground cable, 50mm lens, low-key cyan light and one small red access marker in the background. Camera performs one slow weighted push-in over five seconds as Lyra notices the marker but does not move toward it. Foreground cable stays softly out of focus, background geometry remains stable, only rain and breathing move. No orbit, no handheld shake, no added characters, no text, no watermark.",
  },
  {
    id: "revelation-video-prompt",
    theme: "revelation",
    format: "video",
    title: "Revelation - video prompt",
    decisions: ["discovery", "Wide Shot", "35mm", "Leading Lines", "Reveal Shot", "Backlight", "Blue & Yellow"],
    prompt:
      "Starting from a wide 35mm frame in the Vertical Silence corridor, drainage lines lead toward a closed shaft door. Camera performs one slow lateral reveal from behind a concrete pillar, uncovering Lyra Voss and the door opening into cyan backlight with a muted yellow warning lamp. Keep the same scene, same outfit, same palette and stable architecture. Five seconds, one move only, default slow AI video movement, no extra neon, no text, no watermark.",
  },
];

export const filmmakingLanguageRelatedModules = [
  { title: "Prompt Builder", href: page.promptBuilder, description: "Turn cinematic decisions into copyable image and video prompts." },
  { title: "Storyboard Generator", href: page.storyboard, description: "Use intention, shot size and movement to plan panels." },
  { title: "Shot List Builder", href: page.shotList, description: "Document each shot as a production unit." },
  { title: "Camera Motion Library", href: page.cameraMotion, description: "Choose one motivated move per AI video clip." },
  { title: "Scene Construction Tools", href: page.sceneConstruction, description: "Connect blocking, eyeline, space and subtext." },
  { title: "Future Director's Toolkit", href: page.directorsToolkit, description: "Planned hub for directors' decisions, coverage and continuity." },
];
