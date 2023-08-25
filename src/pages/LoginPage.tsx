import { Auth } from '@supabase/auth-ui-react'
import { supabase } from "../supabase"
import { ThemeSupa } from '@supabase/auth-ui-shared'

export const LoginPage = () => {
    return <>
        <div style={{display: "flex", placeContent: "center" , height: "100dvh"}}>
            <div style={{margin: 20, maxWidth: 300}}>
                <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa}} providers={[]} ></Auth>
            </div>
        </div>
    </>
}

