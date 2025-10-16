🎯 Sacrifice Bot

Um bot do Discord que escolhe aleatoriamente um membro com um cargo específico para ser o “sacrificado do dia” — ideal para servidores em que ninguém quer ser o escolhido para a missão, mas alguém precisa ir. 😔

Automatize o destino. Aceite o sacrifício.

⚙️ Funcionalidades

Comando !sacrificar para escolher aleatoriamente um membro com um cargo configurado.

Agendamento automático diário às 20h (horário do servidor) com node-cron.

Mensagens personalizadas e avisos quando nenhum membro atende aos critérios.

🧠 Tecnologias utilizadas

discord.js

dotenv

node-cron

🚀 Instalação

Clone o repositório:

git clone https://github.com/AlysonCamargo/lol-sacrifice-bot.git
cd lol-sacrifice-bot


Instale as dependências:

npm install


Crie um arquivo .env com as variáveis:

DISCORD_TOKEN=seu_token_do_bot
GUILD_ID=id_do_servidor
CHANNEL_ID=id_do_canal
ROLE_ID=id_do_cargo


Inicie o bot:

node index.js

🕒 Agendamento automático

O bot executa automaticamente todos os dias às 20h e realiza o sorteio entre os membros com o cargo definido.
Se nenhum membro for encontrado, ele notifica o canal configurado.

🛡️ Requisitos

Node.js v18+

Permissões necessárias:

Ler e enviar mensagens

Acessar membros da guilda

Ler cargos e canais

✍️ Comando manual

Qualquer usuário pode digitar:

!sacrificar


O bot fará o sorteio imediatamente, escolhendo quem será o destinado do dia.

💡 Exemplo de mensagem
🎯 @Usuário foi escolhido hoje. Que a sorte esteja com ele. 🙋‍♂️

📄 Licença

Distribuído sob a licença MIT.
Use, modifique e ria — mas lembre-se: o sacrifício é inevitável. 🕯️
