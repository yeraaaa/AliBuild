'use client'

import React from 'react';  
import { useChat, Message } from "ai/react"

export default function ChatComponent() {
    const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();

    return (
        <div>
            {messages.map((message: Message) => {
                return (
                    <div className="mx-20 grid grid-cols-1" key={message.id}>
                        {message.role === 'assistant'
                            ? <h3 className="text-lg font-semibold mt-2 text-[#3a41c6]">AI Advisory</h3>
                            : <h3 className="text-lg font-semibold mt-2 justify-self-end text-[#5159bb]">You</h3>
                        }
                        {message.content.split("/n").map((currentTextBlocks: string, index: number) => {
                            if (currentTextBlocks === "") {
                                return (
                                    <p key={message.id + index}>&nbsp;</p>
                                );
                            } else {
                                return (
                                    <div className="w-full grid grid-cols-1" key={message.id + index}>
                                        {message.role === 'user'
                                            ? <p className="text-md justify-self-end flex items-end justify-end mt-2 text-white bg-[#5159bb] p-2 rounded-lg">{currentTextBlocks}</p>
                                            : <p className="text-md bg-[#3a41c6] justify-self-start mt-2 text-white p-2 rounded-lg">{currentTextBlocks}</p>
                                        }
                                    </div>
                                );
                            }
                        })}
                    </div>
                );
            })}
            <div className="h-full p-12">
                <form className="mx-24 mb-4 fixed inset-x-0 bottom-0" onSubmit={handleSubmit}>
                    <input
                        className="rounded-md mt-2 w-full bg-[#5159bb] text-white p-2"
                        placeholder={'Ask something...'}
                        value={input}
                        onChange={handleInputChange}
                    />
                    <button className="rounded-md border-2 bg-[#5159bb] text-white hover:bg-[#3a41c6] hover:text-black transition-all p-2 mt-2 font-bold">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}
