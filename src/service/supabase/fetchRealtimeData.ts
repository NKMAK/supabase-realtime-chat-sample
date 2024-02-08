import { supabase } from "./initSupabase";

  // リアルタイムデータ更新
  export const fetchRealtimeData = (setMassages:any) => {
    try {
      supabase
        .channel("table_postgres_changes") // 任意のチャンネル名
        .on(
          "postgres_changes", // ここは固定
          {
            event: "*", // "INSERT" | "DELETE" | "UPDATE"  条件指定が可能
            schema: "public",
            table: "message", // DBのテーブル名
          },
          (payload) => {
            // データ登録
            if (payload.eventType === "INSERT") {
              setMassages((prevMassages:any) => [...prevMassages, payload.new.content]);
            }
          }
        )
        .subscribe();

      // リスナーの解除
      return () => supabase.channel("table_postgres_changes").unsubscribe();
    } catch (error) {
      console.error(error);
    }
  };

