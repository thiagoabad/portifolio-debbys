import './Details.css'

function Details(props) {
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
    );
}

export default Details;