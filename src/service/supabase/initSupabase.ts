import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
dotenv.config()

const supabaseUrl = process.env.SUPABASE_URL || "default";
const apiKey = process.env.SUPABASE_API_KEY || "default";

// supabaseの初期化を行う
export const supabase = createClient(
  supabaseUrl,
  apiKey
)
