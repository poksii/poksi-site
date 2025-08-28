import fs from 'fs';
import path from 'path';
import Link from 'next/link';

type Post = { slug: string; title: string; excerpt: string; };

function getPosts(): Post[] {
  const postsDir = path.join(process.cwd(), 'app', 'blog');
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'));
  return files.map(file => {
    const slug = file.replace(/\.mdx$/, '');
    const content = fs.readFileSync(path.join(postsDir, file), 'utf8');
    const lines = content.split('\n').map(l => l.trim());
    const title = lines.find(l => l.startsWith('# '))?.replace('# ', '') ?? slug;
    const excerpt = lines.find(l => l && !l.startsWith('#')) ?? '';
    return { slug, title, excerpt };
  });
}

export default function BlogIndex() {
  const posts = getPosts();
  return (
    <main className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="text-3xl font-bold">Blog</h1>
      <div className="mt-8 space-y-8">
        {posts.map(p => (
          <article key={p.slug} className="border-t border-white/10 pt-6">
            <h2 className="text-xl font-semibold">
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <p className="mt-2 opacity-80">{p.excerpt}</p>
            <Link className="mt-3 inline-block underline opacity-80 hover:opacity-100" href={`/blog/${p.slug}`}>Lire</Link>
          </article>
        ))}
        {posts.length === 0 && <p className="opacity-80">Aucun article pour le moment.</p>}
      </div>
    </main>
  );
}
