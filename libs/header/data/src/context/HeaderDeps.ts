export type HeaderDeps =
  | { enabled: false }
  | ({ enabled: true } & EnabledHeaderDeps);

export interface EnabledHeaderDeps {
  features: {
    showSubtitle: boolean;
  };
}
