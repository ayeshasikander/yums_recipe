import fs from "fs";
import matter from "gray-matter";

export default function getRecipeData(basePath) {
    // Get file names under /posts
    const folder=basePath+ "/"
    const fileNames = fs.readdirSync(folder);
    const allPostData=fileNames.filter((file) => file.endsWith(".md"))
    // get the file data using the gray-matter
    const posts = allPostData.map((fileName) => {
        // Read markdown file as string
        const fileContent=fs.readFileSync(`${basePath}/${fileName}`, "utf-8")
        const metaResult = matter(fileContent)
        return {
            title: metaResult.data.title,
            prepTime: metaResult.data.prep_time,
            cookTime: metaResult.data.cook_time,
            description: metaResult.data.description,
            slug: fileName.replace(".md", ""),
            // ...metaResult.data
        }
    })
    return posts
    
}