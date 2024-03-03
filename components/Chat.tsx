"use client";

import { useChat, Message } from "ai/react"



export default function ChatComponent() {
    // usechat -> handles messages for us, user input, handling user submits, etc.
    const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat()

    // console.log(input)
    return (
        <div>
            {/* Text Messages */}
            {/* {messages.map(message => <p key={message.id}>{message.content}</p>)} */}
            {messages.map((message: Message) => {
                return (
                    <div className="items-center w-full grid grid-cols-1" key={message.id}>
                        {/* Name of person talking */}
                        {
                            message.role == 'assistant'
                                ?
                                <h3 className="text-lg font-semibold mt-2 pl-16">
                                    AI Adviser
                                </h3>
                                :
                                <h3 className="text-lg font-semibold mt-2 pr-20 justify-self-end">
                                    You
                                </h3>
                        }

                        {/* Message (Formatting) */}

                        {message.content.split("/n").map((currentTextBlocks: string, index: number) => {
                            if (currentTextBlocks === "") {
                                return (
                                    <p key={message.id + index}>&nbsp;</p>
                                )
                            } else {
                                return (
                                    <div className="w-full grid grid-cols-1 " key={message.id}>
                                        {
                                            message.role == 'user'
                                                ?
                                                <p className="text-md w-11/12 flex items-end justify-end mt-2 ml-14" key={message.id + index}>{currentTextBlocks}</p>
                                                :
                                                <p className="text-md w-1/2 flex items-start justify-start mt-2 ml-16" key={message.id + index}>{currentTextBlocks}</p>
                                        }
                                    </div>
                                )
                            }
                        })}
                    </div>

                )
            })}
            <div className="h-full p-12">

            <form className="mx-24 mb-4 fixed inset-x-0 bottom-0" onSubmit={handleSubmit}>
                {/* <p>Messages</p> */}
                <input
                    className="rounded-md mt-2 w-full bg-[#5159bb] p-2"
                    placeholder={'Ask something'}
                    value={input}
                    onChange={handleInputChange}
                />
                <button className="w-[80px] h-[45px] rounded-lg bg-[#5159bb] border-2 hover:bg-[#3a41c6] transition-all mt-2 font-bold">Send</button>
            </form>
            </div>


        </div>
    )
}