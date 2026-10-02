'use client';

import React, { useState } from 'react';
import { ProjectBlueprint } from '@/types';
import { X, Folder, FileCode, Copy, Check, Terminal, Download, Sparkles } from 'lucide-react';

interface GitScaffoldModalProps {
  blueprint: ProjectBlueprint | null;
  onClose: () => void;
}

export const GitScaffoldModal: React.FC<GitScaffoldModalProps> = ({ blueprint, onClose }) => {
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [copiedFile, setCopiedFile] = useState(false);

  if (!blueprint) return null;

  const currentFile = blueprint.gitScaffold.files[activeFileIndex] || blueprint.gitScaffold.files[0];

  const copyCloneCommand = () => {
    navigator.clipboard.writeText(blueprint.gitScaffold.cloneCmd);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  const copyFileContent = () => {
    if (currentFile) {
      navigator.clipboard.writeText(currentFile.content);
      setCopiedFile(true);
      setTimeout(() => setCopiedFile(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-canvas/85 backdrop-blur-md animate-fadeIn">
      <div
        className="w-full max-w-4xl h-[85vh] glass-panel rounded-2xl border border-cyan-accent/40 shadow-2xl flex flex-col overflow-hidden text-ghost"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border bg-card">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-cyan-accent/15 border border-cyan-accent/30 text-cyan-accent">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[18px] font-bold text-ghost">GitHub Scaffolding Simulator</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-accent/10 border border-emerald-accent/30 text-emerald-accent">
                  Production Boilerplate
                </span>
              </div>
              <p className="text-[12px] text-muted font-mono truncate max-w-md">
                {blueprint.title}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-card hover:bg-border/60 text-muted hover:text-ghost transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Clone Command Bar */}
        <div className="p-3 bg-canvas border-b border-border flex items-center justify-between gap-3 px-6">
          <div className="flex items-center space-x-2 font-mono text-[13px] text-readable overflow-x-auto flex-1 py-1">
            <span className="text-cyan-accent font-bold">$</span>
            <span className="text-ghost select-all">{blueprint.gitScaffold.cloneCmd}</span>
          </div>

          <button
            onClick={copyCloneCommand}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-md bg-cyan-accent hover:bg-cyan-hover text-canvas font-mono font-bold text-[12px] transition-all flex-shrink-0"
          >
            {copiedCmd ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Command Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Git Clone</span>
              </>
            )}
          </button>
        </div>

        {/* Main Content: Split View (Folder Tree | File Code Viewer) */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          
          {/* Left Panel: Folder Tree */}
          <div className="w-full md:w-1/3 border-r border-border bg-card/60 p-4 overflow-y-auto font-mono text-[12px]">
            <div className="flex items-center space-x-2 text-muted uppercase text-[11px] font-bold tracking-wider mb-3">
              <Folder className="w-4 h-4 text-indigo-accent" />
              <span>Generated Directory Structure</span>
            </div>

            <div className="p-3 rounded-lg bg-canvas border border-border/80 text-readable leading-relaxed whitespace-pre font-mono">
              {blueprint.gitScaffold.tree}
            </div>

            {/* Quick stats */}
            <div className="mt-4 p-3 rounded-lg bg-indigo-accent/10 border border-indigo-accent/20 space-y-1">
              <div className="text-[11px] font-mono text-indigo-accent font-bold">Scaffold Features Included</div>
              <div className="text-[12px] text-readable">• Multi-stage Dockerfile</div>
              <div className="text-[12px] text-readable">• Async DB migrations (Alembic/SQL)</div>
              <div className="text-[12px] text-readable">• PyTest / Integration test suite</div>
            </div>
          </div>

          {/* Right Panel: File Preview Tabs & Editor */}
          <div className="flex-1 flex flex-col bg-canvas overflow-hidden">
            {/* File Tabs */}
            <div className="flex items-center justify-between border-b border-border bg-card/40 px-3 pt-2">
              <div className="flex space-x-1 overflow-x-auto">
                {blueprint.gitScaffold.files.map((file, idx) => (
                  <button
                    key={file.name}
                    onClick={() => setActiveFileIndex(idx)}
                    className={`flex items-center space-x-1.5 px-3 py-2 text-[12px] font-mono border-t-2 rounded-t transition-colors ${
                      activeFileIndex === idx
                        ? 'border-cyan-accent bg-canvas text-ghost font-semibold'
                        : 'border-transparent text-muted hover:text-ghost'
                    }`}
                  >
                    <FileCode className="w-3.5 h-3.5 text-cyan-accent" />
                    <span>{file.name}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={copyFileContent}
                className="flex items-center space-x-1 px-2.5 py-1 text-[11px] font-mono text-muted hover:text-ghost bg-card border border-border rounded mb-1"
                title="Copy current file content"
              >
                {copiedFile ? <Check className="w-3 h-3 text-emerald-accent" /> : <Copy className="w-3 h-3" />}
                <span>{copiedFile ? 'Copied' : 'Copy File'}</span>
              </button>
            </div>

            {/* Code Content Viewer */}
            <div className="flex-1 p-4 overflow-auto font-mono text-[13px] text-readable bg-canvas">
              <pre className="whitespace-pre">{currentFile.content}</pre>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border bg-card flex items-center justify-between">
          <div className="text-[12px] font-mono text-muted">
            Scaffolding ready for local development in Docker
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-canvas border border-border text-readable hover:text-ghost text-xs transition-colors"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
