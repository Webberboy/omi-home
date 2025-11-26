"use server";

export async function submitForm(formData: FormData) {
    const email = formData.get("email") as string;
    return { success: true, message: `Email received: ${email}` };
}