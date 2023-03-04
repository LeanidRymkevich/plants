const service_buttons_wrap = document.querySelector('.service__buttons');
const service_buttons = document.querySelectorAll('.service__buttons button');
const service_pictures = document.querySelectorAll('.sevice__pictures > div');
let dont_blur_classes = [];

service_buttons_wrap.addEventListener('click', (event) => {
  let is_target_button = false;

  for(let item of service_buttons){
    if(item === event.target){
      is_target_button = true;
      break;
    }
  }

  if(!is_target_button){
    return;
  }

  const button = event.target;
  const button_name = button.className.split(' ')[0];
  let selected_buttons_num = 0;

  service_buttons.forEach(item => {
    if(item.classList.contains('service__button_selected')){
      selected_buttons_num++;
    }
  })

  if(selected_buttons_num < 2 && !button.classList.contains('service__button_selected')){
    button.classList.add('service__button_selected');
    dont_blur_classes.push(button_name);
    blur();
  } else if (button.classList.contains('service__button_selected')){
    button.classList.remove('service__button_selected');
    dont_blur_classes = dont_blur_classes.filter(item => item !== button_name);
    if(dont_blur_classes.length !== 0){
      blur();
    } else {
      service_pictures.forEach(item => item.classList.remove('service__picture_blur'));
    }
  }
});


function blur(){
  service_pictures.forEach(item => {
    item_name = item.className.split(' ')[1];
    if(!dont_blur_classes.includes(item_name)){
        item.classList.add('service__picture_blur');
    } else {
        item.classList.remove('service__picture_blur');
    }
  });
}


