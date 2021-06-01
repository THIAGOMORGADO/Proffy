import React from 'react';

import WhatsappIcon from '../../assets/icon/whatsapp.svg';

import './styles.css'


const TeacherItem: React.FC = () => {
  return(
    <article className="teacher-item">
          <header>
            <img src="https://avatars.githubusercontent.com/u/27393649?v=4" alt="" />
            <div>
              <strong>Thiago morgado</strong>
              <span>Matematica</span>
            </div>
          </header>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing <br />
             Distinctio ab et officia magnam libero qui blanditiis
              voluptates necessitatibus soluta voluptatum, velit nesciunt
              alias vitae officiis minima, nobis totam, asperiores fugiat.
          </p>
          <footer>
            <p>
              preço/hora
              <strong>R$ 150,00</strong>
            </p>
            <button type="button">
              <img src={WhatsappIcon} alt="whts app" />
              Entra em contato
            </button>
          </footer>
        </article>
  );
}

export default TeacherItem;