import Link from "next/link";
export default function RecipeCard(props) {
  const { recipe } = props;
  return (
    <Link
      href={`
        /recipes/${recipe.slug}
        `}
    >
      <div className="postCard">
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>
        <p>Prep Time:{recipe.prepTime}</p>
        <p>Cook Time:{recipe.cookTime}</p>
      </div>
    </Link>
  );
}
