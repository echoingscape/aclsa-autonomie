fetch('items.json')
  .then(response => response.json())
  .then(data => {
    const formContainer = document.getElementById('form-container');
    let currentDomain = '';

    data.forEach(entry => {
      if (entry.domaine !== currentDomain) {
        currentDomain = entry.domaine;
        const h2 = document.createElement('h2');
        h2.textContent = currentDomain;
        formContainer.appendChild(h2);
      }

      const div = document.createElement('div');
      div.innerHTML = `
        <label>${entry.item}</label><br>
        <select>
          <option value="0">Non</option>
          <option value="1">Plutôt non</option>
          <option value="2">Un peu</option>
          <option value="3">Plutôt oui</option>
          <option value="4">Oui</option>
        </select><br><br>
      `;
      formContainer.appendChild(div);
    });
  });
