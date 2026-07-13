# Audit éditorial du corpus de ressources

## Synthèse

Le corpus est riche en exemples visuels mais pauvre en métadonnées. Avant reclassement, 96 captures étaient principalement identifiées par leur date et 29 images de composition formaient une série redondante avec un PDF de 29 pages. Le projet Astro, lui, possède une architecture pédagogique cohérente, mais seulement 4 ressources publiées et 2 entrées de glossaire.

La priorité n'est donc pas d'accumuler davantage de captures. Elle consiste à transformer les sources existantes en fiches actionnables, sourcées, reliées aux leçons et testables dans les projets Lyra Voss et Vertical Silence.

## Comparaison corpus ↔ projet

| Notion | Sources disponibles | Couverture actuelle du projet | Décision |
| --- | --- | --- | --- |
| Composition | 29 fiches détaillées, 2 cheat sheets, un PDF | leçon complète, 18 principes, 4 prompts, cheat sheet | Consolider et dédupliquer ; ne pas créer une seconde taxonomie |
| Réalisme et texture | guide peau, fiches « realism multipliers » | leçon, checklist et 8 prompts | Ajouter la notion de preuve physique et les limites de l'upscale |
| Anatomie du prompt | série en 6 blocs | principes dispersés dans les leçons | Créer une ressource transversale avec ordre, variables et contrôle négatif |
| Personnage | character board, référence multi-angle, poses | leçons de cohérence et stabilisation | Ajouter direction d'acteur, gestes, mains, regard et continuité de pose |
| Écriture / dramaturgie | questions sur sentiment, pouvoir, secret et enjeu | une leçon courte et un prompt storyboard | Créer une grille de lecture avant découpage |
| Caméra | angles, valeurs, 47 formulations de mouvement, séries vidéo | bibliothèque de plans et un prompt mouvement | Créer un guide de sélection par intention et risque de génération |
| Storyboard / shot-list | 2 gabarits PDF, guide 12 champs, XLSX | leçon, checklist, bible et prompts | Conserver les modèles ; documenter les écarts entre production classique et IA |
| Son / montage | 5 captures | leçon courte et un prompt sound design | Enrichissement prioritaire lors du prochain cycle |
| Provenance / droits | quelques auteurs visibles, URLs dispersées | champs « source et droits » dans la bible | Créer un registre systématique avant toute publication d'illustration tierce |

## Ressources intégrées pendant cet audit

1. **Anatomie d'un prompt cinématographique** — cinq blocs stables, variables et contrôle qualité.
2. **Guide des mouvements caméra pour l'IA** — familles de mouvements, intention, formulation et risques.
3. **Direction d'acteur et continuité de pose** — corps, mains, regard, accessoire et raccord.
4. **Grille d'analyse dramatique d'une scène** — neuf questions avant storyboard et shot-list.

Ces quatre ressources font passer la collection publiée de 4 à 8 entrées et ciblent les lacunes les plus nettes sans dupliquer les contenus déjà solides.

## Lacunes prioritaires restantes

### P1 — qualité documentaire

- Ajouter un registre `source / auteur / URL / droits / date / statut` pour chaque série.
- Remplacer les captures génériques par des exemples originaux du projet avant publication.
- Ajouter une date de dernière révision et un responsable éditorial aux ressources publiées.
- Définir une procédure de validation : exactitude cinéma, comportement dans l'outil, lisibilité pédagogique.

### P2 — contenu

- Montage : rythme, ellipse, J-cut/L-cut, raccords de mouvement, raccords sonores.
- Son : perspective, plans sonores, dynamique, silence, continuité entre plans.
- Production IA : coût par plan, critères de rejet, journal d'itération, reproductibilité.
- Outils : matrice comparative Firefly/Kling/Hailuo/Runway/Midjourney fondée sur des tests datés.

### P3 — pédagogie

- Ajouter un exercice, un livrable et des critères de réussite à chaque ressource.
- Relier les ressources à une scène commune de Vertical Silence afin de comparer les décisions.
- Ajouter des exemples « insuffisant / mieux / pourquoi » plutôt que des listes isolées.

## Cycle d'intégration recommandé

```text
Source brute
  → qualification et provenance
  → synthèse en notion unique
  → exemple original Master AI Filmmaking
  → test dans un outil et version datée
  → relecture cinéma + relecture pédagogique
  → publication
  → retour d'expérience dans la bible de production
```

## Critères d'acceptation d'une nouvelle ressource

- Elle répond à une décision réelle de production.
- Elle ne répète pas une fiche existante sans apporter un angle ou un test nouveau.
- Elle indique quand l'utiliser, comment l'utiliser et comment vérifier le résultat.
- Elle distingue principe cinématographique et comportement propre à un modèle IA.
- Elle contient au moins un exemple lié au projet et un contre-exemple observable.
- Elle est reliée à une leçon, une famille de compétences et une prochaine action.
