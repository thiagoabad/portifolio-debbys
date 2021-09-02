import './Details.css'

function Details(props) {
  switch (props.id) {
    case 1:
        return (
          <div className="detailsContentOpened"> 
            <img className="detail-header" src={process.env.PUBLIC_URL + "happydog/Portfolio Happy Dog-01.png"} alt="Logo of the job"/>
            <div className="detailsText">
              <p className="detail-text-pt">Produção da primeira corrida das cores pet de Belo Horizonte. Desenvolvimento de toda identidade visual e peças do evento (camisa, credencial, flyer, cartaz, boton, bandana pet, backdrop e etc).</p>
              <p className="detail-text-en">Production of the first pet color race in Belo Horizonte. Development of all visual identity and pieces of the event (shirt, credential, flyer, poster, button, pet bandana, backdrop and etc.).</p>
            </div>
            <img className="detail-1" src={process.env.PUBLIC_URL + "happydog/Portfolio Happy Dog-02.png"} alt="About the job"/>
            <img className="detail-2" src={process.env.PUBLIC_URL + "happydog/Portfolio Happy Dog-03.png"} alt="About the job"/>
            <img className="detail-3" src={process.env.PUBLIC_URL + "happydog/Portfolio Happy Dog-04.png"} alt="About the job"/>
            <img className="detail-footer" src={process.env.PUBLIC_URL + "happydog/Portfolio Happy Dog-05.png"} alt="Ending of the job"/>
          </div>
        )
    case 2:
      return (
        <div className="detailsContentOpened"> 
          <img className="detail-header" src={process.env.PUBLIC_URL + "dogadventure/Portfolio DogAdventure-01.png"} alt="Logo of the job"/>
          <div className="detailsText">
            <p className="detail-text-pt">Desenvolvimento de arte para evento da Educãodo - Centro de Bem Estar Canino, com aplicação em camisa, mochila e backdrop. Foi criada uma composição tipográfica com a frase "meu dog é adventure", com elementos que remetessem à terra, barro e cachorro, já que tratava-se de uma trilha com cães.</p>
            <p className="detail-text-en">Art development for event of Educãodo - Center of Canine Wellness, with application on shirt, backpack and backdrop. A typographic composition was created with the phrase "my dog ​​is adventure", with elements that refer to the earth, clay and dog, since it was a trail with dogs.</p>
          </div>
          <img className="detail-1" src={process.env.PUBLIC_URL + "dogadventure/Portfolio DogAdventure-02.png"} alt="About the job"/>
          <img className="detail-2" src={process.env.PUBLIC_URL + "dogadventure/Portfolio DogAdventure-03.png"} alt="About the job"/>
          <img className="detail-3" src={process.env.PUBLIC_URL + "dogadventure/Portfolio DogAdventure-04.png"} alt="About the job"/>
          <img className="detail-footer" src={process.env.PUBLIC_URL + "dogadventure/Portfolio DogAdventure-05.png"} alt="Ending of the job"/>
        </div>
      )
    case 3:
      return (
        <div className="detailsContentOpened"> 
          <img className="detail-header" src={process.env.PUBLIC_URL + "revistafeminina/Portfolio Revista Feminina-01.jpg"} alt="Logo of the job"/>
          <div className="detailsText">
              <p className="detail-text-pt">O projeto consistia na criação de um livro que tratasse do tema de design editorial. Após uma das aulas, surgiu o interesse de falar sobre a revista feminina no Brasil. Foram usados os conceitos de linha do tempo, feminilidade e graciosidade.</p>
              <p className="detail-text-en">O livro foi impresso em papel AP 120g/m² e a capa em couché 150g/m². A encadernação foi lombada quadrada com capa dura.</p>
          </div>
          <img className="detail-1" src={process.env.PUBLIC_URL + "revistafeminina/Portfolio Revista Feminina-02.jpg"} alt="About the job"/>
          <img className="detail-2" src={process.env.PUBLIC_URL + "revistafeminina/Portfolio Revista Feminina-03.jpg"} alt="About the job"/>
          <img className="detail-3" src={process.env.PUBLIC_URL + "revistafeminina/Portfolio Revista Feminina-04.jpg"} alt="About the job"/>
          <img className="detail-footer" src={process.env.PUBLIC_URL + "revistafeminina/Portfolio Revista Feminina-05.jpg"} alt="Ending of the job"/>
        </div>
      )
      case 4:
        return (
          <div className="detailsContentOpened"> 
            <img className="detail-header" src={process.env.PUBLIC_URL + "casamento/Portfolio Casamento-01.jpg"} alt="Logo of the job"/>
            <div className="detailsText">
              <p className="detail-text-pt">Convite desenvolvido para o casamento da Larissa e do Wilson. Envelope em papel kraft linhão, remetendo ao conceito de rusticidade da festa. Convite com composição tipográfica, impresso em couché com laminação fosca.</p>
              <p className="detail-text-en">Invitation developed for the wedding of Larissa and Wilson. Envelope on kraft linhão paper, referring to the concept of rusticity of the party. Invitation with typographic composition, printed in couché with matte lamination.</p>
            </div>
            <img className="detail-1" src={process.env.PUBLIC_URL + "casamento/Portfolio Casamento-02.jpg"} alt="About the job"/>
            <img className="detail-2" src={process.env.PUBLIC_URL + "casamento/Portfolio Casamento-03.jpg"} alt="About the job"/>
            <img className="detail-3" src={process.env.PUBLIC_URL + "casamento/Portfolio Casamento-04.jpg"} alt="About the job"/>
            <img className="detail-footer" src={process.env.PUBLIC_URL + "casamento/Portfolio Casamento-05.jpg"} alt="Ending of the job"/>
          </div>
        )
      default:
        return (
          <div className="detailsContentOpened"> 
            <img className="detail-header" src={process.env.PUBLIC_URL + "happydog/Portfolio Happy Dog-01.png"} alt="Logo of the job"/>
            <div className="detailsText">
              <p className="detail-text-pt">Produção da primeira corrida das cores pet de Belo Horizonte. Desenvolvimento de toda identidade visual e peças do evento (camisa, credencial, flyer, cartaz, boton, bandana pet, backdrop e etc).</p>
              <p className="detail-text-en">Production of the first pet color race in Belo Horizonte. Development of all visual identity and pieces of the event (shirt, credential, flyer, poster, button, pet bandana, backdrop and etc.).</p>
            </div>
            <img className="detail-1" src={process.env.PUBLIC_URL + "happydog/Portfolio Happy Dog-02.png"} alt="About the job"/>
            <img className="detail-2" src={process.env.PUBLIC_URL + "happydog/Portfolio Happy Dog-03.png"} alt="About the job"/>
            <img className="detail-3" src={process.env.PUBLIC_URL + "happydog/Portfolio Happy Dog-04.png"} alt="About the job"/>
            <img className="detail-footer" src={process.env.PUBLIC_URL + "happydog/Portfolio Happy Dog-05.png"} alt="Ending of the job"/>
          </div>
        )
  }
}

export default Details;
