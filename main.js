addEventListener("DOMContentLoaded", async()=>{
    let peticion = await fetch("https://diegoferneyusedadiaz.000webhostapp.com/Variables_03_0_2022/api.php");
    let data = await peticion.text();
    document.body.innerHTML = data;
}) 