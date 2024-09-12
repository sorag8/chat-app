<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <ChatBubbles v-for="message in messages" v-bind:key="message.id" v-bind="message"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ChatMessage } from '@/interfaces/chat-message.interface';
import ChatBubbles from './ChatBubbles.vue';

interface Props{
  messages: ChatMessage[];
}

defineProps<Props>();

</script>
