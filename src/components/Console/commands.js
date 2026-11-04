// Command implementations for the visitor console.
// Every command returns an array of output lines:
//   { text, cls }  — cls maps to a CSS class (ok, warn, err, dim, accent, link:url)

const L = (text, cls = "") => ({ text, cls });

const PROJECTS = [
  ["noc-deflection-router", "SystemVerilog NoC: deflection routing, 700k+ flits, zero loss"],
  ["bgp-hijack-detector", "RIS Live + RPKI real-time hijack alerts"],
  ["fwsynth", "English intent -> verified firewall rules (CEGIS with an LLM)"],
  ["pcap-threat-hunter", "mini-IDS: scans, C2 beacons, DNS tunnels, cleartext creds"],
  ["ct-phishing-hunter", "certificate transparency x dnstwist lookalike hunting"],
  ["digital-footprint-auditor", "audit your own online exposure + HIBP checks"],
  ["github-user-classification-gcn", "GCN on 37k-node social graph (published, ISTE 2024)"],
  ["diabetic-retinopathy-detection", "CNN severity grading of retinal images"],
];

const PAPERS = [
  ["ISTE Journal 47(2), 2024", "Utilizing Graph Convolutional Networks for GitHub User Classification"],
  ["FICTA 2024 (Springer)", "Enhancing Telugu Sarcasm Classification Models with Word Embeddings in Imbalanced Datasets"],
  ["ICRTM 2024", "Enhancing Telugu Abusive Language Detection Using Word Embeddings and BERT Models"],
  ["IRSD 2024", "Automated Detection of Offensive Content in Social Media"],
];

const GH = "https://github.com/Anirudhbojji";

function table(rows, pad) {
  return rows.map(([a, b]) => L(`  ${a.padEnd(pad)} ${b}`));
}

