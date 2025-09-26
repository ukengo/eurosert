/* Відправка форм */
export function formSubmit(options = { validate: true }) {
  const forms = document.forms
  if (forms.length) {
    for (const form of forms) {
      form.addEventListener('submit', function (e) {
        const form = e.target
        formSubmitAction(form, e)
      })
      form.addEventListener('reset', function (e) {
        const form = e.target
        formValidate.formClean(form)
      })
    }
  }

  async function formSubmitAction(form, e) {
    e.preventDefault()
    const error = !form.hasAttribute('data-no-validate')
      ? formValidate.getErrors(form)
      : 0
    if (error === 0) {
      const ajax = form.hasAttribute('data-ajax')

      if (ajax) {
        // Якщо режим AJAX
        e.preventDefault()
        const formAction = 'sendmail.php'
        const formMethod = form.getAttribute('method')
          ? form.getAttribute('method').trim()
          : 'GET'

        const formData = new FormData(form)
        form.classList.add('_sending')
        const response = await fetch(formAction, {
          method: formMethod,
          body: formData,
        })
        if (response.ok) {
          form.classList.remove('_sending')
          formSent(form)
        } else {
          alert('Помилка')
          form.classList.remove('_sending')
        }
      } else if (form.hasAttribute('data-dev')) {
        // Якщо режим розробки
        e.preventDefault()
        formSent(form)
      }
    } else {
      e.preventDefault()
      const formError = form.querySelector('._form-error')
      if (formError && form.hasAttribute('data-goto-error')) {
        gotoBlock(formError, true, 1000)
      }
    }
  }

  // Дії після відправки форми
  function formSent(form) {
    // Створюємо подію відправки форми
    document.dispatchEvent(
      new CustomEvent('formSent', {
        detail: {
          form: form,
        },
      })
    )

    // Відкриваємо попап
    setTimeout(() => {
      const popupSelector = form.dataset.popupMessage
      if (popupSelector) {
        openPopup(popupSelector)
      }
    }, 0)

    // Очищаємо форму
    formValidate.formClean(form)
  }

  // Функція для відкриття діалогу
  function openPopup(selector) {
    const dialog = document.getElementById(selector)
    if (dialog) {
      dialog.showModal()

      // Додаємо обробник для закриття попапу
      const closeButtons = popup.querySelectorAll('[data-js-close]')
      closeButtons.forEach((button) => {
        button.addEventListener('click', () => {
          closePopup(dialog)
        })
      })
    } else {
      console.warn(`Попап із селектором ${selector} не знайдено`)
    }

    // Автозакриття попапу через 30 секунд
    setTimeout(() => {
      closePopup(dialog)
    }, 2000)

    // Закриття попапу по кліку поза контентом
    dialog.addEventListener('click', (e) => {
      if (!e.target.closest('.popup__content')) {
        closePopup(dialog)
      }
    })
  }

  // Функція для закриття попапу
  function closePopup(selector) {
    if (selector) {
      selector.close()
    }
  }
}

// Валідація форм
export let formValidate = {
  getErrors(form) {
    let error = 0
    let formRequiredItems = form.querySelectorAll('*[data-required]')
    if (formRequiredItems.length) {
      formRequiredItems.forEach((formRequiredItem) => {
        if (
          (formRequiredItem.offsetParent !== null ||
            formRequiredItem.tagName === 'SELECT') &&
          !formRequiredItem.disabled
        ) {
          error += this.validateInput(formRequiredItem)
        }
      })
    }
    return error
  },
  validateInput(formRequiredItem) {
    let error = 0
    if (formRequiredItem.dataset.required === 'email') {
      formRequiredItem.value = formRequiredItem.value.replace(' ', '')
      if (this.emailTest(formRequiredItem)) {
        this.addError(formRequiredItem)
        error++
      } else {
        this.removeError(formRequiredItem)
      }
    } else if (
      formRequiredItem.type === 'checkbox' &&
      !formRequiredItem.checked
    ) {
      this.addError(formRequiredItem)
      error++
    } else {
      if (!formRequiredItem.value) {
        this.addError(formRequiredItem)
        error++
      } else {
        this.removeError(formRequiredItem)
      }
    }
    return error
  },
  addError(formRequiredItem) {
    formRequiredItem.classList.add('_form-error')
    formRequiredItem.parentElement.classList.add('_form-error')
    let inputError =
      formRequiredItem.parentElement.querySelector('.form__error')
    if (inputError) {
      formRequiredItem.parentElement.removeChild(inputError)
    }
    if (formRequiredItem.dataset.error) {
      formRequiredItem.parentElement.insertAdjacentHTML(
        'beforeend',
        `<div class="form__error">${formRequiredItem.dataset.error}</div>`
      )
    }
  },
  removeError(formRequiredItem) {
    formRequiredItem.classList.remove('_form-error')
    formRequiredItem.parentElement.classList.remove('_form-error')
    if (formRequiredItem.parentElement.querySelector('.form__error')) {
      formRequiredItem.parentElement.removeChild(
        formRequiredItem.parentElement.querySelector('.form__error')
      )
    }
  },
  formClean(form) {
    form.reset()
    setTimeout(() => {
      let inputs = form.querySelectorAll('input,textarea')
      for (let index = 0; index < inputs.length; index++) {
        const el = inputs[index]
        el.parentElement.classList.remove('_form-focus')
        el.classList.remove('_form-focus')
        formValidate.removeError(el)
      }
      let checkboxes = form.querySelectorAll('.checkbox__input')
      if (checkboxes.length > 0) {
        for (let index = 0; index < checkboxes.length; index++) {
          const checkbox = checkboxes[index]
          checkbox.checked = false
        }
      }
      if (flsModules.select) {
        let selects = form.querySelectorAll('.select')
        if (selects.length) {
          for (let index = 0; index < selects.length; index++) {
            const select = selects[index].querySelector('select')
            flsModules.select.selectBuild(select)
          }
        }
      }
    }, 0)
  },
  emailTest(formRequiredItem) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(
      formRequiredItem.value
    )
  },
}

export const flsModules = {}
