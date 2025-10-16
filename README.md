# 🎯 sacrifice-bot

Um bot do Discord que escolhe aleatoriamente um membro com um cargo específico para ser o “sacrificado” do dia — ideal para servidores onde ninguém quer ser o escolhido, mas alguém precisa assumir a missão. 😔  

## ⚙️ Funcionalidades

- Comando `!sacrificar` para escolher aleatoriamente um membro com o cargo configurado.  
- Agendamento automático diário às 20h (horário do servidor) usando `node-cron`.  
- Mensagens personalizadas e avisos quando nenhum membro tem o cargo definido.  

## 🧠 Tecnologias usadas

- [discord.js](https://discord.js.org/)  
- [dotenv](https://www.npmjs.com/package/dotenv)  
- [node-cron](https://www.npmjs.com/package/node-cron)  

