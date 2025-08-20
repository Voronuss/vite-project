import { useState } from 'react';
import Button from './Button/Button';

export default function FeedbackSection() {
  const [name, setName] = useState('');
  const [reason, setReason] = useState('help');

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <section>
      <h3>Обратная связь</h3>

      <form>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={name}
          style={{
            border: name.trim().lenght ? null : '1px solid red',
          }}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={reason}
          onChange={(event) => setReason(event.target.value)}>
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <Button>Отправить</Button>
      </form>
    </section>
  );
}
