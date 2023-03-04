const accordion_wraper = document.querySelector('.contacts__accordion-container'); // add contacts__accordion-container_active
const accordion = document.querySelector('.contacts__accordion'); // add contacts__accordion_active
const cards_wraper = document.querySelector('.contacts__cards-container') // add contacts__cards-container_active
const city_cards = document.querySelectorAll('.card'); // add card_selected, static collection

let chosen_city = '';
let chosen_card = null;

accordion.addEventListener('click', (event) => {

  if(!accordion.classList.contains('contacts__accordion_active')){
    accordion_wraper.classList.add('contacts__accordion-container_active');
    accordion.classList.add('contacts__accordion_active');
  } else {
    if(event.target.matches('.contacts__accordion-panel')){
      return;
    } else if(event.target.closest('.contacts__accordion-header')){
      if(!chosen_card){
        accordion.classList.remove('contacts__accordion_active');
        accordion_wraper.classList.remove('contacts__accordion-container_active');
      } else {
        accordion.classList.remove('contacts__accordion_active');
      }
    } else {
      const city_name = event.target.classList[1];
      showCityCard(city_name);
      accordion.classList.remove('contacts__accordion_active');
      changeButtonText(city_name);
    }
  }  
});

function showCityCard(city_name){
  const selector = `.card.${city_name}`;
  const selected_card = document.querySelector(selector);

  cards_wraper.classList.add('contacts__cards-container_active');
  if(!chosen_card){
    selected_card.classList.add('card_selected');
    chosen_card = selected_card;
  } else if(selected_card !== chosen_card){
    chosen_card.classList.remove('card_selected');
    setTimeout(function(){ selected_card.classList.add('card_selected');}, 1000);
    chosen_card = selected_card;
  }
}

function changeButtonText(city_name){
  const selector = `.contacts__accordion-item.${city_name}`;
  const selected_paragraph = document.querySelector(selector);
  const city_full_name = selected_paragraph.innerText;
  const drop_button_text = document.querySelector('.contacts__accordion-trigger-name');

  if(!chosen_city || chosen_city !== city_name){
    chosen_city = city_name;
    drop_button_text.innerText = city_full_name;
  }
}
