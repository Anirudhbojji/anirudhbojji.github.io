import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { BOOT_LINES, runCommand } from "./commands";

const PROMPT = "visitor@anirudh:~$";

function Line({ line }) {
  if (line.cls && line.cls.startsWith("link:")) {
    const url = line.cls.slice(5);
    return (
      <div className="console-line">
        <a className="console-link" href={url} target="_blank" rel="noreferrer">
          {line.text}
        </a>
      </div>
    );
  }
  return <div className={`console-line console-${line.cls || "plain"}`}>{line.text}</div>;
}

function Console() {
  const [lines, setLines] = useState(() => [...BOOT_LINES]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [lines]);

  const focusInput = () => inputRef.current?.focus();

  const submit = () => {
    const cmd = input;
    const result = runCommand(cmd);
    setHistory((h) => (cmd.trim() ? [...h, cmd] : h));
    setHistIdx(-1);
    setInput("");
    if (result === "CLEAR") {
      setLines([]);
      return;
    }
    setLines((prev) => [
      ...prev,
      { text: `${PROMPT} ${cmd}`, cls: "cmd" },
      ...result,
      { text: "", cls: "" },
    ]);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      submit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length) {
        const idx = histIdx === -1 ? history.length - 1 : Math.max(0, histIdx - 1);
        setHistIdx(idx);
        setInput(history[idx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx !== -1) {
        const idx = histIdx + 1;
        if (idx >= history.length) {
          setHistIdx(-1);
          setInput("");
        } else {
          setHistIdx(idx);
          setInput(history[idx]);
        }
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  return (
    <Container fluid className="console-section" onClick={focusInput}>
      <Particle />
      <Container style={{ position: "relative", zIndex: 2 }}>
        <div className="term-window console-window">
          <div className="term-titlebar">
            <span className="term-dot term-dot-red" />
            <span className="term-dot term-dot-yellow" />
            <span className="term-dot term-dot-green" />
            <span className="term-title">visitor@anirudh — console — read-only session</span>
          </div>
          <div className="console-body">
            {lines.map((line, i) => (
              <Line key={i} line={line} />
            ))}
            <div className="console-input-row">
              <span className="console-prompt">{PROMPT}</span>
              <input
                ref={inputRef}
                className="console-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                autoFocus
                autoComplete="off"
                autoCapitalize="off"
                spellCheck="false"
                aria-label="console input"
              />
            </div>
            <div ref={bottomRef} />
          </div>
        </div>
        <p className="cmd-sub" style={{ textAlign: "center", paddingTop: "14px" }}>
          # try: help · show dataplane · show bgp summary · traceroute anirudh · neofetch
        </p>
      </Container>
    </Container>
  );
}

export default Console;
