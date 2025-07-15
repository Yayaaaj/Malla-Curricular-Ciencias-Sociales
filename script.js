const planEstudios = {
  "Primer Semestre": {
    "Teorias del Aprendizaje": [],
    "Pensamiento Geografico": [],
    "Pensamiento Historico": [],
    "Grancolombianidad": [],
    "Competencias Comunicativas I": [],
    "Constitucion Politica y Democracia": [],
    "Curso de Formacion Ludica I": [],
    "Electiva Libre I": []
  },
  "Segundo Semestre": {
    "Geografia Fisica General": ["Pensamiento Geografico"],
    "Historia Antigua": ["Pensamiento Historico"],
    "Contexto para la Ensenanza de las Ciencias Sociales": [],
    "Pensamiento Critico": [],
    "Humanismo Cristiano": [],
    "Competencias Comunicativas II": ["Competencias Comunicativas I"],
    "Razonamiento Cuantitativo": [],
    "Electiva Libre II": []
  },
  "Tercer Semestre": {
    "Politica Educativa": ["Teorias del Aprendizaje"],
    "Gestion de la Informacion para el Aprendizaje": [],
    "Geografia Fisica de Colombia": ["Geografia Fisica General"],
    "Historia Medieval": ["Historia Antigua"],
    "Didactica de la Historia": ["Contexto para la Ensenanza de las Ciencias Sociales"],
    "Introduccion a la Investigacion": ["Pensamiento Critico"],
    "Antropologia": [],
    "Curso de Formacion Ludica II": []
  },
  "Cuarto Semestre": {
    "Curriculo y Evaluacion": ["Politica Educativa"],
    "Pedagogia": ["Gestion de la Informacion para el Aprendizaje"],
    "Geografia Humana": ["Geografia Fisica de Colombia"],
    "Historia Moderna y Contemporanea": ["Historia Medieval"],
    "Didactica de la Geografia": ["Didactica de la Historia"],
    "Investigacion Educativa en Ciencias Sociales": ["Introduccion a la Investigacion"],
    "Axiologia": [],
    "Electiva Libre III": []
  },
  "Quinto Semestre": {
    "Gestion Educativa": ["Curriculo y Evaluacion"],
    "Geografia Economica": ["Geografia Humana"],
    "Historia America Siglos XVI al XVIII": ["Historia Moderna y Contemporanea"],
    "Etnohistorias de las Comunidades Andinas y Mesoamericanas": [],
    "Practica I": ["Didactica de la Geografia"],
    "Metodologia de Investigacion en Ciencias Sociales": ["Investigacion Educativa en Ciencias Sociales"],
    "Etica General": [],
    "Electiva Libre IV": []
  },
  "Sexto Semestre": {
    "Contextos Escolares": ["Gestion Educativa"],
    "Dinamicas Urbanas": ["Geografia Economica"],
    "Historia Colombia Siglo XIX": ["Historia America Siglos XVI al XVIII"],
    "Practica II": ["Practica I"],
    "Trabajo de Grado I": ["Metodologia de Investigacion en Ciencias Sociales"],
    "Familia y Bioetica": [],
    "Curso de Formacion Ludica III": [],
    "Electiva Libre V": []
  },
  "Septimo Semestre": {
    "Educacion y Cultura": ["Contextos Escolares"],
    "Geografia Politica": ["Dinamicas Urbanas"],
    "Historia Colombia Siglo XX": ["Historia Colombia Siglo XIX"],
    "Practica III": ["Practica II"],
    "Trabajo de Grado II": ["Trabajo de Grado I"],
    "Cultura Solidaria": [],
    "Electiva Libre VI": []
  },
  "Octavo Semestre": {
    "Ambiente y Sociedad": ["Geografia Politica"],
    "Historia America Contemporanea": ["Historia Colombia Siglo XX"],
    "Seminario Interdisciplinar": [],
    "Practica IV": ["Practica III"],
    "Trabajo de Grado III": ["Trabajo de Grado II"],
    "Etica Profesional": [],
    "Contexto Nacional y Global": []
  }
};

let aprobadas = [];

function crearMalla() {
  const contenedor = document.getElementById("malla");

  for (let semestre in planEstudios) {
    const divSemestre = document.createElement("div");
    divSemestre.className = "semestre";
    const titulo = document.createElement("h2");
    titulo.textContent = semestre;
    divSemestre.appendChild(titulo);

    for (let materia in planEstudios[semestre]) {
      const divMateria = document.createElement("div");
      divMateria.className = "materia";
      divMateria.textContent = materia;

      const requisitos = planEstudios[semestre][materia];
      if (requisitos.length > 0 && !requisitos.every(req => aprobadas.includes(req))) {
        divMateria.classList.add("bloqueada");
      }

      divMateria.onclick = () => {
        if (divMateria.classList.contains("bloqueada")) return;
        if (divMateria.classList.contains("aprobada")) return;

        divMateria.classList.add("aprobada");
        aprobadas.push(materia);
        actualizarMalla();
      };

      divSemestre.appendChild(divMateria);
    }

    contenedor.appendChild(divSemestre);
  }
}

function actualizarMalla() {
  document.getElementById("malla").innerHTML = "";
  crearMalla();
}

window.onload = crearMalla;
