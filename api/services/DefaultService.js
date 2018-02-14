import { Service } from 'trails';
import _ from 'lodash';

export default class DefaultService extends Service {
  async getApplicationInfo() {
    const trailpacks = [];
    _.keys(this.app.packs).forEach(packName => {
      if (packName !== 'inspect') {
        const pack = this.app.packs[packName];
        trailpacks.push({
          name: pack.name,
          version: pack.pkg.version
        });
      }
    });
    return {
      app: this.app.pkg.version,
      node: process.version,
      libs: process.versions,
      trailpacks
    };
  }
}
