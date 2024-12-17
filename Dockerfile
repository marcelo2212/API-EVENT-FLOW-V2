# Use a imagem base do Node.js
FROM node:22-alpine

# Configure o diretório de trabalho
WORKDIR /app

# Copie os arquivos de dependências para o container
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos para o container
COPY . .

# Compile o projeto (necessário se usar TypeScript)
RUN npm run build

# Exponha a porta padrão
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:prod"]
