import test from 'node:test';
import assert from 'node:assert/strict';
import { getClaim } from '../../src/claims.mjs';

// Incident (docs/contract.md): viewer user-4 received claim-B, owned by user-42.
// "user-4" is a textual prefix of "user-42"; ownership must be an exact match.
test('viewer user-4 does not receive claim-B owned by user-42', () => {
  const claimB = { id: 'claim-B', ownerId: 'user-42', status: 'pending' };
  assert.equal(getClaim([claimB], 'user-4', 'claim-B'), null, 'user-4 must not receive claim-B');
  assert.equal(getClaim([claimB], 'user-42', 'claim-B'), claimB, 'owner user-42 still receives claim-B');
});
