'use client';

import React, { useState } from 'react';
import { ProjectBlueprint, MentorMessage } from '@/types';
import { X, Bot, Send, Sparkles, User, Code, Terminal, MessageSquare } from 'lucide-react';

interface AIMentorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBlueprint: ProjectBlueprint | null;
}

const PRESET_QUESTIONS = [
  "How do I handle race conditions in Redis Lua scripts?",
  "Explain connection pooling in SQLAlchemy 2.0 Async",
  "How to write integration tests for Celery workers?",
  "What is p99 response time and how to optimize indexes?",
];

export const AIMentorDrawer: React.FC<AIMentorDrawerProps> = ({
  isOpen,
  onClose,
  selectedBlueprint,
}) => {
  const [messages, setMessages] = useState<MentorMessage[]>([
    {
      id: 'msg-1',
      sender: 'ai',
      text: `Hello! I am your AI Architecture Mentor. Ask me any technical or architectural question about ${
        selectedBlueprint ? selectedBlueprint.title : 'your selected project blueprint'
      } or 2026 engineering standards!`,
      timestamp: 'Just now',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  if (!isOpen) return null;

  const handleSendMessage = (textToSend?: string) => {
    const questionText = textToSend || inputValue;
    if (!questionText.trim()) return;

    const userMsg: MentorMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: questionText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    // Simulate developer-centric AI mentor response
    setTimeout(() => {
      let aiResponseText = `Great architectural question! In production systems, tackling "${questionText}" requires strict adherence to asynchronous I/O and non-blocking concurrency patterns.`;
      let snippet: string | undefined = undefined;
      let language = 'python';

      if (questionText.toLowerCase().includes('redis') || questionText.toLowerCase().includes('race condition')) {
        aiResponseText = `To eliminate race conditions in high-throughput applications, avoid simple GET then SET sequences. Instead, execute atomic Lua scripts directly inside Redis engine memory or use Redis distributed locks (Redlock).`;
        snippet = `-- Atomic stock decrement Lua script in Redis
local key = KEYS[1]
local amount = tonumber(ARGV[1])
local current = tonumber(redis.call('GET', key) or "0")

if current >= amount then
    redis.call('DECRBY', key, amount)
    return current - amount
else
    return -1
end`;
        language = 'lua';
      } else if (questionText.toLowerCase().includes('connection pooling') || questionText.toLowerCase().includes('sqlalchemy')) {
        aiResponseText = `In async Python apps (FastAPI + SQLAlchemy 2.0), creating a DB connection per request exhausts Postgres max_connections. Use AsyncEngine connection pooling with recycled idle connections:`;
        snippet = `from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker

engine = create_async_engine(
    "postgresql+asyncpg://user:pass@db/dbname",
    pool_size=20,
    max_overflow=10,
    pool_recycle=3600,
)
AsyncSessionLocal = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)`;
        language = 'python';
      } else if (questionText.toLowerCase().includes('test') || questionText.toLowerCase().includes('pytest')) {
        aiResponseText = `For API testing, use PyTest with async fixtures and a dedicated isolated test PostgreSQL database container:`;
        snippet = `@pytest.mark.asyncio
async def test_audit_creation(async_client: AsyncClient):
    response = await async_client.post("/api/v1/audit", json={
        "patient_id": "P-10923",
        "action": "EHR_READ"
    })
    assert response.status_code == 201
    assert response.json()["status"] == "SUCCESS"`;
        language = 'python';
      } else {
        snippet = `# 2026 Production Metric Rule
def verify_sla_compliance(p99_latency_ms: float) -> bool:
    # Target SLA: < 15ms p99 at peak concurrency
    return p99_latency_ms < 15.0`;
      }

      const aiMsg: MentorMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiResponseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        codeSnippet: snippet,
        codeLanguage: language,
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-canvas/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="absolute inset-y-0 right-0 max-w-full flex pl-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-screen max-w-md glass-panel border-l border-indigo-accent/40 shadow-2xl flex flex-col text-ghost bg-card">
          
          {/* Drawer Header */}
          <div className="p-4 border-b border-border flex items-center justify-between bg-card">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-xl bg-indigo-accent/15 border border-indigo-accent/30 text-indigo-accent">
                <Bot className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-[16px] font-semibold text-ghost">AI Code Mentor</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-accent/20 text-indigo-accent">
                    Online
                  </span>
                </div>
                <p className="text-[11px] text-muted truncate max-w-[220px]">
                  {selectedBlueprint ? selectedBlueprint.title : 'Architectural Assistant'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-canvas hover:bg-border text-muted hover:text-ghost transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Question Pills */}
          <div className="p-3 bg-canvas/60 border-b border-border/80 flex flex-col gap-1.5">
            <div className="text-[11px] font-mono text-muted uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-accent" />
              <span>Suggested Questions</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {PRESET_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  className="text-left px-2.5 py-1 rounded bg-card hover:bg-border/80 border border-border text-[11px] text-readable hover:text-ghost transition-colors font-mono line-clamp-1"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-canvas/40">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'ai' && (
                  <div className="w-7 h-7 rounded-lg bg-indigo-accent/20 border border-indigo-accent/40 flex items-center justify-center text-indigo-accent flex-shrink-0 mt-1">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-xl p-3 text-[13px] leading-relaxed space-y-2 ${
                    msg.sender === 'user'
                      ? 'bg-indigo-accent text-white rounded-tr-none shadow-glow'
                      : 'bg-card border border-border text-readable rounded-tl-none'
                  }`}
                >
                  <p>{msg.text}</p>

                  {msg.codeSnippet && (
                    <div className="p-2.5 rounded-lg bg-canvas border border-border/80 font-mono text-[12px] text-cyan-accent overflow-x-auto my-2">
                      <div className="text-[10px] text-muted font-bold uppercase mb-1 border-b border-border/40 pb-1">
                        {msg.codeLanguage || 'code'}
                      </div>
                      <pre className="whitespace-pre">{msg.codeSnippet}</pre>
                    </div>
                  )}

                  <div
                    className={`text-[10px] font-mono ${
                      msg.sender === 'user' ? 'text-white/70 text-right' : 'text-muted'
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-cyan-accent/20 border border-cyan-accent/40 flex items-center justify-center text-cyan-accent flex-shrink-0 mt-1">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center space-x-2 text-muted text-[12px] font-mono p-2">
                <Bot className="w-4 h-4 text-indigo-accent animate-spin" />
                <span>AI Mentor is thinking...</span>
              </div>
            )}
          </div>

          {/* Drawer Input Bar */}
          <div className="p-3 bg-card border-t border-border">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center space-x-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask an architectural question..."
                className="flex-1 bg-canvas border border-border rounded-lg px-3 py-2 text-[13px] text-ghost placeholder-muted focus:outline-none focus:border-indigo-accent"
              />
              <button
                type="submit"
                className="p-2 rounded-lg bg-indigo-accent hover:bg-indigo-hover text-white transition-all shadow-glow"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};
