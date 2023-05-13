import type { WorkspaceConfiguration } from "vscode";

export const generateAction = (config: WorkspaceConfiguration) => {
  const customAction = config.get("action");
  if (customAction) {
    return customAction + "\n";
  }
  return [`export const action = async ({ request }: ActionArgs) => {`, `  return null;`, `};`].join("\n");
};
