import Markdown from "markdown-to-jsx";
import getRecipeData from "@/utils/getRecipeData";
import fs from "fs";
import matter from "gray-matter";

function getRecipeContent(slug) {
  const folder = "recipes/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  const metaResult = matter(content);
  return metaResult;
}

export const generateStaticParams = async () => {
  const posts = getRecipeData("recipes");
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export async function generateMetadata({ params, searchParams }) {
  // const { slug } = params;
  // const { data } = getRecipeContent(slug);
  // return {
  //   title: data.title,
  //   description: data.description,
  // };
  const id = params?.slug ? "." + params?.slug : "";
  return {
    // title: "Yum Recipe" + id,
    // description: "Yum Recipe" + id,
    title:`Yum Recipe ${id.replace("_", " ")}`,
  };
}

const RecipePage = (props) => {
  const  slug  = props.params.slug;
  const data = getRecipeContent(slug);
  // console.log(data)
  return (
    <main>
      <h1>Recipe Page</h1>
      <p>This is a recipe page</p>
      <p>Data will be here:</p>

      <div>
        <article>
          <Markdown>{data.content}</Markdown>
        </article>
      </div>
    </main>
  );
};
export default RecipePage;
