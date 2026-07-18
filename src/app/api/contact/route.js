export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    console.log('Contact Form Submission:', { name, email, phone, message });

    return Response.json(
      { success: true, message: 'Thank you for your message! We\'ll get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}