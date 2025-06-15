import { useState } from 'react';
import './TicketCheck.css';

function TicketCheck() {
  const [ticketType, setTicketType] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [alcoholType, setAlcoholType] = useState('');
  const [economyType, setEconomyType] = useState('');

  const handleSelectChange = e => {
    setTicketType(e.target.value);
    console.log('Выбрано:', e.target.value);
  };

  const businessSelectChange = e => {
    setBusinessType(e.target.value);
    console.log('Выбрано:', e.target.value);
  };

  const alcoholSelectChange = e => {
    setAlcoholType(e.target.value);
    console.log('Выбрано алкоголь:', e.target.value);
  };

  const economySelectChange = e => {
    setEconomyType(e.target.value);
    console.log('Выбрано алкоголь:', e.target.value);
  };

  return (
    <div
      className={`${ticketType === '2' ? 'business' : ''} ${ticketType === '3' ? 'economy' : ''} container`}
    >
      <span className="span">task-2</span>
      <h1>Ticket Check</h1>

      <select name="ticket" id="ticket-select" onChange={handleSelectChange}>
        <option value="1">Choice your Ticket</option>
        <option value="2">Business</option>
        <option value="3">Economy</option>
      </select>

      {ticketType === '2' && (
        <select name="business" id="business-select" onChange={businessSelectChange}>
          <option value="1">Choice benefits</option>
          <option value="2">Alcohol</option>
          <option value="3">News</option>
        </select>
      )}

      {businessType === '2' && (
        <fieldset>
          <p>Would you like a snack with your alcohol?</p>
          <div className="radio-group">
            <input
              type="radio"
              id="yes"
              name="snack"
              value="yes"
              checked={alcoholType === 'yes'}
              onChange={alcoholSelectChange}
            />
            <label htmlFor="yes">Yes</label>
          </div>

          <div className="radio-group">
            <input
              type="radio"
              id="no"
              name="snack"
              value="no"
              checked={alcoholType === 'no'}
              onChange={alcoholSelectChange}
            />
            <label htmlFor="no">No</label>
          </div>
        </fieldset>
      )}

      {ticketType === '3' && (
        <fieldset>
          <p>Would you like a snack with your alcohol?</p>
          <div className="radio-group">
            <input
              type="radio"
              id="beer"
              value="yes"
              checked={economyType === 'yes'}
              onChange={economySelectChange}
            />
            <label htmlFor="beer">Beer</label>
          </div>

          <div className="radio-group">
            <input
              type="radio"
              id="chips"
              value="no"
              checked={economyType === 'no'}
              onChange={economySelectChange}
            />
            <label htmlFor="chips">Chips</label>
          </div>
        </fieldset>
      )}
    </div>
  );
}

export default TicketCheck;
