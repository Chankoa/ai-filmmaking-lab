export const ambianceDimensions = [
  ["Atmosphère", "L'air visible du plan : brume, pluie, poussière, fumée ou halo.", "Installe une tension, une distance et une sensation climatique.", "soft volumetric haze, rain mist catching the light, air charged with moisture", "Ajouter une brume uniforme qui efface le sujet et la géographie."],
  ["Matières", "La réponse physique des surfaces à la lumière, au temps et au contact.", "Donne un âge, un usage et une histoire au décor comme au costume.", "wet concrete, scratched black metal, matte fabric, dirty glass reflections", "Décrire seulement des objets sans préciser leur état de surface."],
  ["Imperfections", "Pores, plis, traces, usure, grain et irrégularités à petite échelle.", "Éloigne l'image de la publicité lissée et rend le monde habité.", "visible pores, subtle blemishes, worn edges, micro-scratches, fine film grain", "Confondre réalisme et saleté excessive ou accentuation artificielle."],
  ["Lumière physique", "Des sources localisables, une diffusion et des réflexions cohérentes.", "Guide le regard et explique les volumes sans effet gratuit.", "weak cyan practical light, reflected floor light, soft rim light through mist", "Multiplier des couleurs lumineuses sans source crédible dans le décor."],
  ["Couleur et température", "Une dominante stable, des accents rares et une saturation contrôlée.", "Unifie le monde et fait évoluer l'émotion sans casser la continuité.", "restrained blue-grey palette, cool ambient light, rare muted magenta accent", "Utiliser le néon saturé comme raccourci automatique vers le cinéma."],
  ["Profondeur", "Une séparation lisible entre premier plan, sujet et arrière-plan.", "Situe le corps dans un volume et prépare parallaxe, focus et mouvement.", "soft foreground occlusion, sharp midground subject, background fading into haze", "Flouter tout l'arrière-plan sans construire de couches spatiales."],
  ["Mouvement crédible", "Inertie de caméra et micro-mouvements soumis au poids et au vent.", "Fait sentir que le plan a été capté par une caméra dans un espace réel.", "slow weighted dolly push-in, subtle handheld breathing, hair moving slightly", "Cumuler travelling, orbite, zoom et mouvements du corps dans cinq secondes."],
  ["Son implicite", "Le bruit, le silence et le hors-champ que l'image laisse imaginer.", "Étend le décor au-delà du cadre et précise la densité émotionnelle.", "quiet visual tension, distant electrical hum implied, isolated water drops", "Créer une image spectaculaire qui ne suggère aucun espace sonore."],
].map(([title, definition, narrativeRole, promptPhrase, commonError]) => ({ title, definition, narrativeRole, promptPhrase, commonError }));

export const promptAnatomy = ["[subject]", "[environment]", "[atmosphere]", "[materials]", "[imperfections]", "[lighting]", "[color temperature]", "[depth]", "[camera realism]", "[negative constraints]"];

export const weakAmbiancePrompt = "photorealistic cyberpunk woman in rain, cinematic, 8K";
export const improvedAmbiancePrompt = "cinematic medium shot of Lyra Voss standing in a rain-soaked concrete corridor, wet dark honey-brown hair framing her face, matte black tactical outfit with subtle fabric texture, visible pores and natural skin imperfections, rain droplets on skin, scratched metal door behind her, faint cyan rim light, weak magenta practical light reflected on the wet floor, volumetric haze, shallow depth of field, restrained blue-grey palette, quiet tension, realistic film still";
export const ambianceNegativePrompt = "plastic skin, over-smoothed face, clean surfaces, dry environment, oversaturated neon, glowing armor, CGI look, text, watermark";

export const ambiancePatterns = [
  ["Atmosphere pattern", "soft volumetric haze, suspended dust particles, rain mist catching the light, distant background fading into blue-grey atmosphere"],
  ["Material realism pattern", "wet concrete, scratched black metal, worn rubber, matte fabric, dirty glass reflections, subtle surface imperfections"],
  ["Skin realism pattern", "visible pores, subtle freckles, micro-imperfections, natural blemishes, peach fuzz, no beauty retouch, realistic subsurface scattering"],
  ["Cinematic rain pattern", "rain droplets on skin and fabric, wet reflective floor, soft ripples in puddles, neon reflections distorted by water"],
  ["Dust and decay pattern", "fine dust in the air, cracked concrete, oxidized metal edges, old paint peeling, abandoned industrial texture"],
  ["Sound-implied image pattern", "quiet visual tension, distant electrical hum implied by practical lights, heavy silence, isolated water drops, atmosphere of suspended sound"],
].map(([title, prompt]) => ({ title, prompt }));

