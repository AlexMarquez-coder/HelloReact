import "./Card.css";

const Card = (props) => {
    const hallo = () =>
        console.log("Ik ben Kaartje één");
        console.log(props);
    
    return(
        <article onClick={hallo}>
            <header>
                <h2>Eerste kaart</h2>
            </header>
            <section>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore mollitia iure voluptatem est aut. Eveniet asperiores nulla quis excepturi placeat voluptates ipsam eius, odio voluptate molestias sed. Accusamus, reprehenderit rem.
            </section>
        </article>
    );
}

export default Card;