import { describe, expect, it } from 'vitest';

describe('Backend Smoke Test', () => {
  it('should pass arithmetic sanity check', () => {
    expect(2 + 2).toBe(4);
  });
});
