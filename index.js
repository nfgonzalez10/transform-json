const fs = require("file-system")

fs.readFile("internationalCities2.json", "utf-8", (error, data) => {
  let json = JSON.parse(data)
  json = json.filter(element => {
    return element.ciud_pais != 169
  })
  json.forEach(element => {
    element.ciud_pais ===  23 && (element.ciud_pais = "ALEMANIA");
    element.ciud_pais ===  63 && (element.ciud_pais = "ARGENTINA");
    element.ciud_pais ===  72 && (element.ciud_pais = "AUSTRIA");
    element.ciud_pais ===  87 && (element.ciud_pais = "BÉLGICA");
    element.ciud_pais ===  97 && (element.ciud_pais = "BOLIVIA");
    element.ciud_pais ===  105 && (element.ciud_pais = "BRASIL");
    element.ciud_pais ===  149 && (element.ciud_pais = "CANADÁ");
    element.ciud_pais ===  196 && (element.ciud_pais = "COSTA RICA");
    element.ciud_pais ===  199 && (element.ciud_pais = "CUBA");
    element.ciud_pais ===  211 && (element.ciud_pais = "CHILE");
    element.ciud_pais ===  215 && (element.ciud_pais = "CHINA");
    element.ciud_pais ===  239 && (element.ciud_pais = "ECUADOR");
    element.ciud_pais ===  244 && (element.ciud_pais = "EMIRATOS ÁRABES UNIDOS");
    element.ciud_pais ===  245 && (element.ciud_pais = "ESPAÑA");
    element.ciud_pais ===  249 && (element.ciud_pais = "ESTADOS UNIDOS");
    element.ciud_pais ===  275 && (element.ciud_pais = "FRANCIA");
    element.ciud_pais ===  493 && (element.ciud_pais = "MÉXICO");
    element.ciud_pais ===  580 && (element.ciud_pais = "PANAMÁ");
    element.ciud_pais ===  850 && (element.ciud_pais = "VENEZUELA");
    element.ciud_pais ===  386 && (element.ciud_pais = "ITALIA");
    element.ciud_pais ===  317 && (element.ciud_pais = "GUATEMALA");
    element.ciud_pais ===  406 && (element.ciud_pais = "KAZAKHSTAN");
    element.ciud_pais ===  443 && (element.ciud_pais = "LITHUANIA");
    element.ciud_pais ===  521 && (element.ciud_pais = "NICARAGUA");
    element.ciud_pais ===  538 && (element.ciud_pais = "NORUEGA");
    element.ciud_pais ===  628 && (element.ciud_pais = "INGLATERRA");
    element.ciud_pais ===  647 && (element.ciud_pais = "REPÚBLICA DOMINICANA");
    element.ciud_pais ===  573 && (element.ciud_pais = "HOLANDA");
    element.ciud_pais ===  756 && (element.ciud_pais = "GABON");
    element.ciud_pais ===  589 && (element.ciud_pais = "PERÚ");
    element.ciud_pais ===  556 && (element.ciud_pais = "OMÁN");
    element.ciud_pais ===  548 && (element.ciud_pais = "BERMUDAS");
    element.ciud_pais ===  611 && (element.ciud_pais = "PUERTO RICO");
    
    delete element.ciud_cias
    delete element.ciud_secu
    delete element.ciud_dpto
    delete element.ciud_ciud
    element.ciud_dane = element.ciud_dane.toString();
  })
  fs.writeFile("internationalNew.json", JSON.stringify(json), "utf-8", function(
    err
  ) {
    if (err) throw err
    console.log("filelistAsync complete")
  })
})
