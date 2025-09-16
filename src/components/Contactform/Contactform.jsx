
import Button from '@/components/Button'
import './Contactform.scss'

export default () => {

  return (
    <>
      <div className="contactform" aria-labelledby="services-title">
        <h5 className="contactform__title">
          Contact your GCG
        </h5>
        <form className="contactform__body contact-form" action="#" method="POST">
          <div className="contactform__group">
            <label className="contactform__label" htmlFor="name">Name</label>
            <input className="contactform__input" type="text" id="name" name="name" required />
          </div>
          <div className="contactform__group">
            <label className="contactform__label" htmlFor="email">Email</label>
            <input className="contactform__input" type="email" id="email" name="email" required />
          </div>
          <div className="contactform__group">
            <label className="contactform__label" htmlFor="message">Message</label>
            <textarea className="contactform__textarea" id="message" name="message" rows="4" required></textarea>
          </div>
          <Button className="contactform__button button--primary" type="submit">Send</Button>
          {/* <button className="contactform__button button-primary" type="submit">Send</button> */}
        </form>
      </div>
      {/* <div className="contact__form">
        <form className="form">
          <div className="form__group">
            <input type="text" className="form__input" placeholder="Назва компанії" required="" />
          </div>
          <div className="form__group">
            <input type="text" className="form__input" placeholder="Ваше ім'я" required="" />
          </div>
          <div className="form__group">
            <select className="form__select" required="">
              <option value="">Виберіть країну</option>
              <option value="ukraine">Україна</option>
              <option value="usa">США</option>
              <option value="canada">Канада</option>
              <option value="europe">Європа</option>
              <option value="other">Інші</option>
            </select>
          </div>
          <div className="form__group">
            <input type="email" className="form__input" placeholder="Email" required="" />
          </div>
          <div className="form__group">
            <textarea className="form__textarea" placeholder="Опишіть вашу продукцію та потреби" rows="4"></textarea>
          </div>
          <button type="submit" className="btn btn--primary">Надіслати запит</button>
        </form> 
      </div>*/}
    </>

  )
}














/* <!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Форма зворотного зв'язку</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div className="container">
    <h2>Форма зворотного зв'язку</h2>
    <form id="feedbackForm">
      <div className="form-group">
        <label for="name">Ім'я</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div className="form-group">
        <label for="email">Електронна пошта</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div className="form-group">
        <label for="message">Повідомлення</label>
        <textarea id="message" name="message" rows="4" required></textarea>
      </div>
      <button type="submit">Надіслати</button>
    </form>
    <p id="formMessage" className="message hidden"></p>
  </div>
  <script src="script.js"></script>
</body>
</html> */


/* 
body {
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

.container {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 28rem;
  width: 100%;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #1f2937;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  font-size: 0.875rem;
  font-weight: medium;
  color: #374151;
  margin-bottom: 0.25rem;
}

input, textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
}

textarea {
  resize: vertical;
}

button {
  width: 100%;
  background-color: #2563eb;
  color: #ffffff;
  padding: 0.5rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: medium;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #1d4ed8;
}

.message {
  margin-top: 1rem;
  text-align: center;
  font-size: 0.875rem;
}

.message.hidden {
  display: none;
}

.message.error {
  color: #dc2626;
}

.message.success {
  color: #16a34a;
} */

/* document.getElementById('feedbackForm').addEventListener('submit', function(event) {
event.preventDefault();
 
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const message = document.getElementById('message').value.trim();
const formMessage = document.getElementById('formMessage');

formMessage.classList.remove('hidden', 'error', 'success');

if (name === '' || email === '' || message === '') {
  formMessage.textContent = 'Будь ласка, заповніть усі поля!';
  formMessage.classList.add('error');
  return;
}

if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  formMessage.textContent = 'Будь ласка, введіть коректну електронну пошту!';
  formMessage.classList.add('error');
  return;
}

formMessage.textContent = 'Повідомлення успішно надіслано!';
formMessage.classList.add('success');

this.reset(); */