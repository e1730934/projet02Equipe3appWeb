const btnSupprimer = document.getElementById('supprimer');

btnSupprimer.addEventListener('click', () => {
    const identifiant = document.getElementById('Identifiant').value;
    if (identifiant !== '') {
        fetch(`http://localhost:3000/IBVA/supression?Identifiant=${identifiant}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((resJson) => {
                if (resJson.success) {
                    alert(resJson.message);// TODO: Delete alert & implémenter notif de suppression
                } else {
                    alert(resJson.message);// TODO: Delete alert & implémenter message erreur
                }
            })
            .catch((err) => {
                alert(`Erreur: ${err}`);
            });
    } else {
        // TODO: Implémenter si noSerie vide
    }
});
