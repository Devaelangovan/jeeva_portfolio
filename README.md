# Jeevan V — Creative Director Portfolio Website
### Television & Show Production

A bespoke, cinematic, editorial portfolio website built for **Jeevan V — Creative Director & Show Producer**.

---

## 🎬 Creative & Design Direction

- **Style**: Minimal, cinematic, editorial, and broadcast-grade.
- **Palette**: Deep Navy (`#070B14`, `#0B1120`), Muted Slate Blue (`#1E293B`, `#334155`), Crisp White (`#FFFFFF`, `#F8FAFC`), and Soft Light Blue (`#38BDF8`).
- **Typography**: Bold modern sans-serif headings (Plus Jakarta Sans) paired with readable editorial body text (Inter) and broadcast technical monospace (JetBrains Mono).
- **Cinematic Motifs**:
  - Real-time SMPTE broadcast timecode clock running at 24 FPS.
  - Studio viewfinder camera HUD framing brackets.
  - Master Control Room (MCR) 24/7 reality TV live-feed simulation cards.
  - Explicit illustrative archive badges to transparently distinguish illustrative concepts from authentic work samples.

---

## 📁 Project Structure

```text
jeevan portfolio/
├── index.html                           # Semantic HTML5 single-page application with Live PCR Player
├── css/
│   └── styles.css                       # Bespoke cinematic CSS design system with Media Vault
├── js/
│   └── main.js                          # SMPTE clock, PCR video console, lightbox, filters, copy toast
├── assets/
│   ├── media/                           # Authentic television production media
│   │   ├── logos/                       # Official broadcast network credentials
│   │   │   ├── vijay-tv-logo.jpg        # Star Vijay (Bigg Boss Season 9)
│   │   │   ├── zee-tamil-logo.jpg       # Zee Tamil (Tamizha Tamizha & Samayal Express)
│   │   │   └── bhagyam-tv-logo.png      # Baghayam TV
│   │   ├── biggboss/                    # Bigg Boss Season 9 PCR footage & desk stills
│   │   │   ├── bigg-boss-main.jpg       # Official show key visual
│   │   │   ├── bigg-boss-pcr-desk.jpg   # Control room desk & monitor bank photo
│   │   │   └── bigg-boss-pcr-clip-1..6  # 6 authentic PCR operational video recordings
│   │   └── tamizha/                     # Tamizha Tamizha on-set photography
│   │       ├── tamizha-set-main.jpg     # Main debate stage arena photography
│   │       └── tamizha-shoot-1..5.jpg   # Multi-cam floor, lighting grid, & staging stills
│   ├── images/
│   │   ├── jeevan-profile.jpg           # Authentic profile portrait of Jeevan V
│   │   ├── profile-portrait.svg         # Fallback cinematic vector portrait
│   │   ├── project-tamizha.svg          # Studio set vector diagram
│   │   ├── project-biggboss.svg         # PCR 24/7 monitor bank vector diagram
│   │   └── project-baghayam.svg         # Field broadcast vector diagram
│   └── icons/
│       ├── davinci.svg                  # DaVinci Resolve
│       ├── maya.svg                     # Maya 3D
│       ├── premiere.svg                 # Adobe Premiere Pro
│       ├── meta.svg                     # Meta
│       └── photoshop.svg                # Adobe Photoshop
├── favicon.svg                          # Minimalist JV viewfinder slate favicon
└── README.md
```

---

## 🚀 How to View & Launch

### Option 1: Direct File Launch
Double-click `index.html` or open it directly in any modern web browser (Google Chrome, Microsoft Edge, Safari, Firefox). All assets and dependencies are self-contained with zero build step required.

### Option 2: Local HTTP Server (PowerShell)
You can serve the folder locally on port `3000`:
```powershell
# Using Python (if available):
python -m http.server 3000

# Using Node (if installed):
npx serve .
```

---

## 📋 Resume Content Mapping

| Section | Content |
|---|---|
| **Professional Title** | CREATIVE DIRECTOR \| TELEVISION & SHOW PRODUCTION |
| **Profile Summary** | Used once verbatim in the editorial profile section |
| **Project 1** | *Tamizha Tamizha & Samayal Express* (Scriptwriting, Research, Pre-production, Quality) |
| **Project 2** | *Bigg Boss (Season 9)* (Story Editor, Control Room Panel, Live Feed Segmentation, Tough Cuts) |
| **Project 3** | *Baghayam TV* (Field Coordinator, Temple Shoots, Schedules, Permissions, Crew Logistics) |
| **Core Skills** | Television Production, Direction, Script Writing, Editing, Media Management, Content Planning, Story Development, Team Coordination, Field Production |
| **Software Skills** | DaVinci Resolve, Maya 3D, Adobe Premiere Pro, Meta, Adobe Photoshop (with icons, no arbitrary ratings) |
| **Education** | 2024 — B.Sc. Animation and VFX (Hindustan College of Arts and Science, Coimbatore)<br>2021 — XII Standard (English)<br>2019 — X Standard (English) |
| **Contact** | Email: `jeevaustin94@gmail.com` \| Mobile: `+91 9345904487` \| Location: Chennai, India \| Languages: Tamil, English |

---

## 🔄 Replacing Assets with Authentic Media
- **Profile Photo**: Drop `jeevan-profile.jpg` into `assets/images/` and update the `src` attribute of the portrait `img` tag in `index.html`.
- **Project Footage / Stills**: Replace `project-tamizha.svg`, `project-biggboss.svg`, and `project-baghayam.svg` with actual broadcast screenshots or behind-the-scenes photography anytime.
