const fetch = require("node-fetch");

const connexion= require('./index')

test('connextion avec succès étudiant', async () =>{


    const loginetud = {
        username :1234,
        password :"etud"
    }

    const resultat = {
    token : true,
    Matricule : 1234,
    Nom : 'etudiant'
    }

    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(loginetud),
      });

       if (response.ok) {
         let data = await response.json();
        return data
       }

    expect(response).toEqual(loginetud);
}
)