const sample = document.querySelector('.sWork');
let p = [];
let c = 1;

sample.addEventListener('click', function () {
    c++;
    if (c > 4) c = 1;
    for (let i = 1; i < 5; i++) {
        p[i] = document.querySelector('#go-' + i);
        if (c == i) p[i].removeAttribute('hidden');
        else p[i].setAttribute('hidden', 'hidden');
    }
});