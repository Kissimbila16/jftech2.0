# Use uma imagem base do Node.js com a versão desejada
FROM node:18-alpine

# Definir o diretório de trabalho
WORKDIR /app

# Copiar o package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos
COPY . .

# Expor a porta
EXPOSE 3001

# Comando para iniciar o aplicativo
CMD ["npm", "run", "dev"]