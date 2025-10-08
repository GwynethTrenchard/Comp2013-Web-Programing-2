import { useState } from "react";
export default function EmojiStore() {
  const [emojiStore, setEmojiStore] = useState([]);
  return (
    <div>
      <div>
        {emojiStore.map((emoji, index) => (
          <p key={index}>{emoji}</p>
        ))}
      </div>
      <button onClick={() => setEmojiStore([...emojiStore, "😊"])}>
        Add Happy
      </button>
      <button onClick={() => setEmojiStore([...emojiStore, "☹️"])}>
        Add sad
      </button>
      <button onClick={() => setEmojiStore([...emojiStore, "😎"])}>
        Add cool
      </button>
    </div>
  );
}
