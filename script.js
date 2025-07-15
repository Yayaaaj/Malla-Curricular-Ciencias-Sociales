document.addEventListener('DOMContentLoaded', () => {
  const cursos = document.querySelectorAll('.curso');

  cursos.forEach(curso => {
    curso.addEventListener('click', () => {
      if (curso.classList.contains('bloqueado')) return;

      // Marcar como aprobado
      curso.classList.add('aprobado');
      curso.disabled = true;

      // Desbloquear cursos que dependen de este
      cursos.forEach(obj => {
        const requerido = obj.getAttribute('data-requiere');
        if (requerido === curso.id && obj.classList.contains('bloqueado')) {
          obj.classList.remove('bloqueado');
        }
      });
    });
  });
});
