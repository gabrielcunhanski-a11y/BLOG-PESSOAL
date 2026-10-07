const server = Bun.serve({
	port: 3000,
	routes: {
		"/": () => new Response("Seja muito bem vindo ao blog!\n"),
		"/api/status": () => Response.json({
			ok: true,
			runtime: "bun",
			hora: new Date().toISOString(),
}),
		"/api/posts": {
		GET: () => Response.json(posts),						
		POST: async (req) => {
			const body = await req.json();
			const novo = criarPost(body.titulo, body.conteudo);

			return Response.json(novo, { status: 201 });
},
	},
});
console.log(`Ouvindo em ${server.url}`);
