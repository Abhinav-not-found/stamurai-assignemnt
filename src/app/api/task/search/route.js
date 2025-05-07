import { connect } from '@/dbConfig/dbConfig';
import { NextResponse } from 'next/server';
import Task from '@/models/task.model';

export async function GET(req) {
  await connect();

  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query') || '';
  const status = searchParams.get('status');
  const priority = searchParams.get('priority');
  const date = searchParams.get('date');

  const searchConditions = [
    {
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
      ],
    },
  ];

  if (status) searchConditions.push({ status });
  if (priority) searchConditions.push({ priority });
  if (date) searchConditions.push({ date });

  try {
    const results = await Task.find({
      $and: searchConditions,
    });

    return NextResponse.json({ results }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Search failed' }, { status: 500 });
  }
}
