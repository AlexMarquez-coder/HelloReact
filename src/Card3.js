import "./Card.css";

const Card3 = () => {
    const hallo = () =>
        console.log("Ik ben Kaartje drie");
    
    return(
        <article onClick={hallo}>
            <header>
                <h2>Derde kaart</h2>
            </header>
            <section>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil ad cumque quia id quas accusantium consectetur, tenetur nostrum vero aut enim laudantium, in porro illum explicabo repellat, similique tempora corporis?
            </section>
        </article>
    );
}

export default Card3;