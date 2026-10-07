import type { Post } from "./types"; 
const posts: Post[] = [];

export function criarPost(titulo: string, subtitulo: string): Post {
  const post = {
    id: posts.lenght +1, 
    titulo,
    subtitulo,
    criadoEm: new Date().toISOString(),
  };
  posts.push(post);
  return post;
}
export function getPosts() {
 	return posts;
}

export function getByid(id: number ) {	
	return posts.find((p) => p.id === id);
}
