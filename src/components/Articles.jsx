import { Fragment } from "react";
import Article from "./Article";

function Articles({}) {
  const articles = [
    { title: "Un titre 1", content: "Contenu 1", id: 1 },
    { title: "Un titre 2", content: "Contenu 2", id: 2 },
    { title: "Un titre 3", content: "Contenu 3", id: 3 },
  ];
  return (
    <div style={{ width: "700px" }}>
      <h1 className="mb-20">Liste des articles</h1>

      {articles.map((article) => (
        <Fragment key={article.id}>
          <div className="mb-20 card p-20">
            <h2 className="mb-10">{article.title}</h2>
            <p>{article.content}</p>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

export default Articles;
