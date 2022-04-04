# Projet_CRPQ_Equipe4

Projet de consultation de base de données pour les étudiants de Technique policière.

Dans le cadre du cours de Projet 2 - 4D1, le premier projet à réaliser ,dans le cadre de ce cours, est de créer une application capable de répliquer l'outil de questionnement de base de données à la disposition d'un agent de l'ordre lors de ses interventions.

## Cadre d'utilisation
Cette application servira comme outil de formation au étudiants en technique policière. Il habituera l'élève à:
-Manipuler une carte d'identité lors de mises en situations
-Se familiarisé avec les informations récoltés lors d'une altercation
-Utilisé un outil de recherche de base de données 

## Colaboration
Ce projet est réalisé par: David Déchaine, Ryma Merrouchi, Charles-Étienne Doucet et Dan Bagalwa
Le PO : Marc Levasseur
Le Srum Master : David Déchaine

## Utilisation
Téléchargez les dépendances : npm i (faire la même chose dans backend)
Lancez le serveur avec : npm run start(faire la même chose dans backend)
Ouvrir: http://localhost:5000/

Pour se connecter en tant qu'étudiant: 
                {
                    Identifiant: e1233772
                    mot de passe: bonjour
                }

Pour se connecter en tant qu'enseignat: 
                {
                    Identifiant: 5678
                    mot de passe: prof
                }

Appuyez sur les 3 ligne en haut à droite pour ouvrir le menu
Appuyez sur IPPE-Recherche de personnes
Entrez les informations suivante: 
                {
                    Nom : Ducharme
                    Pronom1 : Benoit
                    Sexe: masculain
                    Date de Naissance : 1975-08-31
                }
Appuyez sur Submit;

Pour la modification, ajout et suppression de personnes:

Allez sur http://localhost:5000/personnes : 

    Vous pouvez désormais ajouter une personne

Allez sur http://localhost:5000/personnes?=5 :

    Vous pouvez désormais modifier ou supprimer une personne

