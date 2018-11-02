const showAbout = () => {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(item => item.classList.add('d-none'));

  document.querySelector('.about').classList.remove('d-none');
}

const showActivity = () => {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(item => item.classList.add('d-none'));

  document.querySelector('.activity').classList.remove('d-none');
}

const showContacts = () => {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(item => item.classList.add('d-none'));

  document.querySelector('.contacts').classList.remove('d-none');
}
