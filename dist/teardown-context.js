import { _ as _cleanupOnerror, s as settled } from './setup-context-Cx9HkMuO.js';
import { destroy } from '@ember/destroyable';

/**
  Used by test framework addons to tear down the provided context after testing is completed.

  Responsible for:

  - un-setting the "global testing context" (`unsetContext`)
  - destroy the contexts owner object
  - remove AJAX listeners

  @public
  @param {Object} context the context to setup
  @param {Object} [options] options used to override defaults
  @param {boolean} [options.waitForSettled=true] should the teardown wait for `settled()`ness
  @returns {Promise<void>} resolves when settled
*/
function teardownContext(context, {
  waitForSettled = true
} = {}) {
  return Promise.resolve().then(() => {
    _cleanupOnerror(context);
    destroy(context);
  }).finally(() => {
    if (waitForSettled) {
      return settled();
    }
    return;
  });
}

export { teardownContext as default };
//# sourceMappingURL=teardown-context.js.map
