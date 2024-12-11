import Link from "next/link";
export default function RecipeCard({ recipe }) {
    return (
        <Link href={`
        // /recipes/${recipe.slug}
        `}>
        <div className="postCard">
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
        </div>
        </Link>
    );
}