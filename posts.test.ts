import { expect, test } from "bun:test";
import { criarPost,getPosts,getByid } from "./posts";

test("criar um post com id", () => {
	const post = criarPost("Meu primeiro post", "ola, mundo!");
       
        expect(post.titulo).toBe("Meu primeiro post");
	expect(post.id).toBeTruthy();
	expect(post.criadoEm).toBeTruthy();
});

test("listar todos os post", () => {
	criarPost("teste", "Esse e um teste de post");
	const posts = getPosts().lenght;

	expect(posts).toBe(2);
});
	
test("buscar id", () => {
	criarPost("teste 1", "goku");
	criarPost("teste 2", "goku");
	criarPost("teste 3", "goku");
	

	const post = getByid(4);

	expect(post.titulo).toBe("teste 2");
});
