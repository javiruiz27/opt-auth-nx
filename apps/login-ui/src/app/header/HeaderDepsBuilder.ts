import { HeaderDeps } from '@onboarding/header-data';

export class HeaderDepsBuilder {
  public buildDeps(): HeaderDeps {
    return {
      enabled: true,
      features: {
        showSubtitle: true,
      },
    };
  }
}
