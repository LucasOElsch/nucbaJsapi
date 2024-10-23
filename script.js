function buscar() {
  const pokemon = {};
  let valor = document.getElementById("input").value;
  const container = document.getElementById("container");
  let img = document.getElementById("myImg");
  if (!img) {
    img = document.createElement("img");
  }
  img.setAttribute("id", "myImg");
  container.appendChild(img);
  let nombre = document.getElementById("nombrePokemon");
  if (!nombre) {
    nombre = document.createElement("p");
  }
  nombre.setAttribute("id", "nombrePokemon");
  container.appendChild(nombre);

  let tipos = document.getElementById("tipos");
  if (!tipos) {
    tipos = document.createElement("span");
  }
  tipos.setAttribute("id", "tipos");
  container.appendChild(tipos);

  let pesoAltura = document.getElementById("pesoAltura");

  if (!pesoAltura) {
    pesoAltura = document.createElement("span");
  }
  pesoAltura.setAttribute("id", "pesoAltura");
  container.appendChild(pesoAltura);

  console.log(pesoAltura);
  try {
    fetch(`https://pokeapi.co/api/v2/pokemon/${valor}`).then(async (res) => {
      const response = await res.json();
      pokemon.height = response.height / 10 + " " + "Metros";
      pokemon.name = response.species.name;
      pokemon.weigth = response.weight / 10;
      pokemon.image = response.sprites.front_default;
      pokemon.types = response.types.reduce((acc, e) => {
        const type = e.type.name;
        acc.push(type);
        return acc;
      }, []);
      pesoAltura.innerHTML =
        "Altura" +
        " " +
        pokemon.height +
        " " +
        "Peso" +
        " " +
        response.weight +
        "kg";
      nombre.innerHTML = response.species.name;
      tipos.innerHTML = pokemon.types;
      img.src = response.sprites.front_default;
    });
  } catch (error) {}
  console.log(pokemon);
}
