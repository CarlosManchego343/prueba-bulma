import imagenDeCubo from "../Assets/image-equilibrium.jpg";
import imagenDePerfil from "../Assets/image-avatar.png";
import "./Card.css";

export default function Card() {
    return (
        <>
            <div className="card general-card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={imagenDeCubo} alt="Pon imagen, vago"/>
                    </figure>
                </div>
                <div className="card-content">
                    <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br/>
                            <time >11:09 PM - 1 Jan 2016</time>
                    </div>
                    <hr></hr>
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-24x24">
                                <img src={imagenDePerfil} alt="Pon imagen, vago"/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="">Creation of Jules Wyvern</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}