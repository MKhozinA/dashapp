import { useState, useEffect, PropsWithChildren } from "react";
import { supabase } from "./supabase";
import { Auth } from '@supabase/auth-ui-react'

import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useAuth } from "./providers/AuthProvider";

export const ProtectedPage = ({ children }: PropsWithChildren<{}>) => {

    const {session} = useAuth()
    
}