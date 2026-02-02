FROM node:24-alpine AS build-stage

WORKDIR /app
RUN corepack enable

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
  pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

FROM node:24-alpine AS production-stage

COPY --from=build-stage /app/.next/standalone /app
COPY --from=build-stage /app/.next/static /app/.next/static
EXPOSE 3000

CMD ["node", "/app/server.js"]
