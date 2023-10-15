export default ({ pokedex }) => {
  return (
    <div className="">
      {pokedex.map((pokemon) => (
        <article key={pokemon.id}>
          <hgroup>
            <h4>{pokemon.name.english}</h4>
            <h6
              style={{
                paddingLeft: "1em",
                color: "#808080",
              }}
            >
              Base Stats
            </h6>

            <ul>{/* map the base stats to <li> */}</ul>
          </hgroup>
        </article>
      ))}
    </div>
  );
};
