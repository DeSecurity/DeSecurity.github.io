import { motion, AnimatePresence } from "framer-motion";
import { Bot, Check, Fingerprint, Radio, ShieldAlert, Terminal } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type Phase = "captcha" | "terminal" | "complete";

type ExtendedNavigator = Navigator & {
  deviceMemory?: number;
  connection?: {
    effectiveType?: string;
    downlink?: number;
  };
};

const finalMessage =
  "Interesting. You scanned a stranger's implant without knowing what it would do.";

const detectBrowser = () => {
  const userAgent = navigator.userAgent;
  if (userAgent.includes("Edg/")) return "Microsoft Edge";
  if (userAgent.includes("Chrome/")) return "Google Chrome";
  if (userAgent.includes("Firefox/")) return "Mozilla Firefox";
  if (userAgent.includes("Safari/")) return "Apple Safari";
  return "Unknown browser";
};

const detectDevice = () => {
  const userAgent = navigator.userAgent;
  if (/iPhone/i.test(userAgent)) return "iPhone";
  if (/iPad/i.test(userAgent)) return "iPad";
  if (/Android/i.test(userAgent)) return "Android device";
  if (/Mac/i.test(userAgent)) return "Mac";
  if (/Windows/i.test(userAgent)) return "Windows device";
  if (/Linux/i.test(userAgent)) return "Linux device";
  return navigator.platform || "Unknown device";
};

