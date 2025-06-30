const sendBtn = document.getElementById("sendBtn");
const input = document.getElementById("aiUserInput");
const replyBox = document.getElementById("aiReply");

sendBtn.addEventListener("click", async () => {
  const message = input.value.trim();
  if (!message) return;

  replyBox.innerText = "Thinking...";

  try {
    const res = await fetch("/.netlify/functions/ask-ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await res.json();
    replyBox.innerText = data.reply;
  } catch (err) {
    replyBox.innerText = "Something went wrong 😓";
    console.error(err);
  }
});
