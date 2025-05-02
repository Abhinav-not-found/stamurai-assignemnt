import connectToDatabase from '@/lib/mongoose'
import User from '@/models/User'

export async function POST(req) {
  try {
    const body = await req.json()
    const { username, password } = body

    if (!username || !password) {
      return new Response(
        JSON.stringify({ error: 'Username and password are required' }),
        { status: 400 }
      )
    }

    await connectToDatabase()

    const existingUser = await User.findOne({ username })
    if (existingUser) {
      return new Response(
        JSON.stringify({ error: 'Username already exists' }),
        { status: 400 }
      )
    }
    const newUser = new User({ username, password })
    await newUser.save()

    return new Response(
      JSON.stringify({ message: 'User registered successfully' }),
      { status: 200 }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Something went wrong' }),
      { status: 500 }
    )
  }
}
