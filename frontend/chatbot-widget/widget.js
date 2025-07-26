export function initChatbot() {
  const button = document.createElement('button');
  button.textContent = 'چت با پُرسیت';
  button.className = 'fixed bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full';
  button.onclick = () => alert('Chatbot coming soon!');
  document.body.appendChild(button);
}
