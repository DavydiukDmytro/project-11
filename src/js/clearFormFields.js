function clearFormFields() {
  const modalFiends = formModal.querySelectorAll('input');
  modalFiends.forEach(field => {
    field.value = ' ';
  });
}
