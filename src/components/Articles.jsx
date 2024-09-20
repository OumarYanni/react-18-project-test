function Articles({ displayArticle }) {
  return (
    <div style={{ width: "700px" }}>
      <h1 className="mb-20">Liste des articles</h1>

      {displayArticle ? (
        <div className="card p-20">
          <h2 className="mb-10">Titre de l'article</h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut earum
            quibusdam voluptatibus, veritatis aperiam ducimus. Minima
            repellendus quam aliquid amet expedita ratione soluta cupiditate.
            Cupiditate, rerum? Ad vero fuga iusto? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. A voluptatem at quia enim velit eius,
            quibusdam corrupti inventore quasi? Tempora optio delectus ratione
            nobis maiores harum excepturi soluta hic nesciunt. Lorem ipsum
            dolor, sit amet consectetur adipisicing elit. Vero repellendus est
            deleniti at, numquam possimus quaerat magnam illum maxime aliquam
            commodi laborum eveniet corporis vitae, sunt eum incidunt, molestias
            atque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Saepe minima neque quia molestiae commodi velit tenetur ratione sint
            aspernatur sunt, odio cumque maiores, autem ipsum placeat sapiente
            aliquid possimus recusandae? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Perspiciatis pariatur officiis quam modi. Quam
            necessitatibus temporibus velit quia, minima iure accusamus nisi,
            sit, magnam labore vel nam a vero qui?
          </p>
        </div>
      ) : (
        <p>Aucun article</p>
      )}
    </div>
  );
}

export default Articles;
