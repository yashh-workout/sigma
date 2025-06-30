const fetch = require("node-fetch");

exports.handler = async function (event) {
  const { message } = JSON.parse(event.body);

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer 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",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }]
    })
  });

  const data = await response.json();
  return {
    statusCode: 200,
    body: JSON.stringify({ reply: data.choices[0].message.content })
  };
};