const Scan = () => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<Phase>("captcha");
  const [visibleLines, setVisibleLines] = useState(0);
  const [typedMessage, setTypedMessage] = useState("");

  const browserDetails = useMemo(() => {
    const extendedNavigator = navigator as ExtendedNavigator;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const memory = extendedNavigator.deviceMemory
      ? `${extendedNavigator.deviceMemory} GB+`
      : "CLASSIFIED";
    const connection = extendedNavigator.connection?.effectiveType?.toUpperCase() ?? "UNKNOWN";

    return {
      browser: detectBrowser(),
      device: detectDevice(),
      language: navigator.language,
      timezone,
      display: `${screen.width}x${screen.height} @ ${window.devicePixelRatio}x`,
      cores: navigator.hardwareConcurrency || "UNKNOWN",
      memory,
      touchPoints: navigator.maxTouchPoints,
      connection,
    };
  }, []);

  const terminalLines = useMemo(
    () => [
      { text: "UNKNOWN NFC ACCESS DETECTED", emphasis: true },
      { text: "RF FIELD HANDSHAKE ........ COMPLETE" },
      { text: "Extracting implant data..." },
      { text: "IMPLANT PAYLOAD ............ desecurity.github.io/scan" },
      { text: "Identity correlation..." },
      { text: "NVIDIA AI analysis starting..." },
      { text: "Browser fingerprint acquired.", emphasis: true },
      { text: `DEVICE ..................... ${browserDetails.device}` },
      { text: `BROWSER .................... ${browserDetails.browser}` },
      { text: `LANGUAGE ................... ${browserDetails.language}` },
      { text: `TIME ZONE .................. ${browserDetails.timezone}` },
      { text: `DISPLAY .................... ${browserDetails.display}` },
      { text: `LOGICAL PROCESSORS ......... ${browserDetails.cores}` },
      { text: `DEVICE MEMORY .............. ${browserDetails.memory}` },
      { text: `TOUCH POINTS ............... ${browserDetails.touchPoints}` },
      { text: `NETWORK CLASS .............. ${browserDetails.connection}` },
      { text: "HUMAN PRESENCE ............. PROBABLE", emphasis: true },
      { text: "BEHAVIORAL ANALYSIS ........ COMPLETE", success: true },
    ],
    [browserDetails],
  );

  useEffect(() => {
    if (phase !== "terminal") return;

    const timers = terminalLines.map((_, index) =>
      window.setTimeout(() => setVisibleLines(index + 1), 350 + index * 420),
    );
    const completeTimer = window.setTimeout(
      () => setPhase("complete"),
      700 + terminalLines.length * 420,
    );

    return () => {
      timers.forEach(window.clearTimeout);
      window.clearTimeout(completeTimer);
    };
  }, [phase, terminalLines]);

  useEffect(() => {
    if (phase !== "complete") return;

    let characterIndex = 0;
    let redirectTimer: number | undefined;
    setTypedMessage("");

    const typingTimer = window.setInterval(() => {
      characterIndex += 1;
      setTypedMessage(finalMessage.slice(0, characterIndex));

      if (characterIndex >= finalMessage.length) {
        window.clearInterval(typingTimer);
        redirectTimer = window.setTimeout(() => navigate("/"), 2800);
      }
    }, 48);

    return () => {
      window.clearInterval(typingTimer);
      if (redirectTimer) window.clearTimeout(redirectTimer);
    };
  }, [navigate, phase]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020604] text-green-400">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,197,94,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,.18) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-x-0 h-px bg-green-300/40 shadow-[0_0_18px_4px_rgba(34,197,94,.25)]"
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <AnimatePresence mode="wait">
          {phase === "captcha" && (
            <motion.section
              key="captcha"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
              className="w-full max-w-md"
            >
              <div className="mb-5 flex items-center justify-center gap-2 font-mono text-xs tracking-[0.24em] text-green-500/70">
                <Radio className="h-4 w-4 animate-pulse" />
                IMPLANT INTERFACE ACTIVE
              </div>

              <div className="border border-green-500/30 bg-black/80 p-6 shadow-[0_0_50px_rgba(34,197,94,.12)] backdrop-blur">
                <div className="mb-6 flex items-center gap-3 border-b border-green-500/20 pb-4">
                  <ShieldAlert className="h-7 w-7 text-amber-400" />
                  <div>
                    <p className="font-mono text-xs tracking-widest text-green-500/60">SECURITY CHECKPOINT</p>
                    <h1 className="font-mono text-lg font-bold text-green-300">Prove you are human</h1>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setPhase("terminal")}
                  className="group flex w-full items-center gap-4 border border-green-500/30 bg-green-950/20 p-4 text-left transition hover:border-green-400 hover:bg-green-500/10"
                >
                  <span className="flex h-9 w-9 items-center justify-center border-2 border-green-400/70 transition group-hover:bg-green-400 group-hover:text-black">
                    <Check className="h-5 w-5 opacity-0 transition group-hover:opacity-100" />
                  </span>
                  <span className="flex-1 font-mono text-sm text-green-100">I am not a robot</span>
                  <Fingerprint className="h-9 w-9 text-green-400/70" />
                </button>

                <p className="mt-4 text-center font-mono text-[10px] leading-relaxed text-green-500/45">
                  Physical NFC presence will be used as a secondary authentication factor.
                </p>
              </div>
            </motion.section>
          )}

          {(phase === "terminal" || phase === "complete") && (
            <motion.section
              key="terminal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full max-w-3xl overflow-hidden border border-green-500/30 bg-black/90 shadow-[0_0_70px_rgba(34,197,94,.14)]"
            >
              <header className="flex items-center justify-between border-b border-green-500/20 bg-green-950/30 px-4 py-3">
                <div className="flex items-center gap-2 font-mono text-xs text-green-400/70">
                  <Terminal className="h-4 w-4" />
                  implant-access — secure shell
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
                </div>
              </header>

              <div className="min-h-[480px] p-4 font-mono text-xs leading-6 sm:p-6 sm:text-sm">
                {terminalLines.slice(0, visibleLines).map((line, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={
                      line.success
                        ? "font-bold text-green-300"
                        : line.emphasis
                          ? "font-bold text-amber-300"
                          : "text-green-500/75"
                    }
                  >
                    <span className="mr-2 text-green-600">&gt;</span>
                    {line.text}
                  </motion.p>
                ))}
                {phase === "terminal" && (
                  <span className="mt-1 inline-block h-4 w-2 animate-pulse bg-green-400" />
                )}

                {phase === "complete" && (
                  <div className="mt-7 border-t border-green-500/20 pt-5">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="min-h-[3.5rem] text-sm font-bold leading-6 text-amber-300 sm:text-base"
                    >
                      <span className="mr-2 text-green-500">&gt;</span>
                      {typedMessage}
                      {typedMessage.length < finalMessage.length && (
                        <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-amber-300 align-middle" />
                      )}
                    </motion.p>

                    {typedMessage === finalMessage && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 text-center">
                        <Bot className="mx-auto mb-2 h-7 w-7 text-green-300" />
                        <p className="text-green-200">Redirecting to secure profile...</p>
                        <Link to="/" className="mt-2 inline-block text-xs text-green-500/60 underline hover:text-green-300">
                          Continue now
                        </Link>
                      </motion.div>
                    )}
                  </div>
                )}
              </div>

              <footer className="border-t border-green-500/15 px-4 py-2 text-center font-mono text-[9px] tracking-wide text-green-600/45">
                THEATRICAL LOCAL DISPLAY · NO VISITOR DATA IS UPLOADED OR STORED
              </footer>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Scan;
