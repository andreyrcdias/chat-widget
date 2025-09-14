import RasaChatbotWidget from "@rasahq/chat-widget-react";

function App() {
  return (
    <div>
      <RasaChatbotWidget
        serverUrl="http://localhost:5005"
        onChatWidgetOpened={console.log}
      />
    </div>
  );
}

export default App;
