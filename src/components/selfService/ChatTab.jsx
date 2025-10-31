'use client'
import React, { useState } from 'react'
import { selfServiceData } from '@/utils/fackData/selfServiceData'
import { FiSend, FiPaperclip } from 'react-icons/fi'

const ChatTab = () => {
    const { chatMessages } = selfServiceData;
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            console.log('Sending message:', newMessage);
            setNewMessage('');
        }
    }

    return (
        <div className="card" style={{ height: '600px' }}>
            <div className="card-body d-flex flex-column p-0">
                {/* Chat Header */}
                <div className="border-bottom p-3">
                    <div className="d-flex align-items-center">
                        <div className="avatar-text avatar-md bg-soft-success text-success me-3">
                            <span className="fw-bold">SA</span>
                        </div>
                        <div>
                            <h6 className="mb-0">Support Agent</h6>
                            <p className="text-success fs-12 mb-0">
                                <span className="badge badge-dot bg-success me-1"></span>
                                Online
                            </p>
                        </div>
                    </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-grow-1 p-3 overflow-auto">
                    <div className="d-flex flex-column gap-3">
                        {chatMessages.map((message) => (
                            <div
                                key={message.id}
                                className={`d-flex ${message.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
                            >
                                <div className={`${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                                    {message.sender === 'agent' && (
                                        <div className="avatar-text avatar-sm bg-soft-success text-success me-2">
                                            SA
                                        </div>
                                    )}
                                </div>
                                <div
                                    className={`p-3 rounded ${message.sender === 'user' ? 'order-1 bg-primary text-white' : 'order-2 bg-light'
                                        }`}
                                    style={{ maxWidth: '70%' }}
                                >
                                    <p className="mb-1">{message.message}</p>
                                    <p className={`fs-11 mb-0 ${message.sender === 'user' ? 'text-white-50' : 'text-muted'}`}>
                                        {message.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chat Input */}
                <div className="border-top p-3">
                    <form onSubmit={handleSendMessage}>
                        <div className="input-group">
                            <button
                                type="button"
                                className="btn btn-light border"
                                title="Attach file"
                            >
                                <FiPaperclip size={18} />
                            </button>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Type your message here..."
                                value={newMessage}
                                onChange={(e) => setNewMessage(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={!newMessage.trim()}
                            >
                                <FiSend size={18} />
                            </button>
                        </div>
                    </form>
                    <p className="text-muted fs-11 mt-2 mb-0">
                        Average response time: 2-3 minutes
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ChatTab