"use client";

import { Chat } from "@/components/chat/chat";
import { DataStreamHandler } from "@/components/chat/data-stream-handler";
import { DataStreamProvider } from "@/components/chat/data-stream-provider";
import { generateUUID } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function DashboardPage() {
  const [id, setId] = useState("");

  useEffect(() => {
    setId(generateUUID());
  }, []);

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <DataStreamProvider>
      <div className="h-screen w-full">
        <Chat
          autoResume={false}
          id={id}
          initialChatModel="gpt-4o-mini"
          initialMessages={[]}
          initialVisibilityType="private"
          isReadonly={false}
          key={id}
        />
        <DataStreamHandler />
      </div>
    </DataStreamProvider>
  );
}
