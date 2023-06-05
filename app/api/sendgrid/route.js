import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export const POST = async (request) => {
  try {
    let body = await request.json();

    await sendgrid.send({
      to: "admin@crossroadfc.com", // Your email where you'll receive emails
      from: "admin@crossroadfc.com", // your website email address here
      subject: `${body.fullname}`,
      html: `<div><p>Customer email: ${body.email}</p> <p>${body.message}</p></div>`,
    });
    return new Response(JSON.stringify("You request was sent, succesfully."), {
      status: 200,
    });
  } catch (error) {
    // console.log(error);
    return new Response(JSON.stringify({error: error.message}), {status: error.statusCode || 500})
    // return res.status(error.statusCode || 500).json({ error: error.message });
  }
};
