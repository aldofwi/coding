// Exemple d'appel à l'API GPT-3 en JavaScript
const fetch = require("node-fetch");

const apiKey = "VOTRE_CLE_API_GPT3";
const endpoint = "https://api.openai.com/v1/engines/davinci-codex/completions"; // L'URL peut varier en fonction de la version du modèle

async function sendMessageToGPT3(userMessage) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      prompt: userMessage,
      max_tokens: 50, // Nombre maximal de tokens dans la réponse
    }),
  });

  const data = await response.json();
  return data.choices[0].text;
}

console.log(sendMessageToGPT3("How are you today ?"));

// Need API Key for GTP3. Found it on OpenAI - Account - Completions.