import type {RunOptions} from "axe-core";
import axe from "axe-core";

/**
 * Validates against common a11y mistakes.
 *
 * @example
 * ```
 * it('passes a11y test', async () => {
 *  await testA11Y(<MyComponent />, options);
 * });
 *
 * ```
 * @param {HTMLElement} container - The html element we want to test
 * @param {RunOptions} options - Axe run options
 * @returns {void}
 */
async function testA11y(container: HTMLElement, options: RunOptions = {}) {
  const results = await axe.run(container, options);

  expect(results.violations).toEqual([]);
}

export {testA11y};
