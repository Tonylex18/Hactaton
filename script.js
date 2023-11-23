document.addEventListener('DOMContentLoaded', function () {
    var input = document.querySelector('.collection-input');
    var dropdown = document.querySelector('.collection-dropdown');
    var dropdownItems = document.querySelectorAll('.collection-dropdown-item');

    document.querySelector('.collection-btn').addEventListener('click', function () {
        dropdown.style.display = (dropdown.style.display === 'none' || dropdown.style.display === '') ? 'block' : 'none';
    });

    dropdownItems.forEach(function (item) {
        item.addEventListener('click', function () {
            input.value = item.textContent;
            dropdown.style.display = 'none';
        });
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.collection-input__container')) {
            dropdown.style.display = 'none';
        }
    });
});
