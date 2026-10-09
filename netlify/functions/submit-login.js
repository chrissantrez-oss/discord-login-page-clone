// netlify/functions/submit-login.js

exports.handler = async (event, context) => {
    // Only accept POST requests
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Method Not Allowed" }),
        };
    }

    try {
        // Parse the JSON body sent from the frontend
        const data = JSON.parse(event.body);
        console.log("Received form submission:", data);

        // ---------------------------------------------------------------
        // YOUR CUSTOM LOGIC GOES HERE
        // ---------------------------------------------------------------
        // For now, we just log it. Later you can:
        //   - Save to a database (Supabase, Airtable, MongoDB, etc.)
        //   - Send yourself an email (Resend, SendGrid, etc.)
        //   - Forward to a Discord webhook, Telegram bot, etc.
        // ---------------------------------------------------------------

        // Return success to the frontend
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: "Form submitted successfully!",
                receivedData: data,
            }),
        };
    } catch (error) {
        console.error("Error processing submission:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Internal Server Error" }),
        };
    }
};
