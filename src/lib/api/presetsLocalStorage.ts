import type { PresetType } from "@/components/custom/presets/PresetItem";

// First Visit
export const loadIsFirstVisitFromLocalStorage = (): boolean => {
  const isFirstVisit: boolean = JSON.parse(
    localStorage.getItem("isFirstVisit") || "true"
  );
  return isFirstVisit;
};

export const saveIsFirstVisitToLocalStorage = (isFirstVisit: boolean) => {
  localStorage.setItem("isFirstVisit", JSON.stringify(isFirstVisit));
};

// Initial design
export const loadInitialPresetFromLocalStorage = (): PresetType | null => {
  const initialPreset: PresetType | null = JSON.parse(
    localStorage.getItem("initialPreset") || "null"
  );
  return initialPreset;
};

export const saveInitialPresetToLocalStorage = (presetData: PresetType) => {
  localStorage.setItem("initialPreset", JSON.stringify(presetData));
};

// Saved Presets
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
