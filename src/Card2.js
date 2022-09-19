import "./Card.css";

const Card2 = () => {
    const hallo = () =>
        console.log("Ik ben Kaartje twee");
    
    return(
        <article onClick={hallo}>
            <header>
                <h2>Tweede kaart</h2>
            </header>
            <section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo possimus voluptates blanditiis libero exercitationem numquam molestias dolor, excepturi vel rerum, ut, dicta explicabo iure accusamus aspernatur maiores et consequatur doloremque.
            </section>
        </article>
    );
}

export default Card2;