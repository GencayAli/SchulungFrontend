const liste = document.querySelector('#liste');
const btnDlg = document.getElementById('btnDlg');
const dlgUser = document.getElementById('dlgUser');
const frmUser = document.getElementById('frmUser');

fetch('http://localhost:3000/api/users')
  .then((resp) => resp.json())
  .then((data) => {
    for (const user of data) {
      liste.insertAdjacentHTML(
        'afterbegin',
        `<li data-id="${user.id}">${user.firstname} <button>X</button></li>`,
      );
    }
  });

btnDlg.addEventListener('click', () => {
  dlgUser.showModal();
});

frmUser.addEventListener('submit', async (ev) => {
  ev.preventDefault();
  const data = Object.fromEntries(new FormData(ev.target));
  const response = await fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const user = await response.json();
  liste.insertAdjacentHTML(
    'afterbegin',
    `<li data-id="${user.id}">${user.firstname} <button>X</button></li>`,
  );
  dlgUser.close();
});

liste.addEventListener('click', (ev) => {
  if (ev.target.matches('button')) {
    const liElt = ev.target.closest('li');
    const id = liElt.dataset['id'];

    fetch(`/api/users/${id}`, { method: 'DELETE' }).then((response) => {
      if (response.ok) {
        liste.removeChild(liElt);
      }
    });
  }
});


//ssssssss
