function EnvoiInfo(event){
    event.preventDefault();
    let formData = new URLSearchParams(new FormData(event.target));

    fetch('http://localhost:3000/enseignant/reponse/IBOB',{method:"POST", body:formData})
        .then(res =>{
            return res.json();
        })
        .then(resJson =>{
            if(resJson.success){
                res.status(200).json({ success :"Information Modifiée avec succés"});
            }
        })
        .catch(err =>{
            alert(`Erreur: ${err}`)
        })
}