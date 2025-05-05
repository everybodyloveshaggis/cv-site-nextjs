"use server"
import { Resend } from "resend";
import { validateStringNotNull } from "../lib/utils";
import { getErrorMessage } from "../lib/request-error-message-handler";
import ContactFormEmail from "../email/contact-form-email"
import React from "react";


export const sendEmail = async (formData: FormData) => {
    const senderMessage = formData.get("senderMessage");
    const senderEmail = formData.get("senderEmail");
    const resend = new Resend(process.env.RESEND_API_KEY);

    if (!validateStringNotNull(senderEmail, 200)) {
        return { error: "invalid email" };
    }

    if (!validateStringNotNull(senderMessage, 5000)) {
        return { error: "invalid message" };
    }

    let data;
    try {
        data = await resend.emails.send({
            from: senderEmail as string,
            to: 'everybodyloveshaggis@gmail.com',
            subject: 'Message from cv-site-nextjs',
            reply_to: senderEmail as string, //assertion needed here as we know for sure this will be correct, due to validation we are preforming on frontend and API.
            react: React.createElement(ContactFormEmail,
                {
                    senderMessage: senderMessage as string,
                    senderEmail: senderEmail as string
                }),
        });
        
        if(data.error?.message !== undefined)
        {
            console.log("Error sending email: " + data.error?.message)
            throw data.error;
        }
        console.log("Email sent from: " + formData.get("senderEmail"));
    } catch (error: unknown) { //unknown is needed when we are not sure what will be returned for exmaple with 3rd party APIs
        return {
            error: getErrorMessage(error),
        };
    }
    return {
        data,
    };
};