function change() {
    const loginErrorMsg = document.getElementById('logErrorMsg');
    if (document.getElementById('etudiant').checked) {
        if (document.getElementById('code').value === '' && document.getElementById('password').value === '') {
            window.location.href = 'http://localhost:3000/etudiant/menu';
        } else {
            loginErrorMsg.style.opacity = '1';
        }
    } else if (document.getElementById('enseignant').checked) {
        if (document.getElementById('code').value === '' && document.getElementById('password').value === '') {
            window.location.href = 'http://localhost:3000/enseignant/menu';
        } else {
            loginErrorMsg.style.opacity = '1';
        }
    }
}
