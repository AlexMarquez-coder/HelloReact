import "./Card.css";

const Card = (props) => {
    return(
        <article onClick={props.mouseclick}>
            <header>
                <h2>{props.title || "Placeholder Title"}</h2>
            </header>
            <section>
                {props.text || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tenetur, quo error natus praesentium neque ea suscipit porro, vitae amet dolor assumenda nisi voluptates voluptatibus, voluptate iusto dolore deserunt adipisci."}
            </section>
        </article>
    );
} 

export default Card;