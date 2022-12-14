import { query } from './_generated/server'

export default query(async ({ db }, counterName: string): Promise<number> => {
  const counterDoc = await db
    .table('users')
    .filter((q) => q.eq(q.field('_id'), counterName))
    .first()
  console.log('Got a counter value...')
  if (counterDoc === null) {
    return 0;
  }
  return counterDoc.counter
})