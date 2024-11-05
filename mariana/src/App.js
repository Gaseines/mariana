import React, { useState } from 'react'
import controle from './controle.png'

import './App.css';

function App() {

  const [tela, setTela] = useState('1')

  return (
    <div className="App">
      <div className="rain-container">

        <div className="raindrop"></div>
        <div className="raindrop"></div>
        <div className="raindrop"></div>
        <div className="raindrop"></div>
        <div className="raindrop"></div>
        <div className="raindrop"></div>
        <div className="raindrop"></div>
        <div className="raindrop"></div>
        <div className="raindrop"></div>
        <div className="raindrop"></div>
      </div>
      {tela === '0' && (
        <div className='perguntas'>
          <p><span>GAME OVER</span></p>
          <div className='btn_container'>
            <button onClick={() => { setTela('1') }} className='btn_cancel'>Recomeçar</button>
          </div>
        </div>
      )}

      {tela === '1' && (
        <div className='perguntas'>
          <p>Olá <span className='mariana'>Mariana</span>, está afim de entrar em uma <span>jornada de aventuras?</span></p>
          <div className='btn_container'>
            <button onClick={() => { setTela('0') }} className='btn_cancel'>Não aceitar</button>
            <button onClick={() => { setTela('2') }} className='btn_accept'>Aceitar</button>
          </div>
        </div>
      )}

      {tela === '2' && (
        <div className='perguntas'>
          <p>Então antes de irmos para nossa <span>aventura</span> precisamos nos preparar, <span>certo?</span></p>
          <div className='btn_container'>
            <button onClick={() => { setTela('0') }} className='btn_cancel'>Não</button>
            <button onClick={() => { setTela('33') }} className='btn_accept'>Vamos</button>
          </div>
        </div>
      )}

      {tela === '33' && (
        <div className='perguntas'>
          <p><span>Primeiro</span> vamos <span>trocar</span>  de roupa para a aventura! <span>Troque</span> de roupa e volte aqui na <span>cozinha</span></p>
          <div className='btn_container'>
            <button onClick={() => { setTela('0') }} className='btn_cancel'>Não quero</button>
            <button onClick={() => { setTela('3') }} className='btn_accept'>Estou Pronta!</button>
          </div>
        </div>
      )}

      {tela === '3' && (
        <div className='perguntas'>
          <p><span>Agora </span>vamos em busca dos <span>itens </span>que vamos utilizar, sabe <span>onde</span> estão?</p>
          <div className='btn_container'>
            <button onClick={() => { setTela('4') }} className='btn_rosa'>Não sei</button>
          </div>
        </div>
      )}

      {tela === '4' && (
        <div className='perguntas'>
          <p>Tente <span>procurar </span>no quarto dos seus <span>pais</span>, um item está jogado na <span>cama</span>, e o outro no <span>guarda-roupa</span></p>
          <div className='btn_container'>
            <button onClick={() => { setTela('5') }} className='btn_rosa'>Achei</button>
          </div>
        </div>
      )}

      {tela === '5' && (
        <div className='perguntas'>
          <p><span>Ótimo!!</span>Agora precisamos de itens para <span>alimentação</span>, certo?</p>
          <div className='btn_container'>
            <button onClick={() => { setTela('6') }} className='btn_rosa'>Sim!</button>
          </div>
        </div>
      )}

      {tela === '6' && (
        <div className='perguntas'>
          <p><span>Muito bem!!</span> Pegue o item para <span>alimentação</span> que está em cima da geladeira da <span>cozinha</span></p>
          <div className='btn_container'>
            <button onClick={() => { setTela('7') }} className='btn_rosa'>Peguei!</button>
          </div>
        </div>
      )}

      {tela === '7' && (
        <div className='perguntas'>
          <p><span>Legal!</span> Se quiser pegar algo, para caso fique com <span>sede</span>, fique <span>a vontade!</span></p>
          <div className='btn_container'>
            <button onClick={() => { setTela('8') }} className='btn_rosa'>Não quero!</button>
            <button onClick={() => { setTela('8') }} className='btn_rosa'>Peguei</button>
          </div>
        </div>
      )}

      {tela === '8' && (
        <div className='perguntas'>
          <p><span>Perfeito!!</span> Você está <span>pronta</span> para embarcar nessa <span>jornada</span>, pegue seus <span>itens</span> e se dirija ao <span>lobby</span> (quarto do seu irmão), o <span>player 1</span> está te esperando. <span>Se divirta!!</span></p>
          <div className='btn_container'>
            <img src={controle} className='controle' />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
