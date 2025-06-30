async function askAI(message) {
  const res = await fetch("/.netlify/functions/ask-ai", {
    method: "POST",
    body: JSON.stringify({ message })
  });
  const data = await res.json();
  return data.reply;
}

document.getElementById("aiForm").onsubmit = async e => {
  e.preventDefault();
  const input = document.getElementById("aiInput");
  const chat = document.getElementById("aiChat");
  const userMsg = input.value;
  chat.innerHTML += `<div><b>You:</b> ${userMsg}</div>`;
  input.value = "Thinking...";
  const reply = await askAI(userMsg);
  chat.innerHTML += `<div><b>AI:</b> ${reply}</div>`;
  input.value = "";
};
