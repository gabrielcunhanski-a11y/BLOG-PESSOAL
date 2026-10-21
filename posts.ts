import type { Post } from "./types"; 
const posts: Post[] = [];

export function criarPost(titulo: string, conteudo: string): Post {
  const post = {
    id: posts.length +1, 
    titulo,
    conteudo,
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

export function updatePost(id: number, post: {titulo?: string, conteudo?: string}) {
	let nPost = getByid(id);


	if(!nPost) return underfined;
 

	const updatePost = {...nPost, ...post };

	
	const index = posts.findIndex(p => p.id === id);

	
	if(index !== -1) {
		posts[index] = updatePost;
	}

		return updatePost;
	}


export function deletepost(id:number){
	const index = posts.findIndex(p => p.id === id);


	if (index !== -1) {
		posts.splice(index, 1);
		return true;
}
	return false;
}
