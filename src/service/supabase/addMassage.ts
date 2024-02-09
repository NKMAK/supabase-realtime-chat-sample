import { supabase } from "./initSupabase";

export const addMassageDB =async (massage:string ,chatID:string | undefined) => {
    const { error } = await supabase
        .from('message')
        .insert({ content:massage ,chatID:chatID})
    if (error) {
        console.log(error);
        throw new Error(error.message)
    }
}

