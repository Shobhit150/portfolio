import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

function getMDFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".md");
}

export async function markdownToHTML(markdown: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(markdown);

  const html = file.toString();
  console.log("✅ Final HTML:\n", html); // ✅ Now it will log actual HTML

  return html;
}


export async function getPost(slug: string) {
  const filePath = path.join("content", `${slug}.md`);
  const source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata: metadata as Metadata,
    slug,
  };
}

async function getAllPosts(dir: string) {
  const mdFiles = getMDFiles(dir);
  return Promise.all(
    mdFiles.map(async (file) => {
      const slug = path.basename(file, path.extname(file));
      const { metadata, source } = await getPost(slug);
      return {
        metadata,
        slug,
        source,
      };
    })
  );
}

export async function getBlogPosts() {
  return getAllPosts(path.join(process.cwd(), "content"));
}
