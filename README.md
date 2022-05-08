# Projet CRPQ
## Application Cliente Web

Projet de consultation de base de données pour les étudiants de Technique policière.

Dans le cadre du cours de Projet 2 - 4D1, le projet consiste à réaliser à développer une application capable de simuler l'outil d'interrogation de base de données à la disposition d'un agent de l'ordre lors de ses interventions.

## Cadre d'utilisation
Cette application servira comme outil de formation auz étudiants en Technique policière. Il permettra à l'étudiant de:
- Utiliser un outil de recherche de base de données
- Se familiariser avec les informations récoltées lors d'une interpellation

## Collaborateurs
**Ce projet est développé par:**
* Amzert, Karim - E2069838
* Cambray, Bastien - E1920614
* Khendaf, Bilal - E1730934
* Phung, Truong Sang Mario - E2066576

**PO :** Marc Levasseur.

## Utilisation
Installation de toutes les dependances:
```
npm install
```

Détection des erreurs de lint:
```
npm run lint
```

Correction des erreurs de lint:
```
npm run fix
```

Compilation et lancement de l'application en développement:
```
npm run serve
```

Compilation de l'application en production:
```
npm run build
```
### Links
Page de base : 
http://localhost:8080/

Menu étudiant :
http://localhost:8080/etudiant

Paga ajout d'une réponse objet, valeurs & armes :
- http://localhost:8080/objet
- http://localhost:8080/valeur
- http://localhost:8080/arme