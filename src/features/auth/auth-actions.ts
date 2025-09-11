'use server'

import { auth } from "@/lib/auth";
import { success } from "better-auth";
import { error } from "console";
import { headers } from "next/headers";
import { redirect, RedirectType } from "next/navigation";


export async function registerAction(initialState: any, formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
        return { success: false, error: 'required fields' }
    }

    try {
        const user = await auth.api.signUpEmail({
            body: { name, email, password, callbackURL: '/' }
        })
        if (!user) {
            return { success: false, error: 'register error!' }
        };
        return { success: true, message: 'register success!' }
    } catch (error) {
        return { success: false, error: error instanceof Error ? error?.message : 'register error!' }
    };

}

// logout
export async function logoutAction() {
    const isLogout = !!(await auth.api.signOut({ headers: await headers() }))
    if (!isLogout) {
        return;
    }
    return redirect('/login', RedirectType.replace)
}

// login 
export async function loginAction(initialState: any, formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
        return { success: false, error: 'required fields' }
    }
    try {
        const { url } = await auth.api.signInEmail({
            body: { email, password, callbackURL: '/' }
        })
        if (!url) {
            return { success: false, error: 'login fail' }
        };
        return { success: true, url }
    } catch (error) {
        return { success: false, error: error instanceof Error ? error?.message : 'login error!' }
    }
}