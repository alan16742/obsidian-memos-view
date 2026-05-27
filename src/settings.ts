import { normalizePath } from "obsidian";
import { App, PluginSettingTab, Setting } from "obsidian";
import type MemosViewPlugin from "./main";
import type { MemosPluginSettings } from "./types";
import { t } from "./i18n";

export const DEFAULT_SETTINGS: MemosPluginSettings = {
	boundFilePath: "",
	displayName: "",
	timestampFormat: "HH:mm",
	memoStoreMode: "daily",
	memoReadMode: "all",
};

export class MemosSettingTab extends PluginSettingTab {
	plugin: MemosViewPlugin;

	constructor(app: App, plugin: MemosViewPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;
		containerEl.empty();

		new Setting(containerEl)
			.setName(t("settings.displayName"))
			.setDesc(t("settings.displayNameDesc"))
			.addText((text) =>
				text
					.setPlaceholder("Your name")
					.setValue(this.plugin.settings.displayName)
					.onChange(async (value) => {
						this.plugin.settings.displayName = value.trim();
						await this.plugin.saveSettings();
						await this.plugin.refreshAllMemosViews();
					}),
			);

		new Setting(containerEl)
			.setName(t("settings.timestampFormat"))
			.setDesc(t("settings.timestampFormatDesc"))
			.addText((text) =>
				text
					.setPlaceholder("HH:mm")
					.setValue(this.plugin.settings.timestampFormat)
					.onChange(async (value) => {
						this.plugin.settings.timestampFormat = normalizeTimestampFormat(value);
						await this.plugin.saveSettings();
						await this.plugin.refreshAllMemosViews();
					}),
			);

		new Setting(containerEl)
			.setName(t("settings.boundFile"))
			.setDesc(t("settings.boundFileDesc"))
			.addText((text) =>
				text
					.setPlaceholder("Notes/inbox.md")
					.setValue(this.plugin.settings.boundFilePath)
					.onChange(async (value) => {
						this.plugin.settings.boundFilePath = normalizeBoundPath(value);
						await this.plugin.saveSettings();
					}),
			);

		new Setting(containerEl)
			.setName(t("settings.memoStoreMode"))
			.setDesc(t("settings.memoStoreModeDesc"))
			.addDropdown((dropdown) =>
				dropdown
					.addOption("daily", t("settings.memoStoreModeDaily"))
					.addOption("yearly", t("settings.memoStoreModeYearly"))
					.setValue(this.plugin.settings.memoStoreMode)
					.onChange(async (value) => {
						this.plugin.settings.memoStoreMode = value as "daily" | "yearly";
						await this.plugin.saveSettings();
						await this.plugin.refreshAllMemosViews();
					}),
			);

		new Setting(containerEl)
			.setName(t("settings.memoReadMode"))
			.setDesc(t("settings.memoReadModeDesc"))
			.addDropdown((dropdown) =>
				dropdown
					.addOption("all", t("settings.memoReadModeAll"))
					.addOption("daily", t("settings.memoReadModeDaily"))
					.addOption("yearly", t("settings.memoReadModeYearly"))
					.setValue(this.plugin.settings.memoReadMode)
					.onChange(async (value) => {
						this.plugin.settings.memoReadMode = value as "all" | "daily" | "yearly";
						await this.plugin.saveSettings();
						await this.plugin.refreshAllMemosViews();
					}),
			);
	}
}

function normalizeBoundPath(path: string): string {
	const trimmed = path.trim();
	if (!trimmed) {
		return "";
	}

	return normalizePath(trimmed.replace(/\\/g, "/"));
}

function normalizeTimestampFormat(format: string): string {
	const trimmed = format.trim();
	return trimmed || "HH:mm";
}
