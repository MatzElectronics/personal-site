function $(e) {
    return document.querySelector(e);
}

function $$(e) {
    return document.querySelectorAll(e);
}

function setupIndexPage() {
    let tabs = [];

    $$('nav>ul>li>button').forEach((e, i) => {

        tabs[i] = (e.nextElementSibling.innerText.toLowerCase());

        e.addEventListener('click', (b) => {

            $('.material-symbols-outlined.selected').classList.remove('selected');
            e.classList.add('selected');

            let name = e.nextElementSibling.innerText.toLowerCase();

            $('.container:not(.hidden)').classList.add('hidden');
            $('.container.' + name).classList.remove('hidden');

            $('.nav-marker').style.transform = 'translateX(' + (i * 5) + 'rem)';

            if (name !== 'home') {
                window.location.hash = '#' + name;
            } else {
                window.location.hash = '';
            }
        });
    });

    if (window.location.hash.indexOf('#') > -1) {
        let name = decodeURI(window.location.hash).replace(/#/, '');
        let i = tabs.indexOf(name);

        $('.material-symbols-outlined.selected').classList.remove('selected');
        let e = $$('.material-symbols-outlined')[i];
        e.classList.add('selected');

        $('.container:not(.hidden)').classList.add('hidden');
        $('.container.' + name).classList.remove('hidden');

        $('.nav-marker').style.transform = 'translateX(' + (i * 5) + 'rem)';
    }
}

function linkTo(addr, newTab) {
    let l = document.createElement('a');
    l.href = addr;
    if (newTab) {
        l.target = '_blank';
    }
    l.click();
}