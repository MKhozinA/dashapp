import { supabase } from "../../supabase";


export async function getAllAlumni() {
    return supabase.from("dataalumni").select()
}