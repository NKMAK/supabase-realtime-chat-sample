import { supabase } from "./initSupabase";

export const addMassageDB =async (massage:string ) => {
    const { error } = await supabase
        .from('message')
        .insert({ content:massage })
    if (error) {
        console.log(error);
        throw new Error(error.message)
    }
}

