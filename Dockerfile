# Use a imagem base do Node.js 22
FROM node:22-alpine

# Configure variáveis de ambiente padrão
ENV NODE_ENV=production

# Defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie apenas os arquivos de dependência para aproveitar o cache do Docker
COPY package*.json ./

# Instale as dependências de produção
RUN npm install --only=production

# Copie o restante do projeto
COPY . .

# Compile o código TypeScript para JavaScript
RUN npm run build

# Exponha a porta padrão do NestJS
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:prod"]
