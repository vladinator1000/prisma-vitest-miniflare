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
npx prisma migrate dev
```

Run the integration tests
```
npm run itest
```
