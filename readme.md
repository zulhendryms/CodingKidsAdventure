# CodingKidsAdventure

## Overview
`CodingKidsAdventure` is a Blazor WebAssembly application built with .NET 9.0. It includes a simple educational web game called **Codi's Learning Adventure** as well as a few standard Blazor template pages.

### What this repo contains
- `Pages/Index.razor`: Landing page with a playable introduction screen.
- `Pages/Home.razor`: Level selection and game navigation screen.
- `Pages/Game1.razor`: Custom game page implementing a word puzzle with emoji clues.
- `Pages/Game1.razor`: Custom game page implementing a word puzzle with emoji clues.
- `Layout/MainLayout.razor` and `Layout/NavMenu.razor`: Shared layout and navigation.
- `wwwroot/index.html`: Web host page for the Blazor app.

> This is a web application, not a native Android or Godot game project.

## Features
- Interactive learning UI with emoji-based code puzzles.
- Game progress UI: score, timer, progress bar, and success celebration.
- Simple route-based navigation in a Blazor WebAssembly app.
- Built with standard .NET and Blazor WebAssembly tooling.

## Running locally
### Prerequisites
- [.NET 9 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)

### Start the app
From the repository root run:
```bash
dotnet build
dotnet run
```

Open the URL shown in the terminal, usually `https://localhost:7280` or `http://localhost:5280`.

## Development notes
- The custom game logic lives in `Pages/Game1.razor`.
- The navigation menu is in `Layout/NavMenu.razor`.
- The app is configured in `Program.cs` and routed via `App.razor`.

## Next improvement ideas
- Add a dedicated **settings/parent gate** screen.
- Improve touch and accessibility support.
- Replace inline page styling with reusable CSS or component classes.
- Add more learning levels beyond the current `Kode Sekolah` game.
- Add sound effects and visual animations throughout the game.