const COMMANDS = {
  help: () => [
    L("available commands:", "accent"),
    ...table([
      ["help", "this menu"],
      ["whoami", "who is this node"],
      ["whoami --verbose", "the long version"],
      ["show dataplane", "projects (where packets get forwarded)"],
      ["show control-plane", "peer-reviewed publications"],
      ["show capabilities", "tech stack"],
      ["show bgp summary", "project peering sessions"],
      ["show running-config", "resume"],
      ["show peers", "contact / links"],
      ["traceroute anirudh", "path through my career"],
      ["ping anirudh", "liveness check"],
      ["neofetch", "system info, terminal style"],
      ["cat identity.json", "machine-readable me"],
      ["uptime", "node uptime"],
      ["clear", "wipe the screen"],
    ], 22),
    L(""),
    L("tip: most router-style abbreviations work (sh dp, sh run, ...)", "dim"),
  ],

  whoami: () => [
    L("anirudh bojji — network engineer", "accent"),
    L("cloud infrastructure, routing & dataplane systems. 4 peer-reviewed"),
    L("publications. builds tools that watch real systems — and one router"),
    L("made of silicon."),
  ],

  "whoami --verbose": () => [
    L("anirudh bojji", "accent"),
    L("  role      network engineer — cloud networking (multi-cloud: aws/gcp/azure/oci)"),
    L("  focus     routing protocols (bgp, ipsec, vxlan), dataplane (vpp/dpdk),"),
    L("            network security tooling, test automation"),
    L("  langs     python, go, c, bash, systemverilog (weekends)"),
    L("  research  graph ML + low-resource NLP — 4 publications"),
    L("  base      bengaluru, india"),
    L(""),
    L("  apart from engineering: video games, mythological novels, travelling", "dim"),
  ],

  "show dataplane": () => [
    L("# projects — where the packets actually get forwarded", "dim"),
    ...PROJECTS.flatMap(([name, desc]) => [
      L(`  ${name}`, `link:${GH}/${name}`),
      L(`      ${desc}`, "dim"),
    ]),
  ],

  "show control-plane": () => [
    L("# publications — peer-reviewed state, distributed via journals", "dim"),
    ...PAPERS.flatMap(([venue, title]) => [
      L(`  [${venue}]`, "accent"),
      L(`      ${title}`),
    ]),
    L(""),
    L("  scholar profile:", "dim"),
    L("  scholar.google.com/citations?user=QZ075QoAAAAJ",
      "link:https://scholar.google.com/citations?user=QZ075QoAAAAJ"),
  ],

  "show capabilities": () => [
    ...table([
      ["networking", "bgp, ipsec, vxlan, vpp/dpdk, frr, multi-cloud"],
      ["languages", "python, go, c, bash, sql, systemverilog"],
      ["cloud", "aws, gcp, azure, oci"],
      ["infra", "terraform, kubernetes, jenkins, docker, linux"],
      ["security", "ids/ips concepts, rpki, ct logs, packet analysis"],
      ["ai/ml", "gnns, llm tool-use pipelines, anomaly detection"],
    ], 12),
  ],

  "show bgp summary": () => [
    L("BGP router identifier anirudh, local AS 2024", "dim"),
    L("Neighbor                        AS     Up/Down   State/PfxRcd", "accent"),
    L("noc-deflection-router        65001   2026-11-02  Established 700k"),
    L("bgp-hijack-detector          65002   2026-11-02  Established live"),
    L("fwsynth                      65003   2026-11-04  Established 45"),
    L("pcap-threat-hunter           65004   2026-11-02  Established 87"),
    L("ct-phishing-hunter           65005   2026-11-02  Established 27"),
    L("github-gcn (published)       65006   2024-06-01  Established 37k"),
    L(""),
    L("Total number of neighbors 6 — all sessions Established, 0 flaps", "ok"),
  ],

  "show running-config": () => [
    L("! current state of this node, in PDF form", "dim"),
    L("  view inline   ->  /resume", "link:/resume"),
    L("  download pdf  ->  Bojji_Anirudh_Resume.pdf", "link:/resume"),
  ],

  "show peers": () => [
    ...table([["github", ""], ["linkedin", ""], ["scholar", ""], ["email", ""]], 0).slice(0, 0),
    L("  github    github.com/Anirudhbojji", `link:${GH}`),
    L("  linkedin  linkedin.com/in/anirudh-bojji-900256229",
      "link:https://www.linkedin.com/in/anirudh-bojji-900256229/"),
    L("  scholar   scholar.google.com/citations?user=QZ075QoAAAAJ",
      "link:https://scholar.google.com/citations?user=QZ075QoAAAAJ"),
    L("  twitter   twitter.com/Anirudh1225", "link:https://twitter.com/Anirudh1225"),
    L(""),
    L("  all interfaces up — feel free to establish a session", "ok"),
  ],

  "traceroute anirudh": () => [
    L("traceroute to anirudh (career), 64 hops max"),
    L(" 1  mvsr-engineering-college (2020)   b.tech CSE begins          4.2 ms"),
    L(" 2  cyber-ekta (2023)                 security internship        9.7 ms"),
    L(" 3  amazon-ml-summer-school (2023)    selected, ML fundamentals 12.1 ms"),
    L(" 4  four-publications (2024)          GCN + telugu NLP papers   18.4 ms"),
    L(" 5  cloud-networking (2024)           associate engineer        23.9 ms"),
    L(" 6  dataplane-routing (2025)          engineer — vpp/bgp/ipsec  31.2 ms"),
    L(" 7  anirudh (2026)                    you are here               0.1 ms"),
    L(""),
    L("trace complete — no packet loss along the path", "ok"),
  ],

  "ping anirudh": () => [
    L("PING anirudh: 56 data bytes"),
    L("64 bytes from anirudh: icmp_seq=0 ttl=64 time=0.042 ms  (reachable)"),
    L("64 bytes from anirudh: icmp_seq=1 ttl=64 time=0.038 ms  (caffeinated)"),
    L("64 bytes from anirudh: icmp_seq=2 ttl=64 time=0.040 ms  (forwarding)"),
    L(""),
    L("3 packets transmitted, 3 received, 0.0% packet loss", "ok"),
    L("fastest response: linkedin.com/in/anirudh-bojji-900256229",
      "link:https://www.linkedin.com/in/anirudh-bojji-900256229/"),
  ],

  neofetch: () => [
    L("        ┌──────────┐     anirudh@portfolio", "accent"),
    L("   ───▶ │   Ab_    │ ───▶    ----------------", "accent"),
    L("        └──────────┘     OS:        ANIRUDH-OS (network-engineer build)"),
    L("                         Host:      bengaluru, india"),
    L("                         Kernel:    bgp-5.4-ipsec"),
    L("                         Uptime:    2+ years in production"),
    L("                         Packages:  8 public repos, 4 papers"),
    L("                         Shell:     /bin/vtysh"),
    L("                         CPU:       caffeine-fueled (8 cores)"),
    L("                         State:     FORWARDING, 0 drops", "ok"),
  ],

  "cat identity.json": () => [
    L("{"),
    L('  "node":    "anirudh",'),
    L('  "role":    "network-engineer",'),
    L('  "planes":  ["data", "control"],'),
    L('  "langs":   ["python", "go", "c"],'),
    L('  "clouds":  ["aws", "gcp", "azure"],'),
    L('  "papers":  4,'),
    L('  "state":   "FORWARDING"', "ok"),
    L("}"),
  ],

  uptime: () => [
    L("up 2+ years in production, load average: healthy, healthy, healthy"),
    L("0 unplanned reboots since joining the dataplane", "ok"),
  ],

  ls: () => [L("dataplane/   control-plane/   capabilities/   running-config   peers/", "accent"),
             L("try: show dataplane", "dim")],

  exit: () => [L("logout"), L("Connection to anirudhbojji.github.io NOT closed — there is no escape.", "warn"),
               L("(try: show dataplane)", "dim")],
};

