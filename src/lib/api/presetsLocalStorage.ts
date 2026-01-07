import type { PresetType } from "@/components/custom/presets/PresetItem";

export const loadPresetsFromLocalStorage = (): PresetType[] => {
  const existingPresets: PresetType[] =
    JSON.parse(localStorage.getItem("clockPresets") || "[]") || [];
  return existingPresets;
};

export const savePresetToLocalStorage = (presetData: PresetType) => {
  const existingPresets: PresetType[] =
    JSON.parse(localStorage.getItem("clockPresets") || "[]") || [];
  existingPresets.push(presetData);
  localStorage.setItem("clockPresets", JSON.stringify(existingPresets));
};

export const deletePresetFromLocalStorage = (presetName: string) => {
  const existingPresets: PresetType[] =
    JSON.parse(localStorage.getItem("clockPresets") || "[]") || [];
  const updatedPresets = existingPresets.filter(
    (preset) => preset.name !== presetName
  );
  localStorage.setItem("clockPresets", JSON.stringify(updatedPresets));
};
