# Memos View

A [flomo](https://flomoapp.com/)-inspired memos stream plugin for [Obsidian](https://obsidian.md). It turns your daily notes (or yearly files) into a beautiful, searchable, and filterable memo timeline — all stored locally in your vault as plain Markdown.

![Obsidian Downloads](https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&query=%24%5B%22memos-view%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json)

## Features

- **Memo stream view** — A dedicated view that displays all your memos in a chronological stream, grouped by day.
- **Quick capture** — Write and save memos directly from the composer. New memos are appended to today's daily note (or yearly file) as timestamped list items.
- **Daily notes & yearly files** — Choose between storing memos in daily note files (`YYYY-MM-DD.md`) or yearly files (`YYYY.md`) organized by date headings.
- **Heatmap calendar** — A GitHub-style contribution heatmap in the sidebar shows your memo activity over the past 12 weeks. Hover to preview, click to filter.
- **Tag tree** — A collapsible nested tag tree in the sidebar for quick tag-based filtering.
- **Search** — Full-text search across memo content, source file names, and tags with highlighted matches.
- **Sort & filter** — Sort by created or edited time. Filter by status (active, archived, deleted) or by view (today, this week, to-do, has tags, has image, has link).
- **Pin, archive, delete** — Pin important memos to the top, archive completed ones, or soft-delete memos. Permanently purge deleted memos when ready.
- **Inline editing** — Double-click any memo card to edit it inline, or use the "Edit" action from the context menu.
- **Random walk** — Discover forgotten memos with a random walk modal that surfaces a random memo from your collection.
- **Quote** — Quote any memo into the composer as a callout block.
- **Rich composer** — Formatting toolbar with bold, italic, strikethrough, task lists, bullet lists, numbered lists, and image insertion. Selection toolbar appears when text is selected.
- **Wikilink autocomplete** — Type `[[` to search and insert wikilinks to files, headings, paragraphs, and blocks. Supports `#` anchor navigation.
- **Tag autocomplete** — Type `#` to get tag suggestions from your existing memos.
- **Image paste** — Paste images from clipboard directly into memos. They are saved as attachments and embedded automatically.
- **Share as image** — Generate beautiful shareable images from any memo with 6 built-in card styles (Daily, Ticket, Phone, Memo, Clean, Plain). Copy to clipboard or save as PNG.
- **Bound file** — Bind a specific file so that opening it automatically switches to the Memos view.
- **i18n** — English and Simplified Chinese UI translations.

## Commands

| Command | Description |
|---|---|
| **Open memos view** | Opens the Memos view in the active leaf |
| **Refresh memos view** | Reloads all memos from daily notes |
| **Random walk memo** | Opens a random memo in a modal |

## Settings

| Setting | Description |
|---|---|
| **Display name** | Shown in the sidebar header of the Memos view |
| **Timestamp format** | Pattern for memo timestamps (e.g. `HH:mm`, `HH:mm:ss`) |
| **Bound file** | When this file is opened, the editor leaf switches to the Memos view |
| **Memo storage mode** | Store memos in daily notes (`YYYY-MM-DD.md`) or yearly files (`YYYY.md`) |

## How memos are stored

Memos are stored as timestamped list items in your Markdown files, so they remain fully compatible with Obsidian's native editing and search.

**Daily note example** (`2025-05-27.md`):

```markdown
- 09:15 Had an idea for the new feature #project/idea
  Some additional thoughts here.
- 14:30 Meeting notes with the team
  - Discussed roadmap
  - Agreed on timeline
```

**Yearly file example** (`2025.md`):

```markdown
# 2025

## 2025-05-27 周二

- 09:15 Had an idea for the new feature #project/idea
- 14:30 Meeting notes with the team
```

Status markers (archived, deleted, pinned) are stored inline using Obsidian's property syntax:

```markdown
- 09:15 Some memo content [pinned::20250527101500]
```

## Installation

### From Obsidian Community Plugins

1. Open **Settings → Community plugins**
2. Disable **Restricted mode** if prompted
3. Click **Browse** and search for "Memos View"
4. Click **Install**, then **Enable**

### Manual installation

1. Download `main.js`, `styles.css`, and `manifest.json` from the [latest release](https://github.com/likemuuxi/obsidian-memos-view/releases)
2. Copy them to `<vault>/.obsidian/plugins/memos-view/`
3. Enable the plugin in **Settings → Community plugins**

## Development

```bash
npm install
npm run dev
```

- `npm run dev` — Start esbuild in watch mode
- `npm run build` — Production build

## Support

If you find this plugin helpful, consider supporting the author:

<a href="https://ko-fi.com/muuxi" target="_blank">
  <img src="https://img.shields.io/badge/Ko--fi-Support-orange?logo=ko-fi&logoColor=white" alt="Ko-fi">
</a>

## License

[MIT](LICENSE)
