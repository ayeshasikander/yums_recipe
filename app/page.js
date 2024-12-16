import getRecipeData from "@/utils/getRecipeData";
import RecipeCard from "@/components/RecipeCard";

export default function Home() {
  const postMetadata = getRecipeData("recipes");
  console.log(postMetadata)
  return <main>
    {
      postMetadata.map((post,index) =>{
        return(
          <div key={index}>
            <RecipeCard key={post.slug} recipe={post} />
          </div>
        )
      })
    }
  </main>;
}
