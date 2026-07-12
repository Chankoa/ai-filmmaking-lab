export interface FilmmakingProcessStep {
  number: string;
  verb: string;
  title: string;
  description: string;
  href: string;
  status: "Documenté" | "En cours" | "À tester" | "À réviser" | "Archive";
}

export const filmmakingProcess: FilmmakingProcessStep[] = [
  { number: "01", verb: "Observer", title: "Nommer le cadre et l’intention", description: "Lire le sujet, l’espace et la fonction narrative avant d’écrire un prompt.", href: "/filmmaking-language/", status: "Documenté" },
  { number: "02", verb: "Composer", title: "Organiser le regard et le vide", description: "Construire un cadre lisible et noter les choix de lumière, de matière et de profondeur.", href: "/formation/composition-cinematique/", status: "Documenté" },
  { number: "03", verb: "Générer", title: "Formuler une hypothèse visuelle", description: "Traduire les choix observables en prompt, puis comparer les écarts plutôt que chercher une formule universelle.", href: "/prompts/", status: "En cours" },
  { number: "04", verb: "Stabiliser", title: "Conserver identité et décor", description: "Séparer références, constantes et variables autorisées pour limiter les dérives entre deux images.", href: "/formation/stabiliser/", status: "En cours" },
  { number: "05", verb: "Mettre en scène", title: "Bloquer l’action dans l’espace", description: "Définir regard, trajectoire et fonction du plan avant de choisir un mouvement de caméra.", href: "/formation/mettre-en-scene/", status: "Documenté" },
  { number: "06", verb: "Animer", title: "Décrire un mouvement plausible", description: "Tester une évolution limitée du cadre tout en surveillant le visage, les matières et l’architecture.", href: "/formation/animer/", status: "À tester" },
  { number: "07", verb: "Monter", title: "Comparer les raccords", description: "Évaluer rythme, son et continuité à l’échelle de la séquence, pas seulement du plan isolé.", href: "/formation/monter-documenter/", status: "À réviser" },
  { number: "08", verb: "Documenter", title: "Conserver ce qui mérite d’être repris", description: "Relier prompt, référence, résultat, écart observé et prochaine correction.", href: "/resources/production-bible-template/", status: "En cours" },
];
