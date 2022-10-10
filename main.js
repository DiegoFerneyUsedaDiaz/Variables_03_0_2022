addEventListener("DOMContentLoaded", async(e)=>{
    let peticion = await fetch("https://diegoferneyusedadiaz.github.io/Variables_03_10_2022/api.php");
    let data = await peticion.text();
    document.body.innerHTML = data;
}) 