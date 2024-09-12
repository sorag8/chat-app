import type { ChatMessage } from "@/interfaces/chat-message.interface";
import { ref } from "vue";

export const useChat = () => {

    const arrayMessages = ref<ChatMessage[]>([]);

    const onMessage = (text: string) => {
        if( text.length === 0 ) return;
        arrayMessages.value.push( {
            id: new Date().getDate(),
            itsMine: true,
            message: text,
        } ); 
    }

    return {
        arrayMessages,
        onMessage,
    }

}