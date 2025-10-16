# 🎯 lol-sacrifice-bot

Um bot do Discord que escolhe aleatoriamente um membro com um cargo específico para ser "sacrificado" — ou seja, escolhido para jogar League of Legends naquele dia. Ideal para servidores onde ninguém quer jogar, mas alguém tem que ir pra guerra. 😔

## ⚙️ Funcionalidades

- Comando `!sacrificar` para escolher um membro aleatório com o cargo de "Jogador de LoL".
- Agendamento automático diário às 20h (horário do servidor) usando `node-cron`.
- Respostas amigáveis e avisos quando nenhum membro tem o cargo.

## 🧠 Tecnologias usadas

- [discord.js](https://discord.js.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [node-cron](https://www.npmjs.com/package/node-cron)

## 🚀 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/AlysonCamargo/lol-sacrifice-bot.git
cd lol-sacrifice-bot
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` com as seguintes variáveis:

```env
DISCORD_TOKEN=seu_token_do_bot
GUILD_ID=id_do_servidor
CHANNEL_ID=id_do_canal
ROLE_ID=id_do_cargo
```

4. Inicie o bot:

```bash
node index.js
```

## 🕒 Agendamento automático

O bot roda automaticamente todos os dias às 20h (horário do servidor) e escolhe um membro com o cargo configurado para jogar LoL. Se ninguém tiver o cargo, ele avisa no canal.

## 🛡️ Requisitos

- Node.js **v18** ou superior
- Permissões do bot:
  - Ler e enviar mensagens
  - Acessar membros da guilda
  - Ler cargos e canais

## ✍️ Comando manual

Qualquer usuário pode digitar `!sacrificar` em um canal que o bot possa ler. Ele fará o sorteio imediatamente.

## 💡 Exemplo de mensagem

```
🎯 @Usuário foi escolhido hoje para jogar League of Legends. Que tristeza. 🙋‍♂️
```

## 📄 Licença

MIT. Faça o que quiser, mas jogue LoL por sua conta e risco.
