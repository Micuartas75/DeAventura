function mostrarFormulario(propiedad) {
    document.getElementById('propiedad-seleccionada').textContent = propiedad;
    document.getElementById('form-solicitud').scrollIntoView({ behavior: 'smooth' });
}