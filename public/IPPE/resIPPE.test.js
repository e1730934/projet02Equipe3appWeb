import {GetParam,Data, } from './resIPPE';

test('recevoir les url GetParam', () => {
    // reponse
	const result = {nom: "Hébert", prenomUn: "Francis", prenomDeux: "", sexe: "1", date: "1992-10-19"};
    //test
    const url = `http://localhost:3000/ippeInfo?nom=Hébert&sexe=1&prenomUn=Francis&ddn=1992-10-19&prenomDeux=`;

	expect(result).to(GetParam(url));
});

test('get good elementFromDAta()', () => {
    // reponse
	const result = [{"titre":"FPS","NoFPS":"438761F","DateMesure":"2020-02-25T00:00:00.000Z","CD":"W08,W03,W08,W08,W07,W07,W01,W06,W03,U08","Antecedents":"Tentative de meurtre","Violent":true,"Echappe":null,"Suicidaire":null,"Desequilibre":null,"Contagieux":null,"Race":null,"Taille":null,"Poids":null,"Yeux":null,"Cheveux":null,"Marques":null,"Toxicomanie":null,"Desorganise":null,"Depressif":null},{"titre":"Libération Conditionnelle","cour":"Cours du Québec","numCause":"500-01-310-35719-654","natureCrime":"Tentative de meurtre","noEvenement":"108-110525-0003","fps":"438761F","lieuDetention":"Prison de Port-Cartier","finSentence":"2022-09-19T00:00:00.000Z","condition":["Ne pas fréquenter des gens ayant des dossiers criminels","Aucune consommation d alcool ou de drogue non prescrite"],"agent":"Benoit Ducharme","telephone":"5142745131","poste":null}]
    // test
    const params = {nom: "Hébert", prenomUn: "Francis", prenomDeux: "", sexe: "1", date: "1992-10-19"};


	expect(result).to(Data(params));
});