// router-style abbreviations and aliases
const ALIASES = {
  "sh dp": "show dataplane", "sh dataplane": "show dataplane",
  projects: "show dataplane", "ls projects": "show dataplane",
  "sh cp": "show control-plane", "sh control-plane": "show control-plane",
  publications: "show control-plane", papers: "show control-plane",
  "sh run": "show running-config", "sh running-config": "show running-config",
  resume: "show running-config", cv: "show running-config",
  "sh cap": "show capabilities", skills: "show capabilities",
  "sh bgp sum": "show bgp summary", "sh bgp summary": "show bgp summary",
  "sh peers": "show peers", contact: "show peers", social: "show peers",
  about: "whoami --verbose", "whoami -v": "whoami --verbose",
  ping: "ping anirudh", traceroute: "traceroute anirudh", tracert: "traceroute anirudh",
  "?": "help", h: "help", man: "help",
};

export function runCommand(raw) {
  const cmd = raw.trim().replace(/\s+/g, " ").toLowerCase();
  if (!cmd) return [];
  if (cmd === "clear") return "CLEAR";
  if (cmd.startsWith("sudo")) {
    return [
      L("visitor is not in the sudoers file.", "err"),
      L("This incident will be reported (to absolutely no one).", "dim"),
    ];
  }
  const resolved = ALIASES[cmd] || cmd;
  const handler = COMMANDS[resolved];
  if (handler) return handler();
  return [
    L(`-bash: ${raw.trim()}: command not found`, "err"),
    L("type 'help' to see what this node can do", "dim"),
  ];
}

export const BOOT_LINES = [
  L("$ ssh visitor@anirudhbojji.github.io", "accent"),
  L("Welcome to ANIRUDH-OS (network-engineer build)", "dim"),
  L(" * control-plane : CONVERGED    dataplane : FORWARDING", "ok"),
  L(" * access level  : visitor (read-only)"),
  L(""),
  L("You have console access to this node. Type 'help' to begin.", "warn"),
  L(""),
];
