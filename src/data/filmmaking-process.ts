export interface FilmmakingProcessStep {
  number: string;
  verb: string;
  title: string;
  description: string;
  href: string;
  status: string;
}

export const filmmakingProcess: FilmmakingProcessStep[] = [
  ["01", "Voir", "Nommer le cadre et l'intention", "Lire le sujet, l'espace et la fonction narrative avant d'écrire un prompt.", "/references/camera-shots/"],
  ["02", "Composer", "Organiser le regard et le vide", "Construire un cadre lisible, hiérarchisé et exploitable pour le mouvement.", "/formation/composition-cinematique/"],
  ["03", "Créer l'ambiance", "Donner matière, température et densité", "Relier atmosphère, surfaces, imperfections, lumière et profondeur physique.", "/formation/ambiance-realisme-texture/"],
  ["04", "Générer", "Traduire les décisions en prompt", "Décrire les choix observables et limiter les dérives avec des contraintes négatives.", "/formation/voir-composer-generer/"],
  ["05", "Stabiliser", "Conserver identité et décor", "Séparer constantes, variables autorisées et références dédiées.", "/formation/stabiliser/"],
  ["06", "Mettre en scène", "Bloquer l'action dans l'espace", "Définir regard, trajectoire et fonction du plan avant la caméra.", "/formation/mettre-en-scene/"],
  ["07", "Animer", "Décrire un mouvement plausible", "Donner une masse à la caméra et préserver visage, matière et architecture.", "/formation/animer/"],
  ["08", "Monter", "Assembler pour l'intention", "Contrôler raccords, rythme, son et transitions avant l'effet spectaculaire.", "/formation/monter-documenter/"],
  ["09", "Documenter", "Conserver les décisions réutilisables", "Relier prompt, frame source, clip validé, écart observé et correction.", "/resources/production-bible-template/"],
].map(([number, verb, title, description, href]) => ({
  number,
  verb,
  title,
  description,
  href,
  status: "Prêt",
}));
