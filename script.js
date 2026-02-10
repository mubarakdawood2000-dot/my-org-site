// وظيفة تبديل الوضع الليلي (Dark Mode)
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

// وظيفة البحث اللحظي عن المنظمات
function searchOrganizations() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let cards = document.getElementsByClassName('card');

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (title.includes(input)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

// ربط حقل البحث بالوظيفة البرمجية
document.getElementById('searchBar').addEventListener('keyup', searchOrganizations);