export const lyraAmbianceExamples = [
  {
    title: "Close-up peau, pluie et néon",
    tool: "Image",
    prompt: "ultra-realistic cinematic close-up of Lyra Voss under weak cyan neon light, wet dark honey-brown hair framing her face, calm determined green eyes, subtle freckles, visible pores, micro-imperfections, rain droplets on skin, shallow depth of field, blue-grey industrial background fading into haze, restrained cyberpunk mood, raw natural skin texture, photorealistic film still",
    negative: "plastic skin, over-smoothed face, beauty retouch, red hair, orange hair, glowing suit, armor plates, exaggerated makeup, text, watermark",
  },
  {
    title: "Corridor humide, matière et profondeur",
    tool: "Image",
    prompt: "layered cinematic medium shot of Lyra Voss inside a rain-soaked concrete corridor, soft out-of-focus cables in the foreground, Lyra sharply focused in the middle layer, scratched metal panels and wet concrete walls behind her, puddles reflecting faint cyan and magenta practical lights, suspended mist, realistic fabric texture, quiet tension, 35mm film still",
    negative: "flat image, no foreground, clean surfaces, dry floor, oversaturated neon, CGI look, inconsistent face",
  },
  {
    title: "Mégastructure, échelle et atmosphère",
    tool: "Image",
    prompt: "cinematic wide shot of Lyra Voss as a small silhouette at the base of a massive abandoned vertical megastructure, rain mist, wet concrete plaza, blue-grey night atmosphere, subtle red signal light in the distance, strong negative space, architecture disappearing into fog, realistic scale, restrained color palette, slow contemplative mood",
    negative: "busy background, heroic pose, saturated cyberpunk city, unrealistic scale, floating architecture, text, watermark",
  },
  {
    title: "Continuité image-to-video",
    tool: "Kling",
    prompt: "Lyra Voss stands silently in a rain-soaked industrial corridor, wet hair moving slightly, rain droplets visible on her matte black outfit, shallow puddles reflecting weak cyan neon light. Fine mist drifts through the background, dust and moisture catch the light.\n\nCamera: slow dolly push-in, 0-5s, subtle handheld breathing motion, motion intensity 0.2.\n\nLens and light: 35mm cinematic lens, shallow depth of field, cyan rim light, weak magenta practical light, low-key exposure.\n\nTexture and mood: wet concrete, scratched metal, realistic skin texture, restrained cyberpunk atmosphere, quiet tension.",
    negative: "plastic skin, over-smoothed, dry surfaces, floating camera, double camera move, warping, jitter trails, oversaturated neon, glowing armor, text, watermark",
  },
];

export const ambianceContinuityChecklist = [
  "La palette est-elle constante ?",
  "Les surfaces ont-elles la même logique physique ?",
  "La pluie, la poussière ou la brume sont-elles présentes de manière cohérente ?",
  "La peau reste-t-elle réaliste en gros plan ?",
  "Le décor garde-t-il la même matière d'un plan à l'autre ?",
  "La lumière vient-elle de sources crédibles ?",
  "Les reflets correspondent-ils au sol et aux objets ?",
  "La caméra semble-t-elle avoir une masse ?",
  "Le son imaginé correspond-il à l'image ?",
  "Le plan sert-il une intention narrative ?",
];

export const beforeGenerationChecklist = [
  "Intention et température émotionnelle nommées.",
  "Palette limitée à une dominante et quelques accents.",
  "Matières principales décrites avec leur état.",
  "Atmosphère reliée à une source ou à une météo.",
  "Premier plan, sujet et arrière-plan identifiés.",
  "Imperfections utiles ajoutées sans caricature.",
  "Sources lumineuses visibles ou déductibles.",
  "Contraintes négatives adaptées aux dérives attendues.",
];

export const beforeVideoChecklist = [
  "Frame source validée à pleine taille et en vignette.",
  "Pluie, brume, poussière et reflets peuvent évoluer physiquement.",
  "Un seul mouvement principal de caméra est demandé.",
  "Les micro-mouvements du corps et des matières restent subtils.",
  "Visage, tenue, palette, décor et lumière sont explicitement préservés.",
  "Le son imaginé confirme le rythme et la distance du plan.",
];
