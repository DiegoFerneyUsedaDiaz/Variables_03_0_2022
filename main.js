addEventListener("DOMContentLoaded", async()=>{
    let peticion = await fetch("https://diegoferneyusedadiaz.000webhostapp.com/Variables_03_0_2022/api.php");
    let data = await peticion.text();
    document.body.innerHTML = `<h1 style="background: red; color: #fff; font-family: Arial, Helvetica, sans-serif; padding: 10px; border-radius: 5px;">${data}</h1>`;
})