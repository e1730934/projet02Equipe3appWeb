piedPage()

function piedPage(){

    document.getElementById("pied").innerHTML = `
        <div class="box">
            <div class="columns is-mobile ">
                <div class="column">
    
                    <p id="nom" class="is-size-7 has-text-right has-text-grey" >Nom d'utilisateur</p> 
                    <p id="matricule" class="is-size-7 has-text-right has-text-grey" >matricule</p>
    
    
                </div>
            </div>
        </div>
    `
}
module.exports={piedPage}