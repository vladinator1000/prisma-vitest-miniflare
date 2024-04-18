An example of writing integration tests with Miniflare, Prisma and Vitest.

Start the database:
```
docker compose up -d
```

Install dependencies
```
npm i
```

Generate prisma client
```
npm run codegen
```

Run the migrations
```
npx wrangler d1 migrations apply test --local
```

Run the tests
```
npm run itest
```
