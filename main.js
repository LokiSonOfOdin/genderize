
const form_ui = document.querySelector('.form_ui');
const text_ui = document.querySelector('.text_ui');
const btn_ui = document.querySelector('btn_ui')
const result_p = document.querySelector('.result_p');

    form_ui.addEventListener('submit', showResult);

async function showResult (e) {
    e.preventDefault();
    const firstName = document.querySelector('.text_ui').value;
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${firstName}`;
        await fetch(url)
        .then(async(data) => {
        let obj = await data.json();
        const p = document.createElement('p');
        p.textContent = `${obj.name}: ${obj.gender} `
        result_p.append(p)
        }).catch( () => alert('Что-то пошло не так '))
}