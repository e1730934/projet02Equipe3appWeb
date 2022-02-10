document.getElementById('ajouter').addEventListener('click', () => {
    const user = document.getElementById('user').value;
    const prenom = document.getElementById('prenom').value;
    const nom = document.getElementById('nom').value;
    const mail = document.getElementById('mail').value;
    const mdp = document.getElementById('mdp').value;

    console.log(user, prenom, nom, mail, mdp);

    const tbody = document.getElementById('tbody');
    const tr = document.createElement('tr');
    tbody.appendChild(tr);

    const useruser = document.createElement('td');
    tr.appendChild(useruser);
    useruser.innerHTML = user;

    const prenomuser = document.createElement('td');
    tr.appendChild(prenomuser);
    prenomuser.innerHTML = prenom;

    const nomuser = document.createElement('td');
    tr.appendChild(nomuser);
    nomuser.innerHTML = nom;

    const mailuser = document.createElement('td');
    tr.appendChild(mailuser);
    mailuser.innerHTML = mail;

    const suppr = document.createElement('td');
    const supprbouton = document.createElement('a');
    supprbouton.setAttribute('class', 'button is-danger');
    supprbouton.innerHTML = "Supprimer"
    suppr.appendChild(supprbouton);
    tr.appendChild(suppr);
});