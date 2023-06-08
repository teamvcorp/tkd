import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export const POST = async (request) => {
  try {
    let body = await request.json();
    const {
      fullname,
      email,
      message,
      phone,
      firstParticipantName,
      secondParticipantName,
      thirdParticipantName,
      firstAge,
      secondAge,
      thirdAge,
      firstMedNeeds,
      secondMedNeeds,
      thirdMedNeeds,
      taekwondo,
      afterschool,
      trip,
      behavioralService,
      yotae,
    } = body;
    const emailTemplate =
         `<div>
            <p>Parents name is: ${fullname}, they can be reached at the email address ${email}, or by phone ${phone}. They have the following considerations "${message}"</p>
            <p>They are intrested in the following programs Taekwondo: ${taekwondo}, Afterschool: ${afterschool}, trip: ${trip}, Behavioral Services: ${behavioralService}, Yotae: ${yotae}</p>
            <h2>Participant Name('s)</h2>
            <ol>
              <li>Name: ${firstParticipantName}, Age: ${firstAge} and Medical Conciderations: ${firstMedNeeds}</li>
              <li>Name: ${secondParticipantName}, Age: ${secondAge} and Medical Conciderations: ${secondMedNeeds}</li>
              <li>Name: ${thirdParticipantName}, Age: ${thirdAge} and Medical Conciderations: ${thirdMedNeeds}</li>
            </ol>
            <p>Please execute the contract begining on date of contact. Call customer to ensure they know the email is coming and offer to do in house if they are more comfortable. Also find out whether a translator is needed.</p>
          </div>`;
    await sendgrid.send({
      to: "admin@crossroadfc.com", // Your email where you'll receive emails
      from: "admin@crossroadfc.com", // your website email address here
      subject: `#contracts ${fullname}`,
      html: emailTemplate,
    });
    return new Response(JSON.stringify("You request was sent, succesfully."), {
      status: 200,
    });
  } catch (error) {
    // console.log(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: error.statusCode || 500,
    });
    // return res.status(error.statusCode || 500).json({ error: error.message });
  }
};
