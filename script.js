const materias = [
  { nombre: "Teorias del Aprendizaje", semestre: 1 },
  { nombre: "Pensamiento Geografico", semestre: 1 },
  { nombre: "Pensamiento Historico", semestre: 1 },
  { nombre: "Grancolombianidad", semestre: 1 },
  { nombre: "Competencias Comunicativas I", semestre: 1 },
  { nombre: "Constitucion Politica y Democracia", semestre: 1 },
  { nombre: "Curso de Formacion Ludica I", semestre: 1 },
  { nombre: "Electiva Libre I", semestre: 1 },

  { nombre: "Geografia Fisica General", semestre: 2, requisitos: ["Pensamiento Geografico"] },
  { nombre: "Historia Antigua", semestre: 2, requisitos: ["Pensamiento Historico"] },
  { nombre: "Contexto para la Ensenanza de las Ciencias Sociales", semestre: 2 },
  { nombre: "Pensamiento Critico", semestre: 2 },
  { nombre: "Humanismo Cristiano", semestre: 2 },
  { nombre: "Competencias Comunicativas II", semestre: 2, requisitos: ["Competencias Comunicativas I"] },
  { nombre: "Razonamiento Cuantitativo", semestre: 2 },
  { nombre: "Electiva Libre II", semestre: 2 },

  { nombre: "Politica Educativa", semestre: 3, requisitos: ["Teorias del Aprendizaje"] },
  { nombre: "Gestion de la Informacion para el Aprendizaje", semestre: 3 },
  { nombre: "Geografia Fisica de Colombia", semestre: 3, requisitos: ["Geografia Fisica General"] },
  { nombre: "Historia Medieval", semestre: 3, requisitos: ["Historia Antigua"] },
  { nombre: "Didactica de la Historia", semestre: 3, requisitos: ["Contexto para la Ensenanza de las Ciencias Sociales"] },
  { nombre: "Introduccion a la Investigacion", semestre: 3, requisitos: ["Pensamiento Critico"] },
  { nombre: "Antropologia", semestre: 3 },
  { nombre: "Curso de Formacion Ludica II", semestre: 3 },

  { nombre: "Curriculo y Evaluacion", semestre: 4, requisitos: ["Politica Educativa"] },
  { nombre: "Pedagogia", semestre: 4, requisitos: ["Gestion de la Informacion para el Aprendizaje"] },
  { nombre: "Geografia Humana", semestre: 4, requisitos: ["Geografia Fisica de Colombia"] },
  { nombre: "Historia Moderna y Contemporanea", semestre: 4, requisitos: ["Historia Medieval"] },
  { nombre: "Didactica de la Geografia", semestre: 4, requisitos: ["Didactica de la Historia"] },
  { nombre: "Investigacion Educativa en Ciencias Sociales", semestre: 4, requisitos: ["Introduccion a la Investigacion"] },
  { nombre: "Axiologia", semestre: 4 },
  { nombre: "Electiva Libre III", semestre: 4 },

  { nombre: "Gestion Educativa", semestre: 5, requisitos: ["Curriculo y Evaluacion"] },
  { nombre: "Geografia Economica", semestre: 5, requisitos: ["Geografia Humana"] },
  { nombre: "Historia America Siglos XVI – XVIII", semestre: 5, requisitos: ["Historia Moderna y Contemporanea"] },
  { nombre: "Etnohistorias de las Comunidades Andinas y Mesoamericanas", semestre: 5 },
  { nombre: "Practica I", semestre: 5, requisitos: ["Didactica de la Geografia"] },
  { nombre: "Metodologia de Investigacion en Ciencias Sociales", semestre: 5, requisitos: ["Investigacion Educativa en Ciencias Sociales"] },
  { nombre: "Etica General", semestre: 5 },
  { nombre: "Electiva Libre IV", semestre: 5 },

  { nombre: "Contextos Escolares", semestre: 6, requisitos: ["Gestion Educativa"] },
  { nombre: "Dinamicas Urbanas", semestre: 6, requisitos: ["Geografia Economica"] },
  { nombre: "Historia Colombia Siglo XIX", semestre: 6, requisitos: ["Historia America Siglos XVI – XVIII"] },
  { nombre: "Practica II", semestre: 6, requisitos: ["Practica I"] },
  { nombre: "Trabajo de Grado I", semestre: 6, requisitos: ["Metodologia de Investigacion en Ciencias Sociales"] },
  { nombre: "Familia y Bioetica", semestre: 6 },
  { nombre: "Curso de Formacion Ludica III", semestre: 6 },
  { nombre: "Electiva Libre V", semestre: 6 },

  { nombre: "Educacion y Cultura", semestre: 7, requisitos: ["Contextos Escolares"] },
  { nombre: "Geografia Politica", semestre: 7, requisitos: ["Dinamicas Urbanas"] },
  { nombre: "Historia Colombia Siglo XX", semestre: 7, requisitos: ["Historia Colombia Siglo XIX"] },
  { nombre: "Practica III", semestre: 7, requisitos: ["Practica II"] },
  { nombre: "Trabajo de Grado II", semestre: 7, requisitos: ["Trabajo de Grado I"] },
  { nombre: "Cultura Solidaria", semestre: 7 },
  { nombre: "Electiva Libre VI", semestre: 7 },

  { nombre: "Ambiente y Sociedad", semestre: 8, requisitos: ["Geografia Politica"] },
  { nombre: "Historia America Contemporanea", semestre: 8, requisitos: ["Historia Colombia Siglo XX"] },
  { nombre: "Seminario Interdisciplinar", semestre: 8 },
  { nombre: "Practica IV", semestre: 8, requisitos: ["Practica III"] },
  { nombre: "Trabajo de Grado III", semestre: 8, requisitos: ["Trabajo de Grado II"] },
  { nombre: "Etica Profesional", semestre: 8 },
  { nombre: "Contexto Nacional y Global", semestre: 8 }
];

const aprobadas = new Set();

function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  for (let semestre = 1; semestre <= 8; semestre++) {
    const titulo = document.createElement("div");
    titulo.className = "semestre-titulo";
    titulo.textContent = `Semestre ${semestre}`;
    contenedor.appendChild(titulo);

    materias.filter(m => m.semestre === semestre).forEach(materia => {
      const boton = document.createElement("div");
      boton.className = "materia";

      const requisitos = materia.requisitos || [];
      const habilitada = requisitos.every(r => aprobadas.has(r));

      if (!habilitada) boton.classList.add("bloqueada");

      boton.textContent = materia.nombre;
      boton.addEventListener("click", () => {
        if (!habilitada) return alert("Requisitos no cumplidos");
        if (!aprobadas.has(materia.nombre)) {
          aprobadas.add(materia.nombre);
          renderMalla();
        }
      });

      contenedor.appendChild(boton);
    });
  }
}

renderMalla();
