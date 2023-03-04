const dropdown_wrap = document.querySelector('.price__accordion-list');
let open_dropdown = null;

dropdown_wrap.addEventListener('click', (event) => {

  if(event.target === dropdown_wrap){
    return;
  }

  const dropdown = event.target.closest('.price__accordion-list-item');
  const drop_button = event.target.closest('.price__accordion-trigger');

  if(open_dropdown === null){
    open_dropdown = dropdown;
    dropdown.classList.add('selected');
  } else {
    if(dropdown === open_dropdown && drop_button){
      dropdown.classList.remove('selected');
      open_dropdown = null;
    } else if (dropdown !== open_dropdown){
      open_dropdown.classList.remove('selected');
      dropdown.classList.add('selected');
      open_dropdown = dropdown;
    }
  }
});