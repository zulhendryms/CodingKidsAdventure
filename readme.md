# 🌟 Codi's Learning Adventure: Toddler Coding Game

## 📖 Project Overview
A 2D educational Android tablet game designed to introduce toddlers to basic computational thinking (like variables, sequencing, and pattern recognition) through fun, unplugged-style coding puzzles.

* **Target Audience:** Toddlers and Pre-K (Ages 3-5).
* **Target Platform:** Android Tablet (Landscape mode).
* **Engine:** Godot Engine 4.x (.NET version using C#).
* **Resolution:** 1920x1080 (16:9 Landscape).

---

## 🎨 Design Principles (The "Toddler Rules")
1. **Zero Reading Required:** Toddlers can't read yet! Use icons, voiceovers, and sound effects to give instructions.
2. **Fat-Finger Friendly:** Touch targets (buttons, draggable items) must be massive.
3. **Positive Reinforcement:** Every correct action gets a happy sound and visual effect (stars, confetti). Incorrect actions simply bounce back gently (no scary "buzzer" sounds).
4. **Parent Gate:** Settings and exit buttons must be hidden behind a parent lock (e.g., "Hold for 3 seconds").

---

## 🗺️ Game Flow & Godot Scenes

### 1. Welcome Screen (`Welcome.tscn`)
* **Visuals:** Bright background, animated mascot character, large game logo.
* **Audio:** Cheerful looping background music (BGM).
* **UI Elements:**
  * Giant "PLAY" Button (transitions to Level Select).
  * Small "Parents" Settings Gear (requires parent lock).

### 2. Level Select / Home Screen (`LevelSelect.tscn`)
* **Visuals:** A grid or horizontal scrolling list of games.
* **UI Elements:**
  * "Back" button to return to Welcome.
  * Level Cards (e.g., "Kode Sekolah").
  * Locked/Unlocked status icons (Padlocks for future levels).

### 3. Game Level: Kode Sekolah (`Level_KodeSekolah.tscn`)
* **Coding Concept:** Variables & Cryptography (Symbols representing values).
* **Visuals:** 
  * Top: The "Code Key" (e.g., 📖 = A, ✏️ = B).
  * Middle: The puzzle question (Sequence of school supply images).
  * Bottom: Draggable letter buttons.
* **Core Mechanic:** Drag & Drop.
  * The child drags a letter from the bottom into the empty slot `[ _ ]` under the corresponding picture.
  * **Win Condition:** If the dropped letter matches the picture's variable, it snaps into place, plays a "Ding!" sound, and emits small particles. When all letters are placed, trigger a big "Level Complete" confetti animation and go back to Level Select.
  * **Fail Condition:** If incorrect, the letter smoothly glides back to its starting position.

---

## 📦 Asset Requirements Checklist
Before deep diving into coding, we need to gather or draw these assets (PNG format with transparent backgrounds):

### 🖼️ Graphics / UI
- [ ] Game Logo.
- [ ] Mascot Character (Idle animation if possible).
- [ ] Play Button, Back Button, Settings Gear.
- [ ] Empty Slot box `[ _ ]`.
- [ ] Confetti / Star particle graphic.
- [ ] The "Code Key" Items (Book, Pencil, Eraser, Glue, Ruler, etc.).
- [ ] Bubble buttons for the letters A-Z.

### 🎵 Audio (WAV or OGG format)
- [ ] Cheerful Background Music.
- [ ] "Pop" or "Swoosh" sound (when picking up a letter).
- [ ] "Ding" or "Sparkle" sound (correct answer).
- [ ] "Boing" sound (wrong answer bounce-back).
- [ ] Voiceover (Optional): "Yay!", "Great job!", "Let's play!".

---

## 🚀 Development Roadmap (Next Steps)
1. **Setup:** Download Godot 4 (.NET), create a new project, and set the display window to 1920x1080 (Landscape).
2. **UI Prototyping:** Build the `Welcome.tscn` and `LevelSelect.tscn` using Godot's UI nodes (`TextureRect`, `Button`, `MarginContainer`).
3. **Core Mechanic:** Create a prototype for the Drag-and-Drop system in Godot.
4. **Build Level 1:** Implement the "Kode Sekolah" logic.
5. **Juice it up:** Add sounds, BGM, and Particle systems.
6. **Export:** Set up the Android build template in Godot and export the `.apk` file to the tablet.