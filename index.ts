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

		"/api/posts/:id": {
		GET: (req) => {
			const id  = Number(req.params.id);

			if (Number.isNAN(id)) {
			return Response.json({ error: "ID invalido" }, {status:400});

			const post = getByid(id);

			if (!post) {
				return Response.json({ error: "Post nao encontrado" }, {status:404});

			return Response.json(post);
}
	        PUT: async(req) => {
			const id = Number(req.params.id);

			if (Number.isNAN(id))  {
			return Response.json({ error: " ID invalido" }, {status:400});
}

		const body = await req.json();
		const updatePost = updatePost(id,body);

		if(updatePost === undefined) {
			return Response.json({ error: "post nao encontrado "}, {status:404});
}
			return Response.json(updatePost)
},

		DELETE: async (req) => {
			const id = Number(req.params.id);
	
	   		if(Number.isNAN(id)0 {
				return Response.json({error: "ID invalido" }, {status:400});

			const post = deltepost(id)
			
			if(!post)  {
			   return Response.json({ error: "post nao encontrado"} ,{ status: 404});
}
			
			return new Response(null, {status: 204});
	         }
	      },
	   },
	});
		console.log(`Ouvindo em ${server.url}`);

console.log(`Ouvindo em ${server.url}`);
