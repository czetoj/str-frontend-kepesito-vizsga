function changeOuterLinks() { }

const links = document.querySelectorAll('#link-list a');

links.forEach(item => {
    if (item.innerHTML.includes('outer-link')) {
        item.setAttribute('target', '_blank');
        const strong = document.createElement('strong');
        strong.innerHTML = item.innerHTML;
        item.appendChild(strong);
    } else item
});

const navElement = document.getElementsByTagName('nav')[0];
navElement.style.display = 'flex';
navElement.style.flexDirection = 'column';
navElement.style.width = '30%';
navElement.style.margin = '0 auto';
navElement.style.border = '1px solid blue';
navElement.style.padding = '16px';

export { changeOuterLinks };