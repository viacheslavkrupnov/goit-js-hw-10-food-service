const refs = {
    body: document.querySelector('body'),
    switch: document.querySelector('#theme-switch-toggle'),
};

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

refs.switch.addEventListener('change', setClassList);
refs.switch.addEventListener('change', setLocalStorage);

function setClassList(e) {
    const check = refs.switch.checked;

    if (check) {
        refs.body.classList.add(Theme.DARK);
        refs.body.classList.remove(Theme.LIGHT);
    } else {
        refs.body.classList.add(Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK);
    }
}

function setLocalStorage(e) {
    const check = refs.switch.checked;

    if (check) {
        localStorage.setItem('theme', Theme.DARK);
    } else {
        localStorage.removeItem('theme');
        localStorage.setItem('theme', Theme.LIGHT);
    }
}

  function themeSwitcher() {
    const initialTheme = localStorage.getItem('theme');
  
    if (initialTheme === Theme.DARK) {
      refs.body.classList.remove(Theme.LIGHT);
      refs.body.classList.add(Theme.DARK);
      refs.switch.checked = true;
    } else {
      refs.body.classList.remove(Theme.DARK);
      refs.body.classList.add(Theme.LIGHT);
    }
  }

  themeSwitcher();