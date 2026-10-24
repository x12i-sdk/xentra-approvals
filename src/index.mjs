import assert from 'node:assert/strict';
import { createMemoryStore } from '@x12i/xentra-store';
import { createApprovalsService } from '@x12i/xentra-approvals';

const approvals = createApprovalsService(createMemoryStore());
const actor = { type: 'user', id: 'requester' };
await approvals.createPolicy({ accountId: 'demo', name: 'Example policy', actions: ['demo.publish'], requiredApproverUserIds: ['reviewer'] });
const request = await approvals.createRequest({ accountId: 'demo', actor, action: 'demo.publish', resource: { resourceType: 'example', resourceId: 'example-1' }, requestedByActor: actor, reason: 'Local example' });
const approved = await approvals.approve('demo', request.id, 'reviewer');
assert.equal(approved.status, 'approved');
console.log({ id: approved.id, status: approved.status });
// This fixture exercises state transitions. A real host must authenticate callers and enforce its policies.
