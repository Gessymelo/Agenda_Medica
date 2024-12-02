# Baseando na imagem oficial do Node.js com suporte a dependências nativas
FROM node:18-bullseye

# Configurar o diretório de trabalho no container
WORKDIR /app

# Instalar Expo CLI globalmente
RUN npm install -g expo-cli

# Copiar os arquivos do projeto para o container
COPY package*.json ./
COPY . .

# Instalar dependências do projeto
RUN npm install

# Expor as portas necessárias para Expo (19000, 19001, 19002)
EXPOSE 19000 19001 19002

# Comando para iniciar o Expo no container
CMD ["npm", "start"]
