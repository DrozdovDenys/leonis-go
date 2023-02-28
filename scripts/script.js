const menu = document.querySelector(".burger-menu__menu");
const burger = document.querySelector('.header__burger-menu');
const body = document.querySelector('body');


const selectSingle = document.querySelector('.select-wrapper');
const selectSingle_title = selectSingle.querySelector('.select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.select__label');

const selectTo = document.querySelector('.select-to');
const selectToTitle = selectTo.querySelector('.select-to__title');
const selectToLabels = selectTo.querySelectorAll('.select-to__label');


const selectDate = document.querySelector('.select-date');
const selectDateTitle = selectDate.querySelector('.select-date__title');
const selectDateLabels = selectDate.querySelectorAll('.select-date__label');

const selectPassangers = document.querySelectorAll('.select-passangers');
const selectPassangersTitle = selectPassangers[0].querySelectorAll('.select-passangers__title');
const selectPassangersLabels = selectPassangers[0].querySelectorAll('.select-passangers__label');

const selectPassangers2 = document.querySelectorAll('.select-passenger2');
const selectPassangersTitle2 = selectPassangers2[0].querySelectorAll('.select-passenger2__title');
const selectPassangersLabels2 = selectPassangers2[0].querySelectorAll('.select-passanger2__label');


if (document.querySelector(".tickets")) {
  document.querySelector(".tickets").addEventListener("click", function () {
    if (event.target.className === "btn-details") {
      event.target.parentElement.parentElement.parentElement.parentElement.lastElementChild.classList.toggle(
        "details-open"
      );
      if ("active" === event.target.parentElement.getAttribute("data-state")) {
        event.target.parentElement.setAttribute("data-state", "");
        event.target.style.background = "white";
        event.target.parentElement.parentElement.parentElement.style.borderRadius = "0 0 25px 25px";
      } else {
        event.target.parentElement.setAttribute("data-state", "active");
        event.target.style.background = "#fbc21f";
        event.target.parentElement.parentElement.parentElement.style.borderRadius = "0px";
      }
    }
  });
}


// burger menu
burger.addEventListener("click", function(event) {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	body.classList.toggle('lock');
})


// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

// Toggle menu2
selectToTitle.addEventListener('click', () => {
	if ('active' === selectTo.getAttribute('data-state')) {
		selectTo.setAttribute('data-state', '');
	} else {
		selectTo.setAttribute('data-state', 'active');
	}
  });
  
  // Close when click to option
  for (let i = 0; i < selectToLabels.length; i++) {
	selectToLabels[i].addEventListener('click', (evt) => {
		selectToTitle.textContent = evt.target.textContent;
	  selectTo.setAttribute('data-state', '');
	});
  }

  // Toggle menu3
selectDateTitle.addEventListener('click', () => {
	if ('active' === selectDate.getAttribute('data-state')) {
		selectDate.setAttribute('data-state', '');
	} else {
		selectDate.setAttribute('data-state', 'active');
	}
  });
  
  // Close when click to option
  for (let i = 0; i < selectDateLabels.length; i++) {
	selectDateLabels[i].addEventListener('click', (evt) => {
		selectDateTitle.textContent = evt.target.textContent;
	  selectDate.setAttribute('data-state', '');
	});
  }

  // Toggle menu4
selectPassangersTitle[0].addEventListener('click', () => {
	if ('active' === selectPassangers[0].getAttribute('data-state')) {
		selectPassangers[0].setAttribute('data-state', '');
	} else {
		selectPassangers[0].setAttribute('data-state', 'active');
	}
  });
  
  // Close when click to option
  for (let i = 0; i < selectPassangersLabels.length; i++) {
	selectPassangersLabels[i].addEventListener('click', (evt) => {
		selectPassangersTitle[0].textContent = evt.target.textContent;
	  selectPassangers[0].setAttribute('data-state', '');
	});
  }
  //---------------------------------------------
  if (selectPassangersTitle2[0]) {
    selectPassangersTitle2[0].addEventListener('click', () => {
      if ('active' === selectPassangers2[0].getAttribute('data-state')) {
        selectPassangers2[0].setAttribute('data-state', '');
      } else {
        selectPassangers2[0].setAttribute('data-state', 'active');
      }
      });
      
  }
  // Close when click to option
  for (let i = 0; i < selectPassangersLabels2.length; i++) {
	selectPassangersLabels2[i].addEventListener('click', (evt) => {
		selectPassangersTitle2[0].textContent = evt.target.textContent;
	  selectPassangers2[0].setAttribute('data-state', '');
	});
  }
 

  
//   phone mask
document.addEventListener("DOMContentLoaded", function () {
 
    var eventCalllback = function (e) {
 
        var el = e.target,
        clearVal = el.dataset.phoneClear,
        pattern = el.dataset.phonePattern,
        matrix_def = "+38 (___) ___-__-__",
        matrix = pattern ? pattern : matrix_def,
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
         
        if (clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                e.target.value = '';
                return;
            }
        }
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    }
 
    var phone_inputs = document.querySelectorAll('[data-phone-pattern]');
    for (let elem of phone_inputs) {
        for (let ev of ['input', 'blur', 'focus']) {
            elem.addEventListener(ev, eventCalllback);
        }
    }
});

document.getElementById('popup2').addEventListener('click', () => document.body.style.overflow = 'hidden');
document.querySelector('.popup__area')?.addEventListener('click', () => document.body.style.overflow = 'auto')
document.querySelector('.popup__close')?.addEventListener('click', () => document.body.style.overflow = 'auto')